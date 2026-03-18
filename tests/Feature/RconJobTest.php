<?php

use App\Jobs\ProcessRconQueueJob;
use App\Jobs\RconExecuteJob;
use App\Models\RconTask;
use App\Models\Server;
use Illuminate\Support\Facades\Queue;

test('rcon task is created and queued', function () {
    $server = Server::factory()->create();

    $task = RconTask::create([
        'server_id' => $server->id,
        'command' => 'say Hello',
        'status' => 'pending',
    ]);

    expect($task->status)->toBe('pending');
    expect($task->server_id)->toBe($server->id);
});

test('process rcon queue job dispatches execute jobs', function () {
    Queue::fake();

    $server = Server::factory()->create();
    RconTask::create([
        'server_id' => $server->id,
        'command' => 'say Hello',
        'status' => 'pending',
    ]);

    (new ProcessRconQueueJob())->handle();

    Queue::assertPushed(RconExecuteJob::class);
});

test('rcon execute job updates task status', function () {
    $server = Server::factory()->create();
    $task = RconTask::create([
        'server_id' => $server->id,
        'command' => 'say Hello',
        'status' => 'pending',
    ]);

    expect($task->fresh()->status)->toBe('pending');
});
