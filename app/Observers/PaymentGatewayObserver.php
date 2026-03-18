<?php

namespace App\Observers;

use App\Models\PaymentGateway;
use App\Services\Payments\PaymentManager;
use Illuminate\Support\Facades\Cache;

class PaymentGatewayObserver
{
    public function created(PaymentGateway $paymentGateway): void
    {
        $this->clearCache();
    }

    public function updated(PaymentGateway $paymentGateway): void
    {
        $this->clearCache();
    }

    public function deleted(PaymentGateway $paymentGateway): void
    {
        $this->clearCache();
    }

    protected function clearCache(): void
    {
        Cache::forget('active_payment_gateways');
    }
}
