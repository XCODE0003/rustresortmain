<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class HeleketGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        if (! PaymentGateway::getConnectionResolver()) {
            $this->gateway = new PaymentGateway([
                'code' => 'heleket',
                'settings' => [],
            ]);

            return;
        }

        $this->gateway = PaymentGateway::query()
            ->where('code', 'heleket')
            ->first() ?? new PaymentGateway([
            'code' => 'heleket',
            'settings' => [],
        ]);
    }

    public function createPayment(Donate $donate): array
    {
        $paymentKey = $this->gateway->getSetting('payment_key');
        $merchantUuid = $this->gateway->getSetting('merchant_uuid');
        $methodGateway = PaymentGateway::query()->where('code', $donate->payment_system)->first();
        $methodCode = $methodGateway?->code ?? $donate->payment_system;
        $methodToCurrency = $methodGateway?->getSetting('to_currency');

        if (empty($paymentKey) || empty($merchantUuid)) {
            throw new \Exception('Heleket не настроен: укажите merchant_uuid и payment_key');
        }

        $payload = [
            'merchant_uuid' => $merchantUuid,
            'amount' => $donate->amount,
            'order_id' => $donate->id,
            'description' => 'Пополнение баланса #' . $donate->id,
            'success_url' => route('payment.success', $donate->id),
            'fail_url' => route('payment.cancel', $donate->id),
        ];

        if (is_string($methodToCurrency) && $methodToCurrency !== '') {
            $payload['to_currency'] = $methodToCurrency;
        } elseif ($methodCode === 'bitcoin') {
            $payload['to_currency'] = 'BTC';
        } elseif ($methodCode === 'usdt') {
            $payload['to_currency'] = 'USDT';
        }

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $paymentKey,
            'Content-Type' => 'application/json',
        ])->post('https://api.heleket.com/v1/payment', $payload);

        $data = $response->json();

        if (! $response->successful()) {
            Log::channel('heleket')->error('Heleket create payment failed', [
                'status' => $response->status(),
                'response' => $data,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $data['message'] ?? $data['error'] ?? $response->body();
            throw new \Exception('Heleket: ' . $message);
        }

        Log::channel('heleket')->info('Creating payment', [
            'donate_id' => $donate->id,
            'response' => $data,
        ]);

        return [
            'url' => $data['url'] ?? $data['payment_url'] ?? null,
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $signature = $request->header('X-Heleket-Signature');
        $body = $request->getContent();

        $paymentKey = $this->gateway->getSetting('payment_key');
        $expectedSignature = hash_hmac('sha256', $body, $paymentKey);

        $isValid = hash_equals($expectedSignature, $signature);
        
        Log::channel('heleket')->info('Webhook verification', [
            'is_valid' => $isValid,
        ]);

        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $data = $request->json()->all();

        return new PaymentData(
            orderId: $data['order_id'] ?? $data['payment_id'],
            amount: (float) ($data['amount'] ?? 0),
            status: $this->mapStatus($data['status'] ?? 'pending'),
            transactionId: $data['payment_id'] ?? null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'heleket';
    }

    protected function mapStatus(string $status): string
    {
        return match (strtolower($status)) {
            'success', 'completed', 'paid' => 'success',
            'failed', 'cancelled', 'rejected' => 'failed',
            default => 'pending',
        };
    }
}

