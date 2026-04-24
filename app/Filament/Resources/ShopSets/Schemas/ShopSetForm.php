<?php

namespace App\Filament\Resources\ShopSets\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ShopSetForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Основное')
                    ->schema([
                        Select::make('category_id')
                            ->label('Категория')
                            ->relationship('category', 'title_ru')
                            ->default(null),
                        TextInput::make('price')
                            ->label('Цена (руб.)')
                            ->numeric()
                            ->default(null)
                            ->prefix('₽'),
                        TextInput::make('discount_percent')
                            ->label('Скидка (%)')
                            ->required()
                            ->numeric()
                            ->default(0),
                        TextInput::make('amount')
                            ->label('Количество')
                            ->required()
                            ->numeric()
                            ->default(1),
                        TextInput::make('sort')
                            ->label('Сортировка')
                            ->required()
                            ->numeric()
                            ->default(0),
                        TextInput::make('status')
                            ->label('Статус')
                            ->required()
                            ->numeric()
                            ->default(1),
                        FileUpload::make('image')
                            ->label('Изображение')
                            ->image()
                            ->columnSpanFull(),
                        Textarea::make('items')
                            ->label('Предметы набора (JSON)')
                            ->required()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                Section::make('Серверы')
                    ->collapsed()
                    ->schema([
                        Textarea::make('servers')
                            ->label('ID серверов (JSON)')
                            ->default(null)
                            ->columnSpanFull(),
                    ]),

                Section::make('Флаги')
                    ->collapsed()
                    ->schema([
                        Toggle::make('can_gift')->label('Можно подарить')->required(),
                        Toggle::make('disable_category_discount')->label('Отключить скидку категории')->required(),
                    ])
                    ->columns(2),

                Section::make('Технические поля')
                    ->collapsed()
                    ->schema([
                        TextInput::make('price_usd')->label('Цена (USD)')->numeric()->default(null),
                    ]),

                Tabs::make('Контент')
                    ->tabs([
                        Tab::make('🇷🇺 RU')
                            ->schema([
                                TextInput::make('name_ru')
                                    ->label('Название')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('short_description_ru')
                                    ->label('Краткое описание')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('description_ru')
                                    ->label('Описание')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ]),
                        Tab::make('🇬🇧 EN')
                            ->schema([
                                TextInput::make('name_en')
                                    ->label('Name')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('short_description_en')
                                    ->label('Short Description')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('description_en')
                                    ->label('Description')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
