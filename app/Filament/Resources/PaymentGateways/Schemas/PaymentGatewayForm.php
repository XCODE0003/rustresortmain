<?php

namespace App\Filament\Resources\PaymentGateways\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PaymentGatewayForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Основная информация')
                    ->schema([
                        TextInput::make('code')
                            ->label('Код')
                            ->helperText('Уникальный код платежной системы (например: enot, freekassa)')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(50)
                            ->columnSpan(1),

                        TextInput::make('name')
                            ->label('Название (EN)')
                            ->required()
                            ->maxLength(255)
                            ->columnSpan(1),

                        TextInput::make('name_ru')
                            ->label('Название (RU)')
                            ->required()
                            ->maxLength(255)
                            ->columnSpan(1),

                        Toggle::make('is_active')
                            ->label('Активна')
                            ->helperText('Отображать пользователям при оплате')
                            ->inline(false)
                            ->columnSpan(1),

                        TextInput::make('sort')
                            ->label('Сортировка')
                            ->numeric()
                            ->default(0)
                            ->columnSpan(1),

                        FileUpload::make('logo')
                            ->label('Логотип')
                            ->image()
                            ->directory('payment-logos')
                            ->visibility('public')
                            ->columnSpan(1),
                    ])
                    ->columns(2),

                Section::make('Настройки платежной системы')
                    ->schema([
                        KeyValue::make('settings')
                            ->label('Параметры')
                            ->helperText('API ключи, секреты и другие параметры платежной системы')
                            ->keyLabel('Ключ')
                            ->valueLabel('Значение')
                            ->reorderable(false)
                            ->columnSpanFull(),

                        Textarea::make('description')
                            ->label('Описание')
                            ->rows(3)
                            ->columnSpanFull(),
                    ]),

                Section::make('Финансовые настройки')
                    ->schema([
                        Select::make('currency')
                            ->label('Валюта')
                            ->options([
                                'RUB' => 'Рубль (₽)',
                                'USD' => 'Доллар ($)',
                                'EUR' => 'Евро (€)',
                                'UAH' => 'Гривна (₴)',
                                'KZT' => 'Тенге (₸)',
                                'BTC' => 'Bitcoin (₿)',
                                'USDT' => 'USDT',
                                'ETH' => 'Ethereum (Ξ)',
                            ])
                            ->default('RUB')
                            ->required()
                            ->columnSpan(1),

                        TextInput::make('min_amount')
                            ->label('Минимальная сумма')
                            ->numeric()
                            ->default(10)
                            ->required()
                            ->columnSpan(1),

                        TextInput::make('max_amount')
                            ->label('Максимальная сумма')
                            ->helperText('Оставьте пустым для неограниченной суммы')
                            ->numeric()
                            ->columnSpan(1),

                        TextInput::make('commission_percent')
                            ->label('Комиссия (%)')
                            ->numeric()
                            ->default(0)
                            ->suffix('%')
                            ->columnSpan(1),
                    ])
                    ->columns(2),
            ]);
    }
}
