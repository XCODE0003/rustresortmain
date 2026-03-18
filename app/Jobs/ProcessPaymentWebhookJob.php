<?php

namespace App\Jobs;

use App\Models\Donate;
use App\Models\User;
use App\Services\Payments\DTOs\PaymentData;
use App\Services\Payments\PaymentManager;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class ProcessPaymentWebhookJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public string $gateway,
        public array $webhookData,
    ) {
        $this->onQueue('payments');
    }

    public function handle(PaymentManager $paymentManager): void
    {
        try {
            $gateway = $paymentManager->gateway($this->gateway);
            
            $request = new \Illuminate\Http\Request($this->webhookData);
            $paymentData = $gateway->processWebhook($request);

            $donate = Donate::where('id', $paymentData->orderId)
                ->orWhere('payment_id', $paymentData->orderId)
                ->first();

            if (! $donate) {
                Log::warning("Donate not found for order_id: {$paymentData->orderId}");
                return;
            }

            if ($donate->status !== 0) {
                Log::info("Donate {$donate->id} already processed, skipping");
                return;
            }

            if ($paymentData->isSuccess()) {
                $donate->update(['status' => 1]);

                $user = $donate->user;

                if ($donate->item_id) {
                    DeliverPurchaseItemsJob::dispatch($donate);
                    Log::info("Item delivery queued for donate {$donate->id}");
                } else {
                    $totalAmount = $donate->amount + ($donate->bonus_amount ?? 0);
                    $user->increment('balance', $totalAmount);
                    Log::info("Balance added for user {$user->id}: {$totalAmount} (amount: {$donate->amount}, bonus: {$donate->bonus_amount})");
                }
            } elseif ($paymentData->isFailed()) {
                $donate->update(['status' => 2]);
                Log::info("Payment failed for donate {$donate->id}");
            }
        } catch (\Exception $e) {
            Log::error("Payment webhook processing failed: {$e->getMessage()}", [
                'gateway' => $this->gateway,
                'data' => $this->webhookData,
                'trace' => $e->getTraceAsString(),
            ]);
            throw $e;
        }
    }
}
