<?php

namespace App\Filament\Resources\ShopPurchases\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Schemas\Schema;

class ShopPurchaseForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('item_id')
                    ->relationship('item', 'id')
                    ->default(null),
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                DateTimePicker::make('validity'),
            ]);
    }
}
