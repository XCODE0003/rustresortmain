<?php

namespace App\Filament\Resources\ShopItems;

use App\Filament\Resources\ShopItems\Pages\CreateShopItem;
use App\Filament\Resources\ShopItems\Pages\EditShopItem;
use App\Filament\Resources\ShopItems\Pages\ListShopItems;
use App\Filament\Resources\ShopItems\Schemas\ShopItemForm;
use App\Filament\Resources\ShopItems\Tables\ShopItemsTable;
use App\Filament\Support\AdminResource;
use App\Models\ShopItem;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ShopItemResource extends AdminResource
{
    protected static ?string $model = ShopItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return ShopItemForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ShopItemsTable::configure($table);
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
            'index' => ListShopItems::route('/'),
            'create' => CreateShopItem::route('/create'),
            'edit' => EditShopItem::route('/{record}/edit'),
        ];
    }
}
