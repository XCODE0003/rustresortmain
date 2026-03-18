<?php

namespace App\Observers;

use App\Models\ShopPurchase;

class ShopPurchaseObserver
{
    public function created(ShopPurchase $shopPurchase): void
    {
        \Illuminate\Support\Facades\Log::info("Purchase created: {$shopPurchase->id} for user {$shopPurchase->user_id}");
    }

    public function updated(ShopPurchase $shopPurchase): void
    {
        if ($shopPurchase->isDirty('validity')) {
            \Illuminate\Support\Facades\Log::info("Purchase validity updated: {$shopPurchase->id}");
        }
    }

    /**
     * Handle the ShopPurchase "deleted" event.
     */
    public function deleted(ShopPurchase $shopPurchase): void
    {
        //
    }

    /**
     * Handle the ShopPurchase "restored" event.
     */
    public function restored(ShopPurchase $shopPurchase): void
    {
        //
    }

    /**
     * Handle the ShopPurchase "force deleted" event.
     */
    public function forceDeleted(ShopPurchase $shopPurchase): void
    {
        //
    }
}
