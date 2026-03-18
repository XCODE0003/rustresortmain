<?php

namespace App\Jobs;

use App\Models\Server;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class UpdateWipeDatesJob implements ShouldQueue
{
    use Queueable;

    public function handle(): void
    {
        $servers = Server::whereNotNull('next_wipe')
            ->where('next_wipe', '<=', now())
            ->get();

        foreach ($servers as $server) {
            $server->update([
                'wipe' => now(),
                'next_wipe' => now()->addDays(7),
            ]);
        }
    }
}
