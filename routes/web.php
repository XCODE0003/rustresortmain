<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/locale', [\App\Http\Controllers\LocaleController::class, 'update'])->name('locale.update');

Route::get('/setlocale/{locale}', function (string $locale) {
    if (in_array($locale, ['en', 'ru', 'de', 'fr', 'it', 'es', 'uk'], true)) {
        session()->put('locale', $locale);
        app()->setLocale($locale);
    }

    return back();
})->name('setlocale');

Route::get('/settheme/{theme}', function (string $theme) {
    session()->put('theme', $theme);

    return back();
})->name('settheme');

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
Route::get('/shop/server-reset', [\App\Http\Controllers\ServerController::class, 'shopServerReset'])->name('shop.server.reset');
Route::get('/shop/server/{server}', [\App\Http\Controllers\ServerController::class, 'shopServerShow'])->name('shop.server.show');
Route::inertia('/shop/other', 'shop/other', [])->name('shop.other');

// match get+post: некоторые шлюзы (Pally) делают POST-redirect на success/fail → иначе 405
Route::match(['get', 'post'], '/payment/{donate}/success', [\App\Http\Controllers\PaymentController::class, 'success'])->name('payment.success');
Route::match(['get', 'post'], '/payment/{donate}/cancel', [\App\Http\Controllers\PaymentController::class, 'cancel'])->name('payment.cancel');
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

    // Активация промокода из личного кабинета.
    Route::post('/promocode/activate', [\App\Http\Controllers\PromoController::class, 'activate'])->name('promocode.activate');
});

Route::get('/faq', [\App\Http\Controllers\FaqController::class, 'index'])->name('faq');
Route::get('/legal/{slug}', [\App\Http\Controllers\LegalPageController::class, 'show'])->name('legal.show');
Route::inertia('/tickets', 'tickets', [])->name('tickets');
Route::post('/tickets', fn () => back())->name('tickets.store');

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

// Stubs for legacy named routes referenced by ported admin views.
// Actual implementations were absent in the source project too.
Route::get('/p/{uuid}', fn () => abort(404))
    ->where('uuid', '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')
    ->name('promo.public');
Route::any('/donate/transfer', fn () => back())->name('donate.transfer');
Route::any('/videos', fn () => back())->name('videos.store');
Route::any('/videos/create', fn () => back())->name('videos.create');
Route::any('/videos/{video}', fn () => back())->name('videos.update');
Route::any('/videos/{video}/edit', fn () => back())->name('videos.edit');
Route::any('/videos/{video}/destroy', fn () => back())->name('videos.destroy');

use App\Http\Controllers\Backend;

Route::middleware('backend')
    ->prefix(config('backend.url_slug'))
    ->group(function () {
        Route::get('/logout', function (\Illuminate\Http\Request $request) {
            \Illuminate\Support\Facades\Auth::guard('web')->logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return redirect('/');
        })->name('backend.logout');

        Route::get('/', [Backend\BackendController::class, 'index'])->name('backend');

        Route::get('/settings/security', [Backend\UserSettingsController::class, 'security'])->name('backend.settings.security');
        Route::patch('/settings/security', [Backend\UserSettingsController::class, 'security_store']);

        Route::get('/settings/profile', [Backend\UserSettingsController::class, 'profile'])->name('backend.settings.profile');
        Route::patch('/settings/profile', [Backend\UserSettingsController::class, 'profile_store']);

        Route::get('/settings/activity', [Backend\UserSettingsController::class, 'activity'])->name('backend.settings.activity');
        Route::get('/settings/activity/{id}', [Backend\UserSettingsController::class, 'activity_destroy'])->name('backend.settings.activity.destroy');

        Route::get('/settings', [Backend\SettingsController::class, 'index'])->name('backend.settings');
        Route::get('/settings/site', [Backend\SettingsController::class, 'site'])->name('settings.site');
        Route::get('/settings/project_name', [Backend\SettingsController::class, 'project_name'])->name('settings.project_name');
        Route::get('/settings/robots', [Backend\SettingsController::class, 'robots'])->name('settings.robots');
        Route::get('/settings/sitemap', [Backend\SettingsController::class, 'sitemap'])->name('settings.sitemap');
        Route::get('/settings/langs', [Backend\SettingsController::class, 'langs'])->name('settings.langs');
        Route::get('/settings/analitics', [Backend\SettingsController::class, 'analitics'])->name('settings.analitics');
        Route::get('/settings/about', [Backend\SettingsController::class, 'about'])->name('settings.about');
        Route::get('/settings/download', [Backend\SettingsController::class, 'download'])->name('settings.download');
        Route::get('/settings/login', [Backend\SettingsController::class, 'login'])->name('settings.login');
        Route::get('/settings/login_steam', [Backend\SettingsController::class, 'login_steam'])->name('settings.login_steam');
        Route::get('/settings/policy', [Backend\SettingsController::class, 'policy'])->name('settings.policy');
        Route::get('/settings/forum', [Backend\SettingsController::class, 'forum'])->name('settings.forum');
        Route::get('/settings/social', [Backend\SettingsController::class, 'social'])->name('settings.social');
        Route::get('/settings/donat', [Backend\SettingsController::class, 'donat'])->name('settings.donat');
        Route::get('/settings/services', [Backend\SettingsController::class, 'services'])->name('settings.services');
        Route::get('/settings/smtp', [Backend\SettingsController::class, 'smtp'])->name('settings.smtp');
        Route::get('/settings/recaptcha', [Backend\SettingsController::class, 'recaptcha'])->name('settings.recaptcha');
        Route::get('/settings/sms', [Backend\SettingsController::class, 'sms'])->name('settings.sms');
        Route::get('/settings/payments', [Backend\SettingsController::class, 'payments'])->name('settings.payments');
        Route::get('/settings/streams', [Backend\SettingsController::class, 'streams'])->name('settings.streams');
        Route::get('/settings/game_api', [Backend\SettingsController::class, 'game_api'])->name('settings.game_api');
        Route::get('/settings/waxpeer_api', [Backend\SettingsController::class, 'waxpeer_api'])->name('settings.waxpeer_api');
        Route::get('/settings/skinsback_api', [Backend\SettingsController::class, 'skinsback_api'])->name('settings.skinsback_api');
        Route::get('/settings/falling_snow', [Backend\SettingsController::class, 'falling_snow'])->name('settings.falling_snow');
        Route::get('/settings/bonuses', [Backend\SettingsController::class, 'bonuses'])->name('settings.bonuses');
        Route::get('/settings/bonuses_monday', [Backend\SettingsController::class, 'bonuses_monday'])->name('settings.bonuses_monday');
        Route::get('/settings/bonuses_thursday', [Backend\SettingsController::class, 'bonuses_thursday'])->name('settings.bonuses_thursday');
        Route::post('/settings', [Backend\SettingsController::class, 'store']);

        Route::get('/tickets', [Backend\TicketController::class, 'support'])->name('tickets.all');
        Route::get('/tickets/{ticket}', [Backend\TicketController::class, 'show'])->name('backend.tickets.show');
        Route::post('/tickets/{ticket}/answer', [Backend\TicketController::class, 'update'])->name('backend.tickets.update');
        Route::post('/tickets/{ticket}/isread', [Backend\TicketController::class, 'isread'])->name('backend.tickets.isread');
        Route::post('/tickets/{ticket}/close', [Backend\TicketController::class, 'close'])->name('backend.tickets.close');
        Route::post('/tickets/{ticket}/update_reply', [Backend\TicketController::class, 'updateReply'])->name('backend.tickets.reply.update');
        Route::post('/tickets/{ticket}/update_question', [Backend\TicketController::class, 'updateQuestion'])->name('backend.tickets.question.update');
        Route::get('/tickets/{ticket}/delete', [Backend\TicketController::class, 'destroy'])->name('tickets.delete');

        Route::get('/cases/{case}/duplicate', [Backend\CasesController::class, 'duplicate'])->name('cases.duplicate');

        Route::get('/logs', [Backend\LogController::class, 'index'])->name('logs.all');
        Route::get('/logs/payments', [Backend\LogController::class, 'payments'])->name('logs.payments');
        Route::get('/logs/shop', [Backend\LogController::class, 'shop'])->name('logs.shop');
        Route::get('/logs/visits', [Backend\LogController::class, 'visits'])->name('logs.visits');
        Route::get('/logs/registrations', [Backend\LogController::class, 'registrations'])->name('logs.registrations');
        Route::get('/logs/gamecurrencylogs', [Backend\LogController::class, 'gamecurrencylogs'])->name('logs.gamecurrencylogs');
        Route::get('/logs/adminlogs', [Backend\LogController::class, 'adminlogs'])->name('logs.adminlogs');
        Route::get('/logs/servererrors', [Backend\LogController::class, 'servererrors'])->name('logs.servererrors');
        Route::get('/logs/statistics_game_items', [Backend\LogController::class, 'statistics_game_items'])->name('logs.statistics_game_items');
        Route::get('/logs/userlogs/{user}', [Backend\LogController::class, 'userlogs'])->name('logs.userlogs');

        Route::get('/users', [Backend\UserController::class, 'index'])->name('users');
        Route::get('/users/admin/{user}', [Backend\UserController::class, 'admin'])->name('user.role.admin');
        Route::get('/users/support/{user}', [Backend\UserController::class, 'support'])->name('user.role.support');
        Route::get('/users/user/{user}', [Backend\UserController::class, 'user'])->name('user.role.user');
        Route::get('/users/investor/{user}', [Backend\UserController::class, 'investor'])->name('user.role.investor');
        Route::get('/users/details/{user}', [Backend\UserController::class, 'details'])->name('backend.user.details');
        Route::post('/users/setbalance', [Backend\UserController::class, 'setBalance'])->name('user.balance.set');
        Route::post('/users/mute', [Backend\UserController::class, 'mute'])->name('user.mute');
        Route::get('/users/unmute/{user}', [Backend\UserController::class, 'unmute'])->name('user.unmute');
        Route::post('/users/getUserByName', [Backend\UserController::class, 'getUserByName'])->name('backend.users.getuserbyname');

        Route::get('/shop/cases', [Backend\CasesController::class, 'shop_list'])->name('cases.shop_list');

        Route::get('/shopitems/{shopitem}/duplicate', [Backend\ShopItemController::class, 'duplicate'])->name('shopitems.duplicate');
        Route::post('/shopitems/getVariations', [Backend\ShopItemController::class, 'getVariations'])->name('shopitems.getVariations');
        Route::get('/shopitems/resetCache', [Backend\ShopItemController::class, 'resetCache'])->name('shopitems.resetCache');

        Route::get('/bonuses', [Backend\BonusesController::class, 'index'])->name('bonuses');
        Route::get('/bonuses/{wonitem}/issued', [Backend\BonusesController::class, 'issued'])->name('bonuses.issued');

        Route::get('/promocodes/generate', [Backend\PromoCodeController::class, 'generate'])->name('promocodes.generate');
        Route::post('/promocodes/generate', [Backend\PromoCodeController::class, 'generate_store'])->name('promocodes.generate_store');

        Route::get('/caseopen_history', [Backend\CaseopenHistoryController::class, 'index'])->name('backend.caseopen_history');

        Route::get('/delivery_requests', [Backend\DeliveryRequestsController::class, 'index'])->name('backend.delivery_requests');
        Route::post('/delivery_requests/set_pricecap/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setPricecap'])->name('delivery_requests.pricecap.set');
        Route::get('/delivery_requests/inprocessing/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setStatusInprocessing'])->name('delivery_requests.status.set.inprocessing');
        Route::get('/delivery_requests/completed/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setStatusCompleted'])->name('delivery_requests.status.set.completed');
        Route::get('/delivery_requests/canceled/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setStatusCanceled'])->name('delivery_requests.status.set.canceled');
        Route::get('/delivery_requests/waxpeer_api/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setStatusWaxpeerAPI'])->name('delivery_requests.status.set.waxpeer_api');
        Route::get('/delivery_requests/skinsback_api/{deliveryrequest}', [Backend\DeliveryRequestsController::class, 'setStatusSkinsbackAPI'])->name('delivery_requests.status.set.skinsback_api');

        Route::resource('articles', Backend\ArticleController::class)->except('show');
        Route::resource('faqs', Backend\FaqController::class)->except('show');
        Route::resource('servers', Backend\ServerController::class)->except('show');
        Route::resource('servercategories', Backend\ServerCategoryController::class)->except('show');
        Route::resource('banners', Backend\BannerController::class)->except('show');
        Route::resource('shopitems', Backend\ShopItemController::class)->except('show');
        Route::resource('shopsets', Backend\ShopSetController::class)->except('show');
        Route::resource('shopcoupons', Backend\ShopCouponController::class)->except('show');
        Route::resource('shopcategories', Backend\ShopCategoryController::class)->except('show');
        Route::resource('guides', Backend\GuideController::class)->except('show');
        Route::resource('guidecategories', Backend\GuideCategoryController::class)->except('show');
        Route::resource('promocodes', Backend\PromoCodeController::class);
        Route::resource('cases', Backend\CasesController::class)->except('show');
        Route::resource('casesitems', Backend\CasesItemController::class)->except('show');

        Route::get('/servers/{id}/settings', [Backend\ServerController::class, 'settings'])->name('server.settings');
    });
