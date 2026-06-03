<?php

namespace App\Console\Commands;

use App\Services\RustApp\BanSyncService;
use Illuminate\Console\Command;

class SyncBansCommand extends Command
{
    protected $signature = 'bans:sync {--full : Полная сверка всего активного списка (для деплоя/сверки)}';

    protected $description = 'Синхронизировать баны из RustApp в локальную БД';

    public function handle(BanSyncService $banSync): int
    {
        if ($this->option('full')) {
            $stats = $banSync->reconcile();
            $this->info(sprintf(
                'Reconcile: fetched=%d, demoted=%d, expired=%d, complete=%s',
                $stats['fetched'], $stats['demoted'], $stats['expired'], $stats['complete'] ? 'yes' : 'no',
            ));

            if (! $stats['complete']) {
                $this->warn('Прогон неполный (RustApp недоступен) — снятие в историю пропущено.');
            }

            return self::SUCCESS;
        }

        $stats = $banSync->syncRecent();
        $this->info(sprintf(
            'Sync recent: fetched=%d, expired=%d, caught_up=%s',
            $stats['fetched'], $stats['expired'], $stats['caught_up'] ? 'yes' : 'no',
        ));

        return self::SUCCESS;
    }
}
