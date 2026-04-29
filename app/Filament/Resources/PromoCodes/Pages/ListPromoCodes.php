<?php

namespace App\Filament\Resources\PromoCodes\Pages;

use App\Filament\Resources\PromoCodes\PromoCodeResource;
use App\Models\Cases;
use App\Models\PromoCode;
use App\Models\ShopItem;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Str;

class ListPromoCodes extends ListRecords
{
    protected static string $resource = PromoCodeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
            Action::make('generate')
                ->label('Сгенерировать пачку')
                ->icon(Heroicon::OutlinedSparkles)
                ->color('warning')
                ->modalHeading('Массовая генерация промокодов')
                ->schema([
                    TextInput::make('count')
                        ->label('Количество')
                        ->numeric()
                        ->default(10)
                        ->minValue(1)
                        ->maxValue(10000)
                        ->required(),
                    TextInput::make('prefix')->label('Префикс')->default(''),
                    TextInput::make('length')
                        ->label('Длина случайной части')
                        ->numeric()->default(8)->minValue(4)->maxValue(32),
                    Select::make('type_reward')
                        ->label('Тип награды')
                        ->options([
                            'balance' => 'Баланс',
                            'case' => 'Кейс',
                            'shop_item' => 'Товар магазина',
                            'premium' => 'Премиум-период',
                        ])
                        ->required()
                        ->live(),
                    TextInput::make('bonus_amount')
                        ->label('Сумма бонуса')
                        ->numeric()
                        ->visible(fn ($get) => $get('type_reward') === 'balance'),
                    Select::make('case_id')
                        ->label('Кейс')
                        ->options(fn () => Cases::query()->pluck('title_ru', 'id')->toArray())
                        ->searchable()
                        ->visible(fn ($get) => $get('type_reward') === 'case'),
                    Select::make('shop_item_id')
                        ->label('Товар магазина')
                        ->options(fn () => ShopItem::query()->pluck('name_ru', 'id')->toArray())
                        ->searchable()
                        ->visible(fn ($get) => $get('type_reward') === 'shop_item'),
                    TextInput::make('premium_period')
                        ->label('Период (дней)')
                        ->numeric()
                        ->visible(fn ($get) => $get('type_reward') === 'premium'),
                    DateTimePicker::make('date_start')->label('Действует с'),
                    DateTimePicker::make('date_end')->label('Действует до'),
                    TextInput::make('max_activations')->label('Активаций на промокод')->numeric()->default(1),
                ])
                ->action(function (array $data): void {
                    $count = (int) $data['count'];
                    $prefix = $data['prefix'] ?: '';
                    $length = max(4, (int) ($data['length'] ?? 8));
                    $created = 0;

                    for ($i = 0; $i < $count; $i++) {
                        $code = $prefix.strtoupper(Str::random($length));

                        PromoCode::create([
                            'public_uuid' => (string) Str::uuid(),
                            'title' => 'Generated #'.now()->format('Y-m-d H:i').' '.($i + 1),
                            'code' => $code,
                            'type' => 2, // generated batch
                            'type_reward' => $data['type_reward'],
                            'bonus_amount' => $data['bonus_amount'] ?? null,
                            'case_id' => $data['case_id'] ?? null,
                            'shop_item_id' => $data['shop_item_id'] ?? null,
                            'premium_period' => $data['premium_period'] ?? null,
                            'date_start' => $data['date_start'] ?? null,
                            'date_end' => $data['date_end'] ?? null,
                            'max_activations' => $data['max_activations'] ?? 1,
                            'is_created_bot' => false,
                        ]);

                        $created++;
                    }

                    Notification::make()
                        ->title("Сгенерировано: {$created}")
                        ->success()
                        ->send();
                }),
        ];
    }
}
