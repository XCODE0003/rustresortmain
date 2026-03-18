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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('attachment')->nullable();
            $table->text('question');
            $table->text('answer')->nullable();
            $table->string('title');
            $table->string('uuid')->unique();
            $table->foreignId('answer_user_id')->nullable()->constrained('users')->onDelete('set null');
            $table->boolean('is_read')->default(false);
            $table->boolean('user_is_read')->default(false);
            $table->integer('server_id')->nullable();
            $table->string('type')->nullable();
            $table->integer('char_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
            
            $table->index('uuid');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
