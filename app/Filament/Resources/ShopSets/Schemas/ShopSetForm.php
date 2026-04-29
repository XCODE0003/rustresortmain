<?php

namespace App\Filament\Resources\ShopSets\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ShopSetForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Textarea::make('items')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('status')
                    ->required()
                    ->numeric()
                    ->default(1),
                Select::make('category_id')
                    ->relationship('category', 'id')
                    ->default(null),
                Textarea::make('servers')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('server')
                    ->numeric()
                    ->default(null),
                TextInput::make('price')
                    ->numeric()
                    ->default(null)
                    ->prefix('$'),
                TextInput::make('price_usd')
                    ->numeric()
                    ->default(null),
                TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('amount')
                    ->required()
                    ->numeric()
                    ->default(1),
                Toggle::make('can_gift')
                    ->required(),
                TextInput::make('discount_percent')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('disable_category_discount')
                    ->required(),
                FileUpload::make('image')
                    ->image(),
                TextInput::make('name_ru')
                    ->default(null),
                TextInput::make('name_en')
                    ->default(null),
                TextInput::make('name_de')
                    ->default(null),
                TextInput::make('name_fr')
                    ->default(null),
                TextInput::make('name_it')
                    ->default(null),
                TextInput::make('name_es')
                    ->default(null),
                TextInput::make('name_uk')
                    ->default(null),
                Textarea::make('short_description_ru')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_en')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_de')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_fr')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_it')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_es')
                    ->default(null)
                    ->columnSpanFull(),
                Textarea::make('short_description_uk')
                    ->default(null)
                    ->columnSpanFull(),
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
