<?php

namespace App\Http\Controllers;

use App\Models\ShopPurchase;
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
}
