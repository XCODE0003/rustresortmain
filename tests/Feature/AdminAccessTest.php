<?php

use App\Models\ShopItem;
use App\Models\User;

test('admin can access admin panel', function () {
    $admin = User::factory()->create(['role' => 'admin']);

    $response = $this->actingAs($admin)->get('/admin');

    $response->assertStatus(200);
});

test('regular user cannot access admin panel', function () {
    $user = User::factory()->create(['role' => 'user']);

    $response = $this->actingAs($user)->get('/admin');

    $response->assertStatus(403);
});

test('admin can create shop items', function () {
    $admin = User::factory()->create(['role' => 'admin']);

    $this->actingAs($admin);

    expect($admin->can('create', ShopItem::class))->toBeTrue();
});

test('support can view but not delete shop items', function () {
    $support = User::factory()->create(['role' => 'support']);
    $item = ShopItem::factory()->create();

    $this->actingAs($support);

    expect($support->can('view', $item))->toBeTrue();
    expect($support->can('delete', $item))->toBeFalse();
});

test('investor has read-only access to finance', function () {
    $investor = User::factory()->create(['role' => 'investor']);
    $item = ShopItem::factory()->create();

    $this->actingAs($investor);

    expect($investor->can('viewAny', ShopItem::class))->toBeTrue();
    expect($investor->can('create', ShopItem::class))->toBeFalse();
});
