<x-filament-panels::page>
    <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
            @foreach (['today' => 'Сегодня', 'week' => 'Неделя', 'month' => 'Месяц', 'year' => 'Год', 'all' => 'Всё время'] as $key => $label)
                <button
                    wire:click="$set('period', '{{ $key }}')"
                    @class([
                        'px-3 py-1 rounded text-sm border',
                        'bg-primary-500 border-primary-500 text-white' => $period === $key,
                        'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700' => $period !== $key,
                    ])
                >
                    {{ $label }}
                </button>
            @endforeach
        </div>

        <div class="rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <table class="min-w-full text-sm">
                <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th class="text-left px-3 py-2">Item ID</th>
                        <th class="text-left px-3 py-2">Название</th>
                        <th class="text-right px-3 py-2">Продаж</th>
                        <th class="text-right px-3 py-2">Кол-во</th>
                        <th class="text-right px-3 py-2">Выручка</th>
                        <th class="text-right px-3 py-2">Выпало в кейсах</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($this->getRows() as $row)
                        <tr class="border-t border-gray-200 dark:border-gray-700">
                            <td class="px-3 py-2 font-mono text-xs">{{ $row['item_id'] }}</td>
                            <td class="px-3 py-2">{{ $row['name'] }}</td>
                            <td class="px-3 py-2 text-right">{{ $row['sales'] }}</td>
                            <td class="px-3 py-2 text-right">{{ $row['amount'] }}</td>
                            <td class="px-3 py-2 text-right">{{ number_format($row['revenue'], 2, ',', ' ') }} ₽</td>
                            <td class="px-3 py-2 text-right">{{ $row['wins'] }}</td>
                        </tr>
                    @empty
                        <tr><td colspan="6" class="px-3 py-4 text-center text-gray-500">Нет данных за выбранный период.</td></tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</x-filament-panels::page>
