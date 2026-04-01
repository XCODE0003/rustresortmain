<x-filament-panels::page>

    {{-- Кнопка "Забанить игрока" --}}
    <div class="fi-header-actions flex gap-x-3">
        <x-filament::button
            wire:click="toggleBanForm"
            :color="$showBanForm ? 'gray' : 'danger'"
            icon="{{ $showBanForm ? 'heroicon-o-x-mark' : 'heroicon-o-no-symbol' }}"
        >
            {{ $showBanForm ? 'Отмена' : 'Забанить игрока' }}
        </x-filament::button>
    </div>

    {{-- Форма бана --}}
    @if($showBanForm)
    <x-filament::section>
        <x-slot name="heading">Новый бан</x-slot>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <x-filament::input.wrapper label="Steam ID">
                    <x-filament::input
                        wire:model="banSteamId"
                        type="text"
                        placeholder="76561198xxxxxxxxx"
                    />
                </x-filament::input.wrapper>
            </div>
            <div>
                <x-filament::input.wrapper label="Причина">
                    <x-filament::input
                        wire:model="banReason"
                        type="text"
                        placeholder="Читы, аим и т.д."
                    />
                </x-filament::input.wrapper>
            </div>
            <div>
                <x-filament::input.wrapper label="Комментарий (необязательно)">
                    <x-filament::input
                        wire:model="banComment"
                        type="text"
                        placeholder="Внутренний комментарий"
                    />
                </x-filament::input.wrapper>
            </div>
            <div>
                <x-filament::input.wrapper label="Истекает (пусто = навсегда)">
                    <x-filament::input
                        wire:model="banExpiredAt"
                        type="datetime-local"
                    />
                </x-filament::input.wrapper>
            </div>
        </div>

        <div class="mt-4 flex items-center gap-3">
            <x-filament::button
                wire:click="doBan"
                wire:loading.attr="disabled"
                color="danger"
                icon="heroicon-o-no-symbol"
            >
                Забанить
            </x-filament::button>
            <x-filament::button wire:click="toggleBanForm" color="gray">
                Отмена
            </x-filament::button>
        </div>
    </x-filament::section>
    @endif

    {{-- Фильтры --}}
    <x-filament::section>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex-1 max-w-sm">
                <x-filament::input.wrapper>
                    <x-slot name="prefix">
                        <x-heroicon-o-magnifying-glass class="h-4 w-4 text-gray-400" />
                    </x-slot>
                    <x-filament::input
                        wire:model.live.debounce.400ms="search"
                        type="text"
                        placeholder="Поиск по Steam ID, нику..."
                    />
                </x-filament::input.wrapper>
            </div>

            <div class="flex items-center gap-4">
                <label class="flex cursor-pointer items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <input
                        wire:model.live="excludeStale"
                        type="checkbox"
                        class="rounded border-gray-300 dark:border-gray-600"
                    />
                    Только активные
                </label>

                <x-filament::button
                    wire:click="loadBans"
                    color="gray"
                    icon="heroicon-o-arrow-path"
                    size="sm"
                >
                    Обновить
                </x-filament::button>
            </div>
        </div>

        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Всего: <strong>{{ $totalBans }}</strong> · Страница: <strong>{{ $currentPage + 1 }}</strong>
        </div>
    </x-filament::section>

    {{-- Ошибка загрузки --}}
    @if($loadError)
        <x-filament::section>
            <div class="text-center text-danger-500">
                Не удалось загрузить данные с RustApp API. Проверьте ключ API в настройках.
            </div>
        </x-filament::section>

    {{-- Пусто --}}
    @elseif(count($bans) === 0)
        <x-filament::section>
            <div class="text-center text-gray-400 py-8">
                <x-heroicon-o-no-symbol class="mx-auto mb-3 h-10 w-10 opacity-30" />
                <p>Банов не найдено</p>
            </div>
        </x-filament::section>

    {{-- Таблица --}}
    @else
        <x-filament::section :padding="false">
            <div class="overflow-x-auto">
                <table class="fi-ta-table w-full table-auto divide-y divide-gray-200 dark:divide-white/5 text-sm">
                    <thead class="bg-gray-50 dark:bg-white/5">
                        <tr>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Игрок</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Steam ID</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Причина</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Истекает</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Дата бана</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Статус</th>
                            <th class="fi-ta-header-cell px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-white/5 bg-white dark:bg-gray-900">
                        @foreach($bans as $ban)
                        @php
                            $isActive  = $ban['computed_is_active'] ?? true;
                            $expiredAt = $ban['expired_at'] ?? 0;
                            $createdAt = $ban['created_at'] ?? 0;
                            $player    = $ban['player'] ?? [];
                            $steamName = $player['steam_name'] ?? ($ban['steam_id'] ?? '—');
                            $avatar    = $player['steam_avatar'] ?? null;
                            $steamId   = $ban['steam_id'] ?? '';
                        @endphp
                        <tr class="{{ !$isActive ? 'opacity-50' : '' }}">
                            {{-- Игрок --}}
                            <td class="fi-ta-cell px-4 py-3">
                                <div class="flex items-center gap-3">
                                    @if($avatar)
                                        <img src="{{ $avatar }}" alt="" class="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 dark:ring-white/10" />
                                    @else
                                        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                                            <x-heroicon-o-user class="h-4 w-4 text-gray-400" />
                                        </div>
                                    @endif
                                    <span class="font-medium text-gray-900 dark:text-white">{{ $steamName }}</span>
                                </div>
                            </td>
                            {{-- Steam ID --}}
                            <td class="fi-ta-cell px-4 py-3">
                                <span class="font-mono text-xs text-gray-500 dark:text-gray-400">{{ $steamId }}</span>
                            </td>
                            {{-- Причина --}}
                            <td class="fi-ta-cell px-4 py-3 max-w-[200px]">
                                <span class="text-gray-900 dark:text-white">{{ $ban['reason'] ?? '—' }}</span>
                                @if(!empty($ban['comment']))
                                    <p class="mt-0.5 truncate text-xs text-gray-400">{{ $ban['comment'] }}</p>
                                @endif
                            </td>
                            {{-- Истекает --}}
                            <td class="fi-ta-cell px-4 py-3 text-gray-500 dark:text-gray-400">
                                @if($expiredAt === 0)
                                    <x-filament::badge color="danger">Навсегда</x-filament::badge>
                                @else
                                    {{ date('d.m.Y H:i', $expiredAt) }}
                                @endif
                            </td>
                            {{-- Дата бана --}}
                            <td class="fi-ta-cell px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">
                                {{ $createdAt ? date('d.m.Y H:i', $createdAt) : '—' }}
                            </td>
                            {{-- Статус --}}
                            <td class="fi-ta-cell px-4 py-3">
                                @if($isActive)
                                    <x-filament::badge color="danger">Активен</x-filament::badge>
                                @else
                                    <x-filament::badge color="gray">Истёк</x-filament::badge>
                                @endif
                            </td>
                            {{-- Действия --}}
                            <td class="fi-ta-cell px-4 py-3 text-right">
                                @if($isActive && $steamId)
                                    <x-filament::button
                                        wire:click="unban('{{ addslashes($steamId) }}')"
                                        wire:confirm="Разбанить игрока {{ $steamName }}?"
                                        color="success"
                                        icon="heroicon-o-check-circle"
                                        size="sm"
                                    >
                                        Разбанить
                                    </x-filament::button>
                                @endif
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </x-filament::section>

        {{-- Пагинация --}}
        <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-400">
                Показано {{ count($bans) }} записей
            </span>
            <div class="flex items-center gap-2">
                <x-filament::button
                    wire:click="prevPage"
                    :disabled="$currentPage === 0"
                    color="gray"
                    icon="heroicon-o-chevron-left"
                    size="sm"
                >
                    Назад
                </x-filament::button>
                <x-filament::button
                    wire:click="nextPage"
                    :disabled="count($bans) === 0"
                    color="gray"
                    icon-position="after"
                    icon="heroicon-o-chevron-right"
                    size="sm"
                >
                    Вперёд
                </x-filament::button>
            </div>
        </div>
    @endif

</x-filament-panels::page>
