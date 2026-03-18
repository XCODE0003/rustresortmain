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
        Schema::create('shop_sets', function (Blueprint $table) {
            $table->id();
            $table->json('items')->comment('Array of {id, amount}');
            $table->tinyInteger('status')->default(1);
            $table->foreignId('category_id')->nullable()->constrained('shop_categories')->onDelete('set null');
            $table->json('servers')->nullable();
            $table->integer('server')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->decimal('price_usd', 10, 2)->nullable();
            $table->integer('sort')->default(0);
            $table->integer('amount')->default(1);
            $table->boolean('can_gift')->default(false);
            $table->unsignedTinyInteger('discount_percent')->default(0);
            $table->boolean('disable_category_discount')->default(false);
            $table->string('image')->nullable();
            
            $table->string('name_ru')->nullable();
            $table->string('name_en')->nullable();
            $table->string('name_de')->nullable();
            $table->string('name_fr')->nullable();
            $table->string('name_it')->nullable();
            $table->string('name_es')->nullable();
            $table->string('name_uk')->nullable();
            
            $table->text('short_description_ru')->nullable();
            $table->text('short_description_en')->nullable();
            $table->text('short_description_de')->nullable();
            $table->text('short_description_fr')->nullable();
            $table->text('short_description_it')->nullable();
            $table->text('short_description_es')->nullable();
            $table->text('short_description_uk')->nullable();
            
            $table->text('description_ru')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_de')->nullable();
            $table->text('description_fr')->nullable();
            $table->text('description_it')->nullable();
            $table->text('description_es')->nullable();
            $table->text('description_uk')->nullable();
            
            $table->timestamps();
            
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_sets');
    }
};
