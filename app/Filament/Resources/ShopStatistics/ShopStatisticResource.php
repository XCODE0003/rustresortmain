<?php

namespace App\Filament\Resources\ShopStatistics;

use App\Filament\Resources\ShopStatistics\Pages\ListShopStatistics;
use App\Filament\Support\AdminResource;
use App\Models\Server;
use App\Models\ShopStatistic;
use BackedEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class ShopStatisticResource extends AdminResource
{
    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    protected static ?string $model = ShopStatistic::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShoppingBag;

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 20;

    protected static ?string $navigationLabel = 'Логи магазина';

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
                TextColumn::make('user.name')->label('Игрок')->searchable()->placeholder('—'),
                TextColumn::make('item.name_ru')->label('Товар')->searchable()->placeholder('—')->limit(35),
                TextColumn::make('item_id')->label('Item')->placeholder('—'),
                TextColumn::make('set_id')->label('Set')->placeholder('—'),
                TextColumn::make('case_id')->label('Case')->placeholder('—'),
                TextColumn::make('amount')->label('Кол-во')->alignCenter(),
                TextColumn::make('price')->label('Цена')->money('RUB')->sortable(),
                TextColumn::make('server')->label('Сервер')->badge(),
                TextColumn::make('steam_id')->label('Steam')->copyable()->placeholder('—')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('created_at')->label('Дата')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('server')->label('Сервер')
                    ->options(fn () => Server::pluck('name', 'id')->toArray()),
                Filter::make('today')->label('Сегодня')
                    ->query(fn (Builder $q): Builder => $q->whereDate('created_at', today())),
                Filter::make('this_month')->label('Этот месяц')
                    ->query(fn (Builder $q): Builder => $q->where('created_at', '>=', now()->startOfMonth())),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListShopStatistics::route('/'),
        ];
    }
}
