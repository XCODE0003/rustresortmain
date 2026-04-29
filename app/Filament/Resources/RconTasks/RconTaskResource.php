<?php

namespace App\Filament\Resources\RconTasks;

use App\Filament\Resources\RconTasks\Pages\CreateRconTask;
use App\Filament\Resources\RconTasks\Pages\EditRconTask;
use App\Filament\Resources\RconTasks\Pages\ListRconTasks;
use App\Filament\Resources\RconTasks\Schemas\RconTaskForm;
use App\Filament\Resources\RconTasks\Tables\RconTasksTable;
use App\Filament\Support\AdminResource;
use App\Models\RconTask;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class RconTaskResource extends AdminResource
{
    protected static ?string $model = RconTask::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCommandLine;

    protected static \UnitEnum|string|null $navigationGroup = 'Game Servers';

    protected static ?int $navigationSort = 2;

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public static function form(Schema $schema): Schema
    {
        return RconTaskForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RconTasksTable::configure($table);
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
            'index' => ListRconTasks::route('/'),
            'create' => CreateRconTask::route('/create'),
            'edit' => EditRconTask::route('/{record}/edit'),
        ];
    }
}
