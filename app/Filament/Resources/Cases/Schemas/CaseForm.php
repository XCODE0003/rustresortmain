<?php

namespace App\Filament\Resources\Cases\Schemas;

use App\Models\Server;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class CaseForm
{
    public static function configure(Schema $schema): Schema
    {
        $languages = [
            'ru' => '🇷🇺 RU',
            'en' => '🇬🇧 EN',
            'de' => '🇩🇪 DE',
            'fr' => '🇫🇷 FR',
            'it' => '🇮🇹 IT',
            'es' => '🇪🇸 ES',
            'uk' => '🇺🇦 UK',
        ];

        $tabs = [];
        foreach ($languages as $lang => $label) {
            $tabs[] = Tab::make($label)
                ->schema([
                    TextInput::make("title_{$lang}")
                        ->label('Название')
                        ->columnSpanFull(),
                    TextInput::make("subtitle_{$lang}")
                        ->label('Подзаголовок')
                        ->columnSpanFull(),
                    Textarea::make("description_{$lang}")
                        ->label('Описание')
                        ->rows(3)
                        ->columnSpanFull(),
                ]);
        }

        return $schema->components([
            Section::make('Основное')
                ->schema([
                    FileUpload::make('image')
                        ->label('Изображение')
                        ->image()
                        ->imagePreviewHeight('200')
                        ->columnSpanFull(),
                    Select::make('kind')
                        ->label('Тип')
                        ->options([
                            1 => 'Обычный кейс',
                            2 => 'Магазин-кейс',
                        ])
                        ->default(1)
                        ->required(),
                    Select::make('status')
                        ->label('Статус')
                        ->options([
                            1 => 'Активен',
                            0 => 'Скрыт',
                        ])
                        ->default(1)
                        ->required(),
                    TextInput::make('price')
                        ->label('Цена')
                        ->numeric()
                        ->step('0.01')
                        ->required(),
                    TextInput::make('price_usd')
                        ->label('Цена USD')
                        ->numeric()
                        ->step('0.01'),
                    TextInput::make('online_amount')
                        ->label('Минимум онлайна')
                        ->numeric(),
                    TextInput::make('prizes_max')
                        ->label('Макс. призов')
                        ->numeric(),
                    TextInput::make('sort')
                        ->label('Сортировка')
                        ->numeric()
                        ->default(0),
                    Toggle::make('is_free')
                        ->label('Бесплатный'),
                    Select::make('servers')
                        ->label('Серверы')
                        ->multiple()
                        ->options(fn () => Server::pluck('name', 'id')->toArray()),
                ])
                ->columns(2),

            Tabs::make('Языки')->tabs($tabs)->columnSpanFull(),

            Section::make('Предметы кейса')
                ->description('JSON массив предметов. До 200 элементов с параметрами: var, item_id, type, drop_percent, available, image, vip_period, deposit_bonus, balance, shop_id, shop_var min/max.')
                ->schema([
                    Textarea::make('items')
                        ->label('Items (JSON)')
                        ->rows(15)
                        ->columnSpanFull()
                        ->helperText('Массив объектов предметов в JSON-формате'),
                ])
                ->collapsed(),
        ]);
    }
}
