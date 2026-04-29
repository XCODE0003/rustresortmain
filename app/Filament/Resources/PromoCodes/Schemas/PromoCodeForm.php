<?php

namespace App\Filament\Resources\PromoCodes\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class PromoCodeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('public_uuid')
                    ->default(null),
                TextInput::make('title')
                    ->required(),
                TextInput::make('code')
                    ->required(),
                TextInput::make('type')
                    ->required(),
                TextInput::make('type_reward')
                    ->required(),
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->default(null),
                TextInput::make('bonus_amount')
                    ->required()
                    ->numeric()
                    ->default(0.0),
                TextInput::make('premium_period')
                    ->numeric()
                    ->default(null),
                Select::make('case_id')
                    ->relationship('case', 'id')
                    ->default(null),
                TextInput::make('bonus_case_id')
                    ->numeric()
                    ->default(null),
                TextInput::make('server_id')
                    ->numeric()
                    ->default(null),
                Textarea::make('users')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('date_start'),
                DateTimePicker::make('date_end'),
                TextInput::make('max_activations')
                    ->numeric()
                    ->default(null),
                Textarea::make('items')
                    ->default(null)
                    ->columnSpanFull(),
                Select::make('shop_item_id')
                    ->relationship('shopItem', 'id')
                    ->default(null),
                TextInput::make('variation_id')
                    ->numeric()
                    ->default(null),
                Toggle::make('is_created_bot')
                    ->required(),
            ]);
    }
}
