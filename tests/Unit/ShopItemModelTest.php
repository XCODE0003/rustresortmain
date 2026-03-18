<?php

use App\Models\ShopCategory;
use App\Models\ShopItem;

test('shop item calculates final price correctly', function () {
    $item = ShopItem::factory()->create([
        'price' => 100,
        'discount' => 20,
    ]);

    expect($item->getFinalPrice())->toBe(80.0);
});

test('shop item applies category discount', function () {
    $category = ShopCategory::factory()->create(['discount_percent' => 10]);
    $item = ShopItem::factory()->create([
        'price' => 100,
        'discount' => 0,
        'category_id' => $category->id,
    ]);

    expect($item->getFinalPrice())->toBe(90.0);
});

test('shop item uses item discount when higher than category discount', function () {
    $category = ShopCategory::factory()->create(['discount_percent' => 10]);
    $item = ShopItem::factory()->create([
        'price' => 100,
        'discount' => 25,
        'category_id' => $category->id,
    ]);

    expect($item->getFinalPrice())->toBe(75.0);
});

test('shop item has localized attributes', function () {
    $item = ShopItem::factory()->create([
        'name_ru' => 'Тест',
        'name_en' => 'Test',
    ]);

    app()->setLocale('ru');
    expect($item->getLocalizedTitle())->toBe('Тест');

    app()->setLocale('en');
    expect($item->getLocalizedTitle())->toBe('Test');
});
