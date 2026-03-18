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
        Schema::create('clear_statistics', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('general');
            $table->integer('server');
            $table->string('player_id')->comment('Steam ID');
            $table->string('name');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->boolean('is_npc')->default(false);
            $table->integer('deaths')->default(0);
            $table->integer('kills')->default(0);
            $table->integer('deaths_player')->default(0);
            $table->integer('head_shots')->default(0);
            $table->integer('hits')->default(0);
            $table->integer('shoots')->default(0);
            $table->decimal('kdr', 8, 2)->default(0);
            $table->decimal('hits_kdr', 8, 2)->default(0);
            $table->date('date');
            
            $table->bigInteger('wood')->default(0);
            $table->bigInteger('stones')->default(0);
            $table->bigInteger('metal_ore')->default(0);
            $table->bigInteger('sulfur_ore')->default(0);
            $table->bigInteger('hq_metal_ore')->default(0);
            $table->bigInteger('leather')->default(0);
            $table->bigInteger('fat_animal')->default(0);
            $table->bigInteger('bone_fragments')->default(0);
            $table->bigInteger('cloth')->default(0);
            
            $table->integer('d_garage')->default(0);
            $table->integer('d_wooden')->default(0);
            $table->integer('d_metal')->default(0);
            $table->integer('d_d_metal')->default(0);
            $table->integer('d_d_wooden')->default(0);
            $table->integer('d_d_armored')->default(0);
            $table->integer('d_armored')->default(0);
            
            $table->integer('bb_wooden')->default(0);
            $table->integer('bb_stone')->default(0);
            $table->integer('bb_metal')->default(0);
            $table->integer('bb_mvk')->default(0);
            $table->integer('bb_reinf_w_glass')->default(0);
            $table->integer('bb_auto_turret')->default(0);
            $table->integer('bb_reinf_w_grilles')->default(0);
            
            $table->index(['player_id', 'server', 'general', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clear_statistics');
    }
};
