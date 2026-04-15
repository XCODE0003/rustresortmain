<?php

namespace App\Services\GameServer;

use App\Models\Server;
use App\Services\RconConnectionManager;
use Illuminate\Support\Facades\Log;

class RustServerPlayerCountService
{
    /**
     * Парсит вывод команды RCON `status` (Rust) и возвращает [online, max].
     *
     * @return array{0: int, 1: int}|null
     */
    public function parsePlayersFromStatusMessage(string $message): ?array
    {
        $message = trim($message);

        // players : 12 (250 max)
        if (preg_match('/players\s*:\s*(\d+)\s*\((\d+)\s*max\)/iu', $message, $m)) {
            return [(int) $m[1], (int) $m[2]];
        }

        // players : 12/250
        if (preg_match('/players\s*:\s*(\d+)\s*\/\s*(\d+)/u', $message, $m)) {
            return [(int) $m[1], (int) $m[2]];
        }

        // players: 5 / 200
        if (preg_match('/players\s*:\s*(\d+)\s*\/\s*(\d+)/iu', $message, $m)) {
            return [(int) $m[1], (int) $m[2]];
        }

        return null;
    }

    /**
     * Текст ответа RCON на команду status (объект или массив после json_decode).
     */
    private function rconStatusMessage(mixed $result): string
    {
        if ($result === null || $result === false) {
            return '';
        }

        if (is_object($result) && isset($result->Message)) {
            return (string) $result->Message;
        }

        if (is_array($result)) {
            return (string) ($result['Message'] ?? $result['message'] ?? '');
        }

        return '';
    }

    /**
     * Подключается по RCON, выполняет `status`, парсит онлайн. При ошибке — null.
     *
     * @return array{online: int, max: int}|null
     */
    public function syncFromRcon(Server $server): ?array
    {
        $manager = RconConnectionManager::getInstance();
        $lastError = null;

        try {
            if (! $manager->connect($server->id)) {
                Log::channel('rcon_master')->debug('RustServerPlayerCount: connect failed', [
                    'server_id' => $server->id,
                ]);

                return null;
            }

            $result = $manager->sendCommand($server->id, 'status', 12, $lastError);

            $message = $this->rconStatusMessage($result);
            if ($message === '') {
                Log::channel('rcon_master')->warning('RustServerPlayerCount: no status response', [
                    'server_id' => $server->id,
                    'error' => $lastError,
                ]);

                return null;
            }
            $parsed = $this->parsePlayersFromStatusMessage($message);

            if ($parsed === null) {
                Log::channel('rcon_master')->warning('RustServerPlayerCount: could not parse status', [
                    'server_id' => $server->id,
                    'preview' => substr($message, 0, 200),
                ]);

                return null;
            }

            return [
                'online' => $parsed[0],
                'max' => $parsed[1],
            ];
        } catch (\Throwable $e) {
            Log::channel('rcon_master')->error('RustServerPlayerCount: exception', [
                'server_id' => $server->id,
                'error' => $e->getMessage(),
            ]);

            return null;
        } finally {
            $manager->disconnect($server->id);
        }
    }

    /**
     * Обновляет online_players / max_players в options для активных серверов.
     *
     * @return array{updated: int, skipped: int, errors: list<array{server_id: int, message: string}>}
     */
    public function syncAllServers(?int $onlyServerId = null): array
    {
        $query = Server::query();

        if ($onlyServerId !== null) {
            $query->where('id', $onlyServerId);
        } else {
            $query->where('status', 1);
        }

        $servers = $query->orderBy('sort')->get();

        $updated = 0;
        $skipped = 0;
        $errors = [];

        foreach ($servers as $server) {
            try {
                $counts = $this->syncFromRcon($server);

                if ($counts === null) {
                    $skipped++;
                    $errors[] = [
                        'server_id' => $server->id,
                        'message' => 'RCON недоступен или не удалось разобрать ответ status',
                    ];

                    continue;
                }

                $options = $this->serverOptionsAsArray($server);
                $options['online_players'] = $counts['online'];
                $options['max_players'] = $counts['max'];
                $options['players_synced_at'] = now()->toIso8601String();
                $server->options = $options;
                $server->save();

                $updated++;

                Log::channel('rcon_master')->info('SyncOnlinePlayers: counts saved', [
                    'server_id' => $server->id,
                    'online' => $counts['online'],
                    'max' => $counts['max'],
                ]);
            } catch (\Throwable $e) {
                $skipped++;
                $errors[] = [
                    'server_id' => $server->id,
                    'message' => $e->getMessage(),
                ];
                Log::error("Failed to sync online players for server {$server->id}: {$e->getMessage()}");
            }
        }

        return [
            'updated' => $updated,
            'skipped' => $skipped,
            'errors' => $errors,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function serverOptionsAsArray(Server $server): array
    {
        $opt = $server->options;

        if (is_array($opt)) {
            return $opt;
        }

        if (is_string($opt) && $opt !== '') {
            $decoded = json_decode($opt, true);

            return is_array($decoded) ? $decoded : [];
        }

        return [];
    }
}
