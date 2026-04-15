<?php

use App\Models\Server;
use App\Services\GameServer\RustServerPlayerCountService;

test('servers:sync-online fails when server id does not exist', function () {
    $this->artisan('servers:sync-online', ['server' => 999_999])
        ->assertFailed();
});

test('servers:sync-online invokes sync for all servers when service returns stats', function () {
    $this->mock(RustServerPlayerCountService::class, function ($mock): void {
        $mock->shouldReceive('syncAllServers')
            ->once()
            ->with(null)
            ->andReturn([
                'updated' => 0,
                'skipped' => 0,
                'errors' => [],
            ]);
    });

    $this->artisan('servers:sync-online')
        ->assertSuccessful();
});

test('servers:sync-online passes server id to service', function () {
    $server = Server::create([
        'name' => 'Cmd Test',
        'status' => 1,
        'sort' => 1,
    ]);

    $this->mock(RustServerPlayerCountService::class, function ($mock) use ($server): void {
        $mock->shouldReceive('syncAllServers')
            ->once()
            ->with($server->id)
            ->andReturn([
                'updated' => 0,
                'skipped' => 1,
                'errors' => [['server_id' => $server->id, 'message' => 'test']],
            ]);
    });

    $this->artisan('servers:sync-online', ['server' => (string) $server->id])
        ->assertSuccessful();
});
