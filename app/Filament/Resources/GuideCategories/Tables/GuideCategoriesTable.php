<?php

namespace App\Filament\Resources\GuideCategories\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class GuideCategoriesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('title_ru')->label('Название')->searchable(),
                TextColumn::make('path')->label('Путь')->searchable(),
                TextColumn::make('guides_count')->label('Гайдов')->counts('guides')->alignCenter(),
                TextColumn::make('status')->label('Статус')->badge()
                    ->color(fn ($state) => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn ($state) => $state ? 'Активна' : 'Скрыта'),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->label('Статус')->options(['1' => 'Активна', '0' => 'Скрыта']),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
