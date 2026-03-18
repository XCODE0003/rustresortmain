<?php

namespace App\Filament\Resources\Guides\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class GuidesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('category.id')
                    ->searchable(),
                TextColumn::make('path')
                    ->searchable(),
                TextColumn::make('status')
                    ->numeric()
                    ->sortable(),
                ImageColumn::make('image'),
                TextColumn::make('sort')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('title_en')
                    ->searchable(),
                TextColumn::make('meta_title_en')
                    ->searchable(),
                TextColumn::make('meta_h1_en')
                    ->searchable(),
                TextColumn::make('meta_h2_en')
                    ->searchable(),
                TextColumn::make('meta_h3_en')
                    ->searchable(),
                TextColumn::make('title_ru')
                    ->searchable(),
                TextColumn::make('meta_title_ru')
                    ->searchable(),
                TextColumn::make('meta_h1_ru')
                    ->searchable(),
                TextColumn::make('meta_h2_ru')
                    ->searchable(),
                TextColumn::make('meta_h3_ru')
                    ->searchable(),
                TextColumn::make('title_de')
                    ->searchable(),
                TextColumn::make('meta_title_de')
                    ->searchable(),
                TextColumn::make('meta_h1_de')
                    ->searchable(),
                TextColumn::make('meta_h2_de')
                    ->searchable(),
                TextColumn::make('meta_h3_de')
                    ->searchable(),
                TextColumn::make('title_fr')
                    ->searchable(),
                TextColumn::make('meta_title_fr')
                    ->searchable(),
                TextColumn::make('meta_h1_fr')
                    ->searchable(),
                TextColumn::make('meta_h2_fr')
                    ->searchable(),
                TextColumn::make('meta_h3_fr')
                    ->searchable(),
                TextColumn::make('title_it')
                    ->searchable(),
                TextColumn::make('meta_title_it')
                    ->searchable(),
                TextColumn::make('meta_h1_it')
                    ->searchable(),
                TextColumn::make('meta_h2_it')
                    ->searchable(),
                TextColumn::make('meta_h3_it')
                    ->searchable(),
                TextColumn::make('title_es')
                    ->searchable(),
                TextColumn::make('meta_title_es')
                    ->searchable(),
                TextColumn::make('meta_h1_es')
                    ->searchable(),
                TextColumn::make('meta_h2_es')
                    ->searchable(),
                TextColumn::make('meta_h3_es')
                    ->searchable(),
                TextColumn::make('title_uk')
                    ->searchable(),
                TextColumn::make('meta_title_uk')
                    ->searchable(),
                TextColumn::make('meta_h1_uk')
                    ->searchable(),
                TextColumn::make('meta_h2_uk')
                    ->searchable(),
                TextColumn::make('meta_h3_uk')
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
