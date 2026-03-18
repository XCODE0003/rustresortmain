<?php

namespace App\Filament\Resources\ShopCategories\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ShopCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('path')
                    ->required(),
                TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('discount_percent')
                    ->numeric()
                    ->default(null),
                TextInput::make('title_ru')
                    ->default(null),
                TextInput::make('title_en')
                    ->default(null),
                TextInput::make('title_de')
                    ->default(null),
                TextInput::make('title_fr')
                    ->default(null),
                TextInput::make('title_it')
                    ->default(null),
                TextInput::make('title_es')
                    ->default(null),
                TextInput::make('title_uk')
                    ->default(null),
                Textarea::make('description_ru')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_en')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_de')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_fr')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_it')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_es')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('description_uk')
                    ->default(null)
                    ->columnSpanFull(),
            ]);
    }
}
