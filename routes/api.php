<?php

use App\Http\Controllers\Api\ClearStatisticsController;
use App\Http\Controllers\Api\PaymentWebhookController;
use App\Http\Controllers\Api\ServersStatisticsController;
use App\Http\Controllers\Api\ServersWipeController;
use App\Http\Controllers\Api\ShopController;
use Illuminate\Support\Facades\Route;

Route::any('payments/notification/{gateway}', [PaymentWebhookController::class, 'handle'])
    ->name('api.payments.webhook');

// Легаси-URL вебхука из старого проекта: в панели Tebex настроен
// /api/pays/notification/tebex — без алиаса вебхуки падали в 404
// и баланс не зачислялся.
Route::any('pays/notification/{gateway}', [PaymentWebhookController::class, 'handle'])
    ->name('api.payments.webhook.legacy');

// Внутриигровой плагин: выдача обычных товаров (bucket) и подтверждение услуг.
Route::get('shop/getUser', [ShopController::class, 'getUser']);
Route::post('shop/deleteItem', [ShopController::class, 'deleteItem']);
Route::post('shop/hasItem', [ShopController::class, 'hasItem']);
Route::post('shop/reportService', [ShopController::class, 'reportService']);
Route::post('shop/getImageUrls', [ShopController::class, 'getImageUrls']);
Route::get('v2/shop/getImageUrls', [ShopController::class, 'getImageUrlsV2']);

// Приём игровой статистики от Rust-плагина (порт из старого проекта).
// Плагин шлёт api_key=options.game_api_key. CSRF на api-роутах не действует.
Route::any('statistics/setStatistics', [ServersStatisticsController::class, 'setStatistics']);
Route::any('statistics/clearStatistics', [ClearStatisticsController::class, 'clearStatistics']);
Route::any('server/setLastWipeDate', [ServersWipeController::class, 'setLastWipeDate']);
Route::any('server/forgetCacheOnline', [ServersWipeController::class, 'forgetCacheOnline']);
Route::any('server/refreshStatus', [ServersWipeController::class, 'refreshStatus']);
