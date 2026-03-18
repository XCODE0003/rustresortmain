<?php

use App\Http\Controllers\Api\PaymentWebhookController;
use Illuminate\Support\Facades\Route;

Route::any('payments/notification/{gateway}', [PaymentWebhookController::class, 'handle'])
    ->name('api.payments.webhook');
