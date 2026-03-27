<?php

namespace App\Http\Controllers;

use App\Models\ShopPurchase;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PurchaseController extends Controller
{
    public function index(): Response
    {
        $purchases = ShopPurchase::with('shopItem', 'server')
            ->where('user_id', auth()->id())
            ->latest()
            ->paginate(20)
            ->through(fn($p) => [
                'id'         => $p->id,
                'count'      => $p->count,
                'price'      => $p->shopItem?->getFinalPrice() ?? ($p->shopItem?->price ?? 0),
                'created_at' => $p->created_at,
                'validity'   => $p->validity,
                'is_valid'   => $p->isValid(),
                'server'     => $p->server ? ['name' => $p->server->name] : null,
                'item'       => $p->shopItem ? [
                    'name_ru' => $p->shopItem->name_ru,
                    'name_en' => $p->shopItem->name_en,
                    'image'   => $p->shopItem->image,
                ] : null,
            ]);

        return Inertia::render('Purchase/Index', [
            'purchases' => $purchases,
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

        $amount = 0;
        if ($purchase->shopItem) {
            $amount = $purchase->shopItem->getFinalPrice() * ($purchase->count ?? 1);
        }

        if ($amount > 0) {
            $purchase->user->increment('balance', $amount);
        }

        $purchase->delete();

        return redirect()->route('profile')->with('success', 'Возврат выполнен');
    }
}
