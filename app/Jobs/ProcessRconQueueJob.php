<?php

namespace App\Jobs;

use App\Models\RconTask;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProcessRconQueueJob implements ShouldQueue
{
    use Queueable;

    public function __construct()
    {
        $this->onQueue('rcon');
    }

    public function handle(): void
    {
        $pendingTasks = RconTask::where('status', 0)
            ->orderBy('created_at')
            ->limit(50)
            ->get();

        foreach ($pendingTasks as $task) {
            RconExecuteJob::dispatch($task);
        }
    }
}
