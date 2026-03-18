<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/locale', [\App\Http\Controllers\LocaleController::class, 'update'])->name('locale.update');

Route::get('/login', [\App\Http\Controllers\Auth\SteamAuthController::class, 'redirect'])->name('login');
Route::get('/auth/steam', [\App\Http\Controllers\Auth\SteamAuthController::class, 'redirect'])->name('auth.steam');
Route::get('/auth/steam/callback', [\App\Http\Controllers\Auth\SteamAuthController::class, 'callback'])->name('auth.steam.callback');

Route::post('/logout', [\App\Http\Controllers\Auth\SteamAuthController::class, 'logout'])->name('logout');

Route::inertia('/info', 'info/list', [
])->name('info');

Route::inertia('/info/{id}', 'info/show', [
])->name('info.show');

Route::get('/servers', [\App\Http\Controllers\ServerController::class, 'index'])->name('servers');

Route::get('/shop', [\App\Http\Controllers\ShopController::class, 'index'])->name('shop.index');
Route::get('/shop/category/{path}', [\App\Http\Controllers\ShopController::class, 'category'])->name('shop.category');
Route::get('/shop/item/{item}', [\App\Http\Controllers\ShopController::class, 'show'])->name('shop.item.show');

Route::get('/shop/server', [\App\Http\Controllers\ServerController::class, 'shopServers'])->name('shop.server');
Route::get('/shop/server/{server}', [\App\Http\Controllers\ServerController::class, 'shopServerShow'])->name('shop.server.show');
Route::inertia('/shop/other', 'shop/other', [])->name('shop.other');

Route::middleware('auth')->group(function () {
    Route::get('/shop/basket', [\App\Http\Controllers\CartController::class, 'index'])->name('shop.basket');
    Route::post('/shop/cart', [\App\Http\Controllers\CartController::class, 'add'])->name('cart.add');
    Route::patch('/shop/cart/{cart}', [\App\Http\Controllers\CartController::class, 'update'])->name('cart.update');
    Route::delete('/shop/cart/{cart}', [\App\Http\Controllers\CartController::class, 'remove'])->name('cart.remove');
    Route::delete('/shop/cart', [\App\Http\Controllers\CartController::class, 'clear'])->name('cart.clear');

    Route::get('/payment', [\App\Http\Controllers\BalanceController::class, 'index'])->name('payment');
    Route::post('/balance/topup', [\App\Http\Controllers\BalanceController::class, 'topup'])->name('balance.topup');

    Route::get('/payment/create', [\App\Http\Controllers\PaymentController::class, 'create'])->name('payment.create');
    Route::post('/payment', [\App\Http\Controllers\PaymentController::class, 'store'])->name('payment.store');
    Route::get('/payment/{donate}/success', [\App\Http\Controllers\PaymentController::class, 'success'])->name('payment.success');
    Route::get('/payment/{donate}/cancel', [\App\Http\Controllers\PaymentController::class, 'cancel'])->name('payment.cancel');

    Route::get('/purchases', [\App\Http\Controllers\PurchaseController::class, 'index'])->name('purchases.index');
    Route::get('/purchases/{purchase}', [\App\Http\Controllers\PurchaseController::class, 'show'])->name('purchases.show');

    Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'show'])->name('profile');
    Route::patch('/profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});

Route::inertia('/faq', 'faq', [])->name('faq');
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