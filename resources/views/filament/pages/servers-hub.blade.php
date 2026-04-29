<x-filament-panels::page>
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div class="flex flex-wrap gap-2">
            @foreach ($this->getTabs() as $key => $config)
                <button
                    type="button"
                    wire:click="setActiveTab('{{ $key }}')"
                    @class([
                        'inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition',
                        'bg-primary-500 border-primary-500 text-white shadow' => $activeTab === $key,
                        'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800' => $activeTab !== $key,
                    ])
                >
                    <x-filament::icon :icon="$config['icon']" class="w-4 h-4" />
                    {{ $config['label'] }}
                </button>
            @endforeach
        </div>

        @if ($this->getCreateUrl())
            <a
                href="{{ $this->getCreateUrl() }}"
                class="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm bg-primary-600 text-white hover:bg-primary-500"
            >
                + Создать
            </a>
        @endif
    </div>

    @if ($activeTab === 'status')
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            @forelse ($this->getStatusList() as $server)
                <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex items-center justify-between">
                    <div>
                        <div class="font-semibold text-gray-900 dark:text-gray-100">
                            {{ $server->name ?: 'Сервер #'.$server->id }}
                        </div>
                        <div class="text-xs text-gray-500 mt-1">
                            Онлайн: <span class="font-medium">{{ $server->online }}</span>
                        </div>
                    </div>
                    <span @class([
                        'px-2 py-1 rounded text-xs font-medium',
                        'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' => $server->is_online,
                        'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300' => ! $server->is_online,
                    ])>
                        {{ $server->is_online ? 'Online' : 'Offline' }}
                    </span>
                </div>
            @empty
                <div class="text-gray-500 col-span-full">Серверы не найдены.</div>
            @endforelse
        </div>
    @else
        {{ $this->table }}
    @endif
</x-filament-panels::page>
