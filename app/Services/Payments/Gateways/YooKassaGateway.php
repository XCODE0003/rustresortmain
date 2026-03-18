<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use YooKassa\Client;

class YooKassaGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;
    protected Client $client;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'yookassa')->firstOrFail();
        
        $this->client = new Client();
        $this->client->setAuth(
            $this->gateway->getSetting('merchant_id'),
            $this->gateway->getSetting('secret_key')
        );
    }

    public function createPayment(Donate $donate): array
    {
        $orderId = (string) $donate->id;
        $amount = $donate->amount;
        
        $payment = $this->client->createPayment([
            'amount' => [
                'value' => number_format($amount, 2, '.', ''),
                'currency' => $this->gateway->currency,
            ],
            'confirmation' => [
                'type' => 'redirect',
                'return_url' => route('payment.success', $donate->id),
            ],
            'capture' => true,
            'description' => 'Пополнение баланса #' . $orderId,
            'metadata' => [
                'order_id' => $orderId,
            ],
        ], uniqid('', true));
        
        Log::channel('yookassa')->info('Creating payment', [
            'donate_id' => $donate->id,
            'payment_id' => $payment->getId(),
        ]);
        
        return [
            'url' => $payment->getConfirmation()->getConfirmationUrl(),
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        try {
            $notification = $request->json()->all();
            
            if (!isset($notification['event']) || $notification['event'] !== 'payment.succeeded') {
                return false;
            }
            
            Log::channel('yookassa')->info('Webhook received', [
                'event' => $notification['event'],
            ]);
            
            return true;
        } catch (\Exception $e) {
            Log::channel('yookassa')->error('Webhook verification failed', [
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    public function processWebhook(Request $request): PaymentData
    {
        $notification = $request->json()->all();
        $payment = $notification['object'] ?? [];
        
        $orderId = $payment['metadata']['order_id'] ?? null;
        $amount = $payment['amount']['value'] ?? 0;
        $status = $payment['status'] ?? '';
        
        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: $status === 'succeeded' ? 'success' : 'pending',
            transactionId: $payment['id'] ?? null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        try {
            $payment = $this->client->getPaymentInfo($paymentId);
            return $payment->getStatus();
        } catch (\Exception $e) {
            Log::channel('yookassa')->error('Failed to get status', [
                'payment_id' => $paymentId,
                'error' => $e->getMessage(),
            ]);
            return 'unknown';
        }
    }

    public function getName(): string
    {
        return 'ЮKassa';
    }
}
