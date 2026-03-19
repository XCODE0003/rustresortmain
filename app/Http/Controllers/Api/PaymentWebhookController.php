<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Jobs\ProcessPaymentWebhookJob;
use App\Services\Payments\PaymentManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class PaymentWebhookController extends Controller
{
    public function __construct(
        public PaymentManager $paymentManager,
    ) {}

    public function handle(Request $request, string $gateway): Response
    {
        Log::info('PAYMENT_WEBHOOK_RECEIVED', [
            'gateway' => $gateway,
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'headers' => [
                'x_signature' => $request->header('X-Signature'),
                'content_type' => $request->header('Content-Type'),
            ],
            'payload' => $request->all(),
            'raw_body' => $request->getContent(),
        ]);

        if (! $this->paymentManager->hasGateway($gateway)) {
            Log::warning('PAYMENT_WEBHOOK_UNKNOWN_GATEWAY', [
                'gateway' => $gateway,
            ]);

            return response('Gateway not found', 404);
        }

        try {
            if ($gateway === 'tebex') {
                $payload = $request->json()->all();
                if (($payload['type'] ?? null) === 'validation.webhook' && isset($payload['id'])) {
                    Log::info('PAYMENT_WEBHOOK_TEBEX_VALIDATION_OK', [
                        'gateway' => $gateway,
                        'validation_id' => $payload['id'],
                    ]);

                    return response()->json(['id' => $payload['id']]);
                }
            }

            $gatewayInstance = $this->paymentManager->gateway($gateway);

            if (! $gatewayInstance->verifyWebhook($request)) {
                Log::warning('PAYMENT_WEBHOOK_INVALID_SIGNATURE', [
                    'gateway' => $gateway,
                    'payload' => $request->all(),
                ]);

                return response('Invalid signature', 403);
            }

            ProcessPaymentWebhookJob::dispatch($gateway, $request->all());

            Log::info('PAYMENT_WEBHOOK_JOB_DISPATCHED', [
                'gateway' => $gateway,
            ]);

            return response('OK', 200);
        } catch (\Exception $e) {
            Log::error('PAYMENT_WEBHOOK_HANDLE_FAILED', [
                'message' => $e->getMessage(),
                'gateway' => $gateway,
                'data' => $request->all(),
            ]);

            return response('Error', 500);
        }
    }
}
