<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StorePaymentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        $activeGateways = \App\Models\PaymentGateway::where('is_active', true)
            ->pluck('code')
            ->toArray();
        
        return [
            'gateway' => ['required', 'string', 'in:' . implode(',', $activeGateways)],
        ];
    }

    public function messages(): array
    {
        return [
            'gateway.required' => 'Please select a payment method',
            'gateway.in' => 'Invalid payment method selected',
        ];
    }
}
