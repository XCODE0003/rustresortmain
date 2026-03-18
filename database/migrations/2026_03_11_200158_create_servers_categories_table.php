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
        Schema::create('servers_categories', function (Blueprint $table) {
            $table->id();
            $table->string('path')->unique();
            $table->tinyInteger('status')->default(1);
            $table->integer('sort')->default(0);
            
            $table->string('title_ru')->nullable();
            $table->string('title_en')->nullable();
            $table->string('title_de')->nullable();
            $table->string('title_fr')->nullable();
            $table->string('title_it')->nullable();
            $table->string('title_es')->nullable();
            $table->string('title_uk')->nullable();
            
            $table->text('description_ru')->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_de')->nullable();
            $table->text('description_fr')->nullable();
            $table->text('description_it')->nullable();
            $table->text('description_es')->nullable();
            $table->text('description_uk')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servers_categories');
    }
};
