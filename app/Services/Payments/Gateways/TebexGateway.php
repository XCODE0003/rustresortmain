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

    protected array $allowedWebhookIps = ['18.209.80.3', '54.87.231.232', '159.224.90.242'];

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

        Log::channel('tebex')->info('TEBEX_CREATE_PAYMENT_STARTED', [
            'donate_id' => $donate->id,
            'payment_id' => $donate->payment_id,
            'payment_system' => $donate->payment_system,
            'has_public_token' => ! empty($publicToken),
            'has_package_id' => ! empty($packageId),
        ]);

        if (empty($publicToken)) {
            throw new \Exception('Tebex не настроен: укажите public_token');
        }

        if (empty($packageId)) {
            return $this->createHeadlessPayment($donate, $publicToken);
        }

        $basketResponse = Http::withHeaders([
            'X-Tebex-Public-Token' => $publicToken,
        ])->post('https://plugin.tebex.io/baskets', [
            'complete_url' => $this->publicRouteUrl('payment.success', $donate->id),
            'cancel_url' => $this->publicRouteUrl('payment.cancel', $donate->id),
        ]);

        Log::channel('tebex')->info('TEBEX_PLUGIN_BASKET_RESPONSE', [
            'donate_id' => $donate->id,
            'status' => $basketResponse->status(),
            'headers' => $basketResponse->headers(),
            'body' => $basketResponse->body(),
            'json' => $basketResponse->json(),
        ]);

        if (! $basketResponse->successful()) {
            $body = $basketResponse->json();
            Log::channel('tebex')->error('Tebex basket creation failed', [
                'status' => $basketResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $basketResponse->body();
            throw new \Exception('Failed to create Tebex basket: '.$message);
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

        Log::channel('tebex')->info('TEBEX_PLUGIN_ADD_PACKAGE_RESPONSE', [
            'donate_id' => $donate->id,
            'basket_ident' => $basketIdent,
            'status' => $packageResponse->status(),
            'headers' => $packageResponse->headers(),
            'body' => $packageResponse->body(),
            'json' => $packageResponse->json(),
        ]);

        if (! $packageResponse->successful()) {
            $body = $packageResponse->json();
            Log::channel('tebex')->error('Tebex add package failed', [
                'status' => $packageResponse->status(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $packageResponse->body();
            throw new \Exception('Failed to add Tebex package: '.$message);
        }

        Log::channel('tebex')->info('Creating payment', [
            'donate_id' => $donate->id,
            'payment_system' => $donate->payment_system,
            'basket_ident' => $basketIdent,
        ]);

        return [
            'url' => "https://checkout.tebex.io/checkout/{$basketIdent}",
            'method' => 'GET',
            'provider_response' => [
                'basket' => [
                    'status' => $basketResponse->status(),
                    'headers' => $basketResponse->headers(),
                    'body' => $basketResponse->body(),
                    'json' => $basketResponse->json(),
                ],
                'package' => [
                    'status' => $packageResponse->status(),
                    'headers' => $packageResponse->headers(),
                    'body' => $packageResponse->body(),
                    'json' => $packageResponse->json(),
                ],
            ],
        ];
    }

    protected function createHeadlessPayment(Donate $donate, string $publicToken): array
    {
        $baseUrl = 'https://headless.tebex.io/api/accounts/'.$publicToken;
        $successUrl = $this->publicRouteUrl('payment.success', $donate->id);
        $cancelUrl = $this->publicRouteUrl('payment.cancel', $donate->id);
        $returnAfterAuthUrl = $this->publicRouteUrl('balance.tebex', ['donate_id' => $donate->id]);

        Log::channel('tebex')->info('TEBEX_HEADLESS_CREATE_STARTED', [
            'donate_id' => $donate->id,
            'payment_system' => $donate->payment_system,
            'success_url' => $successUrl,
            'cancel_url' => $cancelUrl,
            'return_after_auth_url' => $returnAfterAuthUrl,
        ]);

        $basketResponse = Http::acceptJson()->post($baseUrl.'/baskets', [
            'complete_url' => $successUrl,
            'cancel_url' => $cancelUrl,
            'custom' => [
                'donate_id' => (string) $donate->id,
            ],
        ]);

        if (! $basketResponse->successful()) {
            $body = $basketResponse->json();
            Log::channel('tebex')->error('Tebex headless basket creation failed', [
                'status' => $basketResponse->status(),
                'headers' => $basketResponse->headers(),
                'body' => $basketResponse->body(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $basketResponse->body();
            throw new \Exception('Failed to create Tebex basket: '.$message);
        }

        $basketData = $basketResponse->json();
        Log::channel('tebex')->info('TEBEX_HEADLESS_BASKET_RESPONSE', [
            'donate_id' => $donate->id,
            'status' => $basketResponse->status(),
            'headers' => $basketResponse->headers(),
            'body' => $basketResponse->body(),
            'json' => $basketData,
        ]);
        $basketIdent = $basketData['data']['ident'] ?? null;

        if (! $basketIdent) {
            throw new \Exception('Failed to create Tebex basket: empty basket ident');
        }

        $authResponse = Http::acceptJson()->get($baseUrl."/baskets/{$basketIdent}/auth", [
            'returnUrl' => $returnAfterAuthUrl,
        ]);

        if (! $authResponse->successful()) {
            $body = $authResponse->json();
            Log::channel('tebex')->error('Tebex headless auth url failed', [
                'status' => $authResponse->status(),
                'headers' => $authResponse->headers(),
                'body' => $authResponse->body(),
                'response' => $body,
                'payment_system' => $donate->payment_system,
            ]);

            $message = $body['error_description'] ?? $body['error'] ?? $authResponse->body();
            throw new \Exception('Failed to get Tebex auth url: '.$message);
        }

        $authData = $authResponse->json();
        Log::channel('tebex')->info('TEBEX_HEADLESS_AUTH_RESPONSE', [
            'donate_id' => $donate->id,
            'basket_ident' => $basketIdent,
            'status' => $authResponse->status(),
            'headers' => $authResponse->headers(),
            'body' => $authResponse->body(),
            'json' => $authData,
        ]);
        $redirectUrl = $authData[0]['url'] ?? $authData['data']['url'] ?? null;

        if (! $redirectUrl) {
            throw new \Exception('Failed to get Tebex auth url: empty response');
        }

        $donate->update(['payment_id' => $basketIdent]);

        Log::channel('tebex')->info('Creating headless Tebex payment', [
            'donate_id' => $donate->id,
            'payment_system' => $donate->payment_system,
            'basket_ident' => $basketIdent,
            'return_after_auth_url' => $returnAfterAuthUrl,
            'redirect_url' => $redirectUrl,
        ]);

        return [
            'url' => $redirectUrl,
            'method' => 'GET',
            'provider_response' => [
                'basket' => [
                    'status' => $basketResponse->status(),
                    'headers' => $basketResponse->headers(),
                    'body' => $basketResponse->body(),
                    'json' => $basketData,
                ],
                'auth' => [
                    'status' => $authResponse->status(),
                    'headers' => $authResponse->headers(),
                    'body' => $authResponse->body(),
                    'json' => $authData,
                ],
            ],
        ];
    }

    public function verifyWebhook(Request $request): bool
    {
        if (! in_array($request->ip(), $this->allowedWebhookIps, true)) {
            Log::channel('tebex')->warning('Tebex webhook ip denied', [
                'ip' => $request->ip(),
                'allowed_ips' => $this->allowedWebhookIps,
            ]);

            return false;
        }

        $data = $request->json()->all();
        $type = (string) ($data['type'] ?? '');

        if ($type !== 'payment.completed') {
            Log::channel('tebex')->warning('Tebex webhook wrong type', [
                'type' => $type,
            ]);

            return false;
        }

        $subject = $data['subject'] ?? null;
        $subjectStatusId = (int) ($subject['status']['id'] ?? 0);
        if (! is_array($subject) || $subjectStatusId !== 1) {
            Log::channel('tebex')->warning('Tebex webhook wrong subject status', [
                'subject_status_id' => $subjectStatusId,
            ]);

            return false;
        }

        $webhookKey = $this->gateway->getSetting('webhook_key');
        $receivedSign = $request->header('X-Signature');

        if (empty($webhookKey) || empty($receivedSign)) {
            Log::channel('tebex')->warning('Tebex webhook verification skipped because key/sign is empty', [
                'has_webhook_key' => ! empty($webhookKey),
                'has_signature' => ! empty($receivedSign),
            ]);

            return false;
        }

        $body = $request->getContent();
        $bodyHash = hash('sha256', $body);
        $expectedSign = hash_hmac('sha256', $bodyHash, $webhookKey);

        $isValid = hash_equals($expectedSign, $receivedSign);

        Log::channel('tebex')->info('Webhook verification', [
            'is_valid' => $isValid,
            'received_signature' => $receivedSign,
            'expected_signature' => $expectedSign,
        ]);

        return $isValid;
    }

    public function processWebhook(Request $request): PaymentData
    {
        $data = $request->json()->all();
        $type = (string) ($data['type'] ?? '');
        $subject = $data['subject'] ?? [];
        $subjectStatusId = (int) ($subject['status']['id'] ?? 0);
        $transactionId = $subject['transaction_id'] ?? null;
        $customDonateId = $subject['custom']['donate_id'] ?? null;
        $orderId = $customDonateId ?? ($subject['order_id'] ?? $transactionId);
        $amount = (float) ($subject['price_paid']['amount'] ?? $subject['price']['amount'] ?? 0);
        $steamId = $subject['customer']['username']['id'] ?? null;
        $paymentMethodName = $subject['payment_method']['name'] ?? null;

        $status = 'pending';
        if ($type === 'payment.completed' && $subjectStatusId === 1) {
            $status = 'success';
        } elseif ($type === 'payment.declined' || $type === 'payment.refunded') {
            $status = 'failed';
        }

        Log::channel('tebex')->info('Tebex webhook payload parsed', [
            'type' => $type,
            'subject_status_id' => $subjectStatusId,
            'order_id' => $orderId,
            'transaction_id' => $transactionId,
            'status_mapped' => $status,
            'amount' => $amount,
            'steam_id' => $steamId,
            'payment_method_name' => $paymentMethodName,
        ]);

        return new PaymentData(
            orderId: $orderId,
            amount: $amount,
            status: $status,
            transactionId: $transactionId,
            metadata: [
                'gateway_type' => $type,
                'subject_status_id' => $subjectStatusId,
                'custom_donate_id' => $customDonateId,
                'steam_id' => $steamId,
                'payment_method_name' => $paymentMethodName,
            ],
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

    protected function publicRouteUrl(string $routeName, mixed $parameters = []): string
    {
        $baseUrl = rtrim((string) config('app.url', ''), '/');
        $path = route($routeName, $parameters, false);

        if ($baseUrl === '') {
            return route($routeName, $parameters);
        }

        return $baseUrl.'/'.ltrim($path, '/');
    }
}
