<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;

class SteamGateway implements PaymentGatewayInterface
{
    public function createPayment(Donate $donate): array
    {
        $gateway = PaymentGateway::query()->where('code', $donate->payment_system)->first();
        $tradeUrl = $gateway?->getSetting('trade_url');

        if (! is_string($tradeUrl) || $tradeUrl === '') {
            throw new \Exception('Steam: trade_url не настроен в параметрах шлюза');
        }

        return [
            'url' => $tradeUrl,
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        return false;
    }

    public function processWebhook(Request $request): PaymentData
    {
        return new PaymentData(
            orderId: '',
            amount: 0.0,
            status: 'pending',
            transactionId: null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Steam';
    }
}
