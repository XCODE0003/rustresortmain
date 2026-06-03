<?php

namespace App\Services\RustApp;

use App\Models\Ban;
use Illuminate\Support\Carbon;

/**
 * Зеркалит баны RustApp (court.rustapp.io) в локальную таблицу bans.
 *
 * Особенности RustApp API, под которые подстроена стратегия:
 *  - страница капится на 200 записей;
 *  - сортировка только created DESC (asc не поддерживается), id не монотонны (бан-группы);
 *  - офсетная пагинация деградирует на глубоких страницах (секунды на страницу) → полный
 *    проход дорогой и хрупкий.
 *
 * Поэтому два режима:
 *  - syncRecent(): джоба каждые 3 минуты. Тянет только свежие страницы, пока не упрётся в уже
 *    известные баны (в установившемся режиме 1–2 страницы). Ловит новые баны и недавние снятия.
 *    Плюс локально гасит истёкшие временные баны (без обращения к API).
 *  - reconcile(): полная сверка (раз в час / на деплое). Проходит весь активный список и переводит
 *    «пропавшие» баны (снятые/истёкшие) в историю (is_active=false). Записи не удаляются никогда.
 */
class BanSyncService
{
    /** RustApp капит размер страницы на 200. */
    private const PAGE_LIMIT = 200;

    /** Предохранитель для полного прохода. */
    private const MAX_PAGES = 150;

    /** Сколько свежих страниц максимум тянет инкрементальный прогон. */
    private const RECENT_MAX_PAGES = 12;

    /** Запись пачками. */
    private const UPSERT_CHUNK = 500;

    public function __construct(private readonly BansService $bans) {}

    /**
     * Инкрементальная синхронизация (джоба каждые 3 минуты).
     *
     * @return array{fetched:int, expired:int, caught_up:bool, complete:bool}
     */
    public function syncRecent(): array
    {
        $runStart = Carbon::now();
        $rows = [];
        $caughtUp = false;
        $complete = true;

        for ($page = 0; $page < self::RECENT_MAX_PAGES; $page++) {
            // Без exclude_stale: свежие страницы включают недавние снятия (computed_is_active=false).
            $data = $this->bans->getBans([
                'page' => $page,
                'limit' => self::PAGE_LIMIT,
                'sort_by' => 'created',
            ]);

            if (! ($data['success'] ?? false)) {
                $complete = false;
                break;
            }

            $results = $data['results'] ?? [];
            if ($results === []) {
                $caughtUp = true;
                break;
            }

            $ids = array_values(array_unique(array_map(fn ($b) => (int) ($b['id'] ?? 0), $results)));
            foreach ($results as $ban) {
                $rows[] = $this->mapRow($ban, $runStart);
            }

            // Вся страница уже есть локально → новых банов выше нет, догнали.
            if (Ban::whereIn('rustapp_id', $ids)->count() === count($ids)) {
                $caughtUp = true;
                break;
            }

            // Достигли конца списка (маленький датасет).
            if (count($results) < self::PAGE_LIMIT) {
                $caughtUp = true;
                break;
            }
        }

        $this->upsert($rows);
        $expired = $this->expireOverdue($runStart);

        return [
            'fetched' => count($rows),
            'expired' => $expired,
            'caught_up' => $caughtUp,
            'complete' => $complete,
        ];
    }

    /**
     * Полная сверка активного списка с переводом пропавших банов в историю.
     *
     * @return array{fetched:int, demoted:int, expired:int, complete:bool}
     */
    public function reconcile(): array
    {
        $runStart = Carbon::now();
        $rows = [];
        $complete = false;

        for ($page = 0; $page < self::MAX_PAGES; $page++) {
            $data = $this->bans->getBans([
                'page' => $page,
                'limit' => self::PAGE_LIMIT,
                'exclude_stale' => true,
                'sort_by' => 'created',
            ]);

            if (! ($data['success'] ?? false)) {
                // Неполные данные: сохраняем собранное, но НЕ демоутим (иначе ложно «разбаним»).
                $this->upsert($rows);

                return ['fetched' => count($rows), 'demoted' => 0, 'expired' => 0, 'complete' => false];
            }

            $results = $data['results'] ?? [];
            foreach ($results as $ban) {
                $rows[] = $this->mapRow($ban, $runStart);
            }

            if (count($results) < self::PAGE_LIMIT) {
                $complete = true;
                break;
            }
        }

        $this->upsert($rows);

        // Активные локально, но не встретившиеся в этом полном проходе → сняты/истекли → в историю.
        $demoted = Ban::query()
            ->where('is_active', true)
            ->where(function ($q) use ($runStart) {
                $q->whereNull('last_seen_at')->orWhere('last_seen_at', '<', $runStart);
            })
            ->update(['is_active' => false]);

        $expired = $this->expireOverdue($runStart);

        return ['fetched' => count($rows), 'demoted' => $demoted, 'expired' => $expired, 'complete' => true];
    }

    /**
     * Локально гасит истёкшие временные баны без обращения к API.
     */
    private function expireOverdue(Carbon $now): int
    {
        return Ban::query()
            ->where('is_active', true)
            ->where('expires_at', '>', 0)
            ->where('expires_at', '<=', $now->getTimestamp())
            ->update(['is_active' => false]);
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    private function upsert(array $rows): void
    {
        foreach (array_chunk($rows, self::UPSERT_CHUNK) as $chunk) {
            Ban::upsert(
                $chunk,
                ['rustapp_id'],
                [
                    'steam_id', 'steam_name', 'steam_avatar', 'reason', 'server_ids',
                    'banned_at', 'expires_at', 'is_active', 'ban_group_uuid',
                    'last_seen_at', 'updated_at',
                ],
            );
        }
    }

    /**
     * @param  array<string, mixed>  $ban
     * @return array<string, mixed>
     */
    private function mapRow(array $ban, Carbon $runStart): array
    {
        $player = is_array($ban['player'] ?? null) ? $ban['player'] : [];
        $serverIds = array_values(array_map('intval', is_array($ban['server_ids'] ?? null) ? $ban['server_ids'] : []));
        $bannedAt = $this->toUnixSeconds($ban['created_at'] ?? null);

        return [
            'rustapp_id' => (int) ($ban['id'] ?? 0),
            'steam_id' => (string) ($ban['steam_id'] ?? ''),
            'steam_name' => $player['steam_name'] ?? null,
            'steam_avatar' => $player['steam_avatar'] ?? null,
            'reason' => $ban['reason'] ?? null,
            'server_ids' => json_encode($serverIds),
            'banned_at' => $bannedAt > 0 ? $bannedAt : null,
            'expires_at' => $this->toUnixSeconds($ban['expired_at'] ?? 0),
            'is_active' => (bool) ($ban['computed_is_active'] ?? true),
            'ban_group_uuid' => $ban['ban_group_uuid'] ?? null,
            'last_seen_at' => $runStart,
            'created_at' => $runStart,
            'updated_at' => $runStart,
        ];
    }

    /**
     * RustApp отдаёт временные метки в МИЛЛИСЕКУНДАХ (например 1780462427954) → UNIX-секунды.
     * Защитно: значение, уже пришедшее в секундах, пропускаем как есть
     * (секундный timestamp не дорастёт до 1e11 раньше ~5138 года).
     */
    private function toUnixSeconds(mixed $value): int
    {
        $n = (int) $value;

        if ($n <= 0) {
            return 0;
        }

        return $n >= 100_000_000_000 ? intdiv($n, 1000) : $n;
    }
}
