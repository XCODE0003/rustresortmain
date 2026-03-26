<?php

test('guest can open shop index', function () {
    $response = $this->get('/shop');

    $response->assertOk();
    $response->assertInertia(fn ($page) => $page
        ->component('shop/Index')
        ->has('categories')
        ->has('items'));
});
