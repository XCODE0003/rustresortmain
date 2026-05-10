<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    public function run(): void
    {
        $allKeys = Role::allPermissionKeys();

        $roles = [
            [
                'slug' => 'admin',
                'name' => 'Администратор',
                'description' => 'Полный доступ ко всему',
                'color' => 'danger',
                'permissions' => ['*'],
                'is_system' => true,
                'sort' => 1,
            ],
            [
                'slug' => 'moderator',
                'name' => 'Модератор',
                'description' => 'Управление пользователями и контентом',
                'color' => 'warning',
                'permissions' => array_values(array_filter($allKeys, fn ($k) => str_starts_with($k, 'users.')
                    || str_starts_with($k, 'tickets.')
                    || str_starts_with($k, 'content.')
                    || $k === 'logs.user')),
                'is_system' => true,
                'sort' => 2,
            ],
            [
                'slug' => 'support',
                'name' => 'Поддержка',
                'description' => 'Тикеты и заявки на вывод',
                'color' => 'info',
                'permissions' => [
                    'users.view',
                    'tickets.view', 'tickets.answer', 'tickets.close',
                    'delivery.view', 'delivery.process',
                    'logs.user',
                ],
                'is_system' => true,
                'sort' => 3,
            ],
            [
                'slug' => 'investor',
                'name' => 'Инвестор',
                'description' => 'Только просмотр статистики и логов',
                'color' => 'success',
                'permissions' => [
                    'users.view',
                    'payments.view',
                    'logs.payments', 'logs.shop', 'logs.visits',
                    'logs.registrations', 'logs.items',
                    'servers.status',
                ],
                'is_system' => true,
                'sort' => 4,
            ],
            [
                'slug' => 'user',
                'name' => 'Пользователь',
                'description' => 'Обычный игрок без доступа к админке',
                'color' => 'gray',
                'permissions' => [],
                'is_system' => true,
                'sort' => 99,
            ],
        ];

        foreach ($roles as $role) {
            Role::updateOrCreate(['slug' => $role['slug']], $role);
        }
    }
}
