<?php

namespace App\Filament\Resources\PaymentGateways\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class PaymentGatewaysTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('logo')
                    ->label('Логотип')
                    ->circular()
                    ->defaultImageUrl('/images/placeholder.png')
                    ->size(40),

                TextColumn::make('name_ru')
                    ->label('Название')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                TextColumn::make('code')
                    ->label('Код')
                    ->searchable()
                    ->badge()
                    ->color('gray'),

                ToggleColumn::make('is_active')
                    ->label('Активна')
                    ->sortable(),

                TextColumn::make('currency')
                    ->label('Валюта')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'RUB' => 'success',
                        'USD' => 'info',
                        'EUR' => 'warning',
                        'BTC', 'USDT', 'ETH' => 'danger',
                        default => 'gray',
                    }),

                TextColumn::make('min_amount')
                    ->label('Мин. сумма')
                    ->money(fn ($record) => $record->currency)
                    ->sortable(),

                TextColumn::make('commission_percent')
                    ->label('Комиссия')
                    ->suffix('%')
                    ->sortable(),

                TextColumn::make('sort')
                    ->label('Порядок')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('created_at')
                    ->label('Создано')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('is_active')
                    ->label('Статус')
                    ->options([
                        true => 'Активные',
                        false => 'Неактивные',
                    ]),
                SelectFilter::make('currency')
                    ->label('Валюта')
                    ->options([
                        'RUB' => 'Рубль',
                        'USD' => 'Доллар',
                        'EUR' => 'Евро',
                        'BTC' => 'Bitcoin',
                        'USDT' => 'USDT',
                    ]),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('sort', 'asc');
    }
}
