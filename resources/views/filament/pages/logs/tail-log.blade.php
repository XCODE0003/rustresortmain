<x-filament-panels::page>
    <div class="space-y-3">
        <div class="text-sm text-gray-500">
            Показаны последние {{ count($lines) }} строк.
        </div>

        <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-950 text-gray-100 font-mono text-xs leading-5 p-4 overflow-x-auto max-h-[70vh] overflow-y-auto">
            @if (empty($lines))
                <em class="text-gray-500">Лог-файл пуст или недоступен.</em>
            @else
                @foreach ($lines as $line)
                    <div class="whitespace-pre-wrap break-all">{{ $line }}</div>
                @endforeach
            @endif
        </div>
    </div>
</x-filament-panels::page>
