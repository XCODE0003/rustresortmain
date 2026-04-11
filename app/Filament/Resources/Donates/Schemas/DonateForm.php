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
                    ->label('Пользователь')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                TextInput::make('steam_id')
                    ->label('Steam ID')
                    ->default(null),

                TextInput::make('server')
                    ->label('ID сервера')
                    ->numeric()
                    ->default(null),

                TextInput::make('payment_id')
                    ->label('ID платежа')
                    ->required(),

                TextInput::make('amount')
                    ->label('Сумма')
                    ->required()
                    ->numeric()
                    ->prefix('₽'),

                TextInput::make('bonus_amount')
                    ->label('Бонус')
                    ->required()
                    ->numeric()
                    ->prefix('₽')
                    ->default(0.0),

                Select::make('item_id')
                    ->label('Товар')
                    ->relationship('item', 'name_ru')
                    ->searchable()
                    ->preload()
                    ->default(null)
                    ->nullable(),

                TextInput::make('var_id')
                    ->label('ID варианта')
                    ->numeric()
                    ->default(null),

                TextInput::make('count')
                    ->label('Количество')
                    ->numeric()
                    ->default(1),

                Select::make('status')
                    ->label('Статус')
                    ->options([
                        0 => 'Ожидает',
                        1 => 'Завершён',
                        2 => 'Ошибка',
                    ])
                    ->required()
                    ->default(0),

                TextInput::make('payment_system')
                    ->label('Платёжная система')
                    ->required(),
            ]);
    }
}
