<?php

namespace App\Filament\Resources\ShopCoupons\Pages;

use App\Filament\Resources\ShopCoupons\ShopCouponResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditShopCoupon extends EditRecord
{
    protected static string $resource = ShopCouponResource::class;

    protected function getHeaderActions(): array
    {
        return [DeleteAction::make()];
    }
}
