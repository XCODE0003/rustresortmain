<?php

namespace App\Filament\Resources\ShopCoupons\Pages;

use App\Filament\Resources\ShopCoupons\ShopCouponResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListShopCoupons extends ListRecords
{
    protected static string $resource = ShopCouponResource::class;

    protected function getHeaderActions(): array
    {
        return [CreateAction::make()];
    }
}
