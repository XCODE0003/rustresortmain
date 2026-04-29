<?php

namespace App\Filament\Resources\ShopCoupons\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ShopCouponsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->label('Название')->searchable(),
                TextColumn::make('code')->label('Код')->searchable()->copyable(),
                TextColumn::make('type')->label('Тип')->badge()
                    ->formatStateUsing(fn ($state) => $state == 1 ? 'Процент' : 'Сумма'),
                TextColumn::make('percent')->label('Размер'),
                TextColumn::make('date_start')->label('С')->dateTime('d.m.Y H:i')->placeholder('—'),
                TextColumn::make('date_end')->label('До')->dateTime('d.m.Y H:i')->placeholder('—'),
                TextColumn::make('user.name')->label('Пользователь')->placeholder('—'),
            ])
            ->defaultSort('id', 'desc')
            ->filters([
                SelectFilter::make('type')->label('Тип')->options([
                    1 => 'Процент',
                    2 => 'Сумма',
                ]),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
