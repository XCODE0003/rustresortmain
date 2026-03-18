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
        Schema::create('statistics', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->tinyInteger('general')->default(0)->comment('0: daily, 1: general');
            $table->integer('server');
            $table->string('player_id')->comment('Steam ID');
            $table->string('name');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->integer('deaths')->default(0);
            $table->integer('kills')->default(0);
            $table->integer('deaths_player')->default(0);
            $table->json('resourse_list')->nullable();
            $table->json('raid_list')->nullable();
            $table->integer('head_shots')->default(0);
            $table->boolean('is_npc')->default(false);
            $table->integer('hits')->default(0);
            $table->integer('shoots')->default(0);
            
            $table->index(['player_id', 'server', 'date']);
            $table->index('general');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistics');
    }
};
