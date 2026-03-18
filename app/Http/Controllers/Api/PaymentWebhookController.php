<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Jobs\ProcessPaymentWebhookJob;
use App\Services\Payments\PaymentManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentWebhookController extends Controller
{
    public function __construct(
        public PaymentManager $paymentManager,
    ) {}

    public function handle(Request $request, string $gateway): \Illuminate\Http\Response
    {
        Log::info("Webhook received from {$gateway}", $request->all());

        if (! $this->paymentManager->hasGateway($gateway)) {
            Log::warning("Unknown payment gateway: {$gateway}");

            return response('Gateway not found', 404);
        }

        try {
            $gatewayInstance = $this->paymentManager->gateway($gateway);

            if (! $gatewayInstance->verifyWebhook($request)) {
                Log::warning("Invalid signature from {$gateway}");

                return response('Invalid signature', 403);
            }

            ProcessPaymentWebhookJob::dispatch($gateway, $request->all());

            return response('OK', 200);
        } catch (\Exception $e) {
            Log::error("Webhook handling failed: {$e->getMessage()}", [
                'gateway' => $gateway,
                'data' => $request->all(),
            ]);

            return response('Error', 500);
        }
    }
}
