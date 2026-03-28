<?php

namespace App\Filament\Resources\LegalPages\Tables;

use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class LegalPagesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('slug')
                    ->label('Slug')
                    ->sortable(),
                TextColumn::make('title_ru')
                    ->label('RU')
                    ->searchable(),
                TextColumn::make('title_en')
                    ->label('EN')
                    ->searchable(),
                TextColumn::make('updated_at')
                    ->label('Обновлено')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->paginated(false);
    }
}
