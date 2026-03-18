<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                TextInput::make('steam_id')
                    ->default(null),
                TextInput::make('balance')
                    ->required()
                    ->numeric()
                    ->default(0.0),
                TextInput::make('role')
                    ->required()
                    ->default('user'),
                Toggle::make('mute')
                    ->required(),
                Textarea::make('mute_reason')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('mute_date'),
                TextInput::make('online_time')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('online_time_monday')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('online_time_thursday')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('online_time_eumain')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('steam_trade_url')
                    ->url()
                    ->default(null),
                TextInput::make('phone')
                    ->tel()
                    ->default(null),
                TextInput::make('pin')
                    ->default(null),
                DateTimePicker::make('email_verified_at'),
                TextInput::make('password')
                    ->password()
                    ->required(),
                Textarea::make('two_factor_secret')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('two_factor_recovery_codes')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('two_factor_confirmed_at'),
            ]);
    }
}
