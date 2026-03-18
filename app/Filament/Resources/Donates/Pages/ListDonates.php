<?php

namespace App\Filament\Resources\Donates\Pages;

use App\Filament\Resources\Donates\DonateResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListDonates extends ListRecords
{
    protected static string $resource = DonateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
