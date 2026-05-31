<?php

namespace App\Http\Controllers;

use App\Models\BucketItem;
use App\Models\Donate;
use App\Models\ShopPurchase;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PurchaseController extends Controller
{
    public function index(Request $request): Response
    {
        $tab = $request->get('tab', 'purchases'); // purchases | topups

        if ($tab === 'topups') {
            $items = Donate::where('user_id', auth()->id())
                ->latest()
                ->paginate(20)
                ->through(fn($d) => [
                    'id'             => $d->id,
                    'type'           => 'topup',
                    'amount'         => (float) $d->amount,
                    'bonus_amount'   => (float) $d->bonus_amount,
                    'payment_system' => $d->payment_system,
                    'status'         => $d->status, // 0=pending, 1=completed, 2=failed
                    'created_at'     => $d->created_at,
                ]);
        } else {
            // Ключи «висящих» в игровой корзине предметов (item_id+server) с ценой > 0.
            // Возврат возможен ТОЛЬКО пока предмет ещё в корзине (не выдан/не активирован
            // в игре). Цена > 0 отсекает содержимое наборов (у них bucket price = 0).
            $pendingKeys = BucketItem::where('user_id', auth()->id())
                ->where('price', '>', 0)
                ->get(['shop_item_id', 'server_id'])
                ->mapWithKeys(fn ($b) => [$b->shop_item_id.':'.($b->server_id ?? '') => true]);

            $items = ShopPurchase::with('shopItem', 'server')
                ->where('user_id', auth()->id())
                ->latest()
                ->paginate(20)
                ->through(fn($p) => [
                    'id'         => $p->id,
                    'type'       => 'purchase',
                    'count'      => $p->count,
                    'price'      => $p->shopItem?->getFinalPrice() ?? ($p->shopItem?->price ?? 0),
                    'created_at' => $p->created_at,
                    'validity'   => $p->validity,
                    'is_valid'   => $p->isValid(),
                    'returnable' => $pendingKeys->has($p->item_id.':'.($p->server_id ?? '')),
                    'server'     => $p->server ? ['name' => $p->server->name] : null,
                    'item'       => $p->shopItem ? [
                        'name_ru' => $p->shopItem->name_ru,
                        'name_en' => $p->shopItem->name_en,
                        'image'   => $p->shopItem->image,
                    ] : null,
                ]);
        }

        return Inertia::render('Purchase/Index', [
            'items' => $items,
            'tab'   => $tab,
        ]);
    }

    public function show(ShopPurchase $purchase): Response
    {
        $this->authorize('view', $purchase);

        $purchase->load('shopItem', 'server');

        return Inertia::render('Purchase/Show', [
            'purchase' => [
                'id'         => $purchase->id,
                'count'      => $purchase->count,
                'price'      => $purchase->shopItem?->getFinalPrice() ?? ($purchase->shopItem?->price ?? 0),
                'created_at' => $purchase->created_at,
                'validity'   => $purchase->validity,
                'is_valid'   => $purchase->isValid(),
                'server'     => $purchase->server ? ['name' => $purchase->server->name] : null,
                'item'       => $purchase->shopItem ? [
                    'name_ru'        => $purchase->shopItem->name_ru,
                    'name_en'        => $purchase->shopItem->name_en,
                    'description_ru' => $purchase->shopItem->description_ru,
                    'description_en' => $purchase->shopItem->description_en,
                    'image'          => $purchase->shopItem->image,
                ] : null,
            ],
        ]);
    }

    public function refund(ShopPurchase $purchase): RedirectResponse
    {
        abort_if($purchase->user_id !== auth()->id(), 403);

        // Возврат возможен ТОЛЬКО пока предмет ещё «висит» в игровой корзине (BucketItem)
        // и не выдан/не активирован в игре. Иначе игрок получил бы и предмет, и деньги.
        // Цена > 0 отсекает содержимое наборов (bucket price = 0) — их поштучно не возвращаем.
        $pending = BucketItem::where('user_id', $purchase->user_id)
            ->where('shop_item_id', $purchase->item_id)
            ->where('price', '>', 0)
            ->when(
                $purchase->server_id === null,
                fn ($q) => $q->whereNull('server_id'),
                fn ($q) => $q->where('server_id', $purchase->server_id),
            )
            ->get();

        if ($pending->isEmpty()) {
            return back()->with('error', 'Этот товар уже выдан в игре — возврат невозможен');
        }

        // Возвращаем за реально «висящие» единицы по текущей цене товара.
        $units = $pending->count();
        $refund = round((float) ($purchase->shopItem?->getFinalPrice() ?? 0) * $units, 2);

        DB::transaction(function () use ($purchase, $pending, $units, $refund) {
            BucketItem::whereIn('id', $pending->pluck('id'))->delete();

            if ($refund > 0) {
                $purchase->user->increment('balance', $refund);
            }

            // Списываем возвращённые единицы из покупки; если вернули всё — убираем из ЛК.
            if ((int) $purchase->count > $units) {
                $purchase->decrement('count', $units);
            } else {
                $purchase->delete();
            }
        });

        return back()->with('success', 'Возврат выполнен: '.$refund.' ₽ на баланс');
    }
}
