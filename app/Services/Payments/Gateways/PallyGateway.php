<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PallyGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        if (! PaymentGateway::getConnectionResolver()) {
            $this->gateway = new PaymentGateway([
                'code' => 'pally',
                'settings' => [],
            ]);

            return;
        }

        $this->gateway = PaymentGateway::query()
            ->where('code', 'pally')
            ->first() ?? new PaymentGateway([
                'code' => 'pally',
                'settings' => [],
            ]);
    }

    public function createPayment(Donate $donate): array
    {
        $apiKey = $this->gateway->getSetting('api_key');
        $shopId = $this->gateway->getSetting('shop_id');
        $apiUrl = rtrim((string) $this->gateway->getSetting('api_url', 'https://pal24.pro/api/v1/'), '/').'/';
        $methodGateway = PaymentGateway::query()->where('code', $donate->payment_system)->first();
        $paymentMethod = $methodGateway?->getSetting('payment_method');
        $successUrl = $this->publicRouteUrl('payment.success', $donate->id);
        $failUrl = $this->publicRouteUrl('payment.cancel', $donate->id);

        if ($this->isLocalOrPrivateUrl($successUrl) || $this->isLocalOrPrivateUrl($failUrl)) {
            $successUrl = null;
            $failUrl = null;
        }

        if (empty($apiKey) || empty($shopId)) {
            throw new \Exception('Pally не настроен: укажите shop_id и api_key');
        }

        $payload = [
            'amount' => $donate->amount,
            'shop_id' => $shopId,
            'order_id' => (string) $donate->id,
            'description' => 'Пополнение баланса',
            'type' => 'normal',
            'currency_in' => 'RUB',
            'custom' => 'donate_id:'.$donate->id,
            'payer_pays_commission' => 1,
            'name' => 'Пополнение баланса',
            'success_url' => $successUrl,
            'fail_url' => $failUrl,
        ];

        if (is_string($paymentMethod) && $paymentMethod !== '') {
            $payload['payment_method'] = $paymentMethod;
        }

        $payload = array_filter($payload, static function (mixed $value): bool {
            return $value !== null && $value !== '';
        });

        $response = Http::withHeaders([
            'Authorization' => 'Bearer '.$apiKey,
        ])->asForm()->post($apiUrl.'bill/create', $payload);

        $data = $response->json();
        Log::channel('pally')->info('PALLY_CREATE_BILL_RESPONSE', [
            'donate_id' => $donate->id,
            'status' => $response->status(),
            'headers' => $response->headers(),
            'body' => $response->body(),
            'json' => $data,
        ]);

        if (! $response->successful()) {
            Log::channel('pally')->error('Pally create bill failed', [
                'status' => $response->status(),
                'response' => $data,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $data['message'] ?? $data['error'] ?? $response->body();
            throw new \Exception('Pally: '.$message);
        }

        Log::channel('pally')->info('Creating payment', [
            'donate_id' => $donate->id,
            'payload' => $payload,
            'response' => $data,
        ]);

        $redirectUrl = $data['link_page_url'] ?? $data['url'] ?? null;

        if (! is_string($redirectUrl) || $redirectUrl === '') {
            throw new \Exception('Pally: пустой redirect URL в ответе');
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
        $outSum = $request->input('OutSum');
        $invId = $request->input('InvId');
        $sign = $request->input('SignatureValue');

        $token = $this->gateway->getSetting('api_key');

        $expectedSign = strtoupper(md5($outSum.':'.$invId.':'.$token));
        $receivedSign = strtoupper((string) $sign);

        $isValid = hash_equals($expectedSign, $receivedSign);

        Log::channel('pally')->info('Webhook verification', [
            'order_id' => $invId,
            'is_valid' => $isValid,
        ]);

        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('InvId');
        $amount = $request->input('OutSum');
        $type = $request->input('type', 'payment');

        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: $this->mapStatus($type),
            transactionId: $request->input('TrsId'),
        );
    }

    public function getStatus(string $paymentId): string
    {
        $apiKey = $this->gateway->getSetting('api_key');
        $apiUrl = $this->gateway->getSetting('api_url', 'https://pal24.pro/api/v1');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer '.$apiKey,
        ])->get($apiUrl.'/bill/'.$paymentId);

        $data = $response->json();

        return $this->mapStatus($data['status'] ?? 'pending');
    }

    public function getName(): string
    {
        return 'Pally';
    }

    protected function mapStatus(string $status): string
    {
        return match (strtolower($status)) {
            'payment', 'success', 'paid' => 'success',
            'refund', 'chargeback', 'cancelled' => 'failed',
            default => 'pending',
        };
    }

    protected function isLocalOrPrivateUrl(?string $url): bool
    {
        if (! is_string($url) || $url === '') {
            return true;
        }

        $host = parse_url($url, PHP_URL_HOST);
        if (! is_string($host) || $host === '') {
            return true;
        }

        $host = strtolower($host);
        if ($host === 'localhost' || $host === '127.0.0.1' || $host === '::1') {
            return true;
        }

        if (filter_var($host, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false) {
            return true;
        }

        return false;
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
