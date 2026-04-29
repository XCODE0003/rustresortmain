<?php

namespace App\Filament\Resources\ShopItems\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ShopItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('')
                    ->size(40),
                TextColumn::make('name_ru')
                    ->label('Название')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('category.title_ru')
                    ->label('Категория')
                    ->searchable()
                    ->badge()
                    ->color('gray'),
                TextColumn::make('price')
                    ->label('Цена')
                    ->money('RUB', locale: 'ru')
                    ->sortable(),
                TextColumn::make('discount_percent')
                    ->label('Скидка')
                    ->formatStateUsing(fn ($state) => $state ? "{$state}%" : '—')
                    ->sortable(),
                TextColumn::make('amount')
                    ->label('Кол-во')
                    ->sortable(),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn ($state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn ($state): string => $state ? 'Активен' : 'Скрыт')
                    ->sortable(),
                TextColumn::make('sort')
                    ->label('Сорт.')
                    ->sortable(),
            ])
            ->defaultSort('sort')
            ->filters([
                SelectFilter::make('status')
                    ->label('Статус')
                    ->options([
                        '1' => 'Активен',
                        '0' => 'Скрыт',
                    ]),
                SelectFilter::make('category_id')
                    ->label('Категория')
                    ->relationship('category', 'title_ru'),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
