<?php

namespace App\Filament\Pages\Logs;

use App\Filament\Support\HasPermissionGate;
use App\Models\ShopStatistic;
use App\Models\WonItem;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

class GameItemsStatistics extends Page
{
    use HasPermissionGate;

    protected static ?string $permissionKey = 'logs.items';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChartBar;

    protected static ?string $navigationLabel = 'Статистика по предметам';

    protected static \UnitEnum|string|null $navigationGroup = 'Logs';

    protected static ?int $navigationSort = 70;

    protected string $view = 'filament.pages.logs.game-items-statistics';

    public ?string $period = 'month';

    public function getRows(): Collection
    {
        $start = match ($this->period) {
            'today' => now()->startOfDay(),
            'week' => now()->startOfWeek(),
            'year' => now()->startOfYear(),
            'all' => Carbon::createFromTimestamp(0),
            default => now()->startOfMonth(),
        };

        $shop = ShopStatistic::query()
            ->whereNotNull('item_id')
            ->where('created_at', '>=', $start)
            ->selectRaw('item_id, COUNT(*) AS sales, SUM(amount) AS total_amount, SUM(price) AS revenue')
            ->groupBy('item_id')
            ->with('item:id,name_ru,short_name')
            ->get();

        $wonByItem = WonItem::query()
            ->whereNotNull('item_id')
            ->where('created_at', '>=', $start)
            ->selectRaw('item_id, COUNT(*) AS wins')
            ->groupBy('item_id')
            ->pluck('wins', 'item_id');

        $rows = $shop->map(fn ($r) => [
            'item_id' => $r->item_id,
            'name' => $r->item?->name_ru ?? $r->item?->short_name ?? '—',
            'sales' => (int) $r->sales,
            'amount' => (int) $r->total_amount,
            'revenue' => (float) $r->revenue,
            'wins' => (int) ($wonByItem[$r->item_id] ?? 0),
        ]);

        $shopIds = $rows->pluck('item_id')->all();
        $extra = $wonByItem
            ->reject(fn ($_, $id) => in_array($id, $shopIds, false))
            ->map(fn ($wins, $id) => [
                'item_id' => $id,
                'name' => '—',
                'sales' => 0,
                'amount' => 0,
                'revenue' => 0.0,
                'wins' => (int) $wins,
            ])->values();

        return $rows->concat($extra)->sortByDesc('revenue')->values();
    }
}
