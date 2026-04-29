<?php

namespace App\Filament\Resources\ShopCategories;

use App\Filament\Resources\ShopCategories\Pages\CreateShopCategory;
use App\Filament\Resources\ShopCategories\Pages\EditShopCategory;
use App\Filament\Resources\ShopCategories\Pages\ListShopCategories;
use App\Filament\Resources\ShopCategories\Schemas\ShopCategoryForm;
use App\Filament\Resources\ShopCategories\Tables\ShopCategoriesTable;
use App\Filament\Support\AdminResource;
use App\Models\ShopCategory;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ShopCategoryResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = ShopCategory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedFolder;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 2;

    protected static ?string $permissionView = 'shop.categories.edit';

    public static function form(Schema $schema): Schema
    {
        return ShopCategoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ShopCategoriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListShopCategories::route('/'),
            'create' => CreateShopCategory::route('/create'),
            'edit' => EditShopCategory::route('/{record}/edit'),
        ];
    }
}
