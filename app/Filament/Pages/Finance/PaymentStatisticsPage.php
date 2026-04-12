<?php

namespace App\Filament\Pages\Finance;

use App\Filament\Widgets\ItemSalesTableWidget;
use App\Filament\Widgets\MonthlyRevenueChartWidget;
use App\Filament\Widgets\RevenueChartWidget;
use BackedEnum;
use Filament\Pages\Dashboard;
use Filament\Support\Icons\Heroicon;

class PaymentStatisticsPage extends Dashboard
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChartBar;

    protected static ?string $navigationLabel = 'Статистика';

    protected static \UnitEnum|string|null $navigationGroup = 'Финансы';

    protected static ?int $navigationSort = 2;

    protected static string $routePath = '/statistics';

    public function getWidgets(): array
    {
        return [
            RevenueChartWidget::class,
            MonthlyRevenueChartWidget::class,
            ItemSalesTableWidget::class,
        ];
    }

    public function getColumns(): int|array
    {
        return 1;
    }
}
