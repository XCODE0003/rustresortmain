<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseStatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseStatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected int|string|array $columnSpan = 'full';

    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        return [
            Stat::make('Общая выручка', function () {
                $total = \App\Models\Donate::where('status', 1)
                    ->sum('amount');

                return '₽'.number_format($total, 2);
            })
                ->description('Все завершенные платежи')
                ->descriptionIcon('heroicon-o-currency-dollar')
                ->color('success'),

            Stat::make('Активные пользователи', function () {
                return \App\Models\User::where('created_at', '>=', now()->subDays(30))->count();
            })
                ->description('Последние 30 дней')
                ->descriptionIcon('heroicon-o-users')
                ->color('primary'),

            Stat::make('Всего покупок', function () {
                return \App\Models\ShopPurchase::count();
            })
                ->description('Все покупки магазина')
                ->descriptionIcon('heroicon-o-shopping-cart')
                ->color('warning'),

            Stat::make('Активные серверы', function () {
                return \App\Models\Server::where('status', 1)->count();
            })
                ->description('Сейчас онлайн')
                ->descriptionIcon('heroicon-o-server-stack')
                ->color('info'),
        ];
    }
}
