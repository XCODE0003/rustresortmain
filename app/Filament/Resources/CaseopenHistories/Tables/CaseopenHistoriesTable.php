<?php

namespace App\Filament\Resources\CaseopenHistories\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class CaseopenHistoriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('date', 'desc')
            ->columns([
                TextColumn::make('user.name')->label('Пользователь')->searchable()->sortable(),
                TextColumn::make('case.title_ru')->label('Кейс')->searchable()->limit(40),
                TextColumn::make('item_id')->label('Item ID'),
                TextColumn::make('item_amount')->label('Кол-во')->alignCenter(),
                TextColumn::make('date')->label('Дата')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                Filter::make('today')->label('Сегодня')
                    ->query(fn (Builder $q): Builder => $q->whereDate('date', today())),
                Filter::make('this_month')->label('Этот месяц')
                    ->query(fn (Builder $q): Builder => $q->where('date', '>=', now()->startOfMonth())),
            ]);
    }
}
