<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class RevenueChartWidget extends ChartWidget
{
    protected ?string $heading = 'Revenue (Last 7 Days)';

    protected function getData(): array
    {
        $data = [];
        $labels = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = now()->subDays($i);
            $labels[] = $date->format('M d');

            $revenue = \App\Models\Donate::where('status', 1)
                ->whereDate('created_at', $date)
                ->sum('amount');

            $data[] = $revenue;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Revenue (₽)',
                    'data' => $data,
                    'borderColor' => 'rgb(59, 130, 246)',
                    'backgroundColor' => 'rgba(59, 130, 246, 0.1)',
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
