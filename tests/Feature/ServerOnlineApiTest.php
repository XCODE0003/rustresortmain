<?php

use App\Models\Server;

/**
 * Публичный эндпоинт онлайна: GET /api/server/online.
 * Отдаёт суммарный онлайн по активным серверам в плоском формате
 * {currentplayer, queueplayers, maxplayers} — им пользуются виджеты и плагин.
 */
function onlineServer(string $name, int $online, int $queue, int $max, int $status = 1, int $sort = 1): Server
{
    return Server::create([
        'name' => $name,
        'status' => $status,
        'sort' => $sort,
        'options' => [
            'ip' => '62.122.215.98:28015',
            // Секреты рядом лежат специально: наружу они уходить не должны.
            'rcon_passw' => 'S3CR3T_rcon_password',
            'online_players' => $online,
            'queue_players' => $queue,
            'max_players' => $max,
        ],
    ]);
}

test('returns aggregated online for all active servers', function () {
    onlineServer('Server 1', online: 150, queue: 100, max: 200, sort: 1);
    onlineServer('Server 2', online: 100, queue: 25, max: 100, sort: 2);

    $response = $this->getJson('/api/server/online');

    $response->assertOk();
    $response->assertExactJson([
        'currentplayer' => 250,
        'queueplayers' => 125,
        'maxplayers' => 300,
    ]);
});

test('ignores disabled servers', function () {
    onlineServer('Active', online: 10, queue: 1, max: 100, status: 1, sort: 1);
    onlineServer('Disabled', online: 999, queue: 999, max: 999, status: 0, sort: 2);

    $this->getJson('/api/server/online')->assertExactJson([
        'currentplayer' => 10,
        'queueplayers' => 1,
        'maxplayers' => 100,
    ]);
});

test('returns zeroes when there are no active servers', function () {
    $this->getJson('/api/server/online')->assertOk()->assertExactJson([
        'currentplayer' => 0,
        'queueplayers' => 0,
        'maxplayers' => 0,
    ]);
});

test('returns counters for a single server by id', function () {
    $first = onlineServer('Server 1', online: 150, queue: 100, max: 200, sort: 1);
    onlineServer('Server 2', online: 100, queue: 25, max: 100, sort: 2);

    $this->getJson("/api/server/online?server={$first->id}")->assertExactJson([
        'currentplayer' => 150,
        'queueplayers' => 100,
        'maxplayers' => 200,
    ]);
});

test('accepts id as an alias for server', function () {
    $first = onlineServer('Server 1', online: 150, queue: 100, max: 200, sort: 1);
    onlineServer('Server 2', online: 100, queue: 25, max: 100, sort: 2);

    // Интеграторы зовут ?id=N — раньше параметр молча игнорировался
    // и вместо одного сервера возвращалась сумма по всем.
    $this->getJson("/api/server/online?id={$first->id}")->assertExactJson([
        'currentplayer' => 150,
        'queueplayers' => 100,
        'maxplayers' => 200,
    ]);
});

test('invalid id alias is rejected', function () {
    $this->getJson('/api/server/online?id=abc')
        ->assertStatus(422)
        ->assertJsonPath('status', 'error');
});

test('single server lookup ignores disabled servers', function () {
    $disabled = onlineServer('Disabled', online: 999, queue: 999, max: 999, status: 0);

    $this->getJson("/api/server/online?server={$disabled->id}")->assertNotFound();
});

test('unknown server id returns 404', function () {
    onlineServer('Server 1', online: 150, queue: 100, max: 200);

    $this->getJson('/api/server/online?server=99999')->assertNotFound();
});

test('invalid server id is rejected with the api error envelope', function () {
    $response = $this->getJson('/api/server/online?server=abc');

    $response->assertStatus(422);
    // Тот же конверт ошибок, что и у остальных /api-контроллеров: {status, msg}.
    $response->assertJsonPath('status', 'error');
    $response->assertJsonStructure(['status', 'msg']);
});

test('missing counters in options fall back to zero', function () {
    Server::create([
        'name' => 'Fresh Server',
        'status' => 1,
        'sort' => 1,
        'options' => ['ip' => '62.122.215.98:28015'],
    ]);

    $this->getJson('/api/server/online')->assertExactJson([
        'currentplayer' => 0,
        'queueplayers' => 0,
        'maxplayers' => 0,
    ]);
});

test('online endpoint never leaks rcon secrets', function () {
    onlineServer('Server 1', online: 150, queue: 100, max: 200);

    $response = $this->getJson('/api/server/online');

    $response->assertDontSee('S3CR3T_rcon_password');
    $response->assertDontSee('rcon_passw');
});
