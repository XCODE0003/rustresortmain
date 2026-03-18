<?php

namespace App\Filament\Resources\PromoCodes\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PromoCodesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('public_uuid')
                    ->searchable(),
                TextColumn::make('title')
                    ->searchable(),
                TextColumn::make('code')
                    ->searchable(),
                TextColumn::make('type')
                    ->searchable(),
                TextColumn::make('type_reward')
                    ->searchable(),
                TextColumn::make('user.name')
                    ->searchable(),
                TextColumn::make('bonus_amount')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('premium_period')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('case.id')
                    ->searchable(),
                TextColumn::make('bonus_case_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('server_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('date_start')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('date_end')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('max_activations')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('shopItem.id')
                    ->searchable(),
                TextColumn::make('variation_id')
                    ->numeric()
                    ->sortable(),
                IconColumn::make('is_created_bot')
                    ->boolean(),
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
