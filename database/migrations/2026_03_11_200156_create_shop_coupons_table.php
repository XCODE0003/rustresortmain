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
        Schema::create('shop_coupons', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('code')->unique();
            $table->string('type');
            $table->integer('percent')->default(0);
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->json('users')->nullable()->comment('Array of user IDs');
            $table->timestamp('date_start')->nullable();
            $table->timestamp('date_end')->nullable();
            $table->json('items')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_coupons');
    }
};
