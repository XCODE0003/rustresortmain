<?php

namespace App\Filament\Resources\Servers\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ServerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Основное')
                    ->schema([
                        TextInput::make('name')
                            ->label('Название')
                            ->required()
                            ->columnSpanFull(),
                        Select::make('category_id')
                            ->label('Категория')
                            ->relationship('category', 'title_ru')
                            ->default(null),
                        TextInput::make('status')
                            ->label('Статус (1 — активен)')
                            ->required()
                            ->numeric()
                            ->default(1),
                        TextInput::make('sort')
                            ->label('Сортировка')
                            ->required()
                            ->numeric()
                            ->default(0),
                        FileUpload::make('image')
                            ->label('Изображение')
                            ->image()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('Вайп')
                    ->schema([
                        DateTimePicker::make('wipe')
                            ->label('Последний вайп'),
                        DateTimePicker::make('next_wipe')
                            ->label('Следующий вайп'),
                    ])
                    ->columns(2),

                Section::make('Параметры сервера')
                    ->collapsed()
                    ->schema([
                        Textarea::make('options')
                            ->label('Настройки (JSON: ip, port, rate...)')
                            ->default(null)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
