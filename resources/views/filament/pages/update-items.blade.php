<x-filament-panels::page>
    @php($stats = $this->getStats())

    <div class="space-y-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div class="text-xs text-gray-500">Товаров магазина</div>
                <div class="text-2xl font-semibold mt-1">{{ $stats['shop_items'] }}</div>
            </div>
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div class="text-xs text-gray-500">Активных в магазине</div>
                <div class="text-2xl font-semibold mt-1">{{ $stats['shop_active'] }}</div>
            </div>
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div class="text-xs text-gray-500">Предметов кейсов</div>
                <div class="text-2xl font-semibold mt-1">{{ $stats['cases_items'] }}</div>
            </div>
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div class="text-xs text-gray-500">Активных в кейсах</div>
                <div class="text-2xl font-semibold mt-1">{{ $stats['cases_active'] }}</div>
            </div>
        </div>

        <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 space-y-3">
            <div class="text-sm text-gray-600 dark:text-gray-400">
                Синхронизация подгружает актуальный список игровых предметов и обновляет картинки/имена в локальной базе.
            </div>
            <div class="flex flex-wrap gap-2">
                {{ $this->syncItemsAction }}
                {{ $this->clearItemsCacheAction }}
            </div>
        </div>
    </div>
</x-filament-panels::page>
