<?php

namespace App\Jobs;

use App\Models\RconTask;
use App\Models\Server;
use App\Services\GameServer\RconService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class RconExecuteJob implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public int $backoff = 60;

    public function __construct(
        public RconTask $task,
    ) {
        $this->onQueue('rcon');
    }

    public function handle(RconService $rconService): void
    {
        $server = Server::find($this->task->server);

        if (! $server || ! $server->isOnline()) {
            $this->release(300);

            return;
        }

        $success = $rconService->executeCommand($server, $this->task->command);

        if ($success) {
            $this->task->update([
                'status' => 1,
                'comment' => 'Executed successfully at '.now(),
            ]);
        } else {
            $this->task->update([
                'comment' => 'Failed to execute at '.now(),
            ]);
            $this->fail();
        }
    }
}
