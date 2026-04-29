<?php

namespace App\Filament\Resources\WonItems\Tables;

use App\Models\WonItem;
use Filament\Actions\Action;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class WonItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                ImageColumn::make('item_icon')->label('')->size(40),
                TextColumn::make('user.name')->label('Пользователь')->searchable()->sortable(),
                TextColumn::make('item')->label('Предмет')->searchable()->limit(40),
                TextColumn::make('item_id')->label('Item ID')->searchable(),
                TextColumn::make('server')->label('Сервер')->badge()->color('info'),
                IconColumn::make('issued')->label('Выдан')->boolean(),
                TextColumn::make('created_at')->label('Дата')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->filters([
                SelectFilter::make('issued')->label('Выдан')->options([
                    '0' => 'Не выдан',
                    '1' => 'Выдан',
                ]),
            ])
            ->recordActions([
                Action::make('issue')
                    ->label('Выдать')
                    ->icon(Heroicon::OutlinedCheckCircle)
                    ->color('success')
                    ->visible(fn (WonItem $record): bool => ! $record->issued)
                    ->requiresConfirmation()
                    ->action(fn (WonItem $record) => $record->update(['issued' => true])),
            ]);
    }
}
