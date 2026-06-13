<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'ip' => ['required', 'string'],
            'rcon_ip' => ['required', 'string'],
            'connect' => ['nullable', 'string', 'max:255'],
            'status' => ['required', 'string'],
            'sort' => ['required', 'string', 'max:20'],
            'category_id' => ['required', 'string', 'max:20'],
            'image' => ['required_without:edit', 'image'],
            'rsworld_db_type' => ['required', 'string'],
            'next_wipe' => ['nullable', 'date'],
            'wipe_schedule_days' => ['nullable', 'array'],
            'wipe_schedule_days.*' => ['integer', 'between:0,6'],
            // TIME-колонка отдаёт HH:MM:SS, а <input type="time"> — HH:MM. Принимаем оба.
            'wipe_schedule_time' => ['nullable', 'date_format:H:i,H:i:s'],
            'rcon_passw' => [''],
        ];
    }

    /**
     * Нормализуем время вайпа к HH:MM до валидации (срезаем секунды, если пришли из TIME-колонки).
     */
    protected function prepareForValidation(): void
    {
        $time = $this->input('wipe_schedule_time');

        if (is_string($time) && preg_match('/^\d{2}:\d{2}:\d{2}$/', $time)) {
            $this->merge(['wipe_schedule_time' => substr($time, 0, 5)]);
        }
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        // В lang/ru нет validation.php → без явного сообщения показывался сырой ключ validation.date_format.
        return [
            'wipe_schedule_time.date_format' => 'Время вайпа должно быть в формате ЧЧ:ММ (например, 12:00).',
        ];
    }
}
