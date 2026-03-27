<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('legal_pages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();

            foreach (['ru', 'en', 'de', 'fr', 'it', 'es', 'uk'] as $lang) {
                $table->string("title_{$lang}")->nullable();
                $table->longText("content_{$lang}")->nullable();
            }

            $table->timestamps();
        });

        DB::table('legal_pages')->insert([
            [
                'slug'     => 'terms',
                'title_ru' => 'Пользовательское соглашение',
                'title_en' => 'Terms of Service',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug'     => 'privacy',
                'title_ru' => 'Политика конфиденциальности',
                'title_en' => 'Privacy Policy',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug'     => 'refund',
                'title_ru' => 'Политика возврата',
                'title_en' => 'Refund Policy',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('legal_pages');
    }
};
