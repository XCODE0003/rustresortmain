<?php

namespace App\Filament\Resources\Inventories;

use App\Filament\Resources\Inventories\Pages\EditInventory;
use App\Filament\Resources\Inventories\Pages\ListInventories;
use App\Filament\Resources\Inventories\Schemas\InventoryForm;
use App\Filament\Resources\Inventories\Tables\InventoriesTable;
use App\Filament\Support\AdminResource;
use App\Models\Inventory;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class InventoryResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = Inventory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedArchiveBox;

    protected static \UnitEnum|string|null $navigationGroup = 'Users';

    protected static ?int $navigationSort = 5;

    protected static ?string $navigationLabel = 'Склады игроков';

    public static function form(Schema $schema): Schema
    {
        return InventoryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return InventoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListInventories::route('/'),
            'edit' => EditInventory::route('/{record}/edit'),
        ];
    }
}
