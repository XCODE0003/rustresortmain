<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ClearStatistic;
use App\Models\Statistic;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Снимок статистики в clear_statistics (порт из старого проекта).
 * Раскладывает ресурсы/рейды по отдельным колонкам для удобного отображения.
 * Вызывается плагином/по расписанию при вайпе.
 */
class ClearStatisticsController extends Controller
{
    public function clearStatistics(Request $request): JsonResponse
    {
        if (($request->input('api_key') ?? null) !== config('options.game_api_key', '')) {
            return response()->json(['status' => 'error', 'msg' => 'API key is invalid.'], 403);
        }

        foreach (getservers() as $server) {
            Statistic::where('server', $server->id)->chunk(50, function ($statistics) use ($server) {
                foreach ($statistics as $s) {
                    $resource = (array) $s->resourse_list;
                    $raid = $this->groupRaids((array) $s->raid_list);

                    $kdr = (int) $s->deaths > 0 ? round((int) $s->kills / (int) $s->deaths, 2) : 0;
                    $hitsKdr = (int) $s->shoots > 0 ? round((int) $s->hits / (int) $s->shoots, 2) : 0;

                    ClearStatistic::updateOrInsert(
                        [
                            'general' => $s->general,
                            'server' => $s->server,
                            'player_id' => $s->player_id,
                            'date' => $s->date instanceof \DateTimeInterface ? $s->date->format('Y-m-d') : $s->date,
                        ],
                        [
                            'name' => $s->name,
                            'user_id' => $s->user_id,
                            'is_npc' => $s->is_npc,
                            'deaths' => $s->deaths,
                            'kills' => $s->kills,
                            'deaths_player' => $s->deaths_player,
                            'head_shots' => $s->head_shots,
                            'hits' => $s->hits,
                            'shoots' => $s->shoots,
                            'kdr' => $kdr,
                            'hits_kdr' => $hitsKdr,
                            'wood' => $resource['wood'] ?? 0,
                            'stones' => $resource['stones'] ?? 0,
                            'metal_ore' => $resource['metal.ore'] ?? 0,
                            'sulfur_ore' => $resource['sulfur.ore'] ?? 0,
                            'hq_metal_ore' => $resource['hq.metal.ore'] ?? 0,
                            'leather' => $resource['leather'] ?? 0,
                            'fat_animal' => $resource['fat.animal'] ?? 0,
                            'bone_fragments' => $resource['bone.fragments'] ?? 0,
                            'cloth' => $resource['cloth'] ?? 0,
                            'd_garage' => $raid['гаражная дверь'] ?? 0,
                            'd_wooden' => $raid['деревянная дверь'] ?? 0,
                            'd_metal' => $raid['металлическая дверь'] ?? 0,
                            'd_d_metal' => $raid['двойная металлическая дверь'] ?? 0,
                            'd_d_wooden' => $raid['двойная деревянная дверь'] ?? 0,
                            'd_d_armored' => $raid['двойная бронированная дверь'] ?? 0,
                            'd_armored' => $raid['бронированная дверь'] ?? 0,
                            'bb_wooden' => $raid['деревянные'] ?? 0,
                            'bb_stone' => $raid['каменные'] ?? 0,
                            'bb_metal' => $raid['металлические'] ?? 0,
                            'bb_mvk' => $raid['мвк'] ?? 0,
                            'bb_reinf_w_glass' => $raid['окно из укреплённого стекла'] ?? 0,
                            'bb_auto_turret' => $raid['автоматическая турель'] ?? 0,
                            'bb_reinf_w_grilles' => $raid['укреплённые оконные решётки'] ?? 0,
                        ]
                    );
                }
            });
        }

        return response()->json(['status' => 'success', 'msg' => 'ok']);
    }

    /**
     * Группирует рейд-лист по категориям построек (порт collectListraide).
     *
     * @param  array<string,mixed>  $raid
     * @return array<string,int>
     */
    private function groupRaids(array $raid): array
    {
        $out = ['деревянные' => 0, 'каменные' => 0, 'металлические' => 0, 'мвк' => 0];

        foreach ($raid as $name => $value) {
            $name = mb_strtolower((string) $name);
            $value = (int) $value;

            if (str_contains($name, 'метал') && ! str_contains($name, 'двер')) {
                $out['металлические'] += $value;
            } elseif (str_contains($name, 'камен')) {
                $out['каменные'] += $value;
            } elseif (str_contains($name, 'деревян') && ! str_contains($name, 'двер')) {
                $out['деревянные'] += $value;
            } elseif (str_contains($name, 'мвк') && ! str_contains($name, 'двер')) {
                $out['мвк'] += $value;
            } elseif (str_contains($name, 'укреплённые оконные решётки')) {
                $out['укреплённые оконные решётки'] = $value;
            } elseif (str_contains($name, 'автоматическая турель')) {
                $out['автоматическая турель'] = $value;
            } elseif (str_contains($name, 'окно из укреплённого стекла')) {
                $out['окно из укреплённого стекла'] = $value;
            } elseif (str_contains($name, 'двер')) {
                $out[$name] = $value;
            }
        }

        return $out;
    }
}
