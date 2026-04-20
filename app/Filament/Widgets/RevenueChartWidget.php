<?php

namespace App\Filament\Widgets;

use App\Models\Donate;
use Filament\Widgets\ChartWidget;

class RevenueChartWidget extends ChartWidget
{
    protected static ?int $sort = 2;

    protected int|string|array $columnSpan = 'full';

    protected ?string $heading = 'Выручка по дням';

    public ?string $filter = '7';

    protected function getFilters(): ?array
    {
        return [
            '7' => 'Последние 7 дней',
            '14' => 'Последние 14 дней',
            '30' => 'Последние 30 дней',
            '90' => 'Последние 90 дней',
        ];
    }

    protected function getData(): array
    {
        $days = max(1, (int) ($this->filter ?? 7));
        $data = [];
        $labels = [];

        for ($i = $days - 1; $i >= 0; $i--) {
            $date = now()->subDays($i);
            $labels[] = $date->format('d.m');

            $revenue = Donate::where('status', 1)
                ->whereDate('created_at', $date)
                ->sum('amount');

            $data[] = (float) $revenue;
        }

        return [
            'datasets' => [
                [
                    'label' => 'Выручка (₽)',
                    'data' => $data,
                    'borderColor' => 'rgb(251, 146, 60)',
                    'backgroundColor' => 'rgba(251, 146, 60, 0.15)',
                    'fill' => true,
                    'tension' => 0.4,
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
