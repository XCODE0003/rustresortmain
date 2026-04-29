<?php

namespace App\Filament\Resources\ServerCategories\Pages;

use App\Filament\Resources\ServerCategories\ServerCategoryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditServerCategory extends EditRecord
{
    protected static string $resource = ServerCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [DeleteAction::make()];
    }
}
