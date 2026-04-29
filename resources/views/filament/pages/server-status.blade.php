<x-filament-panels::page>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        @foreach ($this->getServers() as $server)
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
        @endforeach
    </div>
</x-filament-panels::page>
