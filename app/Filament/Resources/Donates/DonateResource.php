<?php

namespace App\Filament\Resources\Donates;

use App\Filament\Resources\Donates\Pages\CreateDonate;
use App\Filament\Resources\Donates\Pages\EditDonate;
use App\Filament\Resources\Donates\Pages\ListDonates;
use App\Filament\Resources\Donates\Schemas\DonateForm;
use App\Filament\Resources\Donates\Tables\DonatesTable;
use App\Filament\Support\AdminResource;
use App\Models\Donate;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class DonateResource extends AdminResource
{
    protected static ?string $model = Donate::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCurrencyDollar;

    protected static \UnitEnum|string|null $navigationGroup = 'Finance';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return DonateForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return DonatesTable::configure($table);
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
            'index' => ListDonates::route('/'),
            'create' => CreateDonate::route('/create'),
            'edit' => EditDonate::route('/{record}/edit'),
        ];
    }
}
