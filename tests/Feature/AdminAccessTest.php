<?php

use App\Models\User;

test('admin can access backend dashboard', function () {
    $admin = User::factory()->create(['role' => 'admin']);
    $slug = config('backend.url_slug');

    $this->actingAs($admin)->get("/{$slug}")->assertOk();
})->skip('Pending phase 6 — controllers ported');

test('regular user gets 404 on backend', function () {
    $user = User::factory()->create(['role' => 'user']);
    $slug = config('backend.url_slug');

    $this->actingAs($user)->get("/{$slug}")->assertNotFound();
})->skip('Pending phase 2 — middleware wired');

test('guest is redirected to login', function () {
    $slug = config('backend.url_slug');

    $this->get("/{$slug}")->assertRedirect();
})->skip('Pending phase 2 — middleware wired');
