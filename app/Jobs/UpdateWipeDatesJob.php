<?php

namespace App\Jobs;

use App\Models\Server;
use App\Services\WipeScheduleService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class UpdateWipeDatesJob implements ShouldQueue
{
    use Queueable;

    public function __construct(private readonly ?WipeScheduleService $wipeScheduleService = null) {}

    public function handle(): void
    {
        $service = $this->wipeScheduleService ?? app(WipeScheduleService::class);
        $scheduledServers = Server::query()
            ->whereNotNull('wipe_schedule_time')
            ->whereJsonLength('wipe_schedule_days', '>', 0)
            ->get();

        foreach ($scheduledServers as $server) {
            $dates = $service->calculate($server);
            $server->update([
                'wipe' => $dates['last_wipe'],
                'next_wipe' => $dates['next_wipe'],
            ]);
        }

        $servers = Server::whereNotNull('next_wipe')
            ->where('next_wipe', '<=', now())
            ->where(function ($query) {
                $query->whereNull('wipe_schedule_time')
                    ->orWhereJsonLength('wipe_schedule_days', 0);
            })
            ->get();

        foreach ($servers as $server) {
            $server->update([
                'wipe' => now(),
                'next_wipe' => now()->addDays(7),
            ]);
        }
    }
}
