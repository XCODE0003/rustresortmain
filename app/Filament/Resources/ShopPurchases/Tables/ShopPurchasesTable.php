<?php

namespace App\Filament\Resources\ShopPurchases\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ShopPurchasesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('shopItem.name_ru')
                    ->label('Товар')
                    ->searchable()
                    ->limit(35),
                TextColumn::make('user.name')
                    ->label('Игрок')
                    ->searchable(),
                TextColumn::make('count')
                    ->label('Кол-во')
                    ->sortable(),
                TextColumn::make('validity')
                    ->label('Действителен до')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->placeholder('Без срока'),
                TextColumn::make('created_at')
                    ->label('Куплено')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
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
