<?php

namespace App\Filament\Resources\Donates\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class DonateForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                TextInput::make('server')
                    ->numeric()
                    ->default(null),
                TextInput::make('payment_id')
                    ->required(),
                TextInput::make('amount')
                    ->required()
                    ->numeric(),
                TextInput::make('bonus_amount')
                    ->required()
                    ->numeric()
                    ->default(0.0),
                Select::make('item_id')
                    ->relationship('item', 'id')
                    ->default(null),
                TextInput::make('var_id')
                    ->numeric()
                    ->default(null),
                TextInput::make('status')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('payment_system')
                    ->required(),
                TextInput::make('steam_id')
                    ->default(null),
            ]);
    }
}
