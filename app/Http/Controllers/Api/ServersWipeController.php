<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Server;
use App\Services\WipeScheduleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

/**
 * Приём даты вайпа и сервисные эндпоинты от Rust-плагина (порт).
 */
class ServersWipeController extends Controller
{
    public function __construct(private readonly WipeScheduleService $wipeScheduleService) {}

    public function setLastWipeDate(Request $request): JsonResponse
    {
        $payload = json_decode((string) @file_get_contents('php://input'), true);
        if (! is_array($payload)) {
            $payload = $request->all();
        }

        if (($payload['api_key'] ?? null) !== config('options.game_api_key', '')) {
            return response()->json(['status' => 'error', 'msg' => 'API key is invalid.'], 403);
        }
        if (empty($payload['server'])) {
            return response()->json(['status' => 'error', 'msg' => 'server is missed'], 422);
        }
        if (empty($payload['wipe'])) {
            return response()->json(['status' => 'error', 'msg' => 'wipe is missed'], 422);
        }

        $server = null;
        foreach (getservers() as $s) {
            if ($s->name === $payload['server']) {
                $server = Server::find($s->id);
                break;
            }
        }
        if (! $server) {
            return response()->json(['status' => 'error', 'msg' => 'server not found'], 404);
        }

        // Дата вайпа от плагина — источник правды для last_wipe.
        // next_wipe пересчитываем по расписанию сервера (wipe_schedule_*).
        $server->wipe = date('Y-m-d H:i:s', strtotime((string) $payload['wipe']));
        $schedule = $this->wipeScheduleService->calculate($server);
        $server->next_wipe = $schedule['next_wipe'] ?? $server->next_wipe;
        $server->save();

        Cache::forget('servers');

        Log::channel('api')->info("Wipe set: server {$server->name}, wipe {$server->wipe}, next {$server->next_wipe}");

        return response()->json(['status' => 'success', 'server' => $server->only(['id', 'name', 'wipe', 'next_wipe'])]);
    }

    public function forgetCacheOnline(Request $request): JsonResponse
    {
        if (($request->input('api_key') ?? null) !== config('options.game_api_key', '')) {
            return response()->json(['status' => 'error', 'msg' => 'API key is invalid.'], 403);
        }

        Cache::forget('servers');

        return response()->json(['status' => 'success', 'msg' => 'online updates every minute via schedule']);
    }

    public function refreshStatus(Request $request): string
    {
        if ($request->input('token') !== 'ZFghyxDL71z94WgY') {
            return 'error';
        }

        Cache::forget('servers');

        return 'OK';
    }
}
