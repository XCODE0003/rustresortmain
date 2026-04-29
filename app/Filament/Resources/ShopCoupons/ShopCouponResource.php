<?php

namespace App\Filament\Resources\ShopCoupons;

use App\Filament\Resources\ShopCoupons\Pages\CreateShopCoupon;
use App\Filament\Resources\ShopCoupons\Pages\EditShopCoupon;
use App\Filament\Resources\ShopCoupons\Pages\ListShopCoupons;
use App\Filament\Resources\ShopCoupons\Schemas\ShopCouponForm;
use App\Filament\Resources\ShopCoupons\Tables\ShopCouponsTable;
use App\Filament\Support\AdminResource;
use App\Models\ShopCoupon;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ShopCouponResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = ShopCoupon::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTicket;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 5;

    protected static ?string $permissionView = 'shop.coupons.edit';

    protected static ?string $navigationLabel = 'Купоны';

    public static function form(Schema $schema): Schema
    {
        return ShopCouponForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ShopCouponsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListShopCoupons::route('/'),
            'create' => CreateShopCoupon::route('/create'),
            'edit' => EditShopCoupon::route('/{record}/edit'),
        ];
    }
}
