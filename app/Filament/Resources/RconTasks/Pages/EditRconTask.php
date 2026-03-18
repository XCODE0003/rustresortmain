<?php

namespace App\Filament\Resources\RconTasks\Pages;

use App\Filament\Resources\RconTasks\RconTaskResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditRconTask extends EditRecord
{
    protected static string $resource = RconTaskResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
