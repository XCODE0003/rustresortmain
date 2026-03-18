<?php

namespace App\Filament\Resources\Donates\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class DonatesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->searchable(),
                TextColumn::make('server')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('payment_id')
                    ->searchable(),
                TextColumn::make('amount')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('bonus_amount')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('item.id')
                    ->searchable(),
                TextColumn::make('var_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('status')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('payment_system')
                    ->searchable(),
                TextColumn::make('steam_id')
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
