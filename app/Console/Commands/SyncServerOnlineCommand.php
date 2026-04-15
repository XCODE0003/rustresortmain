<?php

namespace App\Console\Commands;

use App\Models\Server;
use App\Services\GameServer\RustServerPlayerCountService;
use Illuminate\Console\Command;

class SyncServerOnlineCommand extends Command
{
    protected $signature = 'servers:sync-online
                            {server? : ID сервера (если не указан — все активные)}';

    protected $description = 'Обновить онлайн и слоты по RCON (команда status) и записать в options серверов';

    public function handle(RustServerPlayerCountService $playerCountService): int
    {
        $onlyId = $this->argument('server');
        $onlyId = $onlyId !== null ? (int) $onlyId : null;

        if ($onlyId !== null && $onlyId < 1) {
            $this->error('ID сервера должен быть положительным числом.');

            return self::FAILURE;
        }

        if ($onlyId !== null) {
            $server = Server::query()->find($onlyId);
            if ($server === null) {
                $this->error("Сервер с ID {$onlyId} не найден.");

                return self::FAILURE;
            }
        }

        $this->info('Синхронизация онлайна через RCON...');

        $result = $playerCountService->syncAllServers($onlyId);

        $this->line("Готово. Обновлено: {$result['updated']}, без ответа/ошибка: {$result['skipped']}.");

        foreach ($result['errors'] as $err) {
            $this->warn("Сервер #{$err['server_id']}: {$err['message']}");
        }

        return self::SUCCESS;
    }
}
