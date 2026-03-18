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
        Schema::create('cases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->json('items')->comment('Array of case items with probabilities');
            $table->integer('server')->nullable();
            $table->json('servers')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('price_usd', 10, 2)->nullable();
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('kind')->default(1)->comment('1: regular, 2: shop');
            $table->integer('online_amount')->nullable();
            $table->integer('prizes_max')->nullable();
            $table->string('image')->nullable();
            $table->integer('sort')->default(0);
            $table->boolean('is_free')->default(false);
            
            $table->string('title_en')->nullable();
            $table->string('title_ru')->nullable();
            $table->string('title_de')->nullable();
            $table->string('title_es')->nullable();
            $table->string('title_fr')->nullable();
            $table->string('title_it')->nullable();
            $table->string('title_uk')->nullable();
            
            $table->string('subtitle_en')->nullable();
            $table->string('subtitle_ru')->nullable();
            $table->string('subtitle_de')->nullable();
            $table->string('subtitle_es')->nullable();
            $table->string('subtitle_fr')->nullable();
            $table->string('subtitle_it')->nullable();
            $table->string('subtitle_uk')->nullable();
            
            $table->text('description_en')->nullable();
            $table->text('description_ru')->nullable();
            $table->text('description_de')->nullable();
            $table->text('description_es')->nullable();
            $table->text('description_fr')->nullable();
            $table->text('description_it')->nullable();
            $table->text('description_uk')->nullable();
            
            $table->timestamps();
            
            $table->index('status');
            $table->index('kind');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cases');
    }
};
