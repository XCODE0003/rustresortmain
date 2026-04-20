<?php

namespace App\Filament\Resources\RconTasks\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class RconTasksTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('server.name')
                    ->label('Сервер')
                    ->searchable()
                    ->badge()
                    ->color('gray'),
                TextColumn::make('command')
                    ->label('Команда')
                    ->searchable()
                    ->limit(50)
                    ->copyable(),
                TextColumn::make('status')
                    ->label('Статус')
                    ->badge()
                    ->color(fn ($state): string => match ((int) $state) {
                        1       => 'success',
                        0       => 'warning',
                        default => 'danger',
                    })
                    ->formatStateUsing(fn ($state): string => match ((int) $state) {
                        1       => 'Выполнено',
                        0       => 'Ожидает',
                        default => 'Ошибка',
                    })
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Создано')
                    ->dateTime('d.m.Y H:i')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('status')
                    ->label('Статус')
                    ->options([
                        '1' => 'Выполнено',
                        '0' => 'Ожидает',
                    ]),
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
