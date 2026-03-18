<?php

namespace App\Services\Payments\Gateways;

use App\Models\Donate;
use App\Models\PaymentGateway;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TebexGateway implements PaymentGatewayInterface
{
    protected PaymentGateway $gateway;

    public function __construct()
    {
        if (! PaymentGateway::getConnectionResolver()) {
            $this->gateway = new PaymentGateway([
                'code' => 'tebex',
                'settings' => [],
            ]);

            return;
        }

        $this->gateway = PaymentGateway::query()
            ->where('code', 'tebex')
            ->first() ?? new PaymentGateway([
            'code' => 'tebex',
            'settings' => [],
        ]);
    }

    public function createPayment(Donate $donate): array
    {
        $publicToken = $this->gateway->getSetting('public_token');
        $methodGateway = PaymentGateway::query()->where('code', $donate->payment_system)->first();
        $packageId = $methodGateway?->getSetting('package_id') ?: $this->gateway->getSetting('package_id');

        if (empty($publicToken)) {
            throw new \Exception('Tebex не настроен: укажите public_token');
        }

        if (empty($packageId)) {
            return $this->createHeadlessPayment($donate, $publicToken);
        }

        $basketResponse = Http::withHeaders([
            'X-Tebex-Public-Token' => $publicToken,
        ])->post('https://plugin.tebex.io/baskets', [
            'complete_url' => route('payment.success', $donate->id),
            'cancel_url' => route('payment.cancel', $donate->id),
        ]);

        if (! $basketResponse->successful()) {
            $body = $basketResponse->json();
            Log::channel('tebex')->error('Tebex basket creation failed', [
                'status' => $basketResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $basketResponse->body();
            throw new \Exception('Failed to create Tebex basket: ' . $message);
        }

        $basketData = $basketResponse->json();
        $basketIdent = $basketData['data']['ident'] ?? null;

        if (! $basketIdent) {
            throw new \Exception('Failed to create Tebex basket: empty basket ident');
        }

        $packageResponse = Http::withHeaders([
            'X-Tebex-Public-Token' => $publicToken,
        ])->post("https://plugin.tebex.io/baskets/{$basketIdent}/packages", [
            'package_id' => $packageId,
            'quantity' => 1,
            'type' => 'single',
        ]);

        if (! $packageResponse->successful()) {
            $body = $packageResponse->json();
            Log::channel('tebex')->error('Tebex add package failed', [
                'status' => $packageResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $packageResponse->body();
            throw new \Exception('Failed to add Tebex package: ' . $message);
        }

        Log::channel('tebex')->info('Creating payment', [
            'donate_id' => $donate->id,
            'payment_system' => $donate->payment_system,
            'basket_ident' => $basketIdent,
        ]);

        return [
            'url' => "https://checkout.tebex.io/checkout/{$basketIdent}",
            'method' => 'GET',
        ];
    }

    protected function createHeadlessPayment(Donate $donate, string $publicToken): array
    {
        $baseUrl = 'https://headless.tebex.io/api/accounts/' . $publicToken;

        $basketResponse = Http::acceptJson()->post($baseUrl . '/baskets', [
            'complete_url' => route('payment.success', $donate->id),
            'cancel_url' => route('payment.cancel', $donate->id),
            'custom' => [
                'donate_id' => (string) $donate->id,
            ],
        ]);

        if (! $basketResponse->successful()) {
            $body = $basketResponse->json();
            Log::channel('tebex')->error('Tebex headless basket creation failed', [
                'status' => $basketResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $basketResponse->body();
            throw new \Exception('Failed to create Tebex basket: ' . $message);
        }

        $basketData = $basketResponse->json();
        $basketIdent = $basketData['data']['ident'] ?? null;

        if (! $basketIdent) {
            throw new \Exception('Failed to create Tebex basket: empty basket ident');
        }

        $authResponse = Http::acceptJson()->get($baseUrl . "/baskets/{$basketIdent}/auth", [
            'returnUrl' => route('payment.success', $donate->id),
        ]);

        if (! $authResponse->successful()) {
            $body = $authResponse->json();
            Log::channel('tebex')->error('Tebex headless auth url failed', [
                'status' => $authResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $authResponse->body();
            throw new \Exception('Failed to get Tebex auth url: ' . $message);
        }

        $authData = $authResponse->json();
        $redirectUrl = $authData[0]['url'] ?? $authData['data']['url'] ?? null;

        if (! $redirectUrl) {
            throw new \Exception('Failed to get Tebex auth url: empty response');
        }

        $donate->update(['payment_id' => $basketIdent]);

        Log::channel('tebex')->info('Creating headless Tebex payment', [
            'donate_id' => $donate->id,
            'payment_system' => $donate->payment_system,
            'basket_ident' => $basketIdent,
        ]);

        return [
            'url' => $redirectUrl,
            'method' => 'GET',
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        $webhookKey = $this->gateway->getSetting('webhook_key');
        $receivedSign = $request->header('X-Signature');

        $body = $request->getContent();
        $bodyHash = hash('sha256', $body);
        $expectedSign = hash_hmac('sha256', $bodyHash, $webhookKey);

        $isValid = hash_equals($expectedSign, $receivedSign);

        Log::channel('tebex')->info('Webhook verification', [
            'is_valid' => $isValid,
        ]);

        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $data = $request->json()->all();

        $orderId = $data['subject']['order_id'] ?? null;
        $amount = $data['subject']['price']['amount'] ?? 0;

        return new PaymentData(
            orderId: $orderId,
            amount: (float) $amount,
            status: 'success',
            transactionId: $data['subject']['transaction_id'] ?? null,
        );
    }

    public function getStatus(string $paymentId): string
    {
        return 'unknown';
    }

    public function getName(): string
    {
        return 'Tebex';
    }
}
