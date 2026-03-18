<?php

namespace App\Jobs;

use App\Models\Donate;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class RefundPaymentJob implements ShouldQueue
{
    use Queueable;

    public function __construct(
        public Donate $donate,
        public string $reason = '',
    ) {
        $this->onQueue('payments');
    }

    public function handle(): void
    {
        if ($this->donate->status !== 1) {
            Log::warning("Cannot refund donate {$this->donate->id}: not completed");

            return;
        }

        $user = $this->donate->user;

        if ($this->donate->item_id) {
            $purchase = $user->shopPurchases()
                ->where('item_id', $this->donate->item_id)
                ->latest()
                ->first();

            if ($purchase) {
                $purchase->delete();
            }
        } else {
            $user->decrement('balance', $this->donate->amount + $this->donate->bonus_amount);
        }

        $this->donate->update(['status' => 2]);

        Log::info("Refund processed for donate {$this->donate->id}. Reason: {$this->reason}");
    }
}
