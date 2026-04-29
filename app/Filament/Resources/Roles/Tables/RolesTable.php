<?php

namespace App\Filament\Resources\Roles\Tables;

use App\Models\Role;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RolesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('sort')
            ->columns([
                TextColumn::make('name')->label('Название')->searchable()->weight('semibold'),
                TextColumn::make('slug')->label('Slug')->badge()->color(fn (Role $r) => $r->color)->copyable(),
                TextColumn::make('description')->label('Описание')->limit(60)->placeholder('—'),
                TextColumn::make('permissions')
                    ->label('Прав')
                    ->formatStateUsing(function ($state) {
                        if (! is_array($state)) {
                            return '0';
                        }
                        if (in_array('*', $state, true)) {
                            return 'Все';
                        }

                        return (string) count($state);
                    })
                    ->badge(),
                IconColumn::make('is_system')->label('Системная')->boolean(),
                TextColumn::make('sort')->label('Сорт.')->sortable(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make()->visible(fn (Role $r) => ! $r->is_system),
            ])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
