<?php

namespace App\Filament\Resources\Visits;

use App\Filament\Resources\Visits\Pages\ListVisits;
use App\Filament\Support\AdminResource;
use App\Models\Visit;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class VisitResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = Visit::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedEye;

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 30;

    protected static ?string $navigationLabel = 'Посещения';

    public static function canViewAny(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
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
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('ip')->label('IP')->searchable()->copyable(),
                TextColumn::make('router')->label('Страница')->searchable()->limit(60),
                TextColumn::make('created_at')->label('Дата')->dateTime('d.m.Y H:i:s')->sortable(),
            ])
            ->filters([
                Filter::make('today')->label('Сегодня')
                    ->query(fn (Builder $q): Builder => $q->whereDate('created_at', today())),
                Filter::make('this_week')->label('Эта неделя')
                    ->query(fn (Builder $q): Builder => $q->where('created_at', '>=', now()->startOfWeek())),
                Filter::make('this_month')->label('Этот месяц')
                    ->query(fn (Builder $q): Builder => $q->where('created_at', '>=', now()->startOfMonth())),
            ])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListVisits::route('/'),
        ];
    }
}
