<?php

namespace App\Filament\Resources\RconTasks\Pages;

use App\Filament\Resources\RconTasks\RconTaskResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListRconTasks extends ListRecords
{
    protected static string $resource = RconTaskResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
