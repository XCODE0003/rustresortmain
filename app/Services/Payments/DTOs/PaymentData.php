<?php

namespace App\Services\Payments\DTOs;

readonly class PaymentData
{
    public function __construct(
        public string|int|null $orderId,
        public float $amount,
        public string $status,
        public ?string $transactionId = null,
        public ?array $metadata = null,
    ) {}

    public function isSuccess(): bool
    {
        return $this->status === 'success' || $this->status === 'completed';
    }

    public function isFailed(): bool
    {
        return $this->status === 'failed' || $this->status === 'cancelled';
    }

    public function isPending(): bool
    {
        return $this->status === 'pending' || $this->status === 'processing';
    }
}
