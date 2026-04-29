<?php

namespace App\Filament\Pages;

use App\Filament\Support\HasPermissionGate;
use App\Models\Donate;
use App\Models\Server;
use App\Models\ShopStatistic;
use App\Models\User;
use App\Models\Visit;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Panel;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

class MainDashboard extends Page
{
    use HasPermissionGate;

    /**
     * Spec section 2: доступ investor+. Investor role has logs.payments|visits|registrations.
     */
    protected static ?string $permissionKey = 'logs.payments|logs.visits|logs.registrations|users.view';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedHome;

    protected static ?string $navigationLabel = 'Главная';

    protected static ?int $navigationSort = -2;

    protected string $view = 'filament.pages.main-dashboard';

    /** Cache TTL per spec: 1 hour. */
    protected const CACHE_TTL = 3600;

    public static function getRoutePath(Panel $panel): string
    {
        return '/';
    }

    public ?string $startDate = null;

    public ?string $endDate = null;

    public function mount(): void
    {
        $this->startDate = now()->startOfMonth()->toDateString();
        $this->endDate = now()->toDateString();
    }

    /** Bust cache when the date range changes. */
    public function updatedStartDate(): void
    {
        $this->dispatch('$refresh');
    }

    public function updatedEndDate(): void
    {
        $this->dispatch('$refresh');
    }

    protected function periodKey(): string
    {
        return ($this->startDate ?? now()->startOfMonth()->toDateString())
            .'_'.($this->endDate ?? now()->toDateString());
    }

    protected function periodBounds(): array
    {
        $start = Carbon::parse($this->startDate ?? now()->startOfMonth())->startOfDay();
        $end = Carbon::parse($this->endDate ?? now())->endOfDay();

        return [$start, $end];
    }

    public function getKpis(): array
    {
        return Cache::remember(
            'dashboard:payments:kpis:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();

                $base = Donate::where('status', 1)->whereBetween('created_at', [$start, $end]);
                $total = (float) $base->clone()->sum('amount');
                $count = $base->clone()->count();
                $avg = $count > 0 ? $total / $count : 0.0;
                $unique = $base->clone()->distinct('user_id')->count('user_id');

                $days = max(1, (int) $start->diffInDays($end) + 1);
                $prevEnd = $start->copy()->subSecond();
                $prevStart = $prevEnd->copy()->subDays($days - 1)->startOfDay();
                $prevTotal = (float) Donate::where('status', 1)
                    ->whereBetween('created_at', [$prevStart, $prevEnd])
                    ->sum('amount');

                $growth = $prevTotal > 0 ? (($total - $prevTotal) / $prevTotal) * 100 : null;

                $newUsers = User::whereBetween('created_at', [$start, $end])->count();
                $activeServers = Server::where('status', 1)->count();

                return compact('total', 'count', 'avg', 'unique', 'growth', 'prevTotal', 'newUsers', 'activeServers');
            }
        );
    }

    public function getDailyRevenue(): array
    {
        return Cache::remember(
            'dashboard:payments:daily:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();
                $days = max(1, (int) $start->diffInDays($end) + 1);

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
        );
    }

    public function getGatewayStats(): array
    {
        return Cache::remember(
            'dashboard:payments:gateways:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();

                $rows = Donate::where('status', 1)
                    ->whereBetween('created_at', [$start, $end])
                    ->selectRaw('payment_system, COUNT(*) as count, SUM(amount) as total')
                    ->groupBy('payment_system')
                    ->orderByDesc('total')
                    ->get();

                $grandTotal = $rows->sum('total');

                return $rows->map(fn ($row) => [
                    'gateway' => strtoupper($row->payment_system ?? '—'),
                    'count' => (int) $row->count,
                    'total' => (float) $row->total,
                    'percent' => $grandTotal > 0 ? round(($row->total / $grandTotal) * 100, 1) : 0,
                ])->toArray();
            }
        );
    }

    public function getTopItems(): array
    {
        return Cache::remember(
            'dashboard:shop:top:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();

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
                        'name' => $r->item?->name_ru ?? $r->item?->short_name ?? '—',
                        'sales' => (int) $r->sales,
                        'revenue' => (float) $r->revenue,
                    ])
                    ->toArray();
            }
        );
    }

    public function getRecentDonations(): array
    {
        return Cache::remember(
            'dashboard:payments:recent:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();

                return Donate::where('status', 1)
                    ->whereBetween('created_at', [$start, $end])
                    ->with('user:id,name')
                    ->latest()
                    ->limit(15)
                    ->get()
                    ->map(fn ($d) => [
                        'user' => $d->user?->name ?? $d->steam_id ?? '—',
                        'amount' => (float) $d->amount,
                        'gateway' => strtoupper($d->payment_system ?? '—'),
                        'at' => $d->created_at?->format('d.m H:i'),
                    ])
                    ->toArray();
            }
        );
    }

    /** Spec: Статистика посещений за месяц (total_visits, total_visitors). */
    public function getVisitStats(): array
    {
        return Cache::remember(
            'dashboard:visits:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();
                $days = max(1, (int) $start->diffInDays($end) + 1);

                $totalVisits = Visit::whereBetween('created_at', [$start, $end])->count();
                $totalVisitors = (int) Visit::whereBetween('created_at', [$start, $end])
                    ->distinct('ip')->count('ip');

                $rows = Visit::whereBetween('created_at', [$start, $end])
                    ->selectRaw('DATE(created_at) as date, COUNT(*) as visits, COUNT(DISTINCT ip) as visitors')
                    ->groupBy('date')
                    ->get()
                    ->keyBy('date');

                $chart = [];
                for ($i = 0; $i < $days; $i++) {
                    $d = $start->copy()->addDays($i)->toDateString();
                    $row = $rows[$d] ?? null;
                    $chart[] = [
                        'label' => Carbon::parse($d)->locale('ru')->isoFormat('D MMM'),
                        'visits' => (int) ($row->visits ?? 0),
                        'visitors' => (int) ($row->visitors ?? 0),
                    ];
                }

                return [
                    'total_visits' => $totalVisits,
                    'total_visitors' => $totalVisitors,
                    'chart' => $chart,
                ];
            }
        );
    }

    /** Spec: Статистика регистраций за всё время + период. */
    public function getRegistrationStats(): array
    {
        return Cache::remember(
            'dashboard:registrations:'.$this->periodKey(),
            self::CACHE_TTL,
            function (): array {
                [$start, $end] = $this->periodBounds();
                $days = max(1, (int) $start->diffInDays($end) + 1);

                $allTime = User::count();
                $inPeriod = User::whereBetween('created_at', [$start, $end])->count();

                $rows = User::whereBetween('created_at', [$start, $end])
                    ->selectRaw('DATE(created_at) as date, COUNT(*) as total')
                    ->groupBy('date')
                    ->pluck('total', 'date');

                $chart = [];
                for ($i = 0; $i < $days; $i++) {
                    $d = $start->copy()->addDays($i)->toDateString();
                    $chart[] = [
                        'label' => Carbon::parse($d)->locale('ru')->isoFormat('D MMM'),
                        'total' => (int) ($rows[$d] ?? 0),
                    ];
                }

                return [
                    'all_time' => $allTime,
                    'in_period' => $inPeriod,
                    'chart' => $chart,
                ];
            }
        );
    }
}
