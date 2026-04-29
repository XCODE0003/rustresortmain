<?php

namespace App\Filament\Resources\GuideCategories\Pages;

use App\Filament\Resources\GuideCategories\GuideCategoryResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditGuideCategory extends EditRecord
{
    protected static string $resource = GuideCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [DeleteAction::make()];
    }
}
