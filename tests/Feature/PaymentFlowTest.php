<?php

use App\Jobs\DeliverPurchaseItemsJob;
use App\Jobs\ProcessPaymentWebhookJob;
use App\Models\Donate;
use App\Models\ShopCart;
use App\Models\ShopItem;
use App\Models\User;
use Illuminate\Support\Facades\Queue;

test('user can create payment from cart', function () {
    $user = User::factory()->create();
    $item = ShopItem::factory()->create(['price' => 100]);

    ShopCart::create([
        'user_id' => $user->id,
        'item_id' => $item->id,
        'count' => 2,
    ]);

    $response = $this->actingAs($user)->post('/payment', [
        'gateway' => 'heleket',
    ]);

    expect(Donate::count())->toBe(1);
    expect(Donate::first()->amount)->toBe(200.0);
    expect(Donate::first()->payment_system)->toBe('heleket');
});

test('payment webhook is processed correctly', function () {
    Queue::fake();

    $donate = Donate::factory()->create([
        'status' => 0,
        'payment_system' => 'heleket',
    ]);

    $response = $this->postJson('/api/webhooks/heleket', [
        'payment_id' => $donate->id,
        'status' => 'success',
    ]);

    Queue::assertPushed(ProcessPaymentWebhookJob::class);
});

test('successful payment triggers item delivery', function () {
    Queue::fake();

    $user = User::factory()->create();
    $item = ShopItem::factory()->create();

    $donate = Donate::factory()->create([
        'user_id' => $user->id,
        'status' => 0,
        'items_data' => [
            ['item_id' => $item->id, 'count' => 1],
        ],
    ]);

    $donate->update(['status' => 1]);

    Queue::assertPushed(DeliverPurchaseItemsJob::class, function ($job) use ($donate) {
        return $job->donate->id === $donate->id;
    });
});
