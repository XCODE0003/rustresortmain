<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Server;
use App\Models\Shopping;
use App\Services\RconConnectionManager;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

/**
 * Реализует поведение старого Console\Kernel из rustresortOld: каждую минуту
 * сканирует таблицу shopping и для каждой непогашенной записи отправляет
 * команду на игровой сервер по RCON. При успешном ответе записывает
 * status=1.
 */
class ProcessShoppingQueueJob implements ShouldQueue
{
    use Queueable;

    public int $tries = 1;

    private const SUCCESS_PHRASES = [
        'Added to group',
        'added to group',
        'time extended',
        'ermission granted',
        'granted permission',
        'успешно',
    ];

    public function __construct()
    {
        $this->onQueue('default');
    }

    public function handle(): void
    {
        $servers = Server::query()->where('status', 1)->get();
        if ($servers->isEmpty()) {
            return;
        }

        $manager = RconConnectionManager::getInstance();
        $deadServers = []; // server_id => true — больше не пытаемся в этом цикле

        foreach ($servers as $server) {
            if (isset($deadServers[$server->id])) {
                continue;
            }

            $tasks = Shopping::query()
                ->where('status', 0)
                ->whereIn('server', [$server->id, 0])
                ->orderBy('id')
                ->limit(50)
                ->get();

            foreach ($tasks as $task) {
                if (isset($deadServers[$server->id])) {
                    break; // сервер сдох в середине цикла — выходим
                }
                $command = trim((string) $task->command);
                if ($command === '' || $command === '0') {
                    $task->status = 1;
                    $task->save();
                    continue;
                }

                // Защита от старых записей с незаменёнными плейсхолдерами —
                // RCON их выполнит с мусором, а пользователь не получит товар.
                if (preg_match('/%(steamid|amount|var)%|\{(steamid|amount|var)\}/u', $command)) {
                    Log::channel('rcon_master')->warning('ProcessShoppingQueueJob: skipping unresolved placeholders', [
                        'shopping_id' => $task->id,
                        'command' => $command,
                    ]);
                    continue;
                }

                $lock = Cache::lock("shopping:lock:{$task->id}", 30);
                if (! $lock->get()) {
                    continue;
                }

                try {
                    if (! $manager->connect($server->id)) {
                        $deadServers[$server->id] = true;
                        Log::channel('rcon_master')->warning('ProcessShoppingQueueJob: connect failed, marking server dead for this cycle', [
                            'server_id' => $server->id,
                            'shopping_id' => $task->id,
                        ]);
                        break;
                    }

                    $lastError = null;
                    $result = $manager->sendCommand($server->id, $command, 5, $lastError);
                    $message = is_object($result) && isset($result->Message) ? (string) $result->Message : '';

                    // Соединение упало посреди команды — больше не пытаемся в этом цикле.
                    if ($result === false && $lastError && str_contains($lastError, 'Could not open socket')) {
                        $deadServers[$server->id] = true;
                        Log::channel('rcon_master')->warning('ProcessShoppingQueueJob: socket dead mid-cycle', [
                            'server_id' => $server->id,
                            'shopping_id' => $task->id,
                            'error' => $lastError,
                        ]);
                        break;
                    }

                    if ($result !== false && $this->looksSuccessful($message, $command)) {
                        $task->status = 1;
                        $task->save();

                        Log::channel('rcon_master')->info('ProcessShoppingQueueJob: delivered', [
                            'shopping_id' => $task->id,
                            'server_id' => $server->id,
                            'command' => $command,
                            'response' => $message,
                        ]);
                    } else {
                        Log::channel('rcon_master')->warning('ProcessShoppingQueueJob: command unconfirmed', [
                            'shopping_id' => $task->id,
                            'server_id' => $server->id,
                            'command' => $command,
                            'response' => $message,
                            'error' => $lastError,
                        ]);
                    }
                } catch (\Throwable $e) {
                    Log::channel('rcon_master')->error('ProcessShoppingQueueJob: exception', [
                        'shopping_id' => $task->id,
                        'server_id' => $server->id,
                        'error' => $e->getMessage(),
                    ]);
                } finally {
                    $lock->release();
                }
            }
        }
    }

    private function looksSuccessful(string $response, string $command): bool
    {
        if ($response === '') {
            // Пустой ответ от RCON = команда выполнена без ошибки.
            // Rust/Oxide при успехе молчат; ошибка всегда сопровождается текстом.
            return true;
        }

        $lower = mb_strtolower($response);
        foreach (self::SUCCESS_PHRASES as $phrase) {
            if (mb_stripos($lower, mb_strtolower($phrase)) !== false) {
                return true;
            }
        }

        // Никаких "error"/"failed"/"unknown" — тоже считаем выданным.
        $failureMarkers = [
            'error', 'failed', 'unknown command', 'not found', 'unrecognised',
            'не существует', 'не существуют', 'не найден', 'ошибка', 'неверн',
        ];
        foreach ($failureMarkers as $marker) {
            if (str_contains($lower, $marker)) {
                return false;
            }
        }

        return true;
    }
}
