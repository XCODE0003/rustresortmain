<?php

namespace App\Filament\Resources\CasesItems\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class CasesItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title')->label('Название')->searchable()->limit(40),
                TextColumn::make('item_id')->label('Item ID')->searchable(),
                TextColumn::make('quality_type')->label('Качество')->badge()->color('gray'),
                TextColumn::make('price')->label('Цена')->money('RUB')->sortable(),
                TextColumn::make('amount')->label('Кол-во')->sortable(),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn ($state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn ($state): string => $state ? 'Активен' : 'Скрыт'),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->defaultSort('sort')
            ->filters([
                SelectFilter::make('status')->label('Статус')->options([
                    '1' => 'Активен',
                    '0' => 'Скрыт',
                ]),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
