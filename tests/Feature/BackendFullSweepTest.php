<?php

use App\Models\User;

$gets = [
    '',
    'updateitems',
    'settings', 'settings/security', 'settings/profile', 'settings/activity',
    'settings/site', 'settings/project_name', 'settings/robots', 'settings/sitemap',
    'settings/langs', 'settings/analitics', 'settings/about', 'settings/download',
    'settings/login', 'settings/login_steam', 'settings/policy', 'settings/forum',
    'settings/social', 'settings/donat', 'settings/services', 'settings/smtp',
    'settings/recaptcha', 'settings/sms', 'settings/payments', 'settings/streams',
    'settings/game_api', 'settings/waxpeer_api', 'settings/skinsback_api',
    'settings/falling_snow', 'settings/bonuses', 'settings/bonuses_monday',
    'settings/bonuses_thursday',
    'tickets',
    'logs', 'logs/payments', 'logs/shop', 'logs/visits', 'logs/registrations',
    'logs/gamecurrencylogs', 'logs/adminlogs', 'logs/servererrors',
    'logs/statistics_game_items',
    'users',
    'shop/cases',
    'bonuses',
    'promocodes', 'promocodes/generate', 'promocodes/create',
    'caseopen_history',
    'delivery_requests',
    'articles', 'articles/create',
    'faqs', 'faqs/create',
    'servers', 'servers/create',
    'servercategories', 'servercategories/create',
    'banners', 'banners/create',
    'shopitems', 'shopitems/create',
    'shopsets', 'shopsets/create',
    'shopcoupons', 'shopcoupons/create',
    'shopcategories', 'shopcategories/create',
    'guides', 'guides/create',
    'guidecategories', 'guidecategories/create',
    'cases', 'cases/create',
    'casesitems', 'casesitems/create',
];

beforeEach(function () {
    $this->admin = User::factory()->create(['role' => 'admin']);
});

foreach ($gets as $path) {
    test("GET /$path is below 500", function () use ($path) {
        $url = '/'.config('backend.url_slug').($path === '' ? '' : '/'.$path);
        $response = $this->actingAs($this->admin)->get($url);
        if ($response->status() >= 500) {
            dump("FAIL $path → status ".$response->status());
        }
        expect($response->status())->toBeLessThan(500);
    });
}
