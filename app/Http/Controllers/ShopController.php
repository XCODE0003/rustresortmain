<?php

namespace App\Http\Controllers;

use App\Jobs\DeliverPurchaseItemsJob;
use App\Models\Donate;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use App\Models\ShopSet;
use App\Models\ShopStatistic;
use App\Models\User;
use App\Notifications\PurchaseComplete;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        $categories = ShopCategory::orderBy('sort')->get();

        $categorySlug = request('category');

        // Выбор сервера на сайте убран: все товары/наборы доступны на любом сервере,
        // выдача идёт во внутриигровую корзину (плагин выдаёт на том сервере, где игрок).
        // Поэтому магазин больше не фильтруем по серверу.

        $itemsQuery = ShopItem::with('category:id,path,title_ru,title_en,sort,discount_percent')
            ->select(['shop_items.id', 'shop_items.name_ru', 'shop_items.name_en', 'shop_items.price', 'shop_items.price_usd', 'shop_items.image', 'shop_items.category_id', 'shop_items.server', 'shop_items.servers', 'shop_items.variations', 'shop_items.sort', 'shop_items.amount', 'shop_items.is_command', 'shop_items.wipe_block', 'shop_items.discount_percent', 'shop_items.disable_category_discount', 'shop_items.description_ru', 'shop_items.description_en'])
            ->where('shop_items.status', 1)
            ->whereNotNull('shop_items.category_id');

        $setsQuery = ShopSet::with('category:id,path,title_ru,title_en,sort,discount_percent')
            ->select(['shop_sets.id', 'shop_sets.name_ru', 'shop_sets.name_en', 'shop_sets.price', 'shop_sets.price_usd', 'shop_sets.image', 'shop_sets.category_id', 'shop_sets.server', 'shop_sets.servers', 'shop_sets.sort', 'shop_sets.amount', 'shop_sets.discount_percent', 'shop_sets.disable_category_discount', 'shop_sets.description_ru', 'shop_sets.description_en', 'shop_sets.items'])
            ->where('shop_sets.status', 1)
            ->whereNotNull('shop_sets.category_id');

        $items = $itemsQuery->get()->map(fn ($item) => array_merge($item->toArray(), ['kind' => 'item']))
            ->concat($setsQuery->get()->map(fn ($set) => array_merge($set->toArray(), ['kind' => 'set'])))
            ->sortBy([
                fn ($a, $b) => ($a['category']['sort'] ?? 0) <=> ($b['category']['sort'] ?? 0),
                fn ($a, $b) => ($a['kind'] === $b['kind'] ? 0 : ($a['kind'] === 'item' ? -1 : 1)),
                fn ($a, $b) => ($a['sort'] ?? 0) <=> ($b['sort'] ?? 0),
            ])
            ->values();

        return Inertia::render('shop/Index', [
            'categories' => $categories,
            'items' => $items,
            'selectedServer' => null,
            'servers' => [],
            'categorySlug' => $categorySlug,
        ]);
    }

    public function category(string $path): Response
    {
        $category = ShopCategory::where('path', $path)
            ->with(['items' => function ($query) {
                $query->orderBy('sort');
            }, 'items.category:id,path,title_ru,title_en,sort,discount_percent'])
            ->firstOrFail();

        return Inertia::render('shop/Category', [
            'category' => $category,
        ]);
    }

    public function show(ShopItem $item): Response
    {
        $item->load('category');

        return Inertia::render('shop/Show', [
            'item' => $item,
        ]);
    }

    public function buyWithBalance(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'item_id' => 'nullable|exists:shop_items,id',
            'set_id' => 'nullable|exists:shop_sets,id',
            'count' => 'integer|min:1|max:100',
            'var_id' => 'nullable|integer',
            'server_id' => 'nullable|integer',
            'gift_steam_id' => 'nullable|string|max:32',
        ]);

        if (empty($validated['item_id']) && empty($validated['set_id'])) {
            return redirect()->back();
        }

        $user = auth()->user();
        $count = $validated['count'] ?? 1;
        $isSet = ! empty($validated['set_id']);

        // Товар или набор (сет). У сета цена за лот; вариаций у сетов нет.
        if ($isSet) {
            $product = ShopSet::findOrFail($validated['set_id']);
            $price = $product->getFinalPrice();
        } else {
            $product = ShopItem::findOrFail($validated['item_id']);

            // Привилегии (is_command) выдаются RCON-командой на ВЫБРАННЫЙ сервер —
            // выбор сервера обязателен, иначе привилегия уйдёт «в никуда».
            if ($product->is_command && empty($validated['server_id'])) {
                return redirect()->back()->with('error', 'Выберите сервер для активации привилегии');
            }

            $price = $product->getFinalPrice();
            if (! empty($validated['var_id']) && is_array($product->variations)) {
                $variation = collect($product->variations)->firstWhere('id', $validated['var_id']);
                if ($variation) {
                    $price = (float) ($variation['price'] ?? $price);
                }
            }
        }

        $total = $price * $count;
        $productName = $product->getLocalizedName() ?? $product->name_ru ?? ($isSet ? 'Набор' : 'Предмет');

        // Получатель: по умолчанию сам покупатель. Для подарка (валидный SteamID64,
        // отличный от своего) — другой игрок; платит при этом покупатель.
        $recipient = $user;
        $giftSteamId = trim((string) ($validated['gift_steam_id'] ?? ''));
        if ($giftSteamId !== '' && ctype_digit($giftSteamId) && strlen($giftSteamId) >= 17
            && $giftSteamId !== (string) $user->steam_id) {
            if (! $product->can_gift) {
                return redirect()->back()->with('error', __('common.gift_not_allowed'));
            }
            $recipient = $this->resolveRecipient($giftSteamId);
        }

        if ($user->balance < $total) {
            return redirect()->route('payment')->with('error', __('common.balance_insufficient'));
        }

        $user->decrement('balance', $total);

        $donate = Donate::create([
            'user_id' => $recipient->id,
            'payment_id' => uniqid('balance_', true),
            'amount' => $total,
            'item_id' => $isSet ? null : $product->id,
            'set_id' => $isSet ? $product->id : null,
            'count' => $count,
            'var_id' => $isSet ? null : ($validated['var_id'] ?? null),
            'server' => $validated['server_id'] ?? null,
            'status' => 1,
            'payment_system' => 'balance',
            'steam_id' => $recipient->steam_id,
        ]);

        DeliverPurchaseItemsJob::dispatchSync($donate);

        // Запись в статистику магазина (источник для админки «Статистика магазина»).
        // price = полная сумма покупки (суммируется в «Итого»), amount = кол-во;
        // user_id = покупатель, steam_id = получатель (для подарка — другой игрок).
        ShopStatistic::create([
            'item_id' => $isSet ? null : $product->id,
            'set_id' => $isSet ? $product->id : null,
            'case_id' => null,
            'amount' => $count,
            'price' => $total,
            'server' => $validated['server_id'] ?? null,
            'user_id' => $user->id,
            'steam_id' => $recipient->steam_id,
        ]);

        // Уведомляем получателя (для подарка — он же увидит «получено»).
        $recipient->notify(new PurchaseComplete($productName, $total));

        return redirect()->back()->with('success', __('common.purchase_success'));
    }

    /**
     * Находит получателя подарка по SteamID64 или создаёт минимального юзера.
     */
    protected function resolveRecipient(string $steamId): User
    {
        $recipient = User::where('steam_id', $steamId)->first();
        if ($recipient) {
            return $recipient;
        }

        return User::create([
            'name' => $steamId,
            'email' => $steamId.'@steam.rustresort.local',
            'password' => bin2hex(random_bytes(20)),
            'steam_id' => $steamId,
            'balance' => 0,
        ]);
    }
}
