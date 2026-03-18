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
        Schema::create('shop_statistics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('item_id')->nullable();
            $table->unsignedBigInteger('set_id')->nullable();
            $table->unsignedBigInteger('case_id')->nullable();
            $table->integer('amount')->default(1);
            $table->decimal('price', 10, 2);
            $table->integer('server')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('steam_id')->nullable();
            $table->timestamps();
            
            $table->index('steam_id');
            $table->index('server');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_statistics');
    }
};
