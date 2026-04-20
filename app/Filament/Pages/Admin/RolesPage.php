<?php

namespace App\Filament\Pages\Admin;

use App\Models\User;
use BackedEnum;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class RolesPage extends Page
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedShieldCheck;

    protected static ?string $navigationLabel = 'Роли и доступы';

    protected static \UnitEnum|string|null $navigationGroup = 'Пользователи';

    protected static ?int $navigationSort = 2;

    protected string $view = 'filament.pages.admin.roles-page';

    public static function canAccess(): bool
    {
        return auth()->user()?->isAdmin() ?? false;
    }

    public function getRoleCounts(): array
    {
        $counts = User::selectRaw('role, COUNT(*) as count')
            ->groupBy('role')
            ->pluck('count', 'role')
            ->toArray();

        return [
            'admin'     => (int) ($counts['admin'] ?? 0),
            'moderator' => (int) ($counts['moderator'] ?? 0),
            'user'      => (int) ($counts['user'] ?? 0),
            'other'     => (int) array_sum(array_filter(
                $counts,
                fn ($k) => ! in_array($k, ['admin', 'moderator', 'user']),
                ARRAY_FILTER_USE_KEY
            )),
        ];
    }

    public function getRoles(): array
    {
        return [
            [
                'key'         => 'admin',
                'label'       => 'Администратор',
                'color'       => 'red',
                'icon'        => 'heroicon-o-shield-exclamation',
                'description' => 'Полный доступ ко всем разделам панели.',
                'permissions' => [
                    'Все разделы: финансы, магазин, серверы',
                    'Управление пользователями (создание, удаление, изменение роли и баланса)',
                    'Все настройки сайта',
                    'Платёжные шлюзы и промокоды',
                    'Статистика и аналитика',
                    'Баны, контент, тикеты',
                    'RconTasks и управление серверами',
                ],
            ],
            [
                'key'         => 'moderator',
                'label'       => 'Модератор',
                'color'       => 'blue',
                'icon'        => 'heroicon-o-shield-check',
                'description' => 'Управление игроками и контентом. Нет доступа к финансам и настройкам.',
                'permissions' => [
                    'Просмотр пользователей, выдача мута',
                    'Управление банами (выдача и снятие)',
                    'Тикеты поддержки (просмотр и ответ)',
                    'Статьи, гайды, FAQ (создание и редактирование)',
                    'Нет доступа: финансы, магазин, серверы, настройки',
                ],
            ],
            [
                'key'         => 'user',
                'label'       => 'Пользователь',
                'color'       => 'gray',
                'icon'        => 'heroicon-o-user',
                'description' => 'Обычный пользователь сайта. Доступ к панели администратора закрыт.',
                'permissions' => [
                    'Доступ к сайту (магазин, профиль)',
                    'Нет доступа к панели администратора',
                ],
            ],
        ];
    }

    public function changeRole(int $userId, string $newRole): void
    {
        $allowed = ['admin', 'moderator', 'user'];
        if (! in_array($newRole, $allowed)) {
            return;
        }

        $user = User::find($userId);
        if (! $user) {
            return;
        }

        if ($user->id === auth()->id()) {
            Notification::make()
                ->title('Нельзя изменить свою роль')
                ->warning()
                ->send();

            return;
        }

        $user->update(['role' => $newRole]);

        Notification::make()
            ->title('Роль изменена: ' . $user->name . ' → ' . $newRole)
            ->success()
            ->send();
    }
}
