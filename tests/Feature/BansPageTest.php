<?php

use Illuminate\Support\Facades\Http;

test('guest can view bans page with ban rows from rustapp', function () {
    Http::fake([
        'https://court.rustapp.io/public/bans*' => Http::response([
            'results' => [
                [
                    'steam_id' => '76561198000000000',
                    'reason' => 'Cheating',
                    'created_at' => 1_700_000_000,
                    'expired_at' => 0,
                    'computed_is_active' => true,
                    'player' => [
                        'steam_name' => 'TestPlayer',
                        'steam_avatar' => 'https://example.com/a.jpg',
                    ],
                ],
            ],
            'total' => 25,
            'page' => 0,
            'limit' => 10,
        ]),
    ]);

    $response = $this->get('/bans');

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('bans')
        ->has('bans', 1)
        ->where('bans.0.nickname', 'TestPlayer')
        ->where('bans.0.reason', 'Cheating')
        ->where('meta.total', 25)
        ->where('meta.last_page', 3)
        ->where('meta.current_page', 1)
        ->where('loadError', false)
    );
});

test('bans page shows load error when rustapp request fails', function () {
    Http::fake([
        'https://court.rustapp.io/public/bans*' => Http::response('Server Error', 500),
    ]);

    $response = $this->get('/bans?page=2');

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('bans')
        ->where('loadError', true)
        ->where('meta.current_page', 2)
    );
});
