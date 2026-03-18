<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PayKeeperGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'paykeeper')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $serverUrl = $this->gateway->getSetting('server_url');
        $user = $this->gateway->getSetting('user');
        $password = $this->gateway->getSetting('password');
        
        $orderId = $donate->id;
        $amount = $donate->amount;
        
        $tokenResponse = Http::withBasicAuth($user, $password)
            ->get($serverUrl . '/info/settings/token/');
        
        $token = $tokenResponse->json()['token'] ?? null;
        
        if (!$token) {
            throw new \Exception('Failed to get PayKeeper token');
        }
        
        $invoiceResponse = Http::asForm()->post($serverUrl . '/change/invoice/preview/', [
            'pay_amount' => $amount,
            'clientid' => $donate->user_id,
            'orderid' => $orderId,
            'service_name' => 'Пополнение баланса',
            'token' => $token,
        ]);
        
        $invoiceData = $invoiceResponse->json();
        $invoiceId = $invoiceData['invoice_id'] ?? null;
        
        Log::channel('paykeeper')->info('Creating payment', [
            'donate_id' => $donate->id,
            'invoice_id' => $invoiceId,
        ]);
        
        return [
            'url' => $serverUrl . '/bill/' . $invoiceId . '/',
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $id = $request->input('id');
        $sum = $request->input('sum');
        $clientId = $request->input('clientid');
        $orderId = $request->input('orderid');
        $sign = $request->input('key');
        
        $secret = $this->gateway->getSetting('secret');
        
        $expectedSign = md5($id . $sum . $clientId . $orderId . $secret);
        
        $isValid = hash_equals($expectedSign, $sign);
        
        Log::channel('paykeeper')->info('Webhook verification', [
            'order_id' => $orderId,
            'is_valid' => $isValid,
        ]);
        
        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('orderid');
        $amount = $request->input('sum');
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $request->input('id'),
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'PayKeeper';
    }
}
