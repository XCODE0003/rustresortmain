<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('social_links', function (Blueprint $table) {
            $table->id();
            $table->string('platform'); // youtube, discord, vk, telegram, twitch
            $table->string('url');
            $table->integer('sort')->default(0);
            $table->boolean('active')->default(true);
            $table->timestamps();
        });

        DB::table('social_links')->insert([
            ['platform' => 'youtube', 'url' => '#', 'sort' => 1, 'active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['platform' => 'discord', 'url' => '#', 'sort' => 2, 'active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['platform' => 'vk',      'url' => '#', 'sort' => 3, 'active' => true, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('social_links');
    }
};
