<?php

namespace App\Filament\Widgets;

use Filament\Actions\BulkActionGroup;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class TopProductsWidget extends TableWidget
{
    protected static ?string $heading = 'Top Products (Last 30 Days)';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                \App\Models\ShopStatistic::query()
                    ->selectRaw('item_id, COUNT(*) as sales, SUM(price) as revenue, MIN(id) as id')
                    ->where('created_at', '>=', now()->subDays(30))
                    ->whereNotNull('item_id')
                    ->groupBy('item_id')
                    ->orderByDesc('sales')
                    ->limit(10)
            )
            ->columns([
                \Filament\Tables\Columns\TextColumn::make('item.name_ru')
                    ->label('Product')
                    ->searchable(),
                \Filament\Tables\Columns\TextColumn::make('sales')
                    ->label('Sales')
                    ->numeric(),
                \Filament\Tables\Columns\TextColumn::make('revenue')
                    ->label('Revenue')
                    ->money('RUB'),
            ])
            ->paginated(false);
    }
}
