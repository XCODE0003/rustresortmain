<?php

namespace App\Filament\Widgets;

use App\Models\Donate;
use Filament\Widgets\ChartWidget;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Illuminate\Support\Carbon;

class DonationRevenueChartWidget extends ChartWidget
{
    use InteractsWithPageFilters;

    protected static bool $isDiscoverable = false;

    protected ?string $heading = 'Выручка за период';

    protected int|string|array $columnSpan = 'full';

    protected function getData(): array
    {
        $filters = $this->pageFilters ?? [];
        $start = Carbon::parse($filters['startDate'] ?? now()->startOfMonth())->startOfDay();
        $end = Carbon::parse($filters['endDate'] ?? now())->endOfDay();

        $days = max(1, (int) $start->diffInDays($end) + 1);
        $labels = [];
        $data = [];

        if ($days <= 62) {
            for ($i = 0; $i < $days; $i++) {
                $date = $start->copy()->addDays($i);
                $labels[] = $date->format('d.m');
                $data[] = (float) Donate::where('status', 1)
                    ->whereDate('created_at', $date)
                    ->sum('amount');
            }
        } else {
            $current = $start->copy()->startOfMonth();
            while ($current->lte($end)) {
                $labels[] = mb_ucfirst($current->locale('ru')->isoFormat('MMM YY'));
                $data[] = (float) Donate::where('status', 1)
                    ->whereYear('created_at', $current->year)
                    ->whereMonth('created_at', $current->month)
                    ->sum('amount');
                $current->addMonth();
            }
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
