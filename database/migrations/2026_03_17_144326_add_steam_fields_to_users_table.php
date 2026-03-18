<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'steam_id')) {
                $table->string('steam_id')->nullable()->unique()->after('id');
            }
            if (!Schema::hasColumn('users', 'avatar')) {
                $table->string('avatar')->nullable()->after('email');
            }
            if (!Schema::hasColumn('users', 'balance')) {
                $table->decimal('balance', 10, 2)->default(0)->after('avatar');
            }
            if (!Schema::hasColumn('users', 'level')) {
                $table->integer('level')->default(1)->after('balance');
            }
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columns = ['steam_id', 'avatar', 'balance', 'level'];
            foreach ($columns as $column) {
                if (Schema::hasColumn('users', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
