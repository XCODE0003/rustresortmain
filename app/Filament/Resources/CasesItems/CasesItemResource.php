<?php

namespace App\Filament\Resources\CasesItems;

use App\Filament\Resources\CasesItems\Pages\CreateCasesItem;
use App\Filament\Resources\CasesItems\Pages\EditCasesItem;
use App\Filament\Resources\CasesItems\Pages\ListCasesItems;
use App\Filament\Resources\CasesItems\Schemas\CasesItemForm;
use App\Filament\Resources\CasesItems\Tables\CasesItemsTable;
use App\Filament\Support\AdminResource;
use App\Models\CasesItem;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CasesItemResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = CasesItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCube;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 11;

    public static function form(Schema $schema): Schema
    {
        return CasesItemForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CasesItemsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCasesItems::route('/'),
            'create' => CreateCasesItem::route('/create'),
            'edit' => EditCasesItem::route('/{record}/edit'),
        ];
    }
}
