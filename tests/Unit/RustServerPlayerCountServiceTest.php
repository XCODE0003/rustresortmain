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
