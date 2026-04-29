<?php

namespace App\Filament\Resources\CaseopenHistories;

use App\Filament\Resources\CaseopenHistories\Pages\ListCaseopenHistories;
use App\Filament\Resources\CaseopenHistories\Tables\CaseopenHistoriesTable;
use App\Filament\Support\AdminResource;
use App\Models\CaseopenHistory;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CaseopenHistoryResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = CaseopenHistory::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedClock;

    protected static \UnitEnum|string|null $navigationGroup = 'Shop';

    protected static ?int $navigationSort = 13;

    protected static ?string $navigationLabel = 'Бесплатные открытия';

    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdminOrModerator() ?? false;
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function form(Schema $schema): Schema
    {
        return $schema->components([]);
    }

    public static function table(Table $table): Table
    {
        return CaseopenHistoriesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCaseopenHistories::route('/'),
        ];
    }
}
