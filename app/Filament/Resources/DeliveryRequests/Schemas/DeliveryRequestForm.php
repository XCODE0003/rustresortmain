<?php

namespace App\Filament\Resources\DeliveryRequests\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class DeliveryRequestForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Заявка')
                ->schema([
                    TextInput::make('item')->label('Предмет')->disabled(),
                    TextInput::make('item_id')->label('Item ID')->disabled(),
                    TextInput::make('amount')->label('Кол-во')->disabled(),
                    TextInput::make('price')->label('Цена')->disabled(),
                    TextInput::make('price_min')->label('Цена min')->disabled(),
                    TextInput::make('price_max')->label('Цена max')->disabled(),
                    TextInput::make('price_cap')->label('Установленная цена (cap)')->numeric()->step('0.01'),
                    Select::make('status')->label('Статус')->options([
                        0 => 'Новая',
                        1 => 'В обработке',
                        2 => 'Завершена',
                        3 => 'Отменена',
                        4 => 'Waxpeer API',
                        8 => 'Skinsback API',
                    ])->required(),
                    TextInput::make('delivery_id')->label('Delivery ID'),
                    Textarea::make('note')->label('Заметка')->columnSpanFull(),
                ])
                ->columns(2),
        ]);
    }
}
