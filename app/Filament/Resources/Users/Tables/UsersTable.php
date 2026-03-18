<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('Email address')
                    ->searchable(),
                TextColumn::make('steam_id')
                    ->searchable(),
                TextColumn::make('balance')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('role')
                    ->searchable(),
                IconColumn::make('mute')
                    ->boolean(),
                TextColumn::make('mute_date')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('online_time')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('online_time_monday')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('online_time_thursday')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('online_time_eumain')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('steam_trade_url')
                    ->searchable(),
                TextColumn::make('phone')
                    ->searchable(),
                TextColumn::make('pin')
                    ->searchable(),
                TextColumn::make('email_verified_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('two_factor_confirmed_at')
                    ->dateTime()
                    ->sortable(),
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
