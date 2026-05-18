<?php

namespace App\Http\Controllers;

use App\Jobs\DeliverPurchaseItemsJob;
use App\Notifications\PurchaseComplete;
use App\Models\Donate;
use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        $categories = ShopCategory::orderBy('sort')->get();

        $selectedServerId = session('selected_server_id');
        $categorySlug = request('category');

        $itemsQuery = ShopItem::with('category:id,path,title_ru,title_en')
            ->select(['shop_items.id', 'shop_items.name_ru', 'shop_items.name_en', 'shop_items.price', 'shop_items.image', 'shop_items.category_id', 'shop_items.servers', 'shop_items.variations', 'shop_items.sort', 'shop_items.amount', 'shop_items.description_ru', 'shop_items.description_en'])
            ->join('shop_categories', 'shop_categories.id', '=', 'shop_items.category_id')
            ->where('shop_items.status', 1)
            ->whereNotNull('shop_items.category_id')
            ->orderBy('shop_categories.sort')
            ->orderBy('shop_items.sort');

        if ($selectedServerId) {
            $itemsQuery->where(function ($query) use ($selectedServerId) {
                $query->where('shop_items.server', $selectedServerId)
                    ->orWhere('shop_items.server', 0)
                    ->orWhereNull('shop_items.server')
                    ->orWhereJsonContains('shop_items.servers', (string) $selectedServerId)
                    ->orWhereJsonContains('shop_items.servers', (int) $selectedServerId);
            });
        }

        $items = $itemsQuery->get();

        $selectedServer = $selectedServerId ? Server::find($selectedServerId) : null;

        return Inertia::render('shop/Index', [
            'categories' => $categories,
            'items' => $items,
            'selectedServer' => $selectedServer,
            'categorySlug' => $categorySlug,
        ]);
    }

    public function category(string $path): Response
    {
        $category = ShopCategory::where('path', $path)
            ->with(['items' => function ($query) {
                $query->orderBy('sort');
            }])
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
            'item_id' => 'required|exists:shop_items,id',
            'count' => 'integer|min:1|max:100',
            'var_id' => 'nullable|integer',
            'server_id' => 'nullable|integer',
        ]);

        $user = auth()->user();
        $item = ShopItem::findOrFail($validated['item_id']);
        $count = $validated['count'] ?? 1;

        $price = $item->getFinalPrice();
        if (! empty($validated['var_id']) && is_array($item->variations)) {
            $variation = collect($item->variations)->firstWhere('id', $validated['var_id']);
            if ($variation) {
                $price = (float) ($variation['price'] ?? $price);
            }
        }

        $total = $price * $count;

        if ($user->balance < $total) {
            return redirect()->route('payment')->with('error', __('common.balance_insufficient'));
        }

        $user->decrement('balance', $total);

        $donate = Donate::create([
            'user_id' => $user->id,
            'payment_id' => uniqid('balance_', true),
            'amount' => $total,
            'item_id' => $item->id,
            'count' => $count,
            'var_id' => $validated['var_id'] ?? null,
            'server' => $validated['server_id'] ?? null,
            'status' => 1,
            'payment_system' => 'balance',
            'steam_id' => $user->steam_id,
        ]);

        DeliverPurchaseItemsJob::dispatchSync($donate);

        $user->notify(new PurchaseComplete($item->getLocalizedName() ?? $item->name_ru ?? 'Предмет', $total));

        return redirect()->back()->with('success', __('common.purchase_success'));
    }
}
