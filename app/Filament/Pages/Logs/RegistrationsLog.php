<?php

namespace App\Filament\Pages\Logs;

use App\Filament\Support\HasPermissionGate;
use App\Models\User;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class RegistrationsLog extends Page implements HasTable
{
    use HasPermissionGate;
    use InteractsWithTable;

    protected static ?string $permissionKey = 'logs.registrations';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserPlus;

    protected static ?string $navigationLabel = 'Регистрации';

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 25;

    protected string $view = 'filament.pages.logs.registrations';

    public function table(Table $table): Table
    {
        return $table
            ->query(User::query())
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('id')->label('ID')->sortable(),
                TextColumn::make('name')->label('Имя')->searchable(),
                TextColumn::make('email')->label('Email')->searchable()->copyable(),
                TextColumn::make('steam_id')->label('Steam')->searchable()->placeholder('—'),
                TextColumn::make('role')->label('Роль')->badge(),
                TextColumn::make('created_at')->label('Регистрация')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                Filter::make('today')->label('Сегодня')
                    ->query(fn (Builder $q): Builder => $q->whereDate('created_at', today())),
                Filter::make('this_week')->label('Эта неделя')
                    ->query(fn (Builder $q): Builder => $q->where('created_at', '>=', now()->startOfWeek())),
                Filter::make('this_month')->label('Этот месяц')
                    ->query(fn (Builder $q): Builder => $q->where('created_at', '>=', now()->startOfMonth())),
            ]);
    }
}
