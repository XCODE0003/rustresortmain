<?php

namespace App\Filament\Resources\ShopSets\Pages;

use App\Filament\Resources\ShopSets\ShopSetResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListShopSets extends ListRecords
{
    protected static string $resource = ShopSetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
