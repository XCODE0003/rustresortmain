<?php

use App\Casts\ServerOptionsCast;
use Illuminate\Database\Eloquent\Model;

test('ServerOptionsCast unwraps double-encoded json string', function () {
    $cast = new ServerOptionsCast;
    $inner = '{"ip":"37.230.137.209:28015","rcon_ip":"37.230.137.209:38015"}';
    $doubleEncoded = json_encode($inner);

    $model = new class extends Model {};

    $out = $cast->get($model, 'options', $doubleEncoded, []);

    expect($out)->toBeArray()
        ->and($out['ip'])->toBe('37.230.137.209:28015')
        ->and($out['rcon_ip'])->toBe('37.230.137.209:38015');
});

test('ServerOptionsCast returns array from plain json object string', function () {
    $cast = new ServerOptionsCast;
    $json = '{"ip":"1.2.3.4:28015"}';
    $model = new class extends Model {};

    $out = $cast->get($model, 'options', $json, []);

    expect($out['ip'])->toBe('1.2.3.4:28015');
});
