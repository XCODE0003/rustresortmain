<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('bucket_items')) {
            return;
        }

        Schema::create('bucket_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('shop_item_id')->index();
            $table->bigInteger('rust_id')->nullable();
            $table->string('var_id')->nullable();
            $table->decimal('price', 10, 2)->default(0);
            $table->unsignedInteger('quantity')->default(1);
            $table->string('wipe_block')->nullable();
            $table->string('steam_id', 32)->index();
            $table->string('server_name')->nullable();
            $table->unsignedBigInteger('server_id')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bucket_items');
    }
};
