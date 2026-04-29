<?php

namespace App\Filament\Resources\Cases\Pages;

use App\Filament\Resources\Cases\CaseResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ReplicateAction;
use Filament\Resources\Pages\EditRecord;

class EditCase extends EditRecord
{
    protected static string $resource = CaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ReplicateAction::make()->label('Дублировать'),
            DeleteAction::make(),
        ];
    }
}
