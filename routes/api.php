<?php

use App\Http\Controllers\Api\PaymentWebhookController;
use App\Http\Controllers\Api\ShopController;
use Illuminate\Support\Facades\Route;

Route::any('payments/notification/{gateway}', [PaymentWebhookController::class, 'handle'])
    ->name('api.payments.webhook');

// Внутриигровой плагин: выдача обычных товаров (bucket) и подтверждение услуг.
Route::get('shop/getUser', [ShopController::class, 'getUser']);
Route::post('shop/deleteItem', [ShopController::class, 'deleteItem']);
Route::post('shop/hasItem', [ShopController::class, 'hasItem']);
Route::post('shop/reportService', [ShopController::class, 'reportService']);
