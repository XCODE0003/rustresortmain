<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EnotGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'enot')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $merchantId = $this->gateway->getSetting('merchant_id');
        $secretWord = $this->gateway->getSetting('secret_word');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        
        $sign = md5($merchantId . ':' . $amount . ':' . $secretWord . ':' . $orderId);
        
        $paymentUrl = 'https://enot.io/pay';
        
        $params = [
            'm' => $merchantId,
            'oa' => $amount,
            'o' => $orderId,
            's' => $sign,
            'cr' => $this->gateway->currency,
        ];
        
        Log::channel('enot')->info('Creating payment', [
            'donate_id' => $donate->id,
            'amount' => $amount,
            'url' => $paymentUrl . '?' . http_build_query($params),
        ]);
        
        return [
            'url' => $paymentUrl . '?' . http_build_query($params),
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $merchantId = $request->input('merchant');
        $amount = $request->input('amount');
        $orderId = $request->input('merchant_id');
        $sign = $request->input('sign_2');
        
        $secretWord2 = $this->gateway->getSetting('secret_word_2');
        
        $expectedSign = md5($merchantId . ':' . $amount . ':' . $secretWord2 . ':' . $orderId);
        
        $isValid = hash_equals($expectedSign, $sign);
        
        Log::channel('enot')->info('Webhook verification', [
            'order_id' => $orderId,
            'is_valid' => $isValid,
            'expected_sign' => $expectedSign,
            'received_sign' => $sign,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('merchant_id');
        $amount = $request->input('amount');
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $request->input('merchant') . '_' . $orderId,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Enot.io';
    }
}
