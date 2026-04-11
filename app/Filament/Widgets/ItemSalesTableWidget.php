<?php

namespace App\Filament\Widgets;

use App\Models\ShopStatistic;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class ItemSalesTableWidget extends TableWidget
{
    protected static bool $isDiscoverable = false;

    protected static ?string $heading = 'Продажи по товарам';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                ShopStatistic::query()
                    ->selectRaw('item_id, COUNT(*) as sales, SUM(price) as revenue, MIN(id) as id')
                    ->whereNotNull('item_id')
                    ->groupBy('item_id')
                    ->orderByRaw('sales DESC')
            )
            ->columns([
                TextColumn::make('item.name_ru')
                    ->label('Товар')
                    ->searchable()
                    ->sortable()
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
            ->filters([
                Filter::make('period')
                    ->label('Период')
                    ->form([
                        Select::make('days')
                            ->label('Период')
                            ->options([
                                '1' => 'Сегодня',
                                '7' => '7 дней',
                                '30' => '30 дней',
                                '90' => '90 дней',
                            ])
                            ->placeholder('Всё время'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query->when(
                            $data['days'] ?? null,
                            fn (Builder $q, string $days): Builder => $q->where(
                                'shop_statistics.created_at',
                                '>=',
                                now()->subDays((int) $days),
                            )
                        );
                    })
                    ->indicateUsing(function (array $data): ?string {
                        if (empty($data['days'])) {
                            return null;
                        }
                        $labels = ['1' => 'Сегодня', '7' => '7 дней', '30' => '30 дней', '90' => '90 дней'];

                        return 'Период: '.($labels[$data['days']] ?? $data['days'].' дн.');
                    }),
            ])
            ->defaultSort('sales', 'desc')
            ->paginated([10, 25, 50]);
    }
}
