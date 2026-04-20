<?php

namespace App\Filament\Resources\Guides\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class GuidesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('')
                    ->size(40),
                TextColumn::make('title_ru')
                    ->label('Заголовок')
                    ->searchable()
                    ->limit(45),
                TextColumn::make('category.title_ru')
                    ->label('Категория')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn ($state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn ($state): string => $state ? 'Опубликован' : 'Скрыт')
                    ->sortable(),
                TextColumn::make('sort')
                    ->label('Сорт.')
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Создан')
                    ->dateTime('d.m.Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort')
            ->filters([
                SelectFilter::make('status')
                    ->label('Статус')
                    ->options([
                        '1' => 'Опубликован',
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
