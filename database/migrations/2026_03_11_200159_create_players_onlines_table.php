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
        Schema::create('players_onlines', function (Blueprint $table) {
            $table->id();
            $table->string('steam_id');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->integer('server');
            $table->integer('online_prev')->default(0);
            $table->integer('online_time')->default(0);
            $table->timestamps();
            
            $table->index(['steam_id', 'server']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players_onlines');
    }
};
