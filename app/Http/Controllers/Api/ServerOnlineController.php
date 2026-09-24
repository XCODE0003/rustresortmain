<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

/**
 * Публичный онлайн серверов для виджетов, лендинга и внешних интеграций.
 *
 * GET /api/server/online            — сумма по всем активным серверам
 * GET /api/server/online?server=ID  — счётчики одного сервера
 *                                     (алиасы: ?server_id=ID, ?id=ID)
 *
 * Данные берутся из servers.options (online_players / queue_players /
 * max_players), которые раз в минуту обновляет SyncOnlinePlayersJob по RCON.
 * Секреты из options наружу не уходят — читаем только три числовых ключа.
 *
 * Выключенные серверы (status !== 1) не видны ни в сумме, ни по прямому ID.
 * Ошибки отдаём тем же конвертом {status, msg}, что и остальные Api-контроллеры.
 */
class ServerOnlineController extends Controller
{
    public function show(Request $request): JsonResponse
    {
        $validator = Validator::make($request->query(), [
            'server' => ['nullable', 'integer', 'min:1'],
            'server_id' => ['nullable', 'integer', 'min:1'],
            'id' => ['nullable', 'integer', 'min:1'],
        ], [
            // Без явных сообщений наружу уходит сырой ключ "validation.integer":
            // в lang/ru нет validation.php, а APP_LOCALE на проде = ru.
            '*.integer' => 'server must be a positive integer',
            '*.min' => 'server must be a positive integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'msg' => $validator->errors()->first(),
            ], 422);
        }

        $validated = $validator->validated();
        // Три написания одного и того же параметра: интеграторы шлют кто ?server,
        // кто ?id. Неизвестный параметр раньше молча игнорировался и в ответ
        // уходила сумма по всем серверам — выглядело как "ID не работает".
        $serverId = $validated['server'] ?? $validated['server_id'] ?? $validated['id'] ?? null;

        // Только активные серверы: выключенный сервер публично не существует.
        $query = Server::query()->select(['id', 'options'])->where('status', 1);

        if ($serverId !== null) {
            $server = $query->where('id', $serverId)->first();

            if ($server === null) {
                return response()->json([
                    'status' => 'error',
                    'msg' => 'server not found',
                ], 404);
            }

            return response()->json($this->counters([$server]));
        }

        $servers = $query->get()->all();

        return response()->json($this->counters($servers));
    }

    /**
     * Суммирует счётчики по списку серверов.
     *
     * @param  list<Server>  $servers
     * @return array{currentplayer: int, queueplayers: int, maxplayers: int}
     */
    private function counters(array $servers): array
    {
        $current = 0;
        $queue = 0;
        $max = 0;

        foreach ($servers as $server) {
            $options = is_array($server->options) ? $server->options : [];

            // Если плагин ещё не присылал данные — считаем 0, а не выдуманный лимит.
            $current += max(0, (int) ($options['online_players'] ?? 0));
            $queue += max(0, (int) ($options['queue_players'] ?? 0));
            $max += max(0, (int) ($options['max_players'] ?? 0));
        }

        return [
            'currentplayer' => $current,
            'queueplayers' => $queue,
            'maxplayers' => $max,
        ];
    }
}
