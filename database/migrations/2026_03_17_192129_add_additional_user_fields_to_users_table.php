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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'phone')) {
                $table->string('phone')->nullable()->after('email');
            }
            if (!Schema::hasColumn('users', 'pin')) {
                $table->string('pin')->nullable()->after('phone');
            }
            if (!Schema::hasColumn('users', 'role')) {
                $table->string('role')->default('user')->after('email_verified_at');
            }
            if (!Schema::hasColumn('users', 'mute')) {
                $table->boolean('mute')->default(false)->after('level');
            }
            if (!Schema::hasColumn('users', 'mute_reason')) {
                $table->text('mute_reason')->nullable()->after('mute');
            }
            if (!Schema::hasColumn('users', 'mute_date')) {
                $table->timestamp('mute_date')->nullable()->after('mute_reason');
            }
            if (!Schema::hasColumn('users', 'online_time')) {
                $table->integer('online_time')->default(0)->after('mute_date');
            }
            if (!Schema::hasColumn('users', 'online_time_monday')) {
                $table->integer('online_time_monday')->default(0)->after('online_time');
            }
            if (!Schema::hasColumn('users', 'online_time_thursday')) {
                $table->integer('online_time_thursday')->default(0)->after('online_time_monday');
            }
            if (!Schema::hasColumn('users', 'online_time_eumain')) {
                $table->integer('online_time_eumain')->default(0)->after('online_time_thursday');
            }
            if (!Schema::hasColumn('users', 'steam_trade_url')) {
                $table->string('steam_trade_url')->nullable()->after('online_time_eumain');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columns = [
                'phone',
                'pin',
                'role',
                'mute',
                'mute_reason',
                'mute_date',
                'online_time',
                'online_time_monday',
                'online_time_thursday',
                'online_time_eumain',
                'steam_trade_url',
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('users', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
