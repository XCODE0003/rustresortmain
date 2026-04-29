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

        <a
            href="{{ $this->getCreateUrl() }}"
            class="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm bg-primary-600 text-white hover:bg-primary-500"
        >
            + Создать
        </a>
    </div>

    {{ $this->table }}
</x-filament-panels::page>
