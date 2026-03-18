<?php

namespace App\Services\Payments\Contracts;

use App\Models\Donate;
use App\Services\Payments\DTOs\PaymentData;
use Illuminate\Http\Request;

interface PaymentGatewayInterface
{
    public function createPayment(Donate $donate): array;

    public function verifyWebhook(Request $request): bool;

    public function processWebhook(Request $request): PaymentData;

    public function getStatus(string $paymentId): string;

    public function getName(): string;
}
