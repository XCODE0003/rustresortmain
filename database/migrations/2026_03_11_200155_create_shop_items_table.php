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
        Schema::create('shop_items', function (Blueprint $table) {
            $table->id();
            $table->integer('rs_id')->nullable();
            $table->integer('item_id')->nullable();
            $table->foreignId('category_id')->nullable()->constrained('shop_categories')->onDelete('set null');
            $table->integer('server')->nullable()->comment('0 for all servers or specific server ID');
            $table->json('servers')->nullable()->comment('Array of server IDs for multi-server items');
            
            $table->decimal('price', 10, 2)->nullable();
            $table->decimal('price_usd', 10, 2)->nullable();
            $table->decimal('discount_percent', 5, 2)->nullable();
            $table->boolean('disable_category_discount')->default(false);
            $table->integer('amount')->default(1);
            
            $table->text('command')->nullable();
            $table->boolean('is_blueprint')->default(false);
            $table->boolean('is_command')->default(false);
            $table->boolean('is_item')->default(true);
            $table->boolean('wipe_block')->default(false);
            $table->tinyInteger('status')->default(1);
            $table->json('variations')->nullable();
            $table->string('image')->nullable();
            $table->integer('sort')->default(0);
            $table->boolean('can_gift')->default(false);
            
            $table->string('name_ru')->nullable();
            $table->string('name_en')->nullable();
            $table->string('name_de')->nullable();
            $table->string('name_fr')->nullable();
            $table->string('name_it')->nullable();
            $table->string('name_es')->nullable();
            $table->string('name_uk')->nullable();
            $table->string('short_name')->nullable();
            
            $table->text('short_description_ru')->nullable();
            $table->text('short_description_en')->nullable();
            $table->text('short_description_de')->nullable();
            $table->text('short_description_fr')->nullable();
            $table->text('short_description_it')->nullable();
            $table->text('short_description_es')->nullable();
            $table->text('short_description_uk')->nullable();
            
            $table->longText('description_ru')->nullable();
            $table->longText('description_en')->nullable();
            $table->longText('description_de')->nullable();
            $table->longText('description_fr')->nullable();
            $table->longText('description_it')->nullable();
            $table->longText('description_es')->nullable();
            $table->longText('description_uk')->nullable();
            
            $table->timestamps();
            
            $table->index('status');
            $table->index('server');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_items');
    }
};
