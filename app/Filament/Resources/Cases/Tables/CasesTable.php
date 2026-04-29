<?php

namespace App\Filament\Resources\Cases\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ReplicateAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class CasesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title_ru')->label('Название')->searchable()->limit(40),
                TextColumn::make('kind')
                    ->label('Тип')
                    ->badge()
                    ->formatStateUsing(fn ($state) => $state == 2 ? 'Магазин' : 'Обычный')
                    ->color(fn ($state) => $state == 2 ? 'info' : 'gray'),
                TextColumn::make('price')->label('Цена')->money('RUB')->sortable(),
                IconColumn::make('is_free')->label('Бесплатный')->boolean(),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn ($state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn ($state): string => $state ? 'Активен' : 'Скрыт'),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
                TextColumn::make('created_at')->label('Создан')->dateTime('d.m.Y')->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort')
            ->filters([
                SelectFilter::make('kind')->label('Тип')->options([
                    1 => 'Обычный',
                    2 => 'Магазин',
                ]),
                SelectFilter::make('status')->label('Статус')->options([
                    '1' => 'Активен',
                    '0' => 'Скрыт',
                ]),
            ])
            ->recordActions([
                EditAction::make(),
                ReplicateAction::make()->label('Дублировать'),
            ])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
