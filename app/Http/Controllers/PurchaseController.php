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
            ->paginate(20);

        return Inertia::render('Purchase/Index', [
            'purchases' => $purchases,
        ]);
    }

    public function show(ShopPurchase $purchase): Response
    {
        $this->authorize('view', $purchase);

        $purchase->load('shopItem', 'server');

        return Inertia::render('Purchase/Show', [
            'purchase' => $purchase,
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
