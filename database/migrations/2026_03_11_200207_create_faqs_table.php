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
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->text('question_ru')->nullable();
            $table->text('question_en')->nullable();
            $table->text('question_de')->nullable();
            $table->text('question_fr')->nullable();
            $table->text('question_it')->nullable();
            $table->text('question_es')->nullable();
            $table->text('question_uk')->nullable();
            
            $table->text('answer_ru')->nullable();
            $table->text('answer_en')->nullable();
            $table->text('answer_de')->nullable();
            $table->text('answer_fr')->nullable();
            $table->text('answer_it')->nullable();
            $table->text('answer_es')->nullable();
            $table->text('answer_uk')->nullable();
            
            $table->integer('sort')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
