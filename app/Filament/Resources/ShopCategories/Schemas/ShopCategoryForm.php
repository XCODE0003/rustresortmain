<?php

namespace App\Filament\Resources\ShopCategories\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class ShopCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('path')
                    ->label('URL путь (slug)')
                    ->required(),
                TextInput::make('sort')
                    ->label('Сортировка')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('discount_percent')
                    ->label('Скидка (%)')
                    ->numeric()
                    ->default(null),
                Tabs::make('Языки')
                    ->tabs([
                        Tab::make('🇷🇺 RU')
                            ->schema([
                                TextInput::make('title_ru')
                                    ->label('Название')
                                    ->default(null)
                                    ->columnSpanFull(),
                                Textarea::make('description_ru')
                                    ->label('Описание')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ]),
                        Tab::make('🇬🇧 EN')
                            ->schema([
                                TextInput::make('title_en')
                                    ->label('Title')
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
