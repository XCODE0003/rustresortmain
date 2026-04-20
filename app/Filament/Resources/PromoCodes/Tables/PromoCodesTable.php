<?php

namespace App\Filament\Resources\PromoCodes\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class PromoCodesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label('Код')
                    ->searchable()
                    ->copyable()
                    ->weight('bold'),
                TextColumn::make('title')
                    ->label('Название')
                    ->searchable()
                    ->limit(35),
                TextColumn::make('type')
                    ->label('Тип')
                    ->badge()
                    ->color('gray')
                    ->searchable(),
                TextColumn::make('bonus_amount')
                    ->label('Бонус')
                    ->formatStateUsing(fn ($state) => $state ? "₽{$state}" : '—')
                    ->sortable(),
                TextColumn::make('max_activations')
                    ->label('Лимит')
                    ->formatStateUsing(fn ($state) => $state ?? '∞')
                    ->sortable(),
                TextColumn::make('date_start')
                    ->label('Начало')
                    ->dateTime('d.m.Y')
                    ->sortable()
                    ->placeholder('—'),
                TextColumn::make('date_end')
                    ->label('Конец')
                    ->dateTime('d.m.Y')
                    ->sortable()
                    ->placeholder('—'),
                IconColumn::make('is_created_bot')
                    ->label('Бот')
                    ->boolean()
                    ->trueColor('info')
                    ->falseColor('gray'),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('type')
                    ->label('Тип')
                    ->searchable(),
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
