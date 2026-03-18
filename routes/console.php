<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::job(\App\Jobs\ProcessRconQueueJob::class)
    ->everyMinute()
    ->name('process-rcon-queue')
    ->withoutOverlapping();

Schedule::job(\App\Jobs\SyncOnlinePlayersJob::class)
    ->everyFiveMinutes()
    ->name('sync-online-players')
    ->withoutOverlapping();

Schedule::job(\App\Jobs\UpdateWipeDatesJob::class)
    ->daily()
    ->name('update-wipe-dates');

Schedule::command('model:prune', [
    '--model' => [\App\Models\Session::class],
])->daily()->name('prune-sessions');

Schedule::command('model:prune', [
    '--model' => [\App\Models\ClearStatistic::class],
])->weekly()->name('prune-statistics');
