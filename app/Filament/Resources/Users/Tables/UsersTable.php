<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Игрок')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                TextColumn::make('steam_id')
                    ->label('Steam ID')
                    ->searchable()
                    ->copyable(),
                TextColumn::make('balance')
                    ->label('Баланс')
                    ->money('RUB', locale: 'ru')
                    ->sortable(),
                TextColumn::make('role')
                    ->label('Роль')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'admin'     => 'danger',
                        'moderator' => 'warning',
                        default     => 'gray',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'admin'     => 'Администратор',
                        'moderator' => 'Модератор',
                        default     => 'Пользователь',
                    })
                    ->searchable(),
                IconColumn::make('mute')
                    ->label('Мут')
                    ->boolean()
                    ->trueColor('danger')
                    ->falseColor('gray'),
                TextColumn::make('mute_date')
                    ->label('До')
                    ->dateTime('d.m.Y H:i')
                    ->sortable()
                    ->placeholder('—'),
                TextColumn::make('created_at')
                    ->label('Регистрация')
                    ->dateTime('d.m.Y')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('role')
                    ->label('Роль')
                    ->options([
                        'admin'     => 'Администратор',
                        'moderator' => 'Модератор',
                        'user'      => 'Пользователь',
                    ]),
                SelectFilter::make('mute')
                    ->label('Мут')
                    ->options([
                        '1' => 'Только замученные',
                        '0' => 'Без мута',
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
