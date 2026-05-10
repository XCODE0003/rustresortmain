<?php

use App\Models\User;

function backend(string $path = ''): string
{
    return '/'.config('backend.url_slug').($path === '' ? '' : '/'.ltrim($path, '/'));
}

beforeEach(function () {
    $this->admin = User::factory()->create(['role' => 'admin']);
});

test('dashboard', function () {
    $response = $this->actingAs($this->admin)->get(backend());
    expect($response->status())->toBeLessThan(500);
});

test('settings index', function () {
    $response = $this->actingAs($this->admin)->get(backend('settings'));
    expect($response->status())->toBeLessThan(500);
});

test('users index', function () {
    $response = $this->actingAs($this->admin)->get(backend('users'));
    expect($response->status())->toBeLessThan(500);
});

test('articles index', function () {
    $response = $this->actingAs($this->admin)->get(backend('articles'));
    expect($response->status())->toBeLessThan(500);
});

test('shopitems index', function () {
    $response = $this->actingAs($this->admin)->get(backend('shopitems'));
    expect($response->status())->toBeLessThan(500);
});

test('promocodes index', function () {
    $response = $this->actingAs($this->admin)->get(backend('promocodes'));
    expect($response->status())->toBeLessThan(500);
});

test('logs payments', function () {
    $response = $this->actingAs($this->admin)->get(backend('logs/payments'));
    expect($response->status())->toBeLessThan(500);
});

test('tickets', function () {
    $this->withoutExceptionHandling();
    $response = $this->actingAs($this->admin)->get(backend('tickets'));
    expect($response->status())->toBeLessThan(500);
});

test('servers index', function () {
    $this->withoutExceptionHandling();
    $response = $this->actingAs($this->admin)->get(backend('servers'));
    expect($response->status())->toBeLessThan(500);
});

test('cases index', function () {
    $response = $this->actingAs($this->admin)->get(backend('cases'));
    expect($response->status())->toBeLessThan(500);
});

test('faqs index', function () {
    $response = $this->actingAs($this->admin)->get(backend('faqs'));
    expect($response->status())->toBeLessThan(500);
});

test('banners index', function () {
    $response = $this->actingAs($this->admin)->get(backend('banners'));
    expect($response->status())->toBeLessThan(500);
});

test('plain user gets 404 on backend', function () {
    $user = User::factory()->create(['role' => 'user']);
    $response = $this->actingAs($user)->get(backend());
    expect($response->status())->toBe(404);
});

test('guest is redirected', function () {
    $response = $this->get(backend());
    expect($response->status())->toBe(302);
});
