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
        Schema::table('shop_purchases', function (Blueprint $table) {
            if (!Schema::hasColumn('shop_purchases', 'count')) {
                $table->integer('count')->default(1)->after('item_id');
            }
            if (!Schema::hasColumn('shop_purchases', 'server_id')) {
                $table->foreignId('server_id')->nullable()->after('count')->constrained()->onDelete('cascade');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_purchases', function (Blueprint $table) {
            $table->dropColumn(['count', 'server_id']);
        });
    }
};
