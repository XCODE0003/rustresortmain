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
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('type')->comment('0: case item, 1: shop item, 2: balance, 3: deposit, 5: vip');
            $table->string('item')->nullable();
            $table->unsignedBigInteger('case_id')->nullable();
            $table->unsignedBigInteger('shop_item_id')->nullable();
            $table->unsignedBigInteger('item_id')->nullable();
            $table->integer('amount')->default(1);
            $table->integer('variation_id')->nullable();
            $table->decimal('balance', 10, 2)->default(0);
            $table->integer('vip_period')->nullable();
            $table->decimal('deposit_bonus', 10, 2)->default(0);
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            
            $table->index(['user_id', 'type']);
            $table->index('case_id');
            $table->index('shop_item_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventories');
    }
};
