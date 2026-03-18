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
        Schema::create('donates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('server')->nullable();
            $table->string('payment_id')->unique();
            $table->decimal('amount', 10, 2);
            $table->decimal('bonus_amount', 10, 2)->default(0);
            $table->unsignedBigInteger('item_id')->nullable();
            $table->integer('var_id')->nullable();
            $table->tinyInteger('status')->default(0)->comment('0: pending, 1: completed, 2: failed');
            $table->string('payment_system');
            $table->string('steam_id')->nullable();
            $table->timestamps();
            
            $table->index('steam_id');
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donates');
    }
};
