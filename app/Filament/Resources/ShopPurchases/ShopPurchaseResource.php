<?php

namespace App\Filament\Resources\ShopPurchases;

use App\Filament\Resources\ShopPurchases\Pages\CreateShopPurchase;
use App\Filament\Resources\ShopPurchases\Pages\EditShopPurchase;
use App\Filament\Resources\ShopPurchases\Pages\ListShopPurchases;
use App\Filament\Resources\ShopPurchases\Schemas\ShopPurchaseForm;
use App\Filament\Resources\ShopPurchases\Tables\ShopPurchasesTable;
use App\Filament\Support\AdminResource;
use App\Models\ShopPurchase;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ShopPurchaseResource extends AdminResource
{
    protected static ?string $model = ShopPurchase::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return ShopPurchaseForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ShopPurchasesTable::configure($table);
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
            'index' => ListShopPurchases::route('/'),
            'create' => CreateShopPurchase::route('/create'),
            'edit' => EditShopPurchase::route('/{record}/edit'),
        ];
    }
}
