<?php

namespace App\Filament\Pages;

use App\Models\Donate;
use App\Models\Server;
use App\Models\ShopStatistic;
use App\Models\User;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Panel;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Carbon;

class MainDashboard extends Page
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedHome;

    protected static ?string $navigationLabel = 'Главная';

    protected static ?int $navigationSort = -2;

    protected string $view = 'filament.pages.main-dashboard';

    public static function getRoutePath(Panel $panel): string
    {
        return '/';
    }

    public ?string $startDate = null;

    public ?string $endDate = null;

    public function mount(): void
    {
        $this->startDate = now()->startOfMonth()->toDateString();
        $this->endDate   = now()->toDateString();
    }

    public function getKpis(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end   = Carbon::parse($this->endDate ?? now())->endOfDay();

        $base  = Donate::where('status', 1)->whereBetween('created_at', [$start, $end]);
        $total = (float) $base->clone()->sum('amount');
        $count = $base->clone()->count();
        $avg   = $count > 0 ? $total / $count : 0.0;
        $unique = $base->clone()->distinct('user_id')->count('user_id');

        $days      = max(1, (int) $start->diffInDays($end) + 1);
        $prevEnd   = $start->copy()->subSecond();
        $prevStart = $prevEnd->copy()->subDays($days - 1)->startOfDay();
        $prevTotal = (float) Donate::where('status', 1)
            ->whereBetween('created_at', [$prevStart, $prevEnd])
            ->sum('amount');

        $growth = $prevTotal > 0 ? (($total - $prevTotal) / $prevTotal) * 100 : null;

        $newUsers      = User::whereBetween('created_at', [$start, $end])->count();
        $activeServers = Server::where('status', 1)->count();

        return compact('total', 'count', 'avg', 'unique', 'growth', 'prevTotal', 'newUsers', 'activeServers');
    }

    public function getDailyRevenue(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end   = Carbon::parse($this->endDate ?? now())->endOfDay();
        $days  = max(1, (int) $start->diffInDays($end) + 1);

        $rows = Donate::where('status', 1)
            ->whereBetween('created_at', [$start, $end])
            ->selectRaw('DATE(created_at) as date, SUM(amount) as total')
            ->groupBy('date')
            ->pluck('total', 'date');

        $result = [];
        for ($i = 0; $i < $days; $i++) {
            $d = $start->copy()->addDays($i)->toDateString();
            $result[] = [
                'label' => Carbon::parse($d)->locale('ru')->isoFormat('D MMM'),
                'total' => (float) ($rows[$d] ?? 0),
            ];
        }

        return $result;
    }

    public function getGatewayStats(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end   = Carbon::parse($this->endDate ?? now())->endOfDay();

        $rows = Donate::where('status', 1)
            ->whereBetween('created_at', [$start, $end])
            ->selectRaw('payment_system, COUNT(*) as count, SUM(amount) as total')
            ->groupBy('payment_system')
            ->orderByDesc('total')
            ->get();

        $grandTotal = $rows->sum('total');

        return $rows->map(fn ($row) => [
            'gateway' => strtoupper($row->payment_system ?? '—'),
            'count'   => (int) $row->count,
            'total'   => (float) $row->total,
            'percent' => $grandTotal > 0 ? round(($row->total / $grandTotal) * 100, 1) : 0,
        ])->toArray();
    }

    public function getTopItems(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end   = Carbon::parse($this->endDate ?? now())->endOfDay();

        return ShopStatistic::query()
            ->selectRaw('item_id, COUNT(*) as sales, SUM(price) as revenue')
            ->whereNotNull('item_id')
            ->whereBetween('created_at', [$start, $end])
            ->groupBy('item_id')
            ->orderByDesc('sales')
            ->limit(8)
            ->with('item:id,name_ru,short_name')
            ->get()
            ->map(fn ($r) => [
                'name'    => $r->item?->name_ru ?? $r->item?->short_name ?? '—',
                'sales'   => (int) $r->sales,
                'revenue' => (float) $r->revenue,
            ])
            ->toArray();
    }

    public function getRecentDonations(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end   = Carbon::parse($this->endDate ?? now())->endOfDay();

        return Donate::where('status', 1)
            ->whereBetween('created_at', [$start, $end])
            ->with('user:id,name')
            ->latest()
            ->limit(15)
            ->get()
            ->map(fn ($d) => [
                'user'    => $d->user?->name ?? $d->steam_id ?? '—',
                'amount'  => (float) $d->amount,
                'gateway' => strtoupper($d->payment_system ?? '—'),
                'at'      => $d->created_at?->format('d.m H:i'),
            ])
            ->toArray();
    }
}
