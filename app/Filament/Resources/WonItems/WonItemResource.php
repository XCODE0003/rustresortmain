<?php

namespace App\Filament\Resources\WonItems;

use App\Filament\Resources\WonItems\Pages\ListWonItems;
use App\Filament\Resources\WonItems\Tables\WonItemsTable;
use App\Filament\Support\AdminResource;
use App\Models\WonItem;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class WonItemResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = WonItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTrophy;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 12;

    protected static ?string $navigationLabel = 'Выигрыши (бонусы)';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([]);
    }

    public static function table(Table $table): Table
    {
        return WonItemsTable::configure($table);
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => ListWonItems::route('/'),
        ];
    }
}
