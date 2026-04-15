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
    Server::create([
        'name' => 'Cmd Test',
        'status' => 1,
        'sort' => 1,
    ]);
    $id = Server::query()->first()->id;

    $this->mock(RustServerPlayerCountService::class, function ($mock) use ($id): void {
        $mock->shouldReceive('syncAllServers')
            ->once()
            ->with($id)
            ->andReturn([
                'updated' => 0,
                'skipped' => 1,
                'errors' => [['server_id' => $id, 'message' => 'test']],
            ]);
    });

    $this->artisan('servers:sync-online', ['server' => (string) $id])
        ->assertSuccessful();
});
