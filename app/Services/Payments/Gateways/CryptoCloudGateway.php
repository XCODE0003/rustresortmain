<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class CryptoCloudGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'cryptocloud')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $shopId = $this->gateway->getSetting('shop_id');
        $apiKey = $this->gateway->getSetting('api_key');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        
        $response = Http::withHeaders([
            'Authorization' => 'Token ' . $apiKey,
        ])->post('https://api.cryptocloud.plus/v1/invoice/create', [
            'shop_id' => $shopId,
            'amount' => $amount,
            'order_id' => $orderId,
            'currency' => $this->gateway->currency,
        ]);
        
        $data = $response->json();
        
        Log::channel('cryptocloud')->info('Creating payment', [
            'donate_id' => $donate->id,
            'response' => $data,
        ]);
        
        if (isset($data['result']['link'])) {
            return [
                'url' => $data['result']['link'],
                'method' => 'GET',
            ];
        }
        
        throw new \Exception('Failed to create CryptoCloud payment');
    }

    public function verifyWebhook(Request $request): bool
    {
        $token = $request->header('Authorization');
        
        if (!$token) {
            return false;
        }
        
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }
        
        [$header, $payload, $signature] = $parts;
        
        $secretKey = $this->gateway->getSetting('secret_key');
        $expectedSignature = hash_hmac('sha256', $header . '.' . $payload, $secretKey);
        
        $isValid = hash_equals($expectedSignature, $signature);
        
        Log::channel('cryptocloud')->info('Webhook verification', [
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('order_id');
        $amount = $request->input('amount_crypto');
        $status = $request->input('status');
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: $status === 'success' ? 'success' : 'pending',
            transactionId: $request->input('invoice_id'),
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'CryptoCloud';
    }
}
