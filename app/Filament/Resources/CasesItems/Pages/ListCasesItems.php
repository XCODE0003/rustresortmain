<?php

namespace App\Filament\Resources\CasesItems\Pages;

use App\Filament\Resources\CasesItems\CasesItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListCasesItems extends ListRecords
{
    protected static string $resource = CasesItemResource::class;

    protected function getHeaderActions(): array
    {
        return [CreateAction::make()];
    }
}
