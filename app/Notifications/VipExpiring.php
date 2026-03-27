<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;

class VipExpiring extends Notification
{
    public function __construct(
        private int $daysLeft
    ) {}

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'type'    => 'vip_expiring',
            'title'   => 'Окончание VIP',
            'message' => 'До окончания привилегии VIP - осталось ' . $this->daysLeft . ' ' . $this->pluralDays($this->daysLeft) . ', желаете продлить?',
            'amount'  => null,
            'action'  => ['label' => 'ДА, ПРОДЛИТЬ', 'url' => '/payment'],
        ];
    }

    private function pluralDays(int $days): string
    {
        if ($days % 100 >= 11 && $days % 100 <= 14) return 'дней';
        return match ($days % 10) {
            1 => 'день',
            2, 3, 4 => 'дня',
            default => 'дней',
        };
    }
}
