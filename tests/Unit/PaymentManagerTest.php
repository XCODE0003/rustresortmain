<?php

use App\Services\Payments\PaymentManager;

test('payment manager can resolve gateway', function () {
    $manager = app(PaymentManager::class);

    $gateway = $manager->gateway('heleket');

    expect($gateway)->toBeInstanceOf(\App\Services\Payments\Contracts\PaymentGatewayInterface::class);
    expect($gateway->getName())->toBe('heleket');
});

test('payment manager throws exception for invalid gateway', function () {
    $manager = app(PaymentManager::class);

    $manager->gateway('invalid_gateway');
})->throws(\InvalidArgumentException::class);

test('all registered gateways are valid', function () {
    $manager = app(PaymentManager::class);

    $gateways = ['heleket', 'pally', 'paypal'];

    foreach ($gateways as $gatewayName) {
        $gateway = $manager->gateway($gatewayName);
        expect($gateway)->toBeInstanceOf(\App\Services\Payments\Contracts\PaymentGatewayInterface::class);
    }
});
