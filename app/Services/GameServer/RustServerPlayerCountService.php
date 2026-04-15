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

            if (! $result || ! isset($result->Message)) {
                Log::channel('rcon_master')->warning('RustServerPlayerCount: no status response', [
                    'server_id' => $server->id,
                    'error' => $lastError,
                ]);

                return null;
            }

            $message = (string) $result->Message;
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
}
