<?php

use App\Models\Inventory;
use App\Models\PromoCode;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

function makePromo(array $overrides = []): PromoCode
{
    return PromoCode::create(array_merge([
        'title' => 'Test promo',
        'code' => 'TESTCODE',
        'type' => 1,            // одноразовый на пользователя
        'type_reward' => 2,     // бонус на баланс
        'bonus_amount' => 100,
        'is_created_bot' => false,
        'users' => null,
    ], $overrides));
}

test('type_reward=2 начисляет бонус на баланс и фиксирует активацию', function () {
    $user = User::factory()->create(['balance' => 50]);
    $promo = makePromo(['code' => 'BONUS100', 'bonus_amount' => 100]);

    $this->actingAs($user)
        ->post('/promocode/activate', ['code' => 'BONUS100'])
        ->assertRedirect()
        ->assertSessionHas('success');

    expect((float) $user->fresh()->balance)->toBe(150.0);

    $promo->refresh();
    expect($promo->users)->toHaveCount(1);
    expect((int) $promo->users[0]['user_id'])->toBe($user->id);
});

test('повторная активация одноразового промокода (type=1) отклоняется', function () {
    $user = User::factory()->create(['balance' => 0]);
    makePromo(['code' => 'ONCE', 'type' => 1, 'bonus_amount' => 100]);

    $this->actingAs($user)->post('/promocode/activate', ['code' => 'ONCE']);
    $this->actingAs($user)
        ->post('/promocode/activate', ['code' => 'ONCE'])
        ->assertSessionHas('error');

    // Баланс начислен только один раз.
    expect((float) $user->fresh()->balance)->toBe(100.0);
});

test('неверный промокод возвращает ошибку', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post('/promocode/activate', ['code' => 'DOESNOTEXIST'])
        ->assertSessionHas('error');
});

test('истёкший промокод не активируется', function () {
    $user = User::factory()->create(['balance' => 0]);
    makePromo(['code' => 'EXPIRED', 'date_end' => now()->subDay()]);

    $this->actingAs($user)
        ->post('/promocode/activate', ['code' => 'EXPIRED'])
        ->assertSessionHas('error');

    expect((float) $user->fresh()->balance)->toBe(0.0);
});

test('лимит активаций (max_activations) соблюдается', function () {
    $u1 = User::factory()->create(['balance' => 0]);
    $u2 = User::factory()->create(['balance' => 0]);
    // type=3 (без ограничения уникальности), но max_activations=1.
    makePromo(['code' => 'LIMIT1', 'type' => 3, 'bonus_amount' => 100, 'max_activations' => 1]);

    $this->actingAs($u1)->post('/promocode/activate', ['code' => 'LIMIT1'])->assertSessionHas('success');
    $this->actingAs($u2)->post('/promocode/activate', ['code' => 'LIMIT1'])->assertSessionHas('error');

    expect((float) $u1->fresh()->balance)->toBe(100.0);
    expect((float) $u2->fresh()->balance)->toBe(0.0);
});

test('type_reward=2 с нулевым бонусом — некорректная конфигурация', function () {
    $user = User::factory()->create(['balance' => 0]);
    makePromo(['code' => 'ZERO', 'bonus_amount' => 0]);

    $this->actingAs($user)
        ->post('/promocode/activate', ['code' => 'ZERO'])
        ->assertSessionHas('error');

    // Активация не записана — промокод не «сгорел».
    expect(PromoCode::where('code', 'ZERO')->first()->users)->toBeNull();
});
