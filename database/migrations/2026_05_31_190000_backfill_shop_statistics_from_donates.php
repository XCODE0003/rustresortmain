<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Бэкофилл статистики магазина из истории покупок (donates).
 *
 * «Статистика магазина» (shop_statistics) начала писаться только с фикса
 * d6e8b521 — всё, что было куплено ДО этого (в т.ч. перенесённая история
 * старого магаза), в таблице отсутствует. Но КАЖДАЯ покупка создаёт строку в
 * `donates`, и она маппится в статистику один-в-один (см. ShopController@buyWithBalance):
 *   item_id ← donates.item_id, set_id ← donates.set_id, amount ← donates.count,
 *   price ← donates.amount (полная сумма), server/user_id/steam_id/created_at — как есть.
 *
 * Поэтому восстанавливаем недостающий «хвост» истории из donates.
 *
 * Идемпотентность: заполняем только покупки СТАРШЕ самой ранней уже записанной
 * статистики (cutoff). Всё от cutoff и новее уже пишется живым кодом. Повторный
 * запуск безопасен — после первого прохода min(created_at) опускается до даты
 * самой старой покупки, и условие `< cutoff` больше ничего не выбирает (дублей нет).
 * INSERT ... SELECT читает только donates+users (не саму shop_statistics), поэтому
 * нет ошибки MySQL 1093 «target table specified twice».
 */
return new class extends Migration
{
    public function up(): void
    {
        // Граница: с какого момента статистика уже ведётся живым кодом.
        $cutoff = DB::table('shop_statistics')->min('created_at');

        $source = DB::table('donates as d')
            // INNER JOIN гарантирует существование пользователя (FK user_id -> users).
            ->join('users as u', 'u.id', '=', 'd.user_id')
            ->where('d.status', 1)
            ->where(function ($q) {
                $q->where('d.item_id', '>', 0)->orWhere('d.set_id', '>', 0);
            })
            ->selectRaw('NULLIF(d.item_id, 0) as item_id')
            ->selectRaw('NULLIF(d.set_id, 0) as set_id')
            ->selectRaw('NULL as case_id')
            // CASE вместо GREATEST — портируемо между MySQL и SQLite (тесты на sqlite).
            ->selectRaw('CASE WHEN COALESCE(d.count, 1) < 1 THEN 1 ELSE COALESCE(d.count, 1) END as amount')
            ->selectRaw('d.amount as price')
            ->selectRaw('d.server as server')
            ->selectRaw('d.user_id as user_id')
            ->selectRaw('d.steam_id as steam_id')
            ->selectRaw('d.created_at as created_at')
            ->selectRaw('d.updated_at as updated_at');

        if ($cutoff !== null) {
            $source->where('d.created_at', '<', $cutoff);
        }

        DB::table('shop_statistics')->insertUsing(
            ['item_id', 'set_id', 'case_id', 'amount', 'price', 'server', 'user_id', 'steam_id', 'created_at', 'updated_at'],
            $source,
        );
    }

    /**
     * Бэкофилл данных необратим автоматически: отличить восстановленные строки от
     * записанных живым кодом без отдельной метки нельзя, а удаление наугад снесло бы
     * легитимную статистику. Откат оставлен пустым намеренно.
     */
    public function down(): void
    {
        // no-op
    }
};
