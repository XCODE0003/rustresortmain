<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Локальная копия банов из RustApp (court.rustapp.io).
     * Синхронизируется джобой SyncRustAppBansJob каждые 3 минуты, чтобы:
     *  - страница банов читалась из своей БД (не падала при недоступности RustApp);
     *  - копилась вечная история банов (записи не удаляются, снятые помечаются is_active=false).
     */
    public function up(): void
    {
        Schema::create('bans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rustapp_id')->unique(); // id бана в RustApp — ключ для upsert
            $table->string('steam_id')->index();
            $table->string('steam_name')->nullable();
            $table->string('steam_avatar')->nullable();
            $table->text('reason')->nullable();
            $table->json('server_ids')->nullable();
            $table->unsignedBigInteger('banned_at')->nullable();  // UNIX-секунды (RustApp отдаёт ms → нормализуем)
            $table->unsignedBigInteger('expires_at')->default(0); // UNIX-секунды, 0 = навсегда
            $table->boolean('is_active')->default(true)->index();
            $table->string('ban_group_uuid')->nullable();
            $table->timestamp('last_seen_at')->nullable();        // когда последний раз видели в активном списке RustApp
            $table->timestamps();

            $table->index('banned_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bans');
    }
};
