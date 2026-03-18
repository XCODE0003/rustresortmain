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
        Schema::create('payment_gateways', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->string('name_ru');
            $table->boolean('is_active')->default(false);
            $table->integer('sort')->default(0);
            $table->string('logo')->nullable();
            $table->json('settings')->nullable();
            $table->text('description')->nullable();
            $table->string('currency', 10)->default('RUB');
            $table->decimal('min_amount', 10, 2)->default(10);
            $table->decimal('max_amount', 10, 2)->nullable();
            $table->decimal('commission_percent', 5, 2)->default(0);
            $table->timestamps();
            
            $table->index('is_active');
            $table->index('sort');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_gateways');
    }
};
