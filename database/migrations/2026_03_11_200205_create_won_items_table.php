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
        Schema::create('won_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('item');
            $table->unsignedBigInteger('item_id')->nullable();
            $table->string('item_icon')->nullable();
            $table->boolean('issued')->default(false);
            $table->integer('server')->nullable();
            $table->timestamps();
            
            $table->index('issued');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('won_items');
    }
};
