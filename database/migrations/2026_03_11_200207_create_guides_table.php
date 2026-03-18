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
        Schema::create('guides', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained('guides_categories')->onDelete('set null');
            $table->string('path')->unique();
            $table->tinyInteger('status')->default(1);
            $table->string('image')->nullable();
            $table->integer('sort')->default(0);
            
            $table->string('title_en')->nullable();
            $table->text('description_en')->nullable();
            $table->string('meta_title_en')->nullable();
            $table->text('meta_description_en')->nullable();
            $table->text('meta_keywords_en')->nullable();
            $table->string('meta_h1_en')->nullable();
            $table->string('meta_h2_en')->nullable();
            $table->string('meta_h3_en')->nullable();
            
            $table->string('title_ru')->nullable();
            $table->text('description_ru')->nullable();
            $table->string('meta_title_ru')->nullable();
            $table->text('meta_description_ru')->nullable();
            $table->text('meta_keywords_ru')->nullable();
            $table->string('meta_h1_ru')->nullable();
            $table->string('meta_h2_ru')->nullable();
            $table->string('meta_h3_ru')->nullable();
            
            $table->string('title_de')->nullable();
            $table->text('description_de')->nullable();
            $table->string('meta_title_de')->nullable();
            $table->text('meta_description_de')->nullable();
            $table->text('meta_keywords_de')->nullable();
            $table->string('meta_h1_de')->nullable();
            $table->string('meta_h2_de')->nullable();
            $table->string('meta_h3_de')->nullable();
            
            $table->string('title_fr')->nullable();
            $table->text('description_fr')->nullable();
            $table->string('meta_title_fr')->nullable();
            $table->text('meta_description_fr')->nullable();
            $table->text('meta_keywords_fr')->nullable();
            $table->string('meta_h1_fr')->nullable();
            $table->string('meta_h2_fr')->nullable();
            $table->string('meta_h3_fr')->nullable();
            
            $table->string('title_it')->nullable();
            $table->text('description_it')->nullable();
            $table->string('meta_title_it')->nullable();
            $table->text('meta_description_it')->nullable();
            $table->text('meta_keywords_it')->nullable();
            $table->string('meta_h1_it')->nullable();
            $table->string('meta_h2_it')->nullable();
            $table->string('meta_h3_it')->nullable();
            
            $table->string('title_es')->nullable();
            $table->text('description_es')->nullable();
            $table->string('meta_title_es')->nullable();
            $table->text('meta_description_es')->nullable();
            $table->text('meta_keywords_es')->nullable();
            $table->string('meta_h1_es')->nullable();
            $table->string('meta_h2_es')->nullable();
            $table->string('meta_h3_es')->nullable();
            
            $table->string('title_uk')->nullable();
            $table->text('description_uk')->nullable();
            $table->string('meta_title_uk')->nullable();
            $table->text('meta_description_uk')->nullable();
            $table->text('meta_keywords_uk')->nullable();
            $table->string('meta_h1_uk')->nullable();
            $table->string('meta_h2_uk')->nullable();
            $table->string('meta_h3_uk')->nullable();
            
            $table->timestamps();
            
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guides');
    }
};
