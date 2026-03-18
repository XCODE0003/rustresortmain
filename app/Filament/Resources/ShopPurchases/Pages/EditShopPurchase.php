<?php

namespace App\Filament\Resources\ShopPurchases\Pages;

use App\Filament\Resources\ShopPurchases\ShopPurchaseResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditShopPurchase extends EditRecord
{
    protected static string $resource = ShopPurchaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
