<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UnitPayGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'unitpay')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $publicKey = $this->gateway->getSetting('public_key');
        $secretKey = $this->gateway->getSetting('secret_key');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        $currency = $this->gateway->currency;
        $desc = 'Пополнение баланса #' . $orderId;
        
        $params = [
            'account' => $orderId,
            'currency' => $currency,
            'desc' => $desc,
            'sum' => $amount,
        ];
        
        ksort($params);
        $signString = implode('{up}', $params) . '{up}' . $secretKey;
        $sign = hash('sha256', $signString);
        
        $paymentUrl = 'https://unitpay.money/pay/' . $publicKey;
        
        $params['signature'] = $sign;
        
        Log::channel('unitpay')->info('Creating payment', [
            'donate_id' => $donate->id,
            'params' => $params,
        ]);
        
        return [
            'url' => $paymentUrl . '?' . http_build_query($params),
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $method = $request->input('method');
        $params = $request->input('params', []);
        
        $secretKey = $this->gateway->getSetting('secret_key');
        
        $signParams = [
            'account' => $params['account'] ?? '',
            'orderSum' => $params['orderSum'] ?? '',
            'orderCurrency' => $params['orderCurrency'] ?? '',
            'unitpayId' => $params['unitpayId'] ?? '',
        ];
        
        ksort($signParams);
        $signString = implode('{up}', $signParams) . '{up}' . $secretKey;
        $expectedSign = hash('sha256', $signString);
        
        $receivedSign = $params['signature'] ?? '';
        $isValid = hash_equals($expectedSign, $receivedSign);
        
        Log::channel('unitpay')->info('Webhook verification', [
            'method' => $method,
            'order_id' => $params['account'] ?? null,
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $method = $request->input('method');
        $params = $request->input('params', []);
        
        $orderId = $params['account'] ?? null;
        $amount = $params['orderSum'] ?? 0;
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: $method === 'pay' ? 'success' : 'pending',
            transactionId: $params['unitpayId'] ?? null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'UnitPay';
    }
}
