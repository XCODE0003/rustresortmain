<?php

namespace App\Jobs;

use App\Models\Donate;
use App\Models\User;
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
            Log::info('PAYMENT_WEBHOOK_JOB_STARTED', [
                'gateway' => $this->gateway,
                'payload' => $this->webhookData,
            ]);

            $gateway = $paymentManager->gateway($this->gateway);

            $request = new \Illuminate\Http\Request($this->webhookData);
            $paymentData = $gateway->processWebhook($request);

            Log::info('PAYMENT_WEBHOOK_PARSED', [
                'gateway' => $this->gateway,
                'order_id' => $paymentData->orderId,
                'status' => $paymentData->status,
                'amount' => $paymentData->amount,
                'transaction_id' => $paymentData->transactionId,
                'metadata' => $paymentData->metadata,
            ]);

            if ($paymentData->transactionId && Donate::where('payment_id', $paymentData->transactionId)->exists()) {
                Log::warning('PAYMENT_WEBHOOK_DUPLICATE_TRANSACTION', [
                    'gateway' => $this->gateway,
                    'transaction_id' => $paymentData->transactionId,
                ]);

                return;
            }

            $donate = Donate::where('id', $paymentData->orderId)
                ->orWhere('payment_id', $paymentData->orderId)
                ->first();

            if (! $donate) {
                $steamId = $paymentData->metadata['steam_id'] ?? null;
                $user = null;
                if ($steamId !== null && $steamId !== '') {
                    $user = User::query()->where('steam_id', (string) $steamId)->first();
                }

                if ($this->gateway === 'tebex' && $user && $paymentData->isSuccess()) {
                    $donate = Donate::create([
                        'payment_system' => 'tebex: '.((string) ($paymentData->metadata['payment_method_name'] ?? 'unknown')),
                        'payment_id' => (string) ($paymentData->transactionId ?? uniqid('tebex_', true)),
                        'user_id' => $user->id,
                        'amount' => $paymentData->amount,
                        'bonus_amount' => 0,
                        'item_id' => 0,
                        'var_id' => 0,
                        'steam_id' => $user->steam_id,
                        'server' => 1,
                        'status' => 0,
                    ]);

                    Log::info('PAYMENT_WEBHOOK_TEBEX_DONATE_CREATED_FROM_WEBHOOK', [
                        'gateway' => $this->gateway,
                        'donate_id' => $donate->id,
                        'user_id' => $user->id,
                        'transaction_id' => $paymentData->transactionId,
                    ]);
                }
            }

            if (! $donate) {
                Log::warning('PAYMENT_WEBHOOK_DONATE_NOT_FOUND', [
                    'gateway' => $this->gateway,
                    'order_id' => $paymentData->orderId,
                ]);

                return;
            }

            Log::info('PAYMENT_WEBHOOK_DONATE_FOUND', [
                'gateway' => $this->gateway,
                'donate_id' => $donate->id,
                'donate_status' => $donate->status,
                'payment_system' => $donate->payment_system,
            ]);

            if ($donate->status !== 0) {
                Log::info('PAYMENT_WEBHOOK_DONATE_ALREADY_PROCESSED', [
                    'gateway' => $this->gateway,
                    'donate_id' => $donate->id,
                    'donate_status' => $donate->status,
                ]);

                return;
            }

            if ($paymentData->isSuccess()) {
                $updateData = ['status' => 1];
                if ($paymentData->transactionId && $donate->payment_id !== $paymentData->transactionId) {
                    $updateData['payment_id'] = $paymentData->transactionId;
                }
                $donate->update($updateData);

                $user = $donate->user;

                if ($donate->item_id) {
                    DeliverPurchaseItemsJob::dispatch($donate);
                    Log::info('PAYMENT_WEBHOOK_ITEM_DELIVERY_QUEUED', [
                        'gateway' => $this->gateway,
                        'donate_id' => $donate->id,
                        'item_id' => $donate->item_id,
                    ]);
                } else {
                    $totalAmount = $donate->amount + ($donate->bonus_amount ?? 0);
                    $user->increment('balance', $totalAmount);
                    Log::info('PAYMENT_WEBHOOK_BALANCE_ADDED', [
                        'gateway' => $this->gateway,
                        'donate_id' => $donate->id,
                        'user_id' => $user->id,
                        'amount' => $donate->amount,
                        'bonus_amount' => $donate->bonus_amount,
                        'total_amount' => $totalAmount,
                    ]);
                }
            } elseif ($paymentData->isFailed()) {
                $donate->update(['status' => 2]);
                Log::info('PAYMENT_WEBHOOK_MARKED_FAILED', [
                    'gateway' => $this->gateway,
                    'donate_id' => $donate->id,
                    'parsed_status' => $paymentData->status,
                ]);
            } else {
                Log::info('PAYMENT_WEBHOOK_IGNORED_NON_FINAL_STATUS', [
                    'gateway' => $this->gateway,
                    'donate_id' => $donate->id,
                    'parsed_status' => $paymentData->status,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('PAYMENT_WEBHOOK_JOB_FAILED', [
                'message' => $e->getMessage(),
                'gateway' => $this->gateway,
                'data' => $this->webhookData,
                'trace' => $e->getTraceAsString(),
            ]);
            throw $e;
        }
    }
}
