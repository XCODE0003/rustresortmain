<?php

namespace App\Filament\Resources\Tickets\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;

class TicketsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('Игрок')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('title')
                    ->label('Тема')
                    ->searchable()
                    ->limit(40),
                TextColumn::make('type')
                    ->label('Тип')
                    ->badge()
                    ->color('gray')
                    ->searchable(),
                IconColumn::make('is_read')
                    ->label('Отвечен')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-circle')
                    ->falseIcon('heroicon-o-clock')
                    ->trueColor('success')
                    ->falseColor('warning'),
                IconColumn::make('user_is_read')
                    ->label('Прочитан')
                    ->boolean()
                    ->trueColor('success')
                    ->falseColor('gray'),
                TextColumn::make('created_at')
                    ->label('Дата')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('is_read')
                    ->label('Статус')
                    ->options([
                        '1' => 'Отвеченные',
                        '0' => 'Без ответа',
                    ]),
                TrashedFilter::make(),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}
