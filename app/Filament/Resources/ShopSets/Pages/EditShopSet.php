<?php

namespace App\Filament\Resources\ShopSets\Pages;

use App\Filament\Resources\ShopSets\ShopSetResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditShopSet extends EditRecord
{
    protected static string $resource = ShopSetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
