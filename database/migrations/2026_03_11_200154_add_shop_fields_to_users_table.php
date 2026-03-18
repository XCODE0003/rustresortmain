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
            $table->string('steam_id')->nullable()->after('email')->unique();
            $table->decimal('balance', 10, 2)->default(0)->after('steam_id');
            $table->string('role')->default('user')->after('balance');
            $table->boolean('mute')->default(false)->after('role');
            $table->text('mute_reason')->nullable()->after('mute');
            $table->timestamp('mute_date')->nullable()->after('mute_reason');
            $table->integer('online_time')->default(0)->after('mute_date');
            $table->integer('online_time_monday')->default(0)->after('online_time');
            $table->integer('online_time_thursday')->default(0)->after('online_time_monday');
            $table->integer('online_time_eumain')->default(0)->after('online_time_thursday');
            $table->string('steam_trade_url')->nullable()->after('online_time_eumain');
            $table->string('phone')->nullable()->after('steam_trade_url');
            $table->string('pin')->nullable()->after('phone');

            $table->index('steam_id');
            $table->index('role');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['steam_id']);
            $table->dropIndex(['role']);
            $table->dropColumn([
                'steam_id', 'balance', 'role', 'mute', 'mute_reason', 'mute_date',
                'online_time', 'online_time_monday', 'online_time_thursday', 
                'online_time_eumain', 'steam_trade_url', 'phone', 'pin',
            ]);
        });
    }
};
