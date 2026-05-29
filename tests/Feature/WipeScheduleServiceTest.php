<?php

use App\Models\Server;
use App\Services\WipeScheduleService;
use Carbon\Carbon;

it('calculates last and next wipe for weekly schedule', function () {
    Carbon::setTestNow(Carbon::parse('2026-05-29 14:00:00')); // Friday

    $server = new Server([
        'wipe_schedule_days' => [1, 5], // Monday, Friday
        'wipe_schedule_time' => '18:30',
    ]);

    $service = app(WipeScheduleService::class);
    $dates = $service->calculate($server, now());

    expect($dates['last_wipe']?->format('Y-m-d H:i'))->toBe('2026-05-25 18:30');
    expect($dates['next_wipe']?->format('Y-m-d H:i'))->toBe('2026-05-29 18:30');
});

it('falls back to existing dates when schedule is not configured', function () {
    $server = new Server([
        'wipe' => Carbon::parse('2026-05-20 12:00:00'),
        'next_wipe' => Carbon::parse('2026-05-27 12:00:00'),
        'wipe_schedule_days' => [],
        'wipe_schedule_time' => null,
    ]);

    $service = app(WipeScheduleService::class);
    $dates = $service->calculate($server, Carbon::parse('2026-05-29 14:00:00'));

    expect($dates['last_wipe']?->format('Y-m-d H:i'))->toBe('2026-05-20 12:00');
    expect($dates['next_wipe']?->format('Y-m-d H:i'))->toBe('2026-05-27 12:00');
});
