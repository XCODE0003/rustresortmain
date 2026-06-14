<?php

namespace App\Jobs;

use App\Models\Statistic;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

/**
 * Обрабатывает и сохраняет игровую статистику игроков с одного сервера.
 *
 * Порт из старого проекта (ServersStatisticsController::processStatistics).
 * Раньше приём и обработка были разнесены через curl-сам-в-себя (fire-and-forget),
 * чтобы быстро ответить плагину. Тут вместо этого — очередь: контроллер только
 * валидирует и кладёт джоб, обработка идёт асинхронно.
 */
class ProcessServerStatisticsJob implements ShouldQueue
{
    use Queueable;

    /**
     * @param  array<string,mixed>  $data  player_id => данные игрока
     */
    public function __construct(
        public int $serverId,
        public string $serverName,
        public array $data,
    ) {
        $this->onQueue('default');
    }

    public function handle(): void
    {
        $today = date('Y-m-d');
        $dateOld = date('Y-m-d', strtotime('-30 days'));

        foreach ($this->data as $playerId => $player) {
            $player = (array) $player;
            $name = (string) ($player['Name'] ?? $playerId);

            // Обновляем имя пользователя на сайте, если он есть.
            $user = User::where('steam_id', (string) $playerId)->first();
            if ($user) {
                $user->name = $name;
                $user->save();
            }

            $death = (array) ($player['Death'] ?? []);
            $deathList = (array) ($death['DeathList'] ?? []);
            $killList = (array) ($death['KillList'] ?? []);

            // Смерти от игроков (в строке есть "ИГРОК").
            $deathsPlayer = 0;
            foreach ($deathList as $entry) {
                if (mb_stripos((string) $entry, 'ИГРОК') !== false) {
                    $deathsPlayer++;
                }
            }

            // Агрегируем рейд-лист по ObjName → количество.
            $raidReq = [];
            foreach ((array) ($player['RaidList'] ?? []) as $raid) {
                $objName = (string) (((array) $raid)['ObjName'] ?? '');
                if ($objName === '') {
                    continue;
                }
                $raidReq[$objName] = ($raidReq[$objName] ?? 0) + 1;
            }

            $resourceReq = (array) ($player['ResourseList'] ?? []);
            $headShots = (int) ($player['HeadShots'] ?? 0);
            $hits = (int) ($player['Hits'] ?? 0);
            $shoots = (int) ($player['Shoots'] ?? 0);
            $isNpc = (bool) ($player['IsNpc'] ?? false);
            $deaths = count($deathList);
            $kills = count($killList);

            // Чистим дневные записи старше 30 дней.
            Statistic::where('player_id', $playerId)->where('server', $this->serverId)
                ->where('general', 0)->where('date', '<', $dateOld)->delete();

            // Общая запись (general=1) — накапливаем.
            $this->upsert(1, $today, $playerId, $name, $user?->id, $this->serverId, [
                'resource' => $resourceReq, 'raid' => $raidReq,
                'deaths' => $deaths, 'kills' => $kills, 'deaths_player' => $deathsPlayer,
                'head_shots' => $headShots, 'hits' => $hits, 'shoots' => $shoots, 'is_npc' => $isNpc,
            ]);

            // Запись за сегодня (general=0, date=today) — накапливаем.
            $this->upsert(0, $today, $playerId, $name, $user?->id, $this->serverId, [
                'resource' => $resourceReq, 'raid' => $raidReq,
                'deaths' => $deaths, 'kills' => $kills, 'deaths_player' => $deathsPlayer,
                'head_shots' => $headShots, 'hits' => $hits, 'shoots' => $shoots, 'is_npc' => $isNpc,
            ]);
        }

        Log::channel('api')->info("Stats processed: server {$this->serverName} ({$this->serverId}), players: ".count($this->data));
    }

    /**
     * Создаёт или накапливает запись статистики.
     *
     * @param  array<string,mixed>  $d
     */
    private function upsert(int $general, string $today, string $playerId, string $name, ?int $userId, int $serverId, array $d): void
    {
        $query = Statistic::where('player_id', $playerId)->where('server', $serverId)->where('general', $general);
        if ($general === 0) {
            $query->where('date', $today);
        }
        $stat = $query->first();

        if (! $stat) {
            $stat = new Statistic;
            $stat->general = $general;
            $stat->date = $today;
            $stat->player_id = $playerId;
            $stat->server = $serverId;
            $stat->name = $name;
            $stat->user_id = $userId;
            $stat->resourse_list = $d['resource'];
            $stat->raid_list = $d['raid'];
            $stat->deaths = $d['deaths'];
            $stat->kills = $d['kills'];
            $stat->deaths_player = $d['deaths_player'];
            $stat->head_shots = $d['head_shots'];
            $stat->hits = $d['hits'];
            $stat->shoots = $d['shoots'];
            $stat->is_npc = $d['is_npc'];
            $stat->save();

            return;
        }

        $stat->name = $name;
        $stat->user_id = $userId ?? $stat->user_id;
        $stat->resourse_list = $this->mergeSum((array) $stat->resourse_list, $d['resource']);
        $stat->raid_list = $this->mergeSum((array) $stat->raid_list, $d['raid']);
        $stat->deaths += $d['deaths'];
        $stat->kills += $d['kills'];
        $stat->deaths_player += $d['deaths_player'];
        $stat->head_shots += $d['head_shots'];
        $stat->hits += $d['hits'];
        $stat->shoots += $d['shoots'];
        $stat->is_npc = $d['is_npc'];
        $stat->save();
    }

    /**
     * Суммирует два ассоциативных списка (ресурсы/рейды).
     *
     * @param  array<string,mixed>  $base
     * @param  array<string,mixed>  $add
     * @return array<string,int>
     */
    private function mergeSum(array $base, array $add): array
    {
        foreach ($add as $key => $value) {
            $base[$key] = (int) ($base[$key] ?? 0) + (int) $value;
        }

        return $base;
    }
}
