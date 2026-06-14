<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Jobs\ProcessServerStatisticsJob;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Приём игровой статистики от Rust-плагина (порт из старого проекта).
 * Плагин шлёт JSON: { api_key, server (имя), data: { steamid: {...} } }.
 */
class ServersStatisticsController extends Controller
{
    public function setStatistics(Request $request): JsonResponse
    {
        $payload = json_decode((string) @file_get_contents('php://input'), true);
        if (! is_array($payload)) {
            $payload = $request->all();
        }

        if (($payload['api_key'] ?? null) !== config('options.game_api_key', '')) {
            Log::channel('api')->warning('Stats setStatistics: invalid api_key');

            return response()->json(['status' => 'error', 'msg' => 'API key is invalid.'], 403);
        }

        $serverName = $payload['server'] ?? null;
        if (! $serverName) {
            return response()->json(['status' => 'error', 'msg' => 'server is missed'], 422);
        }

        $serverId = null;
        foreach (getservers() as $server) {
            if ($server->name === $serverName) {
                $serverId = (int) $server->id;
                break;
            }
        }
        if ($serverId === null) {
            return response()->json(['status' => 'error', 'msg' => 'server not found'], 404);
        }

        $data = $payload['data'] ?? null;
        if (! is_array($data) || empty($data)) {
            return response()->json(['status' => 'error', 'msg' => 'data not found'], 422);
        }

        // Обработка асинхронно — плагину отвечаем сразу.
        ProcessServerStatisticsJob::dispatch($serverId, (string) $serverName, $data);

        return response()->json(['status' => 'success', 'msg' => 'ok']);
    }
}
