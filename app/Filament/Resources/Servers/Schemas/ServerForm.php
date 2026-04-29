<?php

namespace App\Filament\Resources\Servers\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ServerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('status')
                    ->required()
                    ->numeric()
                    ->default(1),
                TextInput::make('sort')
                    ->required()
                    ->numeric()
                    ->default(0),
                FileUpload::make('image')
                    ->image(),
                Textarea::make('options')
                    ->default(null)
                    ->columnSpanFull(),
                DateTimePicker::make('wipe'),
                DateTimePicker::make('next_wipe'),
                Select::make('category_id')
                    ->relationship('category', 'id')
                    ->default(null),
            ]);
    }
}
