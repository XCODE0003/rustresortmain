<?php

namespace App\Jobs;

use App\Models\Server;
use App\Services\GameServer\RustServerPlayerCountService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class SyncOnlinePlayersJob implements ShouldQueue
{
    use Queueable;

    public function handle(RustServerPlayerCountService $playerCountService): void
    {
        $servers = Server::where('status', 1)->get();

        foreach ($servers as $server) {
            try {
                $counts = $playerCountService->syncFromRcon($server);

                if ($counts === null) {
                    continue;
                }

                $options = $server->options ?? [];
                $options['online_players'] = $counts['online'];
                $options['max_players'] = $counts['max'];
                $options['players_synced_at'] = now()->toIso8601String();
                $server->options = $options;
                $server->save();

                Log::channel('rcon_master')->info('SyncOnlinePlayers: counts saved', [
                    'server_id' => $server->id,
                    'online' => $counts['online'],
                    'max' => $counts['max'],
                ]);
            } catch (\Throwable $e) {
                Log::error("Failed to sync online players for server {$server->id}: {$e->getMessage()}");
            }
        }
    }
}
