<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

/**
 * JSON-каст, устойчивый к двойному кодированию.
 *
 * Админ-контроллеры исторически делали json_encode() поверх каста 'array',
 * из-за чего в БД лежит JSON-строка JSON-строки: '"[{\"variation_id\"...}]"'.
 * Каст 'array' декодировал её один раз и отдавал СТРОКУ вместо массива —
 * фронт не видел вариаций (var_id уходил null), buyWithBalance и доставка
 * не находили вариацию (is_array() = false), команда выдачи получала пустой
 * срок («grantperm ... rate.vip d»).
 *
 * get(): декодирует до массива (максимум дважды) — лечит испорченные строки.
 * set(): принимает и массив, и готовую JSON-строку — кодирует ровно один раз.
 */
class LenientJsonArray implements CastsAttributes
{
    public function get(Model $model, string $key, mixed $value, array $attributes): ?array
    {
        if ($value === null || $value === '') {
            return null;
        }

        $decoded = json_decode((string) $value, true);
        if (is_string($decoded)) {
            $decoded = json_decode($decoded, true);
        }

        return is_array($decoded) ? $decoded : null;
    }

    public function set(Model $model, string $key, mixed $value, array $attributes): ?string
    {
        if ($value === null) {
            return null;
        }

        // Легаси-вызовы передают уже закодированный JSON — не кодируем повторно.
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            if (is_string($decoded)) { // двойной JSON → нормализуем
                $decoded = json_decode($decoded, true);
            }

            return json_encode(is_array($decoded) ? $decoded : []);
        }

        return json_encode($value);
    }
}
