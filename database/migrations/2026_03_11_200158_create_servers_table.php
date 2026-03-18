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
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->tinyInteger('status')->default(1);
            $table->integer('sort')->default(0);
            $table->string('image')->nullable();
            $table->json('options')->nullable();
            $table->timestamp('wipe')->nullable();
            $table->timestamp('next_wipe')->nullable();
            $table->foreignId('category_id')->nullable()->constrained('servers_categories')->onDelete('set null');
            $table->timestamps();
            
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('servers');
    }
};
