<?php

namespace App\Filament\Resources\ShopPurchases\Pages;

use App\Filament\Resources\ShopPurchases\ShopPurchaseResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListShopPurchases extends ListRecords
{
    protected static string $resource = ShopPurchaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
