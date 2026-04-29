<?php

namespace App\Filament\Resources\DeliveryRequests;

use App\Filament\Resources\DeliveryRequests\Pages\EditDeliveryRequest;
use App\Filament\Resources\DeliveryRequests\Pages\ListDeliveryRequests;
use App\Filament\Resources\DeliveryRequests\Schemas\DeliveryRequestForm;
use App\Filament\Resources\DeliveryRequests\Tables\DeliveryRequestsTable;
use App\Filament\Support\AdminResource;
use App\Models\DeliveryRequest;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class DeliveryRequestResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = DeliveryRequest::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTruck;

    protected static \UnitEnum|string|null $navigationGroup = 'Support';

    protected static ?int $navigationSort = 5;

    protected static ?string $permissionView = 'delivery.view';

    protected static ?string $permissionEdit = 'delivery.process';

    protected static ?string $navigationLabel = 'Заявки на вывод';

    public static function form(Schema $schema): Schema
    {
        return DeliveryRequestForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DeliveryRequestsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListDeliveryRequests::route('/'),
            'edit' => EditDeliveryRequest::route('/{record}/edit'),
        ];
    }
}
