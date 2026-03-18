<?php

namespace Database\Seeders;

use App\Models\Option;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class OptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->command->info('Начинаем перенос настроек...');

        try {
            $imported = $this->seedFromOldDatabase();

            if ($imported === null) {
                $this->command->warn('Старая БД недоступна. Заполняем настройки из встроенных данных...');
                $imported = $this->seedFromDefaultOptions();
            }

            Cache::forget('options');

            $this->command->info("✓ Настроек обновлено: {$imported}");
            $this->command->info('Перенос настроек завершен!');
        } catch (\Exception $e) {
            $this->command->error('Ошибка: ' . $e->getMessage());
            $this->command->warn('Пробуем заполнить из встроенных данных...');
            $imported = $this->seedFromDefaultOptions();
            Cache::forget('options');
            $this->command->info("✓ Настроек обновлено из резервных данных: {$imported}");
        }
    }

    /**
     * Пытается загрузить настройки из старой БД. Возвращает количество или null при ошибке.
     */
    protected function seedFromOldDatabase(): ?int
    {
        try {
            $tableExists = DB::connection('mysql_old')
                ->select("SHOW TABLES LIKE 'options'");

            if (empty($tableExists)) {
                return null;
            }

            $oldOptions = DB::connection('mysql_old')
                ->table('options')
                ->get();

            if ($oldOptions->isEmpty()) {
                return null;
            }

            $imported = 0;
            foreach ($oldOptions as $oldOption) {
                Option::updateOrCreate(
                    [
                        'key' => $oldOption->key,
                        'server' => $oldOption->server ?? null,
                    ],
                    [
                        'value' => $oldOption->value ?? '',
                        'default_key' => $oldOption->default_key ?? null,
                    ]
                );
                $imported++;
            }

            return $imported;
        } catch (\Throwable) {
            return null;
        }
    }

    /**
     * Заполняет настройки из встроенных данных (OptionsData).
     */
    protected function seedFromDefaultOptions(): int
    {
        $options = OptionsData::getDefaultOptions();
        $imported = 0;

        foreach ($options as $key => $value) {
            Option::updateOrCreate(
                ['key' => $key, 'server' => null],
                ['value' => (string) $value]
            );
            $imported++;
        }

        return $imported;
    }
}
