<?php

namespace App\Filament\Resources\Tickets\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TicketForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                TextInput::make('attachment')
                    ->default(null),
                Textarea::make('question')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('answer')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('title')
                    ->required(),
                TextInput::make('uuid')
                    ->label('UUID')
                    ->required(),
                TextInput::make('answer_user_id')
                    ->numeric()
                    ->default(null),
                Toggle::make('is_read')
                    ->required(),
                Toggle::make('user_is_read')
                    ->required(),
                TextInput::make('server_id')
                    ->numeric()
                    ->default(null),
                TextInput::make('type')
                    ->default(null),
                TextInput::make('char_id')
                    ->numeric()
                    ->default(null),
            ]);
    }
}
