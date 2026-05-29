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
        Schema::table('servers', function (Blueprint $table) {
            $table->json('wipe_schedule_days')->nullable()->after('next_wipe');
            $table->time('wipe_schedule_time')->nullable()->after('wipe_schedule_days');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('servers', function (Blueprint $table) {
            $table->dropColumn(['wipe_schedule_days', 'wipe_schedule_time']);
        });
    }
};
