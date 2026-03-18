<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class CentGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'cent')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $authorization = $this->gateway->getSetting('authorization');
        $shopId = $this->gateway->getSetting('shop_id');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $authorization,
        ])->post('https://cent.app/api/v1/bill/create', [
            'amount' => $amount,
            'order_id' => $orderId,
            'shop_id' => $shopId,
        ]);
        
        $data = $response->json();
        
        Log::channel('cent')->info('Creating payment', [
            'donate_id' => $donate->id,
            'response' => $data,
        ]);
        
        if (isset($data['link_page_url'])) {
            return [
                'url' => $data['link_page_url'],
                'method' => 'GET',
            ];
        }
        
        throw new \Exception('Failed to create Cent.app payment: ' . ($data['message'] ?? 'Unknown error'));
    }

    public function verifyWebhook(Request $request): bool
    {
        $outSum = $request->input('OutSum');
        $invId = $request->input('InvId');
        $sign = $request->input('SignatureValue');
        
        $apiToken = $this->gateway->getSetting('authorization');
        
        $expectedSign = md5($outSum . ':' . $invId . ':' . $apiToken);
        
        $isValid = hash_equals($expectedSign, $sign);
        
        Log::channel('cent')->info('Webhook verification', [
            'order_id' => $invId,
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('InvId');
        $amount = $request->input('OutSum');
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $request->input('TransactionId') ?? $orderId,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Cent.app';
    }
}
