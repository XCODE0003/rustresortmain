<?php

namespace App\Observers;

use App\Models\Server;

class ServerObserver
{
    public function created(Server $server): void
    {
        //
    }

    public function saving(Server $server): void
    {
        if ($server->wipe && ! $server->next_wipe) {
            $server->next_wipe = $server->wipe->addDays(7);
        }
    }

    public function updated(Server $server): void
    {
        if ($server->isDirty('status')) {
            \Illuminate\Support\Facades\Log::info("Server status changed: {$server->name} is now ".($server->isOnline() ? 'online' : 'offline'));
        }
    }

    /**
     * Handle the Server "deleted" event.
     */
    public function deleted(Server $server): void
    {
        //
    }

    /**
     * Handle the Server "restored" event.
     */
    public function restored(Server $server): void
    {
        //
    }

    /**
     * Handle the Server "force deleted" event.
     */
    public function forceDeleted(Server $server): void
    {
        //
    }
}
