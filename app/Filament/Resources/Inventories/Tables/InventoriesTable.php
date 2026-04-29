<?php

namespace App\Filament\Resources\Inventories\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class InventoriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('id', 'desc')
            ->columns([
                TextColumn::make('user.name')->label('Игрок')->searchable()->sortable(),
                TextColumn::make('type')->label('Тип')->badge()->color('gray')->searchable(),
                TextColumn::make('item')->label('Предмет')->searchable()->limit(35)->placeholder('—'),
                TextColumn::make('item_id')->label('Item ID')->placeholder('—'),
                TextColumn::make('amount')->label('Кол-во')->alignCenter(),
                TextColumn::make('balance')->label('Баланс')->money('RUB')->placeholder('—'),
                TextColumn::make('vip_period')->label('VIP')->placeholder('—'),
                TextColumn::make('case.title_ru')->label('Кейс')->placeholder('—')->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('shopItem.name_ru')->label('Shop item')->placeholder('—')->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('created_at')->label('Создан')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('user_id')->label('Игрок')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload(),
                SelectFilter::make('type')->label('Тип')->options([
                    'item' => 'Item',
                    'case' => 'Case',
                    'shop' => 'Shop',
                    'balance' => 'Balance',
                    'vip' => 'VIP',
                    'bonus' => 'Bonus',
                ]),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
