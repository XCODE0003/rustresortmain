<?php

namespace App\Observers;

use App\Models\ShopItem;

class ShopItemObserver
{
    public function created(ShopItem $shopItem): void
    {
        //
    }

    public function updated(ShopItem $shopItem): void
    {
        if ($shopItem->isDirty(['price', 'status', 'discount_percent'])) {
            \Illuminate\Support\Facades\Cache::forget('shop_items');
            \Illuminate\Support\Facades\Cache::forget('shop_categories');
        }
    }

    /**
     * Handle the ShopItem "deleted" event.
     */
    public function deleted(ShopItem $shopItem): void
    {
        //
    }

    /**
     * Handle the ShopItem "restored" event.
     */
    public function restored(ShopItem $shopItem): void
    {
        //
    }

    /**
     * Handle the ShopItem "force deleted" event.
     */
    public function forceDeleted(ShopItem $shopItem): void
    {
        //
    }
}
