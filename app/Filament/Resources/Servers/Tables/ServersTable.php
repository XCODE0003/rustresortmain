<?php

namespace App\Filament\Resources\Servers\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ServersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Фото')
                    ->circular(),
                TextColumn::make('name')
                    ->label('Название')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('category.title_ru')
                    ->label('Категория')
                    ->badge()
                    ->color('gray')
                    ->placeholder('—'),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn (int $state): string => $state === 1 ? 'success' : 'danger')
                    ->formatStateUsing(fn (int $state): string => $state === 1 ? 'Активен' : 'Скрыт')
                    ->sortable(),
                TextColumn::make('sort')
                    ->label('Сортировка')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('wipe')
                    ->label('Последний вайп')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->placeholder('—'),
                TextColumn::make('next_wipe')
                    ->label('Следующий вайп')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->placeholder('—'),
            ])
            ->filters([
                //
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
