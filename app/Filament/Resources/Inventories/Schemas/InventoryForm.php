<?php

namespace App\Filament\Resources\Inventories\Schemas;

use App\Models\Cases;
use App\Models\ShopItem;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class InventoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Предмет в инвентаре')
                ->schema([
                    Select::make('user_id')->label('Игрок')
                        ->relationship('user', 'name')
                        ->searchable()
                        ->preload()
                        ->required(),
                    Select::make('type')->label('Тип')->options([
                        'item' => 'Item',
                        'case' => 'Case',
                        'shop' => 'Shop item',
                        'balance' => 'Balance',
                        'vip' => 'VIP',
                        'bonus' => 'Bonus',
                    ]),
                    TextInput::make('item')->label('Имя предмета'),
                    TextInput::make('item_id')->label('Item ID'),
                    Select::make('case_id')->label('Case')
                        ->options(fn () => Cases::query()->pluck('title_ru', 'id')->toArray())
                        ->searchable(),
                    Select::make('shop_item_id')->label('Shop item')
                        ->options(fn () => ShopItem::query()->pluck('name_ru', 'id')->toArray())
                        ->searchable(),
                    TextInput::make('amount')->label('Количество')->numeric()->default(1),
                    TextInput::make('variation_id')->label('Variation'),
                    TextInput::make('balance')->label('Баланс')->numeric()->step('0.01'),
                    TextInput::make('vip_period')->label('VIP период (дней)')->numeric(),
                    TextInput::make('deposit_bonus')->label('Бонус депозита')->numeric()->step('0.01'),
                ])
                ->columns(2),
        ]);
    }
}
