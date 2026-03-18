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
        Schema::create('delivery_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->unsignedBigInteger('item_id')->nullable();
            $table->string('item');
            $table->string('item_icon')->nullable();
            $table->string('item_type');
            $table->integer('amount')->default(1);
            $table->decimal('price', 10, 2);
            $table->decimal('price_min', 10, 2)->nullable();
            $table->decimal('price_max', 10, 2)->nullable();
            $table->decimal('price_cap', 10, 2)->nullable();
            $table->tinyInteger('status')->default(0);
            $table->string('delivery_id')->nullable();
            $table->text('note')->nullable();
            $table->integer('server');
            $table->timestamp('date_request');
            $table->timestamp('date_execution')->nullable();
            
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_requests');
    }
};
