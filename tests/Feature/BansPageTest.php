<?php

use App\Models\Ban;
use App\Models\Server;

test('guest can view bans page from local database', function () {
    Server::create(['name' => 'Server X', 'status' => 1, 'sort' => 1]);

    Ban::create([
        'rustapp_id' => 1,
        'steam_id' => '76561198000000000',
        'steam_name' => 'TestPlayer',
        'steam_avatar' => 'https://example.com/a.jpg',
        'reason' => 'Cheating',
        'server_ids' => [],
        'banned_at' => 1_700_000_000, // UNIX-секунды
        'expires_at' => 0,            // навсегда
        'is_active' => true,
    ]);

    $response = $this->get('/bans');

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('bans')
        ->has('bans', 1)
        ->where('bans.0.nickname', 'TestPlayer')
        ->where('bans.0.reason', 'Cheating')
        ->where('bans.0.banned_at', 1_700_000_000)
        ->where('bans.0.expires_at', 0)
        ->where('bans.0.is_active', true)
        ->where('meta.current_page', 1)
        ->where('loadError', false)
    );
});

test('bans page filters by search query', function () {
    Ban::create([
        'rustapp_id' => 1,
        'steam_id' => 'a',
        'steam_name' => 'Alice',
        'reason' => 'x',
        'server_ids' => [],
        'banned_at' => 1_700_000_100,
        'expires_at' => 0,
        'is_active' => true,
    ]);
    Ban::create([
        'rustapp_id' => 2,
        'steam_id' => 'b',
        'steam_name' => 'Bob',
        'reason' => 'y',
        'server_ids' => [],
        'banned_at' => 1_700_000_200,
        'expires_at' => 0,
        'is_active' => true,
    ]);

    $response = $this->get('/bans?search=Alice');

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('bans')
        ->has('bans', 1)
        ->where('bans.0.nickname', 'Alice')
        ->where('search', 'Alice')
    );
});

test('inactive (history) bans are still listed', function () {
    Ban::create([
        'rustapp_id' => 9,
        'steam_id' => 'old',
        'steam_name' => 'Expired',
        'reason' => 'temp',
        'server_ids' => [],
        'banned_at' => 1_700_000_000,
        'expires_at' => 1_700_086_400,
        'is_active' => false,
    ]);

    $response = $this->get('/bans');

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->has('bans', 1)
        ->where('bans.0.nickname', 'Expired')
        ->where('bans.0.is_active', false)
    );
});
