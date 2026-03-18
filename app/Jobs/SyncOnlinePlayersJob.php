<?php

namespace App\Jobs;

use App\Models\PlayersOnline;
use App\Models\Server;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class SyncOnlinePlayersJob implements ShouldQueue
{
    use Queueable;

    public function handle(): void
    {
        $servers = Server::where('status', 1)->get();

        foreach ($servers as $server) {
            try {
                $onlinePlayers = $this->fetchOnlinePlayers($server);

                foreach ($onlinePlayers as $playerData) {
                    PlayersOnline::updateOrCreate(
                        [
                            'steam_id' => $playerData['steam_id'],
                            'server' => $server->id,
                        ],
                        [
                            'online_time' => $playerData['online_time'] ?? 0,
                        ]
                    );
                }
            } catch (\Exception $e) {
                Log::error("Failed to sync online players for server {$server->id}: {$e->getMessage()}");
            }
        }
    }

    protected function fetchOnlinePlayers(Server $server): array
    {
        return [];
    }
}
