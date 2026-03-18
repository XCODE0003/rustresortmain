<?php

namespace App\Filament\Resources\ShopItems\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ShopItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('rs_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('item_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('category.id')
                    ->searchable(),
                TextColumn::make('server')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('price')
                    ->money()
                    ->sortable(),
                TextColumn::make('price_usd')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('discount_percent')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('disable_category_discount')
                    ->boolean(),
                TextColumn::make('amount')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('is_blueprint')
                    ->boolean(),
                IconColumn::make('is_command')
                    ->boolean(),
                IconColumn::make('is_item')
                    ->boolean(),
                IconColumn::make('wipe_block')
                    ->boolean(),
                TextColumn::make('status')
                    ->numeric()
                    ->sortable(),
                ImageColumn::make('image'),
                TextColumn::make('sort')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('can_gift')
                    ->boolean(),
                TextColumn::make('name_ru')
                    ->searchable(),
                TextColumn::make('name_en')
                    ->searchable(),
                TextColumn::make('name_de')
                    ->searchable(),
                TextColumn::make('name_fr')
                    ->searchable(),
                TextColumn::make('name_it')
                    ->searchable(),
                TextColumn::make('name_es')
                    ->searchable(),
                TextColumn::make('name_uk')
                    ->searchable(),
                TextColumn::make('short_name')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
