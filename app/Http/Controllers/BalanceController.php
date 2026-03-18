<?php

namespace App\Http\Controllers;

use App\Models\Donate;
use App\Services\Payments\PaymentManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class BalanceController extends Controller
{
    public function __construct(
        private PaymentManager $paymentManager
    ) {}

    public function index(): Response
    {
        $user = auth()->user();
        
        return Inertia::render('payment', [
            'gateways' => $this->paymentManager->availableGateways(),
            'balance' => $user ? $user->balance : 0,
        ]);
    }

    public function topup(Request $request): HttpResponse
    {
        $validated = $request->validate([
            'amount' => 'required|numeric|min:10|max:100000',
            'gateway' => 'required|string',
            'promo_code' => 'nullable|string',
        ]);

        $amount = $validated['amount'];
        $bonusAmount = 0;

        if (isset($validated['promo_code'])) {
            $promoCode = \App\Models\PromoCode::where('code', $validated['promo_code'])
                ->where('is_active', true)
                ->first();
            
            if ($promoCode && $promoCode->isValid()) {
                $bonusAmount = $amount * ($promoCode->discount_percent / 100);
                Log::info("Promo code applied", [
                    'code' => $validated['promo_code'],
                    'bonus' => $bonusAmount,
                ]);
            }
        }

        $user = auth()->user();
        
        $donate = Donate::create([
            'user_id' => $user->id,
            'payment_id' => uniqid('donate_', true),
            'amount' => $amount,
            'bonus_amount' => $bonusAmount,
            'status' => 0,
            'payment_system' => $validated['gateway'],
            'steam_id' => $user->steam_id,
        ]);

        try {
            $gateway = $this->paymentManager->gateway($validated['gateway']);
            $result = $gateway->createPayment($donate);

            Log::info("Payment created", [
                'donate_id' => $donate->id,
                'gateway' => $validated['gateway'],
                'amount' => $amount,
            ]);

            $redirectUrl = $result['url'] ?? null;

            if (! is_string($redirectUrl) || $redirectUrl === '') {
                throw new \Exception('Платёжный шлюз не вернул URL для редиректа');
            }

            return Inertia::location($redirectUrl);
        } catch (\Exception $e) {
            $donate->update(['status' => 2]);
            
            Log::error("Payment creation failed", [
                'donate_id' => $donate->id,
                'error' => $e->getMessage(),
            ]);

            return redirect()->back()
                ->with('error', 'Ошибка создания платежа: ' . $e->getMessage());
        }
    }
}
