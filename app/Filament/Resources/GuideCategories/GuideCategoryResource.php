<?php

namespace App\Filament\Resources\GuideCategories;

use App\Filament\Resources\GuideCategories\Pages\CreateGuideCategory;
use App\Filament\Resources\GuideCategories\Pages\EditGuideCategory;
use App\Filament\Resources\GuideCategories\Pages\ListGuideCategories;
use App\Filament\Resources\GuideCategories\Schemas\GuideCategoryForm;
use App\Filament\Resources\GuideCategories\Tables\GuideCategoriesTable;
use App\Filament\Support\AdminResource;
use App\Models\GuideCategory;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class GuideCategoryResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = GuideCategory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedFolderOpen;

    protected static \UnitEnum|string|null $navigationGroup = 'Content';

    protected static ?int $navigationSort = 5;

    protected static ?string $navigationLabel = 'Категории гайдов';

    public static function form(Schema $schema): Schema
    {
        return GuideCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GuideCategoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGuideCategories::route('/'),
            'create' => CreateGuideCategory::route('/create'),
            'edit' => EditGuideCategory::route('/{record}/edit'),
        ];
    }
}
