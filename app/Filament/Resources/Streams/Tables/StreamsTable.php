<?php

namespace App\Filament\Resources\Streams\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class StreamsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('sort')
            ->columns([
                ImageColumn::make('image')->label('')->size(40),
                TextColumn::make('title')->label('Название')->searchable(),
                TextColumn::make('language')->label('Язык')->badge()->color('gray'),
                TextColumn::make('url')->label('URL')->limit(40)->copyable(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('language')->label('Язык')->options([
                    'ru' => 'RU', 'en' => 'EN', 'de' => 'DE', 'fr' => 'FR',
                    'it' => 'IT', 'es' => 'ES', 'uk' => 'UK',
                ]),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
