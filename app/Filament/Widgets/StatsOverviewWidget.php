<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseStatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseStatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Revenue', function () {
                $total = \App\Models\Donate::where('status', 1)
                    ->sum('amount');

                return '₽'.number_format($total, 2);
            })
                ->description('All completed payments')
                ->descriptionIcon('heroicon-o-currency-dollar')
                ->color('success'),

            Stat::make('Active Users', function () {
                return \App\Models\User::where('created_at', '>=', now()->subDays(30))->count();
            })
                ->description('Last 30 days')
                ->descriptionIcon('heroicon-o-users')
                ->color('primary'),

            Stat::make('Total Purchases', function () {
                return \App\Models\ShopPurchase::count();
            })
                ->description('All shop purchases')
                ->descriptionIcon('heroicon-o-shopping-cart')
                ->color('warning'),

            Stat::make('Active Servers', function () {
                return \App\Models\Server::where('status', 1)->count();
            })
                ->description('Online now')
                ->descriptionIcon('heroicon-o-server-stack')
                ->color('info'),
        ];
    }
}
