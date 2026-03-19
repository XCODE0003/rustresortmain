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
        $currency = $methodGateway?->currency ?: $this->gateway->currency ?: 'USD';

        if (empty($paymentKey) || empty($merchantUuid)) {
            throw new \Exception('Heleket не настроен: укажите merchant_uuid и payment_key');
        }

        $payload = [
            'amount' => (string) $donate->amount,
            'currency' => $currency,
            'order_id' => (string) $donate->id,
            'url_return' => $this->publicRouteUrl('payment.success', $donate->id),
            'url_callback' => $this->publicRouteUrl('api.payments.webhook', ['gateway' => 'heleket']),
            'is_payment_multiple' => false,
            'lifetime' => '7200',
        ];

        if (is_string($methodToCurrency) && $methodToCurrency !== '') {
            $payload['to_currency'] = $methodToCurrency;
        } elseif ($methodCode === 'bitcoin') {
            $payload['to_currency'] = 'BTC';
        } elseif ($methodCode === 'usdt') {
            $payload['to_currency'] = 'USDT';
        }

        $jsonPayload = json_encode($payload);
        if ($jsonPayload === false) {
            throw new \Exception('Heleket: failed to encode payload');
        }

        $signature = md5(base64_encode($jsonPayload).$paymentKey);

        $response = Http::withHeaders([
            'merchant' => (string) $merchantUuid,
            'sign' => $signature,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->withBody($jsonPayload, 'application/json')->post('https://api.heleket.com/v1/payment');

        $data = $response->json();
        Log::channel('heleket')->info('HELEKET_CREATE_PAYMENT_RESPONSE', [
            'donate_id' => $donate->id,
            'status' => $response->status(),
            'headers' => $response->headers(),
            'body' => $response->body(),
            'json' => $data,
        ]);

        if (! $response->successful()) {
            Log::channel('heleket')->error('Heleket create payment failed', [
                'status' => $response->status(),
                'response' => $data,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $data['message'] ?? $data['error'] ?? $response->body();
            throw new \Exception('Heleket: '.$message);
        }

        Log::channel('heleket')->info('Creating payment', [
            'donate_id' => $donate->id,
            'payload' => $payload,
            'response' => $data,
        ]);

        $redirectUrl = $data['url']
            ?? $data['payment_url']
            ?? $data['data']['url']
            ?? $data['data']['payment_url']
            ?? $data['result']['url']
            ?? $data['result']['payment_url']
            ?? null;

        if (! is_string($redirectUrl) || $redirectUrl === '') {
            Log::channel('heleket')->error('HELEKET_EMPTY_REDIRECT_URL', [
                'donate_id' => $donate->id,
                'payment_system' => $donate->payment_system,
                'status' => $response->status(),
                'headers' => $response->headers(),
                'body' => $response->body(),
                'json' => $data,
            ]);
            throw new \Exception('Heleket: пустой redirect URL в ответе');
        }

        return [
            'url' => $redirectUrl,
            'method' => 'GET',
            'provider_response' => [
                'status' => $response->status(),
                'headers' => $response->headers(),
                'body' => $response->body(),
                'json' => $data,
            ],
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $signature = $request->header('X-Heleket-Signature');
        $body = $request->getContent();

        $paymentKey = $this->gateway->getSetting('payment_key');
        $expectedSignature = md5(base64_encode($body).$paymentKey);

        $isValid = hash_equals((string) $expectedSignature, (string) $signature);

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

    protected function publicRouteUrl(string $routeName, mixed $parameters = []): string
    {
        $baseUrl = rtrim((string) config('app.url', ''), '/');
        $path = route($routeName, $parameters, false);

        if ($baseUrl === '') {
            return route($routeName, $parameters);
        }

        return $baseUrl.'/'.ltrim($path, '/');
    }
}
