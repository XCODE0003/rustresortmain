<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('server_online_data', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('server_id')->index();
            $table->integer('online_count')->default(0);
            $table->integer('online_max')->default(0);
            $table->integer('online_queued')->default(0);
            $table->mediumText('players_data')->nullable();
            $table->timestamp('updated_at')->useCurrent();

            $table->unique('server_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('server_online_data');
    }
};
