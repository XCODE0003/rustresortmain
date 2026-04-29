<?php

namespace App\Filament\Resources\Cases;

use App\Filament\Resources\Cases\Pages\CreateCase;
use App\Filament\Resources\Cases\Pages\EditCase;
use App\Filament\Resources\Cases\Pages\ListCases;
use App\Filament\Resources\Cases\Schemas\CaseForm;
use App\Filament\Resources\Cases\Tables\CasesTable;
use App\Filament\Support\AdminResource;
use App\Models\Cases;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CaseResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = Cases::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGift;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 10;

    public static function form(Schema $schema): Schema
    {
        return CaseForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CasesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCases::route('/'),
            'create' => CreateCase::route('/create'),
            'edit' => EditCase::route('/{record}/edit'),
        ];
    }
}
