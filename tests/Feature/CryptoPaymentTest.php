<?php

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Models\User;
use App\Services\ExchangeRateService;
use App\Services\Payments\Gateways\HeleketGateway;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

uses(RefreshDatabase::class);

test('usdToRub берёт курс с CoinGecko и считает rubToUsd', function () {
    Cache::flush();
    Http::fake([
        'api.coingecko.com/*' => Http::response(['tether' => ['rub' => 80.0]], 200),
    ]);

    $svc = new ExchangeRateService;

    expect($svc->usdToRub())->toBe(80.0);
    expect($svc->rubToUsd(800.0))->toBe(10.0);
});

test('usdToRub отдаёт фолбэк при сбое API', function () {
    Cache::flush();
    Http::fake(['api.coingecko.com/*' => Http::response('', 500)]);

    expect((new ExchangeRateService)->usdToRub())->toBeGreaterThan(0.0);
});

test('Heleket выставляет счёт в USD из рублей по курсу', function () {
    Cache::flush();
    Http::fake([
        'api.coingecko.com/*' => Http::response(['tether' => ['rub' => 95.0]], 200),
        'api.heleket.com/*' => Http::response([
            'state' => 0,
            'result' => ['uuid' => 'x', 'url' => 'https://pay.heleket.com/x'],
        ], 200),
    ]);

    PaymentGateway::create([
        'code' => 'heleket', 'name' => 'Heleket', 'name_ru' => 'Heleket', 'status' => 1,
        'settings' => ['payment_key' => 'pk', 'merchant_uuid' => 'mu'],
    ]);
    PaymentGateway::create([
        'code' => 'bitcoin', 'name' => 'Bitcoin', 'name_ru' => 'Bitcoin', 'status' => 1,
        'settings' => ['backend' => 'heleket', 'to_currency' => 'BTC'],
    ]);

    $user = User::factory()->create(['steam_id' => '76561190000000010']);
    $donate = Donate::create([
        'user_id' => $user->id, 'payment_id' => 'p1', 'amount' => 950,
        'status' => 0, 'payment_system' => 'bitcoin', 'steam_id' => $user->steam_id,
    ]);

    (new HeleketGateway)->createPayment($donate);

    Http::assertSent(function ($request) {
        if (! str_contains($request->url(), 'heleket.com')) {
            return false;
        }
        $body = json_decode($request->body(), true);

        return ($body['currency'] ?? null) === 'USD'
            && (float) ($body['amount'] ?? 0) === 10.0   // 950₽ / 95 = 10 USD
            && ($body['to_currency'] ?? null) === 'BTC';
    });
});
