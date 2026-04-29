<?php

namespace App\Filament\Resources\RconTasks\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class RconTaskForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('server')
                    ->required()
                    ->numeric(),
                Textarea::make('command')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('status')
                    ->required()
                    ->numeric()
                    ->default(0),
                Textarea::make('comment')
                    ->default(null)
                    ->columnSpanFull(),
            ]);
    }
}
