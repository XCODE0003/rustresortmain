<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class AlfabankGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'alfabank')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $openKey = $this->gateway->getSetting('open_key');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        
        $response = Http::post('https://api.alfabank.ru/payment/rest/register.do', [
            'userName' => $openKey,
            'password' => $this->gateway->getSetting('password'),
            'orderNumber' => $orderId,
            'amount' => $amount * 100,
            'returnUrl' => route('payment.success', $donate->id),
            'failUrl' => route('payment.cancel', $donate->id),
        ]);
        
        $data = $response->json();
        
        Log::channel('alfabank')->info('Creating payment', [
            'donate_id' => $donate->id,
            'response' => $data,
        ]);
        
        if (isset($data['formUrl'])) {
            return [
                'url' => $data['formUrl'],
                'method' => 'GET',
            ];
        }
        
        throw new \Exception('Failed to create Alfabank payment');
    }

    public function verifyWebhook(Request $request): bool
    {
        $operation = $request->input('operation');
        $status = $request->input('status');
        
        if ($operation !== 'deposited' || $status != 1) {
            return false;
        }
        
        $callbackToken = $this->gateway->getSetting('callback_token');
        
        $signParams = [
            'operation' => $operation,
            'notification_type' => $request->input('notification_type'),
            'order_id' => $request->input('order_id'),
            'datetime' => $request->input('datetime'),
            'withdrawal_amount' => $request->input('withdrawal_amount'),
            'status' => $status,
        ];
        
        $signString = implode('', $signParams);
        $expectedSign = hash_hmac('sha256', $signString, $callbackToken);
        
        $receivedSign = $request->input('signature');
        $isValid = hash_equals($expectedSign, $receivedSign);
        
        Log::channel('alfabank')->info('Webhook verification', [
            'order_id' => $request->input('order_id'),
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('order_id');
        $amount = $request->input('withdrawal_amount');
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $request->input('payment_id'),
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Alfabank';
    }
}
