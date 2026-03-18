<?php

namespace App\Filament\Resources\ShopSets;

use App\Filament\Resources\ShopSets\Pages\CreateShopSet;
use App\Filament\Resources\ShopSets\Pages\EditShopSet;
use App\Filament\Resources\ShopSets\Pages\ListShopSets;
use App\Filament\Resources\ShopSets\Schemas\ShopSetForm;
use App\Filament\Resources\ShopSets\Tables\ShopSetsTable;
use App\Models\ShopSet;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ShopSetResource extends Resource
{
    protected static ?string $model = ShopSet::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShoppingBag;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return ShopSetForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ShopSetsTable::configure($table);
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
            'index' => ListShopSets::route('/'),
            'create' => CreateShopSet::route('/create'),
            'edit' => EditShopSet::route('/{record}/edit'),
        ];
    }
}
