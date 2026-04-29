<x-filament-panels::page>
    @if (! $user)
        <div class="text-gray-500">
            Пользователь не выбран. Передайте параметр <code>user</code> в URL или откройте логи из карточки пользователя.
        </div>
    @else
        <div class="space-y-6">
            <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <div class="font-semibold text-lg">{{ $user->name }}</div>
                <div class="text-sm text-gray-500">
                    ID: {{ $user->id }} ·
                    Email: {{ $user->email ?: '—' }} ·
                    Steam: {{ $user->steam_id ?: '—' }} ·
                    Баланс: {{ number_format((float) $user->balance, 2, ',', ' ') }} ₽
                </div>
            </div>

            <div>
                <h2 class="text-lg font-semibold mb-2">Платежи (последние 100)</h2>
                <div class="rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <table class="min-w-full text-sm">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th class="text-left px-3 py-2">Дата</th>
                                <th class="text-left px-3 py-2">Сумма</th>
                                <th class="text-left px-3 py-2">Бонус</th>
                                <th class="text-left px-3 py-2">Система</th>
                                <th class="text-left px-3 py-2">Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($this->getDonations() as $d)
                                <tr class="border-t border-gray-200 dark:border-gray-700">
                                    <td class="px-3 py-2">{{ $d->created_at?->format('d.m.Y H:i') }}</td>
                                    <td class="px-3 py-2">{{ number_format((float) $d->amount, 2, ',', ' ') }} ₽</td>
                                    <td class="px-3 py-2">{{ number_format((float) $d->bonus_amount, 2, ',', ' ') }} ₽</td>
                                    <td class="px-3 py-2">{{ strtoupper((string) $d->payment_system) }}</td>
                                    <td class="px-3 py-2">{{ ['Ожидает','Завершён','Ошибка'][$d->status] ?? $d->status }}</td>
                                </tr>
                            @empty
                                <tr><td colspan="5" class="px-3 py-2 text-gray-500">Платежей нет.</td></tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 class="text-lg font-semibold mb-2">Покупки в магазине</h2>
                <div class="rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <table class="min-w-full text-sm">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th class="text-left px-3 py-2">Дата</th>
                                <th class="text-left px-3 py-2">Товар</th>
                                <th class="text-left px-3 py-2">Кол-во</th>
                                <th class="text-left px-3 py-2">Цена</th>
                                <th class="text-left px-3 py-2">Сервер</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($this->getShopPurchases() as $s)
                                <tr class="border-t border-gray-200 dark:border-gray-700">
                                    <td class="px-3 py-2">{{ $s->created_at?->format('d.m.Y H:i') }}</td>
                                    <td class="px-3 py-2">{{ $s->item?->name_ru ?? '—' }}</td>
                                    <td class="px-3 py-2">{{ $s->amount }}</td>
                                    <td class="px-3 py-2">{{ number_format((float) $s->price, 2, ',', ' ') }} ₽</td>
                                    <td class="px-3 py-2">{{ $s->server }}</td>
                                </tr>
                            @empty
                                <tr><td colspan="5" class="px-3 py-2 text-gray-500">Покупок нет.</td></tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 class="text-lg font-semibold mb-2">Открытия кейсов</h2>
                <div class="rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
                    <table class="min-w-full text-sm">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th class="text-left px-3 py-2">Дата</th>
                                <th class="text-left px-3 py-2">Кейс</th>
                                <th class="text-left px-3 py-2">Item ID</th>
                                <th class="text-left px-3 py-2">Кол-во</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($this->getCaseOpens() as $c)
                                <tr class="border-t border-gray-200 dark:border-gray-700">
                                    <td class="px-3 py-2">{{ $c->date?->format('d.m.Y H:i') }}</td>
                                    <td class="px-3 py-2">{{ $c->case?->title_ru ?? '—' }}</td>
                                    <td class="px-3 py-2">{{ $c->item_id }}</td>
                                    <td class="px-3 py-2">{{ $c->item_amount }}</td>
                                </tr>
                            @empty
                                <tr><td colspan="4" class="px-3 py-2 text-gray-500">Открытий нет.</td></tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 class="text-lg font-semibold mb-2">Записи из admin.log</h2>
                <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-950 text-gray-100 font-mono text-xs leading-5 p-4 overflow-x-auto max-h-96 overflow-y-auto">
                    @php($lines = $this->getAdminLogTail())
                    @if (empty($lines))
                        <em class="text-gray-500">Совпадений в логе нет.</em>
                    @else
                        @foreach ($lines as $line)
                            <div class="whitespace-pre-wrap break-all">{{ $line }}</div>
                        @endforeach
                    @endif
                </div>
            </div>
        </div>
    @endif
</x-filament-panels::page>
