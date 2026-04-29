<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'color',
        'permissions',
        'is_system',
        'sort',
    ];

    protected function casts(): array
    {
        return [
            'permissions' => 'array',
            'is_system' => 'boolean',
        ];
    }

    public static function permissionGroups(): array
    {
        return [
            'Пользователи' => [
                'users.view' => 'Просмотр пользователей',
                'users.edit' => 'Редактирование пользователей',
                'users.delete' => 'Удаление пользователей',
                'users.balance' => 'Управление балансом',
                'users.mute' => 'Мут/размут',
                'users.role_assign' => 'Назначение ролей',
                'users.warehouse' => 'Просмотр склада игрока',
            ],
            'Магазин' => [
                'shop.items.view' => 'Просмотр товаров',
                'shop.items.edit' => 'Редактирование товаров',
                'shop.categories.edit' => 'Управление категориями',
                'shop.sets.edit' => 'Управление сетами',
                'shop.coupons.edit' => 'Управление купонами',
            ],
            'Кейсы' => [
                'cases.view' => 'Просмотр кейсов',
                'cases.edit' => 'Редактирование кейсов',
                'cases.items' => 'Управление предметами кейсов',
                'cases.bonuses_issue' => 'Выдача выигрышей',
            ],
            'Промокоды' => [
                'promocodes.view' => 'Просмотр промокодов',
                'promocodes.edit' => 'Редактирование промокодов',
                'promocodes.generate' => 'Массовая генерация',
            ],
            'Платежи' => [
                'payments.view' => 'Просмотр платежей',
                'payments.gateways' => 'Настройка платёжек',
                'payments.refund' => 'Возврат платежей',
            ],
            'Поддержка' => [
                'tickets.view' => 'Просмотр тикетов',
                'tickets.answer' => 'Ответ на тикеты',
                'tickets.close' => 'Закрытие тикетов',
                'delivery.view' => 'Просмотр заявок на вывод',
                'delivery.process' => 'Обработка заявок на вывод',
            ],
            'Серверы' => [
                'servers.view' => 'Просмотр серверов',
                'servers.edit' => 'Редактирование серверов',
                'servers.categories' => 'Управление категориями серверов',
                'servers.status' => 'Просмотр онлайн-статуса',
            ],
            'Контент' => [
                'content.articles' => 'Управление новостями',
                'content.guides' => 'Управление гайдами',
                'content.faq' => 'Управление FAQ',
                'content.legal' => 'Управление правовыми страницами',
                'content.banners' => 'Управление баннерами',
                'content.streams' => 'Управление стримами',
            ],
            'Логи и статистика' => [
                'logs.payments' => 'Логи платежей',
                'logs.shop' => 'Логи магазина',
                'logs.visits' => 'Логи посещений',
                'logs.registrations' => 'Логи регистраций',
                'logs.admin' => 'Админ-логи',
                'logs.errors' => 'Ошибки сервера',
                'logs.user' => 'Логи по юзеру',
                'logs.items' => 'Статистика по предметам',
            ],
            'Настройки' => [
                'settings.general' => 'Общие настройки',
                'settings.seo' => 'SEO и аналитика',
                'settings.content' => 'Настройки контента',
                'settings.communications' => 'Связь (SMTP/SMS/соцсети)',
                'settings.payments' => 'Настройки платежей',
                'settings.api' => 'API интеграции',
                'settings.auth' => 'Настройки авторизации',
                'settings.currency' => 'Курсы валют',
            ],
            'Роли и доступы' => [
                'roles.view' => 'Просмотр ролей',
                'roles.edit' => 'Создание/редактирование ролей',
                'roles.delete' => 'Удаление ролей',
            ],
        ];
    }

    public static function allPermissionKeys(): array
    {
        $keys = [];
        foreach (self::permissionGroups() as $perms) {
            $keys = array_merge($keys, array_keys($perms));
        }

        return $keys;
    }

    public function hasPermission(string $key): bool
    {
        if (in_array('*', $this->permissions ?? [], true)) {
            return true;
        }

        return in_array($key, $this->permissions ?? [], true);
    }
}
