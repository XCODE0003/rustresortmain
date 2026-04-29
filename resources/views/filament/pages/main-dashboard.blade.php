<x-filament-panels::page>
    @php
        $kpis   = $this->getKpis();
        $daily  = $this->getDailyRevenue();
        $gws    = $this->getGatewayStats();
        $items  = $this->getTopItems();
        $recent = $this->getRecentDonations();

        $maxDay = collect($daily)->max('total') ?: 1;

        $growthUp    = ($kpis['growth'] ?? 0) >= 0;
        $growthLabel = $kpis['growth'] !== null
            ? ($growthUp ? '+' : '') . number_format($kpis['growth'], 1) . '%'
            : null;

        $start = \Carbon\Carbon::parse($this->startDate);
        $end   = \Carbon\Carbon::parse($this->endDate);
        $days  = max(1, (int)$start->diffInDays($end) + 1);
    @endphp

    {{-- ── Фильтр ────────────────────────────────────────────── --}}
    <div class="flex flex-wrap items-end gap-3 rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 px-5 py-4">
        <div class="flex flex-col gap-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-gray-400">С</label>
            <input type="date" wire:model.live="startDate" max="{{ now()->toDateString() }}"
                   class="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"/>
        </div>
        <div class="flex flex-col gap-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-gray-400">По</label>
            <input type="date" wire:model.live="endDate" max="{{ now()->toDateString() }}"
                   class="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"/>
        </div>

        {{-- Быстрые кнопки --}}
        <div class="flex gap-2 pb-0.5">
            <button wire:click="$set('startDate', '{{ now()->toDateString() }}')" wire:then="$set('endDate', '{{ now()->toDateString() }}')"
                    onclick="@this.set('startDate','{{ now()->toDateString() }}').then(()=>@this.set('endDate','{{ now()->toDateString() }}'))"
                    class="text-xs px-3 py-1.5 rounded-lg {{ $days === 1 ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' }} transition">
                Сегодня
            </button>
            <button wire:click="$set('startDate', '{{ now()->subDays(6)->toDateString() }}')"
                    class="text-xs px-3 py-1.5 rounded-lg {{ $days === 7 ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' }} transition">
                7 дней
            </button>
            <button wire:click="$set('startDate', '{{ now()->subDays(29)->toDateString() }}')"
                    class="text-xs px-3 py-1.5 rounded-lg {{ $days === 30 ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' }} transition">
                30 дней
            </button>
            <button wire:click="$set('startDate', '{{ now()->startOfMonth()->toDateString() }}')"
                    class="text-xs px-3 py-1.5 rounded-lg {{ $this->startDate === now()->startOfMonth()->toDateString() && $this->endDate === now()->toDateString() ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' }} transition">
                Месяц
            </button>
        </div>

        <p class="text-xs text-gray-400 pb-1 ml-auto">{{ $days }} {{ $days === 1 ? 'день' : ($days < 5 ? 'дня' : 'дней') }}</p>
    </div>

    {{-- ── KPI ──────────────────────────────────────────────────── --}}
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Выручка</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₽{{ number_format($kpis['total'], 0, '.', ' ') }}</p>
            @if($growthLabel)
                <p class="mt-1 text-xs {{ $growthUp ? 'text-green-500' : 'text-red-500' }}">{{ $growthLabel }} к прошл. периоду</p>
            @else
                <p class="mt-1 text-xs text-gray-400">нет данных за прош. период</p>
            @endif
        </div>

        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Платежей</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{{ number_format($kpis['count'], 0, '.', ' ') }}</p>
            <p class="mt-1 text-xs text-gray-400">успешных донатов</p>
        </div>

        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Средний чек</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₽{{ number_format($kpis['avg'], 0, '.', ' ') }}</p>
            <p class="mt-1 text-xs text-gray-400">на один платёж</p>
        </div>

        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Доноров</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{{ number_format($kpis['unique'], 0, '.', ' ') }}</p>
            <p class="mt-1 text-xs text-gray-400">уникальных игроков</p>
        </div>

        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Новых игроков</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{{ number_format($kpis['newUsers'], 0, '.', ' ') }}</p>
            <p class="mt-1 text-xs text-gray-400">зарегистрировались</p>
        </div>

        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Серверов онлайн</p>
            <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{{ $kpis['activeServers'] }}</p>
            <p class="mt-1 text-xs text-gray-400">активных прямо сейчас</p>
        </div>
    </div>

    {{-- ── График + Шлюзы ──────────────────────────────────────── --}}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">

        {{-- График по дням --}}
        <div class="lg:col-span-2 rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <div class="flex items-center justify-between mb-4">
                <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">Выручка по дням</p>
                <p class="text-xs text-gray-400">₽{{ number_format(collect($daily)->sum('total'), 0, '.', ' ') }} итого</p>
            </div>
            @if(collect($daily)->sum('total') > 0)
                <div class="flex items-end gap-px h-32">
                    @foreach($daily as $day)
                        @php $h = max(2, ($day['total'] / $maxDay) * 100); @endphp
                        <div class="group relative flex-1 flex flex-col items-center justify-end h-full"
                             title="{{ $day['label'] }}: ₽{{ number_format($day['total'], 0, '.', ' ') }}">
                            <div class="w-full rounded-t bg-primary-500/70 group-hover:bg-primary-500 transition-colors"
                                 style="height: {{ $h }}%"></div>
                        </div>
                    @endforeach
                </div>
                <div class="flex justify-between mt-1.5 text-[10px] text-gray-400">
                    <span>{{ $daily[0]['label'] ?? '' }}</span>
                    <span>{{ $daily[count($daily)-1]['label'] ?? '' }}</span>
                </div>
            @else
                <div class="flex h-32 items-center justify-center">
                    <p class="text-sm text-gray-400">Нет платежей за период</p>
                </div>
            @endif
        </div>

        {{-- Платёжные шлюзы --}}
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">По шлюзам</p>
            @forelse($gws as $gw)
                <div class="mb-3 last:mb-0">
                    <div class="flex justify-between text-xs mb-1">
                        <span class="font-medium text-gray-700 dark:text-gray-200">{{ $gw['gateway'] }}</span>
                        <span class="text-gray-400">{{ $gw['count'] }} шт. · {{ $gw['percent'] }}%</span>
                    </div>
                    <div class="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                        <div class="h-1.5 rounded-full bg-primary-500" style="width: {{ $gw['percent'] }}%"></div>
                    </div>
                    <p class="mt-0.5 text-right text-[10px] text-gray-400">₽{{ number_format($gw['total'], 0, '.', ' ') }}</p>
                </div>
            @empty
                <p class="text-sm text-gray-400">Нет данных</p>
            @endforelse
        </div>
    </div>

    {{-- ── Топ товаров + Последние платежи ─────────────────────── --}}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">

        {{-- Топ товаров --}}
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">Топ товаров</p>
            @forelse($items as $i => $item)
                <div class="flex items-center gap-2 py-2 {{ $i < count($items)-1 ? 'border-b border-gray-100 dark:border-gray-800' : '' }}">
                    <span class="w-5 text-xs font-bold text-gray-300 dark:text-gray-600">{{ $i+1 }}</span>
                    <span class="flex-1 text-sm text-gray-800 dark:text-gray-200 truncate">{{ $item['name'] }}</span>
                    <span class="text-xs font-semibold text-primary-600 dark:text-primary-400">{{ $item['sales'] }} шт.</span>
                    <span class="text-xs text-gray-400 w-20 text-right">₽{{ number_format($item['revenue'], 0, '.', ' ') }}</span>
                </div>
            @empty
                <p class="text-sm text-gray-400">Нет продаж за период</p>
            @endforelse
        </div>

        {{-- Последние платежи --}}
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">Последние платежи</p>
            @forelse($recent as $i => $don)
                <div class="flex items-center gap-3 py-2 {{ $i < count($recent)-1 ? 'border-b border-gray-100 dark:border-gray-800' : '' }}">
                    <span class="flex-1 text-sm text-gray-800 dark:text-gray-200 truncate">{{ $don['user'] }}</span>
                    <span class="text-sm font-semibold text-green-600 dark:text-green-400">₽{{ number_format($don['amount'], 0, '.', ' ') }}</span>
                    <span class="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 rounded px-1.5 py-0.5">{{ $don['gateway'] }}</span>
                    <span class="text-xs text-gray-400 w-20 text-right">{{ $don['at'] }}</span>
                </div>
            @empty
                <p class="text-sm text-gray-400">Нет платежей за период</p>
            @endforelse
        </div>
    </div>

    @php
        $visits = $this->getVisitStats();
        $regs = $this->getRegistrationStats();
        $maxVisits = max(1, collect($visits['chart'])->max('visits'));
        $maxRegs = max(1, collect($regs['chart'])->max('total'));
    @endphp

    {{-- Посещения --}}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Всего посещений</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">{{ number_format($visits['total_visits'], 0, '.', ' ') }}</p>
            <p class="text-xs text-gray-500 mt-2">за выбранный период</p>
        </div>
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Уникальных посетителей</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">{{ number_format($visits['total_visitors'], 0, '.', ' ') }}</p>
            <p class="text-xs text-gray-500 mt-2">по уникальным IP</p>
        </div>
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Среднее посещений / день</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">
                {{ number_format($visits['total_visits'] / max(1, count($visits['chart'])), 0, '.', ' ') }}
            </p>
            <p class="text-xs text-gray-500 mt-2">в выбранном периоде</p>
        </div>
    </div>

    <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5 mt-4">
        <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Посещения по дням</p>
        <div class="flex items-end gap-1 h-32">
            @foreach ($visits['chart'] as $row)
                <div class="flex-1 group relative">
                    <div class="bg-blue-500/70 dark:bg-blue-400/70 rounded-t hover:bg-blue-500 transition"
                         style="height: {{ max(2, round(($row['visits'] / $maxVisits) * 100)) }}%"></div>
                    <div class="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block whitespace-nowrap text-[10px] bg-gray-900 text-white px-1.5 py-0.5 rounded">
                        {{ $row['label'] }}: {{ $row['visits'] }} ({{ $row['visitors'] }} уник.)
                    </div>
                </div>
            @endforeach
        </div>
    </div>

    {{-- Регистрации --}}
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Регистраций за всё время</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">{{ number_format($regs['all_time'], 0, '.', ' ') }}</p>
            <p class="text-xs text-gray-500 mt-2">общее количество пользователей</p>
        </div>
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Регистраций за период</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">{{ number_format($regs['in_period'], 0, '.', ' ') }}</p>
            <p class="text-xs text-gray-500 mt-2">в выбранном диапазоне</p>
        </div>
        <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5">
            <p class="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide">Среднее в день</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-1">
                {{ number_format($regs['in_period'] / max(1, count($regs['chart'])), 1, '.', ' ') }}
            </p>
            <p class="text-xs text-gray-500 mt-2">за период</p>
        </div>
    </div>

    <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 p-5 mt-4">
        <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Регистрации по дням</p>
        <div class="flex items-end gap-1 h-32">
            @foreach ($regs['chart'] as $row)
                <div class="flex-1 group relative">
                    <div class="bg-orange-500/70 dark:bg-orange-400/70 rounded-t hover:bg-orange-500 transition"
                         style="height: {{ max(2, round(($row['total'] / $maxRegs) * 100)) }}%"></div>
                    <div class="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block whitespace-nowrap text-[10px] bg-gray-900 text-white px-1.5 py-0.5 rounded">
                        {{ $row['label'] }}: {{ $row['total'] }}
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</x-filament-panels::page>
