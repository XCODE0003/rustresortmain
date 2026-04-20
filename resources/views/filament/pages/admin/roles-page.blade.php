<x-filament-panels::page>
    @php
        $roles  = $this->getRoles();
        $counts = $this->getRoleCounts();

        $colorMap = [
            'red'  => ['bg' => 'bg-red-50 dark:bg-red-950/20', 'ring' => 'ring-red-200 dark:ring-red-800', 'badge' => 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300', 'dot' => 'bg-red-500'],
            'blue' => ['bg' => 'bg-blue-50 dark:bg-blue-950/20', 'ring' => 'ring-blue-200 dark:ring-blue-800', 'badge' => 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', 'dot' => 'bg-blue-500'],
            'gray' => ['bg' => 'bg-gray-50 dark:bg-gray-900', 'ring' => 'ring-gray-200 dark:ring-gray-700', 'badge' => 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400', 'dot' => 'bg-gray-400'],
        ];
    @endphp

    {{-- ── Карточки ролей ───────────────────────────────────────── --}}
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
        @foreach($roles as $role)
            @php $c = $colorMap[$role['color']]; @endphp
            <div class="rounded-xl ring-1 p-5 {{ $c['bg'] }} {{ $c['ring'] }}">
                {{-- Заголовок --}}
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <x-filament::icon :icon="$role['icon']" class="w-5 h-5 {{ $c['dot'] === 'bg-red-500' ? 'text-red-500' : ($c['dot'] === 'bg-blue-500' ? 'text-blue-500' : 'text-gray-400') }}" />
                        <span class="font-semibold text-gray-900 dark:text-white">{{ $role['label'] }}</span>
                    </div>
                    <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold {{ $c['badge'] }}">
                        {{ $counts[$role['key']] ?? 0 }} чел.
                    </span>
                </div>

                {{-- Описание --}}
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ $role['description'] }}</p>

                {{-- Права --}}
                <ul class="space-y-1.5">
                    @foreach($role['permissions'] as $perm)
                        @php $isNo = str_starts_with($perm, 'Нет доступа'); @endphp
                        <li class="flex items-start gap-2 text-xs {{ $isNo ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300' }}">
                            <span class="mt-0.5 shrink-0 {{ $isNo ? 'text-gray-300 dark:text-gray-600' : ($c['dot'] === 'bg-red-500' ? 'text-red-400' : ($c['dot'] === 'bg-blue-500' ? 'text-blue-400' : 'text-gray-400')) }}">
                                @if($isNo) ✕ @else ✓ @endif
                            </span>
                            {{ $perm }}
                        </li>
                    @endforeach
                </ul>
            </div>
        @endforeach
    </div>

    {{-- ── Управление ролями пользователей ────────────────────── --}}
    <div class="rounded-xl bg-white ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10">
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800">
            <p class="font-semibold text-gray-900 dark:text-white">Администраторы и модераторы</p>
            <a
                href="{{ route('filament.admin.resources.users.index') }}"
                class="text-xs text-primary-600 dark:text-primary-400 hover:underline"
            >
                Все пользователи →
            </a>
        </div>

        @php
            $staffUsers = \App\Models\User::whereIn('role', ['admin', 'moderator'])
                ->orderByRaw("FIELD(role, 'admin', 'moderator')")
                ->orderBy('name')
                ->get(['id', 'name', 'email', 'steam_id', 'role']);
        @endphp

        @forelse($staffUsers as $u)
            @php
                $isCurrentUser = $u->id === auth()->id();
                $rColor = $u->role === 'admin' ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400';
            @endphp
            <div class="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-50 dark:border-gray-800/50 last:border-0">
                {{-- Аватар --}}
                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 shrink-0">
                    {{ mb_strtoupper(mb_substr($u->name, 0, 1)) }}
                </div>

                {{-- Инфо --}}
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {{ $u->name }}
                        @if($isCurrentUser)
                            <span class="ml-1 text-xs text-gray-400">(вы)</span>
                        @endif
                    </p>
                    <p class="text-xs text-gray-500 truncate">{{ $u->email }}</p>
                </div>

                {{-- Роль badge --}}
                <span class="text-xs font-semibold {{ $rColor }} shrink-0">
                    {{ $u->role === 'admin' ? 'Администратор' : 'Модератор' }}
                </span>

                {{-- Смена роли --}}
                @if(! $isCurrentUser)
                    <div class="flex gap-1 shrink-0">
                        @if($u->role !== 'admin')
                            <button
                                wire:click="changeRole({{ $u->id }}, 'admin')"
                                wire:confirm="Назначить {{ $u->name }} администратором?"
                                class="rounded px-2 py-1 text-xs bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50 transition"
                            >→ Admin</button>
                        @endif
                        @if($u->role !== 'moderator')
                            <button
                                wire:click="changeRole({{ $u->id }}, 'moderator')"
                                wire:confirm="Назначить {{ $u->name }} модератором?"
                                class="rounded px-2 py-1 text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition"
                            >→ Mod</button>
                        @endif
                        <button
                            wire:click="changeRole({{ $u->id }}, 'user')"
                            wire:confirm="Разжаловать {{ $u->name }} до обычного пользователя?"
                            class="rounded px-2 py-1 text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition"
                        >→ User</button>
                    </div>
                @endif
            </div>
        @empty
            <p class="px-5 py-4 text-sm text-gray-400">Нет администраторов или модераторов</p>
        @endforelse
    </div>
</x-filament-panels::page>
