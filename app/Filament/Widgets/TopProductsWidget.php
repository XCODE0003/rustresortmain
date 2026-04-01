<?php

namespace App\Filament\Widgets;

use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Support\Facades\DB;

class TopProductsWidget extends TableWidget
{
    protected static ?string $heading = 'Топ товаров за 30 дней';

    public function table(Table $table): Table
    {
        $sub = DB::table('shop_statistics')
            ->selectRaw('item_id, COUNT(*) as sales, SUM(price) as revenue, 0 as id')
            ->where('created_at', '>=', now()->subDays(30))
            ->whereNotNull('item_id')
            ->groupBy('item_id');

        return $table
            ->query(
                \App\Models\ShopStatistic::fromSub($sub, 'shop_statistics')
                    ->reorder()
                    ->orderByRaw('sales DESC')
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
