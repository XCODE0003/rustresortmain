<?php

namespace App\Filament\Resources\ShopItems\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ShopItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('rs_id')
                    ->numeric()
                    ->default(null),
                TextInput::make('item_id')
                    ->numeric()
                    ->default(null),
                Select::make('category_id')
                    ->relationship('category', 'id')
                    ->default(null),
                TextInput::make('server')
                    ->numeric()
                    ->default(null),
                Textarea::make('servers')
                    ->default(null)
                    ->columnSpanFull(),
                TextInput::make('price')
                    ->numeric()
                    ->default(null)
                    ->prefix('$'),
                TextInput::make('price_usd')
                    ->numeric()
                    ->default(null),
                TextInput::make('discount_percent')
                    ->numeric()
                    ->default(null),
                Toggle::make('disable_category_discount')
                    ->required(),
                TextInput::make('amount')
                    ->required()
                    ->numeric()
                    ->default(1),
                Textarea::make('command')
                    ->default(null)
                    ->columnSpanFull(),
                Toggle::make('is_blueprint')
                    ->required(),
                Toggle::make('is_command')
                    ->required(),
                Toggle::make('is_item')
                    ->required(),
                Toggle::make('wipe_block')
                    ->required(),
                TextInput::make('status')
                    ->required()
                    ->numeric()
                    ->default(1),
                Textarea::make('variations')
                    ->default(null)
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->image(),
                TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->default(0),
                Toggle::make('can_gift')
                    ->required(),
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
                TextInput::make('short_name')
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
