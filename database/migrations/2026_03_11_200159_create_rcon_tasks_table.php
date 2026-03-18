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
        Schema::create('rcon_tasks', function (Blueprint $table) {
            $table->id();
            $table->integer('server');
            $table->text('command');
            $table->tinyInteger('status')->default(0)->comment('0: pending, 1: completed');
            $table->text('comment')->nullable();
            $table->timestamp('created_at');
            $table->timestamp('updated_at')->nullable();
            
            $table->index(['server', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rcon_tasks');
    }
};
