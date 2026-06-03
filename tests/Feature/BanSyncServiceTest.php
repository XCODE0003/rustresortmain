<?php

use App\Models\Ban;
use App\Services\RustApp\BanSyncService;
use Illuminate\Support\Facades\Http;

function fakeBansPage(array $results, int $limit = 200): void
{
    Http::fake([
        'https://court.rustapp.io/public/bans*' => Http::response([
            'results' => $results,
            'page' => 0,
            'limit' => $limit,
            'total' => count($results),
        ]),
    ]);
}

test('reconcile stores rustapp bans and normalizes millisecond timestamps to seconds', function () {
    fakeBansPage([
        [
            'id' => 1660365,
            'steam_id' => '76561199698571272',
            'reason' => 'cheat',
            'created_at' => 1_780_462_427_954, // ms
            'computed_is_active' => true,
            'server_ids' => [],
            'ban_group_uuid' => 'uuid-1',
            'player' => ['steam_name' => 'Cheater', 'steam_avatar' => 'a.jpg'],
            // постоянный бан: expired_at отсутствует
        ],
        [
            'id' => 1660366,
            'steam_id' => '76561198771692815',
            'reason' => 'temp',
            'created_at' => 1_780_000_716_100, // ms
            'expired_at' => 1_780_605_514_272, // ms
            'computed_is_active' => true,
            'server_ids' => [1, 2],
            'player' => ['steam_name' => 'Temp'],
        ],
    ]);

    $stats = app(BanSyncService::class)->reconcile();

    expect(Ban::count())->toBe(2)
        ->and($stats['complete'])->toBeTrue();

    $perm = Ban::where('rustapp_id', 1660365)->firstOrFail();
    expect($perm->banned_at)->toBe(1_780_462_427) // ms → s
        ->and($perm->expires_at)->toBe(0)          // постоянный
        ->and($perm->is_active)->toBeTrue()
        ->and($perm->steam_name)->toBe('Cheater');

    $temp = Ban::where('rustapp_id', 1660366)->firstOrFail();
    expect($temp->banned_at)->toBe(1_780_000_716)
        ->and($temp->expires_at)->toBe(1_780_605_514)
        ->and($temp->server_ids)->toBe([1, 2]);
});

test('reconcile is idempotent and upserts on rustapp_id', function () {
    fakeBansPage([[
        'id' => 5,
        'steam_id' => 's',
        'reason' => 'first',
        'created_at' => 1_780_000_000_000,
        'computed_is_active' => true,
        'server_ids' => [],
        'player' => ['steam_name' => 'Name'],
    ]]);

    app(BanSyncService::class)->reconcile();
    app(BanSyncService::class)->reconcile();

    expect(Ban::count())->toBe(1)
        ->and(Ban::where('rustapp_id', 5)->firstOrFail()->reason)->toBe('first');
});

test('reconcile demotes bans no longer active to history without deleting them', function () {
    Ban::create([
        'rustapp_id' => 999,
        'steam_id' => 'gone',
        'steam_name' => 'Gone',
        'reason' => 'old',
        'server_ids' => [],
        'banned_at' => 1_700_000_000,
        'expires_at' => 0,
        'is_active' => true,
        'last_seen_at' => now()->subHour(),
    ]);

    fakeBansPage([[
        'id' => 1,
        'steam_id' => 'new',
        'reason' => 'new',
        'created_at' => 1_780_000_000_000,
        'computed_is_active' => true,
        'server_ids' => [],
        'player' => ['steam_name' => 'New'],
    ]]);

    $stats = app(BanSyncService::class)->reconcile();

    expect(Ban::count())->toBe(2)                                            // ничего не удалили
        ->and($stats['demoted'])->toBe(1)
        ->and(Ban::where('rustapp_id', 999)->firstOrFail()->is_active)->toBeFalse() // ушёл в историю
        ->and(Ban::where('rustapp_id', 1)->firstOrFail()->is_active)->toBeTrue();
});

test('reconcile does not demote when rustapp request fails', function () {
    Ban::create([
        'rustapp_id' => 7,
        'steam_id' => 's',
        'reason' => 'r',
        'server_ids' => [],
        'banned_at' => 1_700_000_000,
        'expires_at' => 0,
        'is_active' => true,
        'last_seen_at' => now()->subHour(),
    ]);

    Http::fake(['https://court.rustapp.io/public/bans*' => Http::response('error', 500)]);

    $stats = app(BanSyncService::class)->reconcile();

    expect($stats['complete'])->toBeFalse()
        ->and($stats['demoted'])->toBe(0)
        ->and(Ban::where('rustapp_id', 7)->firstOrFail()->is_active)->toBeTrue(); // не тронули
});

test('syncRecent inserts new bans and catches up on a short page', function () {
    Ban::create([
        'rustapp_id' => 1,
        'steam_id' => 'known',
        'reason' => 'known',
        'server_ids' => [],
        'banned_at' => 1_700_000_000,
        'expires_at' => 0,
        'is_active' => true,
        'last_seen_at' => now(),
    ]);

    fakeBansPage([
        [
            'id' => 2,
            'steam_id' => 'new',
            'reason' => 'new',
            'created_at' => 1_780_000_000_000,
            'computed_is_active' => true,
            'server_ids' => [],
            'player' => ['steam_name' => 'New'],
        ],
        [
            'id' => 1, // уже известный — на этой странице мы догоняем
            'steam_id' => 'known',
            'reason' => 'known',
            'created_at' => 1_700_000_000_000,
            'computed_is_active' => true,
            'server_ids' => [],
            'player' => ['steam_name' => 'Known'],
        ],
    ]);

    $stats = app(BanSyncService::class)->syncRecent();

    expect($stats['caught_up'])->toBeTrue()
        ->and(Ban::count())->toBe(2)
        ->and(Ban::where('rustapp_id', 2)->firstOrFail()->steam_name)->toBe('New');
});

test('syncRecent locally expires overdue temporary bans without the API', function () {
    Ban::create([
        'rustapp_id' => 50,
        'steam_id' => 'temp',
        'reason' => 'temp',
        'server_ids' => [],
        'banned_at' => 1_700_000_000,
        'expires_at' => 1_700_086_400, // давно в прошлом
        'is_active' => true,
        'last_seen_at' => now(),
    ]);

    fakeBansPage([]); // RustApp не возвращает его в свежих → гасим локально по сроку

    $stats = app(BanSyncService::class)->syncRecent();

    expect($stats['expired'])->toBe(1)
        ->and(Ban::where('rustapp_id', 50)->firstOrFail()->is_active)->toBeFalse();
});
