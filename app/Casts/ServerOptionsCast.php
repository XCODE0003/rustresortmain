<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

/**
 * Декодирует options из БД: поддержка двойного/тройного JSON и строк с лишними кавычками.
 */
class ServerOptionsCast implements CastsAttributes
{
    /**
     * @param  mixed  $value  Сырое значение из БД (строка JSON или уже массив драйвером)
     * @return array<string, mixed>
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): array
    {
        if ($value === null || $value === '') {
            return [];
        }

        if (is_array($value)) {
            return $value;
        }

        return $this->unwrapJsonToArray(is_string($value) ? $value : '');
    }

    /**
     * @param  array<string, mixed>|mixed  $value
     * @return array<string, mixed>
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): array
    {
        if (! is_array($value)) {
            return [$key => $value];
        }

        return [$key => json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)];
    }

    /**
     * @return array<string, mixed>
     */
    private function unwrapJsonToArray(string $raw): array
    {
        $current = $raw;

        for ($i = 0; $i < 20; $i++) {
            if (is_array($current)) {
                return $current;
            }

            if (! is_string($current) || $current === '') {
                return [];
            }

            $trimmed = trim($current);

            // Лишние внешние кавычки: "\"{...}\""
            if (strlen($trimmed) >= 2 && $trimmed[0] === '"' && str_ends_with($trimmed, '"')) {
                $unquoted = json_decode($trimmed, true);
                if (is_string($unquoted)) {
                    $current = $unquoted;

                    continue;
                }
                if (is_array($unquoted)) {
                    return $unquoted;
                }
            }

            $decoded = json_decode($current, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                if (is_array($decoded)) {
                    return $decoded;
                }
                if (is_string($decoded)) {
                    $current = $decoded;

                    continue;
                }
            }

            $stripped = json_decode(stripslashes($current), true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($stripped)) {
                return $stripped;
            }

            break;
        }

        return [];
    }
}
