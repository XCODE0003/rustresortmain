<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('shop_carts')->delete();

        Schema::table('shop_carts', function (Blueprint $table) {
            if (Schema::hasColumn('shop_carts', 'items')) {
                $table->dropColumn('items');
            }
            if (Schema::hasColumn('shop_carts', 'total')) {
                $table->dropColumn('total');
            }
            if (Schema::hasColumn('shop_carts', 'items_index')) {
                $table->dropColumn('items_index');
            }
        });

        Schema::table('shop_carts', function (Blueprint $table) {
            if (! Schema::hasColumn('shop_carts', 'item_id')) {
                $table->foreignId('item_id')->after('user_id')->constrained('shop_items')->onDelete('cascade');
            }
            if (! Schema::hasColumn('shop_carts', 'count')) {
                $table->unsignedInteger('count')->default(1)->after('item_id');
            }
        });

        Schema::table('shop_carts', function (Blueprint $table) {
            $table->unique(['user_id', 'item_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_carts', function (Blueprint $table) {
            $table->dropUnique(['user_id', 'item_id']);
        });

        Schema::table('shop_carts', function (Blueprint $table) {
            $table->dropConstrainedForeignId('item_id');
            $table->dropColumn('count');
        });

        Schema::table('shop_carts', function (Blueprint $table) {
            $table->json('items')->nullable()->comment('Cart items data');
            $table->decimal('total', 10, 2)->default(0);
            $table->text('items_index')->nullable();
        });
    }
};
