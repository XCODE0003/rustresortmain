<?php

namespace App\Filament\Widgets;

use App\Models\Donate;
use Filament\Widgets\ChartWidget;

class MonthlyRevenueChartWidget extends ChartWidget
{
    protected static bool $isDiscoverable = false;

    protected ?string $heading = 'Выручка по месяцам';

    protected function getData(): array
    {
        $labels = [];
        $data = [];

        for ($i = 11; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $labels[] = mb_ucfirst($date->locale('ru')->isoFormat('MMM YY'));

            $revenue = Donate::where('status', 1)
                ->whereYear('created_at', $date->year)
                ->whereMonth('created_at', $date->month)
                ->sum('amount');

            $data[] = (float) $revenue;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Выручка (₽)',
                    'data' => $data,
                    'backgroundColor' => 'rgba(251, 146, 60, 0.75)',
                    'borderColor' => 'rgb(251, 146, 60)',
                    'borderWidth' => 1,
                    'borderRadius' => 4,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
