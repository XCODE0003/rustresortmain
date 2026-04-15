<?php

namespace App\Jobs;

use App\Services\GameServer\RustServerPlayerCountService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SyncOnlinePlayersJob implements ShouldQueue
{
    use Queueable;

    public function handle(RustServerPlayerCountService $playerCountService): void
    {
        $playerCountService->syncAllServers();
    }
}
