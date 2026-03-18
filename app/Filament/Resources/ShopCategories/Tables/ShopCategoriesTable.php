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
                TextColumn::make('path')
                    ->searchable(),
                TextColumn::make('sort')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('discount_percent')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('title_ru')
                    ->searchable(),
                TextColumn::make('title_en')
                    ->searchable(),
                TextColumn::make('title_de')
                    ->searchable(),
                TextColumn::make('title_fr')
                    ->searchable(),
                TextColumn::make('title_it')
                    ->searchable(),
                TextColumn::make('title_es')
                    ->searchable(),
                TextColumn::make('title_uk')
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
