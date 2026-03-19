<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FreekassaGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        $this->gateway = PaymentGateway::where('code', 'freekassa')->firstOrFail();
    }

    public function createPayment(Donate $donate): array
    {
        $merchantId = $this->gateway->getSetting('merchant_id');
        $secretWord = $this->gateway->getSetting('secret_word');

        $orderId = $donate->id;
        $amount = $donate->amount;
        $currency = $this->gateway->currency;

        $sign = md5($merchantId.':'.$amount.':'.$secretWord.':'.$currency.':'.$orderId);

        $paymentUrl = 'https://pay.freekassa.ru';

        $params = [
            'm' => $merchantId,
            'oa' => $amount,
            'o' => $orderId,
            's' => $sign,
            'currency' => $currency,
        ];

        Log::channel('freekassa')->info('Creating payment', [
            'donate_id' => $donate->id,
            'amount' => $amount,
        ]);

        return [
            'url' => $paymentUrl.'?'.http_build_query($params),
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $merchantId = $request->input('MERCHANT_ID');
        $amount = $request->input('AMOUNT');
        $orderId = $request->input('MERCHANT_ORDER_ID');
        $sign = $request->input('SIGN');

        $secretWord2 = $this->gateway->getSetting('secret_word_2');

        $expectedSign = md5($merchantId.':'.$amount.':'.$secretWord2.':'.$orderId);

        $isValid = hash_equals($expectedSign, $sign);

        Log::channel('freekassa')->info('Webhook verification', [
            'order_id' => $orderId,
            'is_valid' => $isValid,
        ]);

        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $orderId = $request->input('MERCHANT_ORDER_ID');
        $amount = $request->input('AMOUNT');

        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $request->input('intid'),
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Freekassa';
    }
}
