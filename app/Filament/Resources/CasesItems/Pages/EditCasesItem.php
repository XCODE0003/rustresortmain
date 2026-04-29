<?php

namespace App\Filament\Resources\CasesItems\Pages;

use App\Filament\Resources\CasesItems\CasesItemResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCasesItem extends EditRecord
{
    protected static string $resource = CasesItemResource::class;

    protected function getHeaderActions(): array
    {
        return [DeleteAction::make()];
    }
}
