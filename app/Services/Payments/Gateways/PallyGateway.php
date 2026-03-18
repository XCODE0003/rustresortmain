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
        $apiUrl = $this->gateway->getSetting('api_url', 'https://pal24.pro/api/v1');
        $methodGateway = PaymentGateway::query()->where('code', $donate->payment_system)->first();
        $paymentMethod = $methodGateway?->getSetting('payment_method');

        if (empty($apiKey) || empty($shopId)) {
            throw new \Exception('Pally не настроен: укажите shop_id и api_key');
        }

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
        ])->post($apiUrl . '/bill/create', [
            'amount' => $donate->amount,
            'order_id' => $donate->id,
            'shop_id' => $shopId,
            'currency_in' => 'RUB',
            'name' => 'Пополнение баланса',
            'success_url' => route('payment.success', $donate->id),
            'fail_url' => route('payment.cancel', $donate->id),
            'payment_method' => $paymentMethod,
        ]);

        $data = $response->json();

        if (! $response->successful()) {
            Log::channel('pally')->error('Pally create bill failed', [
                'status' => $response->status(),
                'response' => $data,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $data['message'] ?? $data['error'] ?? $response->body();
            throw new \Exception('Pally: ' . $message);
        }

        Log::channel('pally')->info('Creating payment', [
            'donate_id' => $donate->id,
            'response' => $data,
        ]);

        return [
            'url' => $data['link_page_url'] ?? $data['url'] ?? null,
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $outSum = $request->input('OutSum');
        $invId = $request->input('InvId');
        $sign = $request->input('SignatureValue');
        
        $token = $this->gateway->getSetting('api_key');
        
        $expectedSign = md5($outSum . ':' . $invId . ':' . $token);
        
        $isValid = hash_equals($expectedSign, $sign);
        
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
            'Authorization' => 'Bearer ' . $apiKey,
        ])->get($apiUrl . '/bill/' . $paymentId);

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
}

