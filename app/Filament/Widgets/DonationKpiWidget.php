<?php

namespace App\Filament\Widgets;

use App\Models\Donate;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\StatsOverviewWidget as BaseStatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class DonationKpiWidget extends BaseStatsOverviewWidget
{
    use InteractsWithPageFilters;

    protected static bool $isDiscoverable = false;

    protected int|string|array $columnSpan = 'full';

    protected function getStats(): array
    {
        $filters = $this->pageFilters ?? [];
        $start = Carbon::parse($filters['startDate'] ?? now()->startOfMonth())->startOfDay();
        $end = Carbon::parse($filters['endDate'] ?? now())->endOfDay();

        $query = Donate::where('status', 1)
            ->whereBetween('created_at', [$start, $end]);

        $total = (float) $query->clone()->sum('amount');
        $count = $query->clone()->count();
        $avg = $count > 0 ? $total / $count : 0;
        $unique = $query->clone()->distinct('user_id')->count('user_id');

        $prevStart = $start->copy()->subDays($start->diffInDays($end) + 1);
        $prevEnd = $start->copy()->subSecond();
        $prevTotal = (float) Donate::where('status', 1)
            ->whereBetween('created_at', [$prevStart, $prevEnd])
            ->sum('amount');

        $growthPercent = $prevTotal > 0 ? round((($total - $prevTotal) / $prevTotal) * 100, 1) : null;
        $growthLabel = $growthPercent !== null
            ? ($growthPercent >= 0 ? "+{$growthPercent}%" : "{$growthPercent}%")
            : 'Нет данных за пред. период';

        return [
            Stat::make('Выручка', '₽'.number_format($total, 0, '.', ' '))
                ->description($growthLabel.' vs прошлый период')
                ->descriptionIcon($growthPercent >= 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down')
                ->color($growthPercent >= 0 ? 'success' : 'danger'),

            Stat::make('Донатов', number_format($count, 0, '.', ' '))
                ->description('Успешных платежей')
                ->descriptionIcon('heroicon-o-banknotes')
                ->color('primary'),

            Stat::make('Средний чек', '₽'.number_format($avg, 0, '.', ' '))
                ->description('На один платёж')
                ->descriptionIcon('heroicon-o-calculator')
                ->color('warning'),

            Stat::make('Уникальных доноров', number_format($unique, 0, '.', ' '))
                ->description('Пользователей совершили оплату')
                ->descriptionIcon('heroicon-o-users')
                ->color('info'),
        ];
    }
}
