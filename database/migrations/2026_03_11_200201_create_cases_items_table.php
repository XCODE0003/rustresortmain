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
        Schema::create('cases_items', function (Blueprint $table) {
            $table->id();
            $table->string('item_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('quality_type')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('price_usd', 10, 2)->nullable();
            $table->integer('amount')->default(1);
            $table->tinyInteger('status')->default(1);
            $table->integer('sort')->default(0);
            $table->string('image')->nullable();
            $table->string('source')->nullable();
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
            
            $table->index('status');
            $table->index('category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cases_items');
    }
};
