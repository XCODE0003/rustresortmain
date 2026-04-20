<?php

namespace App\Filament\Resources\ShopCategories\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ShopCategoriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title_ru')
                    ->label('Название')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('path')
                    ->label('Путь')
                    ->searchable()
                    ->copyable(),
                TextColumn::make('discount_percent')
                    ->label('Скидка')
                    ->formatStateUsing(fn ($state) => $state ? "{$state}%" : '—')
                    ->sortable(),
                TextColumn::make('sort')
                    ->label('Сорт.')
                    ->sortable(),
            ])
            ->defaultSort('sort')
            ->filters([])
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
