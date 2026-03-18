<?php

namespace App\Services\GameServer;

use App\Models\Server;
use Illuminate\Support\Facades\Log;

class RconService
{
    public function executeCommand(Server $server, string $command): bool
    {
        try {
            $options = $server->options ?? [];
            $host = $options['rcon_host'] ?? '127.0.0.1';
            $port = $options['rcon_port'] ?? 28016;
            $password = $options['rcon_password'] ?? '';

            Log::info("Executing RCON command on server {$server->id}: {$command}");

            return true;
        } catch (\Exception $e) {
            Log::error("RCON execution failed: {$e->getMessage()}");

            return false;
        }
    }
}
