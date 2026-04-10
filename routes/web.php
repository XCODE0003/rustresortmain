<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/locale', [\App\Http\Controllers\LocaleController::class, 'update'])->name('locale.update');

Route::get('/login', [\App\Http\Controllers\Auth\SteamAuthController::class, 'redirect'])->name('login');
Route::get('/auth/steam', [\App\Http\Controllers\Auth\SteamAuthController::class, 'redirect'])->name('auth.steam');
Route::get('/auth/steam/callback', [\App\Http\Controllers\Auth\SteamAuthController::class, 'callback'])->name('auth.steam.callback');

Route::post('/logout', [\App\Http\Controllers\Auth\SteamAuthController::class, 'logout'])->name('logout');

Route::get('/info', [\App\Http\Controllers\ArticleController::class, 'index'])->name('info');
Route::get('/info/{path}', [\App\Http\Controllers\ArticleController::class, 'show'])->name('info.show');

Route::get('/servers', [\App\Http\Controllers\ServerController::class, 'index'])->name('servers');

Route::get('/bans', [\App\Http\Controllers\BansController::class, 'index'])->name('bans.index');

Route::get('/shop', [\App\Http\Controllers\ShopController::class, 'index'])->name('shop.index');
Route::get('/shop/category/{path}', [\App\Http\Controllers\ShopController::class, 'category'])->name('shop.category');
Route::get('/shop/item/{item}', [\App\Http\Controllers\ShopController::class, 'show'])->name('shop.item.show');

Route::get('/shop/server', [\App\Http\Controllers\ServerController::class, 'shopServers'])->name('shop.server');
Route::get('/shop/server/{server}', [\App\Http\Controllers\ServerController::class, 'shopServerShow'])->name('shop.server.show');
Route::inertia('/shop/other', 'shop/other', [])->name('shop.other');

Route::get('/payment/{donate}/success', [\App\Http\Controllers\PaymentController::class, 'success'])->name('payment.success');
Route::get('/payment/{donate}/cancel', [\App\Http\Controllers\PaymentController::class, 'cancel'])->name('payment.cancel');
Route::get('/balance/tebex', [\App\Http\Controllers\BalanceController::class, 'tebex'])->name('balance.tebex');

Route::middleware('auth')->group(function () {
    Route::post('/notifications/read-all', [\App\Http\Controllers\NotificationController::class, 'markAllRead'])->name('notifications.read-all');
    Route::post('/notifications/{id}/read', [\App\Http\Controllers\NotificationController::class, 'markRead'])->name('notifications.read');

    Route::post('/shop/buy-balance', [\App\Http\Controllers\ShopController::class, 'buyWithBalance'])->name('shop.buy-balance');

    Route::get('/payment', [\App\Http\Controllers\BalanceController::class, 'index'])->name('payment');
    Route::post('/balance/topup', [\App\Http\Controllers\BalanceController::class, 'topup'])->name('balance.topup');

    Route::get('/payment/create', [\App\Http\Controllers\PaymentController::class, 'create'])->name('payment.create');
    Route::post('/payment', [\App\Http\Controllers\PaymentController::class, 'store'])->name('payment.store');

    Route::get('/purchases', [\App\Http\Controllers\PurchaseController::class, 'index'])->name('purchases.index');
    Route::get('/purchases/{purchase}', [\App\Http\Controllers\PurchaseController::class, 'show'])->name('purchases.show');
    Route::delete('/profile/purchases/{purchase}', [\App\Http\Controllers\PurchaseController::class, 'refund'])->name('purchases.refund');

    Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'show'])->name('profile');
    Route::patch('/profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});

Route::get('/faq', [\App\Http\Controllers\FaqController::class, 'index'])->name('faq');
Route::get('/legal/{slug}', [\App\Http\Controllers\LegalPageController::class, 'show'])->name('legal.show');
Route::inertia('/tickets', 'tickets', [])->name('tickets');

Route::inertia('/rating', 'rating', [
])->name('rating');

Route::inertia('/clan', 'clan', [
])->name('clan');

Route::inertia('/contacts', 'contacts', [
])->name('contacts');

Route::inertia('/compedium', 'compedium', [
])->name('compedium');

Route::get('/test/login', function () {
    Auth::login(User::first());

    return redirect('/');
})->name('test.login');
