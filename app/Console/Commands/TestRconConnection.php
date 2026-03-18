<?php

namespace App\Console\Commands;

use App\Models\Server;
use App\Services\RconConnectionManager;
use Illuminate\Console\Command;

class TestRconConnection extends Command
{
    protected $signature = 'rcon:test {server_id?} {--proxy= : SOCKS5 proxy для теста (host:port:user:pass)}';

    protected $description = 'Проверка RCON подключения к серверу (через прокси если настроен)';

    public function handle()
    {
        $server_id = $this->argument('server_id');
        $proxyOption = $this->option('proxy');

        if ($proxyOption) {
            config(['rcon.proxy' => $proxyOption]);
            $this->info('Используется прокси: '.preg_replace('/:[^:]+$/', ':****', $proxyOption));
        } elseif (config('rcon.proxy')) {
            $this->info('Используется прокси из конфига: '.preg_replace('/:[^:]+$/', ':****', config('rcon.proxy')));
        } else {
            $this->line('Подключение без прокси');
        }
        $this->newLine();

        if ($server_id) {
            $servers = [Server::find($server_id)];
            if (! $servers[0]) {
                $this->error("Server with ID {$server_id} not found");

                return 1;
            }
        } else {
            $servers = Server::all();
        }

        $manager = RconConnectionManager::getInstance();

        foreach ($servers as $server) {
            $this->info("Тест сервера {$server->id} ({$server->name})...");

            if ($manager->connect($server->id)) {
                $this->info('✓ Connected successfully');

                $err = null;
                $result = $manager->sendCommand($server->id, 'status', 5, $err);

                if ($result && isset($result->Message)) {
                    $this->info('✓ Command sent successfully');
                    $this->line('Response preview: '.substr($result->Message, 0, 100).'...');
                } else {
                    $this->error('✗ Failed to send command or no response');
                    if ($err) {
                        $this->line("<fg=red>Ошибка: {$err}</>");
                    }
                }

                $manager->disconnect($server->id);
                $this->info('✓ Disconnected');
            } else {
                $this->error('✗ Failed to connect');
            }

            $this->line('');
        }

        return 0;
    }
}
