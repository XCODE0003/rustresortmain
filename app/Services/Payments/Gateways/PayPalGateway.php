<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;

class PayPalGateway implements PaymentGatewayInterface
{
    public function createPayment(Donate $donate): array
    {
        $paypalUrl = config('payments.paypal.sandbox') 
            ? 'https://www.sandbox.paypal.com/cgi-bin/webscr'
            : 'https://www.paypal.com/cgi-bin/webscr';

        $params = http_build_query([
            'cmd' => '_xclick',
            'business' => config('payments.paypal.email'),
            'item_name' => 'Deposit #'.$donate->payment_id,
            'amount' => $donate->amount,
            'currency_code' => 'USD',
            'custom' => $donate->payment_id,
            'notify_url' => route('api.payments.webhook', 'paypal'),
            'return' => route('payment.success', $donate->id),
            'cancel_return' => route('payment.failure', $donate->id),
        ]);

        return [
            'url' => $paypalUrl.'?'.$params,
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $data = $request->all();
        $data['cmd'] = '_notify-validate';

        $verifyUrl = config('payments.paypal.sandbox')
            ? 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr'
            : 'https://ipnpb.paypal.com/cgi-bin/webscr';

        $response = file_get_contents($verifyUrl.'?'.http_build_query($data));

        return $response === 'VERIFIED';
    }

    public function processWebhook(Request $request): PaymentData
    {
        $data = $request->all();

        return new PaymentData(
            paymentId: $data['custom'] ?? $data['txn_id'],
            status: $this->mapStatus($data['payment_status'] ?? 'pending'),
            amount: (float) ($data['mc_gross'] ?? 0),
            metadata: $data
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'pending';
    }

    public function getName(): string
    {
        return 'PayPal';
    }

    protected function mapStatus(string $status): string
    {
        return match (strtolower($status)) {
            'completed', 'success' => 'success',
            'failed', 'denied', 'voided' => 'failed',
            default => 'pending',
        };
    }
}
