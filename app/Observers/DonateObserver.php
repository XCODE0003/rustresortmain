<?php

namespace App\Observers;

use App\Models\Donate;

class DonateObserver
{
    public function created(Donate $donate): void
    {
        \Illuminate\Support\Facades\Log::info("New payment initiated: {$donate->payment_id} for user {$donate->user_id}");
    }

    public function updated(Donate $donate): void
    {
        if ($donate->isDirty('status') && $donate->status === 1) {
            \Illuminate\Support\Facades\Log::info("Payment completed: {$donate->payment_id}");
        }
    }

    public function deleted(Donate $donate): void
    {
        //
    }

    public function restored(Donate $donate): void
    {
        //
    }

    public function forceDeleted(Donate $donate): void
    {
        //
    }
}
