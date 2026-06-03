<?php

namespace App\Jobs;

use App\Models\Ban;
use App\Services\RustApp\BanSyncService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SyncRustAppBansJob implements ShouldQueue
{
    use Queueable;

    public int $timeout = 110;

    public function handle(BanSyncService $banSync): void
    {
        // Пустая таблица (первый запуск) → полная сверка для наполнения; дальше — лёгкий инкремент.
        if (Ban::query()->doesntExist()) {
            $banSync->reconcile();

            return;
        }

        $banSync->syncRecent();
    }
}
