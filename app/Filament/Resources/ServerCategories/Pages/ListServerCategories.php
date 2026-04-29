<?php

namespace App\Filament\Resources\ServerCategories\Pages;

use App\Filament\Resources\ServerCategories\ServerCategoryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListServerCategories extends ListRecords
{
    protected static string $resource = ServerCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [CreateAction::make()];
    }
}
