<?php

use App\Services\GameServer\RustServerPlayerCountService;

test('parses rust status players line with max in parentheses', function () {
    $svc = new RustServerPlayerCountService;
    $msg = <<<'TXT'
hostname: Test
version : 2623 secure
players : 12 (250 max)
TXT;
    $result = $svc->parsePlayersFromStatusMessage($msg);

    expect($result)->toBe([12, 250]);
});

test('parses players slash format', function () {
    $svc = new RustServerPlayerCountService;
    $msg = "players : 3 / 200\n";

    $result = $svc->parsePlayersFromStatusMessage($msg);

    expect($result)->toBe([3, 200]);
});

test('returns null when no players line', function () {
    $svc = new RustServerPlayerCountService;

    expect($svc->parsePlayersFromStatusMessage('hostname: only'))->toBeNull();
});

test('serverOptionsAsArray decodes json string options', function () {
    $svc = new RustServerPlayerCountService;
    $method = new ReflectionMethod(RustServerPlayerCountService::class, 'serverOptionsAsArray');
    $method->setAccessible(true);

    $server = new class extends \App\Models\Server
    {
        protected function casts(): array
        {
            return [];
        }
    };
    $server->setRawAttributes(['options' => '{"ip":"37.230.137.209:28015"}'], true);

    $out = $method->invoke($svc, $server);

    expect($out)->toBeArray()->and($out['ip'])->toBe('37.230.137.209:28015');
});
