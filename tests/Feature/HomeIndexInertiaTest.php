<?php

use App\Models\Server;
use App\Models\ShopCategory;
use App\Models\ShopItem;

test('guest can open home page with shop data', function () {
    $server = Server::create([
        'name' => 'Test Server',
        'status' => 1,
        'sort' => 1,
    ]);

    $category = ShopCategory::create([
        'path' => 'kits',
        'title_ru' => 'Наборы',
        'title_en' => 'Kits',
        'sort' => 1,
    ]);

    ShopItem::create([
        'category_id' => $category->id,
        'name_ru' => 'Стартовый набор',
        'name_en' => 'Starter Kit',
        'price' => 199,
        'status' => 1,
        'sort' => 1,
        'servers' => [$server->id],
    ]);

    $response = $this->get('/');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('home')
        ->has('servers', 1)
        ->has('shopCategories', 1)
        ->has('shopItems', 1)
        ->where('shopItems.0.category_id', $category->id)
    );
});
