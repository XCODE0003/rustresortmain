<?php

namespace App\Filament\Widgets;

use App\Models\ShopStatistic;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

class ItemSalesTableWidget extends TableWidget
{
    use InteractsWithPageFilters;

    protected static bool $isDiscoverable = false;

    protected static ?string $heading = 'Топ товаров';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        $filters = $this->pageFilters ?? [];
        $start = Carbon::parse($filters['startDate'] ?? now()->startOfMonth())->startOfDay();
        $end = Carbon::parse($filters['endDate'] ?? now())->endOfDay();

        return $table
            ->query(
                ShopStatistic::query()
                    ->selectRaw('item_id, COUNT(*) as sales, SUM(price) as revenue, MIN(id) as id')
                    ->whereNotNull('item_id')
                    ->whereBetween('created_at', [$start, $end])
                    ->groupBy('item_id')
            )
            ->columns([
                TextColumn::make('item.name_ru')
                    ->label('Товар')
                    ->searchable()
                    ->weight('semibold'),

                TextColumn::make('sales')
                    ->label('Продаж')
                    ->numeric()
                    ->sortable()
                    ->alignCenter()
                    ->badge()
                    ->color('primary'),

                TextColumn::make('revenue')
                    ->label('Выручка')
                    ->money('RUB')
                    ->sortable()
                    ->color('success'),
            ])
            ->defaultSort('sales', 'desc')
            ->paginated([10, 25, 50]);
    }
}
