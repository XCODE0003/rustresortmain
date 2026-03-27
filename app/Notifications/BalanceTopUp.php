<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class BalanceTopUp extends Notification
{
    public function __construct(
        private float $amount
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'type'    => 'balance_top_up',
            'title'   => 'Баланс пополнен на ' . number_format($this->amount, 0, '.', ' ') . ' ₽',
            'message' => 'Успешное пополнение баланса! Спасибо, что остаётесь с нами',
            'amount'  => $this->amount,
            'action'  => null,
        ];
    }
}
