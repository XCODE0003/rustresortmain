<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class QiwiGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'qiwi')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $secretKey = $this->gateway->getSetting('secret_key');
        $orderId = (string) $donate->id;
        $amount = $donate->amount;
        
        $billData = [
            'amount' => [
                'currency' => $this->gateway->currency,
                'value' => number_format($amount, 2, '.', ''),
            ],
            'expirationDateTime' => date('c', strtotime('+1 day')),
            'customFields' => [
                'innerID' => $orderId,
            ],
        ];
        
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $secretKey,
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->put("https://api.qiwi.com/partner/bill/v1/bills/{$orderId}", $billData);
        
        $data = $response->json();
        
        Log::channel('qiwi')->info('Creating payment', [
            'donate_id' => $donate->id,
            'bill_id' => $orderId,
            'response' => $data,
        ]);
        
        return [
            'url' => $data['payUrl'] ?? '',
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $signature = $request->header('X-Api-Signature-SHA256');
        $body = $request->getContent();
        
        $secretKey = $this->gateway->getSetting('secret_key');
        $expectedSignature = hash_hmac('sha256', $body, $secretKey);
        
        $isValid = hash_equals($expectedSignature, $signature);
        
        Log::channel('qiwi')->info('Webhook verification', [
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $data = $request->json()->all();
        $bill = $data['bill'] ?? [];
        
        $orderId = $bill['customFields']['innerID'] ?? null;
        $amount = $bill['amount']['value'] ?? 0;
        $status = $bill['status']['value'] ?? '';
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: $status === 'PAID' ? 'success' : 'pending',
            transactionId: $bill['billId'] ?? null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        try {
            $secretKey = $this->gateway->getSetting('secret_key');
            
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $secretKey,
                'Accept' => 'application/json',
            ])->get("https://api.qiwi.com/partner/bill/v1/bills/{$paymentId}");
            
            $data = $response->json();
            return $data['status']['value'] ?? 'unknown';
        } catch (\Exception $e) {
            Log::channel('qiwi')->error('Failed to get status', [
                'payment_id' => $paymentId,
                'error' => $e->getMessage(),
            ]);
            return 'unknown';
        }
    }

    public function getName(): string
    {
        return 'QIWI';
    }
}

