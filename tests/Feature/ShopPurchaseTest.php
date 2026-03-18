<?php

use App\Models\ShopCategory;
use App\Models\ShopItem;
use App\Models\ShopPurchase;
use App\Models\User;

test('user can view shop categories', function () {
    $category = ShopCategory::factory()->create();

    $response = $this->get('/shop');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('Shop/Index')
        ->has('categories', 1)
    );
});

test('user can view items in a category', function () {
    $category = ShopCategory::factory()->create(['path' => 'test-category']);
    $item = ShopItem::factory()->create(['category_id' => $category->id]);

    $response = $this->get("/shop/category/{$category->path}");

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('Shop/Category')
        ->has('category.items', 1)
    );
});

test('user can view their purchases', function () {
    $user = User::factory()->create();
    $purchase = ShopPurchase::factory()->create(['user_id' => $user->id]);

    $response = $this->actingAs($user)->get('/purchases');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('Purchase/Index')
        ->has('purchases.data', 1)
    );
});

test('user cannot view other users purchases', function () {
    $user = User::factory()->create();
    $otherUser = User::factory()->create();
    $purchase = ShopPurchase::factory()->create(['user_id' => $otherUser->id]);

    $response = $this->actingAs($user)->get("/purchases/{$purchase->id}");

    $response->assertStatus(403);
});
