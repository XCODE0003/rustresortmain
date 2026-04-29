<?php

namespace App\Filament\Resources\PaymentGateways;

use App\Filament\Resources\PaymentGateways\Pages\CreatePaymentGateway;
use App\Filament\Resources\PaymentGateways\Pages\EditPaymentGateway;
use App\Filament\Resources\PaymentGateways\Pages\ListPaymentGateways;
use App\Filament\Resources\PaymentGateways\Schemas\PaymentGatewayForm;
use App\Filament\Resources\PaymentGateways\Tables\PaymentGatewaysTable;
use App\Filament\Support\AdminResource;
use App\Models\PaymentGateway;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class PaymentGatewayResource extends AdminResource
{
    protected static ?string $model = PaymentGateway::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCreditCard;

    protected static string|UnitEnum|null $navigationGroup = 'Настройки';

    protected static ?string $navigationLabel = 'Платежные системы';

    protected static ?string $modelLabel = 'Платежная система';

    protected static ?string $pluralModelLabel = 'Платежные системы';

    protected static ?int $navigationSort = 10;

    protected static ?string $permissionView = 'payments.gateways';

    public static function form(Schema $schema): Schema
    {
        return PaymentGatewayForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PaymentGatewaysTable::configure($table);
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
            'index' => ListPaymentGateways::route('/'),
            'create' => CreatePaymentGateway::route('/create'),
            'edit' => EditPaymentGateway::route('/{record}/edit'),
        ];
    }
}
