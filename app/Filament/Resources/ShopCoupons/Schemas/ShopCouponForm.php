<?php

namespace App\Filament\Resources\ShopCoupons\Schemas;

use App\Models\ShopItem;
use App\Models\User;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ShopCouponForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Купон')
                ->schema([
                    TextInput::make('title')->label('Название')->required(),
                    TextInput::make('code')->label('Код')->required()->unique(ignoreRecord: true),
                    Select::make('type')->label('Тип')->options([
                        1 => 'Процент',
                        2 => 'Фиксированная сумма',
                    ])->default(1)->required(),
                    TextInput::make('percent')->label('Размер скидки')->numeric()->required(),
                    DateTimePicker::make('date_start')->label('Действует с'),
                    DateTimePicker::make('date_end')->label('Действует до'),
                    Select::make('user_id')->label('Только для пользователя')
                        ->relationship('user', 'name')
                        ->searchable()
                        ->preload(),
                    Select::make('users')->label('Пользователи (массив)')
                        ->multiple()
                        ->options(fn () => User::pluck('name', 'id')->toArray())
                        ->searchable(),
                    Select::make('items')->label('Товары')
                        ->multiple()
                        ->options(fn () => ShopItem::query()->pluck('name_ru', 'id')->toArray())
                        ->searchable(),
                ])
                ->columns(2),
        ]);
    }
}
