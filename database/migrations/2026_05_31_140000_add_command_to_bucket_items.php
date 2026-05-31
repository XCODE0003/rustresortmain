<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('bucket_items') || Schema::hasColumn('bucket_items', 'command')) {
            return;
        }

        Schema::table('bucket_items', function (Blueprint $table) {
            // Резолвнутая RCON-команда привилегии (is_command), которую внутриигровой
            // плагин исполняет на сервере, где находится игрок. Для обычных товаров null.
            $table->text('command')->nullable()->after('var_id');
        });
    }

    public function down(): void
    {
        if (Schema::hasTable('bucket_items') && Schema::hasColumn('bucket_items', 'command')) {
            Schema::table('bucket_items', function (Blueprint $table) {
                $table->dropColumn('command');
            });
        }
    }
};
