<?php

use App\Models\ShopItem;
use App\Models\ShopStatistic;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('покупка с баланса пишет строку в shop_statistics', function () {
    $user = User::factory()->create(['balance' => 1000, 'steam_id' => '76561190000000901']);
    $item = ShopItem::create([
        'category_id' => null,
        'price' => 100,
        'amount' => 1,
        'is_command' => false,
        'is_item' => true,
        'is_blueprint' => false,
        'can_gift' => 1,
        'status' => 1,
        'name_ru' => 'Тестовый',
        'name_en' => 'Test',
        'image' => 'items/test.png',
    ]);

    $this->actingAs($user)
        ->post('/shop/buy-balance', ['item_id' => $item->id, 'count' => 2])
        ->assertRedirect();

    $stat = ShopStatistic::first();
    expect($stat)->not->toBeNull();
    expect($stat->item_id)->toBe($item->id);
    expect((int) $stat->amount)->toBe(2);
    expect((float) $stat->price)->toBe(200.0); // 100 × 2 — суммируется в «Итого»
    expect((int) $stat->user_id)->toBe($user->id);
    expect($stat->steam_id)->toBe('76561190000000901');
});
