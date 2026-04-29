<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        $isAdmin = auth()->user()?->isAdmin() ?? false;

        return $schema
            ->components([
                Section::make('Основное')
                    ->columns(2)
                    ->schema([
                        TextInput::make('name')
                            ->label('Имя')
                            ->required()
                            ->disabled(! $isAdmin),
                        TextInput::make('email')
                            ->label('Email')
                            ->email()
                            ->required()
                            ->disabled(! $isAdmin),
                        TextInput::make('steam_id')
                            ->label('Steam ID')
                            ->default(null)
                            ->disabled(! $isAdmin),
                        Select::make('role')
                            ->label('Роль')
                            ->options(fn () => \App\Models\Role::query()
                                ->orderBy('sort')
                                ->pluck('name', 'slug')
                                ->toArray())
                            ->required()
                            ->default('user')
                            ->searchable()
                            ->visible($isAdmin),
                        TextInput::make('balance')
                            ->label('Баланс (₽)')
                            ->required()
                            ->numeric()
                            ->default(0.0)
                            ->visible($isAdmin),
                        TextInput::make('password')
                            ->label('Пароль')
                            ->password()
                            ->required(fn (string $operation): bool => $operation === 'create')
                            ->dehydrated(fn (?string $state): bool => filled($state))
                            ->helperText('Оставьте пустым, чтобы не менять пароль')
                            ->visible($isAdmin),
                    ]),

                Section::make('Блокировка чата')
                    ->columns(2)
                    ->schema([
                        Toggle::make('mute')
                            ->label('Мут')
                            ->required(),
                        DateTimePicker::make('mute_date')
                            ->label('Мут до'),
                        Textarea::make('mute_reason')
                            ->label('Причина мута')
                            ->default(null)
                            ->columnSpanFull(),
                    ]),

                Section::make('Дополнительно')
                    ->columns(2)
                    ->collapsed()
                    ->visible($isAdmin)
                    ->schema([
                        TextInput::make('phone')
                            ->label('Телефон')
                            ->tel()
                            ->default(null),
                        TextInput::make('pin')
                            ->label('PIN')
                            ->default(null),
                        TextInput::make('steam_trade_url')
                            ->label('Steam Trade URL')
                            ->url()
                            ->default(null)
                            ->columnSpanFull(),
                        DateTimePicker::make('email_verified_at')
                            ->label('Email подтверждён'),
                    ]),
            ]);
    }
}
