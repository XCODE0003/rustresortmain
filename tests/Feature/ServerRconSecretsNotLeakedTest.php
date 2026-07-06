<?php

use App\Models\Server;

/**
 * Регресс на инцидент с утечкой RCON-паролей: публичные страницы `/` и `/servers`
 * НИКОГДА не должны отдавать секреты из options (rcon_ip, rcon_passw, api_key)
 * в props/HTML. Раньше контроллеры делали $server->toArray() и вшивали всё в
 * Inertia data-page, откуда пароли читались через «просмотр кода страницы».
 */
function serverWithRconSecrets(): Server
{
    return Server::create([
        'name' => 'Secret Server',
        'status' => 1,
        'sort' => 1,
        'options' => [
            // Секреты — не должны утечь:
            'rcon_ip' => '62.122.215.98:38015',
            'rcon_passw' => 'S3CR3T_rcon_password',
            'api_key' => 'S3CR3T_api_key',
            // Публичные поля — должны остаться:
            'ip' => '62.122.215.98:28015',
            'rate' => 'x5',
            'online_players' => 42,
            'max_players' => 200,
        ],
    ]);
}

test('home page does not leak rcon secrets to the frontend', function () {
    serverWithRconSecrets();

    $response = $this->get('/');

    $response->assertOk();
    // Секретов нет нигде в HTML страницы (props Inertia сериализуются в data-page).
    $response->assertDontSee('S3CR3T_rcon_password');
    $response->assertDontSee('S3CR3T_api_key');
    $response->assertDontSee('38015');

    $response->assertInertia(fn ($page) => $page
        ->has('servers', 1)
        ->missing('servers.0.options.rcon_ip')
        ->missing('servers.0.options.rcon_passw')
        ->missing('servers.0.options.api_key')
        // Публичные поля по-прежнему на месте — UI не сломан:
        ->where('servers.0.options.ip', '62.122.215.98:28015')
        ->where('servers.0.options.rate', 'x5')
        ->where('servers.0.online_players', 42)
        ->where('servers.0.max_players', 200)
    );
});

test('servers page does not leak rcon secrets to the frontend', function () {
    serverWithRconSecrets();

    $response = $this->get('/servers');

    $response->assertOk();
    $response->assertDontSee('S3CR3T_rcon_password');
    $response->assertDontSee('S3CR3T_api_key');
    $response->assertDontSee('38015');

    $response->assertInertia(fn ($page) => $page
        ->component('servers')
        ->has('servers', 1)
        ->missing('servers.0.options.rcon_ip')
        ->missing('servers.0.options.rcon_passw')
        ->missing('servers.0.options.api_key')
        ->where('servers.0.options.ip', '62.122.215.98:28015')
        ->where('servers.0.online_players', 42)
    );
});
