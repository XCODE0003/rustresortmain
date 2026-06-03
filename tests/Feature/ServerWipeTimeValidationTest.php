<?php

use App\Http\Requests\ServerRequest;
use Illuminate\Support\Facades\Validator;

test('wipe schedule time accepts both HH:MM and HH:MM:SS', function () {
    $rule = (new ServerRequest)->rules()['wipe_schedule_time'];

    foreach (['00:00', '00:00:00', '12:00', '23:59:59', ''] as $value) {
        $passes = Validator::make(['wipe_schedule_time' => $value], ['wipe_schedule_time' => $rule])->passes();
        expect($passes)->toBeTrue("'{$value}' should pass");
    }

    foreach (['25:00', '12:60', 'abc'] as $value) {
        $fails = Validator::make(['wipe_schedule_time' => $value], ['wipe_schedule_time' => $rule])->fails();
        expect($fails)->toBeTrue("'{$value}' should fail");
    }
});

test('prepareForValidation trims seconds from wipe time', function () {
    $request = ServerRequest::create('/backend/servers', 'POST', ['wipe_schedule_time' => '00:00:00']);

    $method = new ReflectionMethod($request, 'prepareForValidation');
    $method->setAccessible(true);
    $method->invoke($request);

    expect($request->input('wipe_schedule_time'))->toBe('00:00');
});

test('wipe schedule time error is a readable message, not a raw translation key', function () {
    $request = new ServerRequest;
    $rule = $request->rules()['wipe_schedule_time'];

    $validator = Validator::make(
        ['wipe_schedule_time' => '99:99'],
        ['wipe_schedule_time' => $rule],
        $request->messages(),
    );

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->first('wipe_schedule_time'))
        ->not->toContain('validation.')
        ->toContain('ЧЧ:ММ');
});
