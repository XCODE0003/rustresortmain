<?php

namespace App\Filament\Resources\Banners\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BannersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('path')->label('Страница')->searchable()->sortable(),
                TextColumn::make('banners')
                    ->label('Кол-во')
                    ->formatStateUsing(fn ($state) => is_array($state) ? count($state) : 0)
                    ->alignCenter(),
                TextColumn::make('updated_at')->label('Обновлён')->dateTime('d.m.Y H:i')->sortable(),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([
                BulkActionGroup::make([DeleteBulkAction::make()]),
            ]);
    }
}
