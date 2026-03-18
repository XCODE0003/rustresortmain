<x-filament-widgets::widget>
    <x-filament::section>
        <div class="space-y-2">
            @foreach($this->getServers() as $server)
                <div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center gap-3">
                        @if($server->image)
                            <img src="{{ $server->image }}" alt="{{ $server->name }}" class="w-8 h-8 rounded">
                        @endif
                        <div>
                            <h4 class="font-semibold">{{ $server->name }}</h4>
                            <p class="text-sm text-gray-500">Next Wipe: {{ $server->next_wipe?->format('M d, Y') ?? 'N/A' }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-full {{ $server->isOnline() ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' }}">
                            <span class="w-1.5 h-1.5 rounded-full {{ $server->isOnline() ? 'bg-green-600 dark:bg-green-400' : 'bg-red-600 dark:bg-red-400' }}"></span>
                            {{ $server->isOnline() ? 'Online' : 'Offline' }}
                        </span>
                    </div>
                </div>
            @endforeach
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
