<?php

use App\Jobs\DeliverPurchaseItemsJob;
use App\Models\BucketItem;
use App\Models\Donate;
use App\Models\Option;
use App\Models\ShopItem;
use App\Models\Shopping;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function makeItem(array $overrides = []): ShopItem
{
    return ShopItem::create(array_merge([
        'category_id' => null,
        'price' => 100,
        'amount' => 1,
        'is_command' => false,
        'is_item' => true,
        'is_blueprint' => false,
        'status' => 1,
        'name_ru' => 'Test',
        'name_en' => 'Test',
        'image' => 'items/test.png',
    ], $overrides));
}

function makeDonate(ShopItem $item, User $user, array $overrides = []): Donate
{
    return Donate::create(array_merge([
        'user_id' => $user->id,
        'server' => 1,
        'payment_id' => uniqid('test_', true),
        'amount' => 100,
        'item_id' => $item->id,
        'count' => 1,
        'status' => 1,
        'payment_system' => 'balance',
        'steam_id' => $user->steam_id,
    ], $overrides));
}

test('обычный товар (без команды) кладётся в bucket, а не в shopping', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000001']);
    $item = makeItem([
        'is_command' => false,
        'short_name' => 'rifle.ak',
        'amount' => 1000,
        'command' => null,
    ]);

    $donate = makeDonate($item, $user, ['count' => 2, 'server' => null]);

    (new DeliverPurchaseItemsJob($donate))->handle();

    expect(Shopping::count())->toBe(0);
    expect(BucketItem::where('user_id', $user->id)->count())->toBe(2);

    $bucket = BucketItem::where('user_id', $user->id)->first();
    expect($bucket->shop_item_id)->toBe($item->id);
    expect($bucket->quantity)->toBe(1000);
    expect($bucket->steam_id)->toBe('76561190000000001');
});

test('услуга (is_command) формирует команду в shopping, а не bucket', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000002']);
    $item = makeItem([
        'is_command' => true,
        'command' => 'addgroup {steamid} vip {var}',
    ]);

    $donate = makeDonate($item, $user, ['var_id' => 30, 'server' => null]);

    (new DeliverPurchaseItemsJob($donate))->handle();

    expect(BucketItem::count())->toBe(0);
    $shopping = Shopping::first();
    expect($shopping)->not->toBeNull();
    expect($shopping->command)->toBe('addgroup 76561190000000002 vip 30');
});

test('пустая команда у услуги не создаёт мусорную запись', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000003']);
    $item = makeItem([
        'is_command' => true,
        'command' => '',
    ]);

    (new DeliverPurchaseItemsJob(makeDonate($item, $user, ['server' => null])))->handle();

    expect(Shopping::count())->toBe(0);
    expect(BucketItem::count())->toBe(0);
});

test('getUser отдаёт bucket игрока при верном api_key', function () {
    Option::create(['key' => 'game_api_key', 'value' => 'secret-key', 'server' => null]);

    $user = User::factory()->create(['steam_id' => '76561190000000004']);
    $item = makeItem([
        'is_command' => false,
        'short_name' => 'smg.thompson',
        'amount' => 1,
    ]);
    BucketItem::create([
        'user_id' => $user->id,
        'shop_item_id' => $item->id,
        'rust_id' => 0,
        'price' => $item->price,
        'quantity' => 1,
        'steam_id' => $user->steam_id,
        'server_name' => 'Main',
        'server_id' => 1,
    ]);

    $res = $this->getJson('/api/shop/getUser?api_key=secret-key&userID=76561190000000004');

    $res->assertOk()->assertJsonPath('status', 'success');
    expect($res->json('result.bucket'))->toHaveCount(1);
    expect($res->json('result.bucket.0.ShortName'))->toBe('smg.thompson');
    expect($res->json('result.bucket.0.IsItem'))->toBeTrue();
    expect($res->json('result.bucket.0.Amount'))->toBe(1);
    expect($res->json('result.bucket.0.ImageUrl'))->toStartWith('http');
});

test('getImageUrlsV2 отдаёт абсолютные URL иконок', function () {
    Option::create(['key' => 'game_api_key', 'value' => 'secret-key', 'server' => null]);
    config(['app.url' => 'https://rustresort.com']);

    makeItem(['short_name' => 'rifle.ak', 'image' => 'images/ak.png']);

    $res = $this->getJson('/api/v2/shop/getImageUrls?api_key=secret-key');

    $res->assertOk()->assertJsonPath('status', 'success');
    expect($res->json('result.0.ImageUrl'))->toBe('https://rustresort.com/images/ak.png');
    expect($res->json('result.0.ShortName'))->toBe('rifle.ak');
});

test('товар с amount=3 кладёт в bucket количество 3', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000007']);
    $item = makeItem(['is_command' => false, 'short_name' => 'riflebody', 'amount' => 3, 'command' => null]);

    (new DeliverPurchaseItemsJob(makeDonate($item, $user, ['server' => null])))->handle();

    expect(BucketItem::where('user_id', $user->id)->count())->toBe(1);
    expect(BucketItem::where('user_id', $user->id)->first()->quantity)->toBe(3);
});

test('getUser отклоняет неверный api_key', function () {
    Option::create(['key' => 'game_api_key', 'value' => 'secret-key', 'server' => null]);
    User::factory()->create(['steam_id' => '76561190000000005']);

    $this->getJson('/api/shop/getUser?api_key=wrong&userID=76561190000000005')
        ->assertOk()
        ->assertJsonPath('status', 'error');
});

test('deleteItem убирает товар из bucket', function () {
    Option::create(['key' => 'game_api_key', 'value' => 'secret-key', 'server' => null]);

    $user = User::factory()->create(['steam_id' => '76561190000000006']);
    $item = makeItem(['is_command' => false, 'short_name' => 'wood']);
    $bucket = BucketItem::create([
        'user_id' => $user->id,
        'shop_item_id' => $item->id,
        'rust_id' => 0,
        'price' => 1,
        'quantity' => 1,
        'steam_id' => $user->steam_id,
        'server_id' => 1,
    ]);

    $this->postJson('/api/shop/deleteItem', [
        'api_key' => 'secret-key',
        'userID' => '76561190000000006',
        'ID' => $bucket->id,
    ])->assertOk()->assertJsonPath('status', 'success');

    expect(BucketItem::find($bucket->id))->toBeNull();
});

test('подарок: товар уходит получателю, а не покупателю', function () {
    $buyer = User::factory()->create(['steam_id' => '76561190000000020', 'balance' => 500]);
    $item = makeItem(['is_command' => false, 'can_gift' => 1, 'short_name' => 'rifle.ak', 'amount' => 1, 'price' => 100, 'command' => null]);

    $this->actingAs($buyer)->post('/shop/buy-balance', [
        'item_id' => $item->id,
        'count' => 1,
        'gift_steam_id' => '76561190000000099',
    ]);

    $recipient = User::where('steam_id', '76561190000000099')->first();
    expect($recipient)->not->toBeNull();
    expect(BucketItem::where('user_id', $recipient->id)->count())->toBe(1);
    expect(BucketItem::where('user_id', $buyer->id)->count())->toBe(0);
    expect((float) $buyer->fresh()->balance)->toBe(400.0);
});

test('выдача в игре списывает покупку из ЛК', function () {
    Option::create(['key' => 'game_api_key', 'value' => 'secret-key', 'server' => null]);
    $user = User::factory()->create(['steam_id' => '76561190000000021']);
    $item = makeItem(['is_command' => false, 'short_name' => 'wood']);
    $bucket = BucketItem::create([
        'user_id' => $user->id, 'shop_item_id' => $item->id, 'rust_id' => 0,
        'price' => 1, 'quantity' => 1, 'steam_id' => $user->steam_id, 'server_id' => null,
    ]);
    $purchase = App\Models\ShopPurchase::create([
        'item_id' => $item->id, 'user_id' => $user->id, 'count' => 2, 'server_id' => null, 'validity' => null,
    ]);

    $this->postJson('/api/shop/deleteItem', [
        'api_key' => 'secret-key', 'userID' => $user->steam_id, 'ID' => $bucket->id,
    ])->assertOk()->assertJsonPath('status', 'success');

    expect((int) App\Models\ShopPurchase::find($purchase->id)->count)->toBe(1);
});

test('кит раскладывается на отдельные предметы в корзине', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000030']);
    $oreTea = makeItem(['short_name' => 'oretea.pure', 'amount' => 1]);
    $bearPie = makeItem(['short_name' => 'pie.bear', 'amount' => 1]);
    $kit = makeItem(['is_command' => false, 'short_name' => null, 'kit_items' => [
        ['id' => $oreTea->id, 'amount' => 5],
        ['id' => $bearPie->id, 'amount' => 3],
    ]]);

    (new DeliverPurchaseItemsJob(makeDonate($kit, $user, ['count' => 2, 'server' => null])))->handle();

    expect(BucketItem::where('user_id', $user->id)->count())->toBe(2);
    expect(BucketItem::where('shop_item_id', $oreTea->id)->first()->quantity)->toBe(10); // 5×2
    expect(BucketItem::where('shop_item_id', $bearPie->id)->first()->quantity)->toBe(6);  // 3×2
    expect(BucketItem::where('shop_item_id', $kit->id)->count())->toBe(0);
    expect(App\Models\ShopPurchase::where('user_id', $user->id)->count())->toBe(2);
});
