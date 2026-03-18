<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('promo_codes', function (Blueprint $table) {
            $table->id();
            $table->string('public_uuid', 36)->unique()->nullable();
            $table->string('title');
            $table->string('code')->unique();
            $table->string('type')->comment('single, multiple, unlimited');
            $table->string('type_reward')->comment('balance, case, item, vip');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->decimal('bonus_amount', 10, 2)->default(0);
            $table->integer('premium_period')->nullable();
            $table->unsignedBigInteger('case_id')->nullable();
            $table->unsignedBigInteger('bonus_case_id')->nullable();
            $table->integer('server_id')->nullable();
            $table->json('users')->nullable()->comment('Array of activated user IDs');
            $table->timestamp('date_start')->nullable();
            $table->timestamp('date_end')->nullable();
            $table->unsignedInteger('max_activations')->nullable();
            $table->json('items')->nullable();
            $table->unsignedBigInteger('shop_item_id')->nullable();
            $table->integer('variation_id')->nullable();
            $table->boolean('is_created_bot')->default(false);
            $table->timestamps();
            
            $table->index('is_created_bot');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promo_codes');
    }
};
