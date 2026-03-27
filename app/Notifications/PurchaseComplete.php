<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class PurchaseComplete extends Notification
{
    public function __construct(
        private string $itemName,
        private float $amount
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'type'    => 'purchase_complete',
            'title'   => 'Покупка: ' . $this->itemName,
            'message' => 'Предмет успешно доставлен на сервер',
            'amount'  => $this->amount,
            'action'  => null,
        ];
    }
}
