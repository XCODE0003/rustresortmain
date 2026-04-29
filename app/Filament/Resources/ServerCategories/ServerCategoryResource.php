<?php

namespace App\Filament\Resources\ServerCategories;

use App\Filament\Resources\ServerCategories\Pages\CreateServerCategory;
use App\Filament\Resources\ServerCategories\Pages\EditServerCategory;
use App\Filament\Resources\ServerCategories\Pages\ListServerCategories;
use App\Filament\Resources\ServerCategories\Schemas\ServerCategoryForm;
use App\Filament\Resources\ServerCategories\Tables\ServerCategoriesTable;
use App\Filament\Support\AdminResource;
use App\Models\ServerCategory;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ServerCategoryResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = ServerCategory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedFolder;

    protected static \UnitEnum|string|null $navigationGroup = 'Game Servers';

    protected static ?int $navigationSort = 5;

    protected static ?string $navigationLabel = 'Категории серверов';

    public static function form(Schema $schema): Schema
    {
        return ServerCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ServerCategoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListServerCategories::route('/'),
            'create' => CreateServerCategory::route('/create'),
            'edit' => EditServerCategory::route('/{record}/edit'),
        ];
    }
}
