<?php

use App\Models\BucketItem;
use App\Models\ShopItem;
use App\Models\ShopPurchase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function refundItem(array $overrides = []): ShopItem
{
    return ShopItem::create(array_merge([
        'category_id' => null,
        'price' => 150,
        'amount' => 1,
        'is_command' => false,
        'is_item' => true,
        'is_blueprint' => false,
        'status' => 1,
        'name_ru' => 'Возвратный',
        'name_en' => 'Refundable',
        'image' => 'items/test.png',
    ], $overrides));
}

test('возврат: товар из корзины убирается, деньги на баланс, покупка удаляется', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000061', 'balance' => 0]);
    $item = refundItem(['price' => 150]);

    $purchase = ShopPurchase::create([
        'item_id' => $item->id, 'user_id' => $user->id, 'count' => 1, 'server_id' => null,
    ]);
    BucketItem::create([
        'user_id' => $user->id, 'shop_item_id' => $item->id, 'rust_id' => 0,
        'price' => 150, 'quantity' => 1, 'steam_id' => $user->steam_id, 'server_id' => null,
    ]);

    $this->actingAs($user)->delete("/profile/purchases/{$purchase->id}")->assertRedirect();

    expect(BucketItem::count())->toBe(0);
    expect(ShopPurchase::find($purchase->id))->toBeNull();
    expect((float) $user->fresh()->balance)->toBe(150.0);
});

test('возврат невозможен, если товар уже выдан в игре (нет bucket)', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000062', 'balance' => 0]);
    $item = refundItem(['price' => 150]);

    $purchase = ShopPurchase::create([
        'item_id' => $item->id, 'user_id' => $user->id, 'count' => 1, 'server_id' => null,
    ]);
    // bucket пуст — предмет уже выдан

    $this->actingAs($user)->delete("/profile/purchases/{$purchase->id}")->assertRedirect();

    expect(ShopPurchase::find($purchase->id))->not->toBeNull(); // покупка осталась
    expect((float) $user->fresh()->balance)->toBe(0.0);          // деньги не вернули
});

test('содержимое набора (bucket price 0) не возвращается', function () {
    $user = User::factory()->create(['steam_id' => '76561190000000063', 'balance' => 0]);
    $item = refundItem(['price' => 150]);

    $purchase = ShopPurchase::create([
        'item_id' => $item->id, 'user_id' => $user->id, 'count' => 1, 'server_id' => null,
    ]);
    BucketItem::create([
        'user_id' => $user->id, 'shop_item_id' => $item->id, 'rust_id' => 0,
        'price' => 0, 'quantity' => 1, 'steam_id' => $user->steam_id, 'server_id' => null,
    ]);

    $this->actingAs($user)->delete("/profile/purchases/{$purchase->id}")->assertRedirect();

    expect(ShopPurchase::find($purchase->id))->not->toBeNull();
    expect(BucketItem::count())->toBe(1);              // набор не тронут
    expect((float) $user->fresh()->balance)->toBe(0.0); // денег не вернули
});

test('возврат чужой покупки запрещён (403)', function () {
    $owner = User::factory()->create(['steam_id' => '76561190000000064']);
    $stranger = User::factory()->create(['steam_id' => '76561190000000065']);
    $item = refundItem();

    $purchase = ShopPurchase::create([
        'item_id' => $item->id, 'user_id' => $owner->id, 'count' => 1, 'server_id' => null,
    ]);

    $this->actingAs($stranger)->delete("/profile/purchases/{$purchase->id}")->assertForbidden();
});
