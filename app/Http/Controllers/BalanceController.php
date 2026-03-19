<?php

namespace App\Http\Controllers;

use App\Models\Donate;
use App\Services\Payments\PaymentManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
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
        $user = Auth::user();
        if (! $user) {
            abort(401);
        }

        return Inertia::render('payment', [
            'gateways' => $this->paymentManager->availableGateways(),
            'balance' => $user->balance,
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
        $user = Auth::user();
        if (! $user) {
            abort(401);
        }

        Log::info('BALANCE_TOPUP_REQUEST_RECEIVED', [
            'user_id' => $user->id,
            'steam_id' => $user->steam_id,
            'gateway' => $validated['gateway'],
            'amount' => $amount,
            'promo_code' => $validated['promo_code'] ?? null,
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        if (isset($validated['promo_code'])) {
            $promoCode = \App\Models\PromoCode::where('code', $validated['promo_code'])
                ->where('is_active', true)
                ->first();

            if ($promoCode && $promoCode->isValid()) {
                $bonusAmount = $amount * ($promoCode->discount_percent / 100);
                Log::info('BALANCE_TOPUP_PROMO_APPLIED', [
                    'user_id' => $user->id,
                    'code' => $validated['promo_code'],
                    'bonus' => $bonusAmount,
                ]);
            }
        }

        $donate = Donate::create([
            'user_id' => $user->id,
            'payment_id' => uniqid('donate_', true),
            'amount' => $amount,
            'bonus_amount' => $bonusAmount,
            'status' => 0,
            'payment_system' => $validated['gateway'],
            'steam_id' => $user->steam_id,
        ]);

        Log::info('BALANCE_TOPUP_DONATE_CREATED', [
            'donate_id' => $donate->id,
            'payment_id' => $donate->payment_id,
            'user_id' => $user->id,
            'gateway' => $validated['gateway'],
            'amount' => $amount,
            'bonus_amount' => $bonusAmount,
            'status' => $donate->status,
        ]);

        try {
            $gateway = $this->paymentManager->gateway($validated['gateway']);
            Log::info('BALANCE_TOPUP_GATEWAY_RESOLVED', [
                'donate_id' => $donate->id,
                'gateway_code' => $validated['gateway'],
                'gateway_class' => get_class($gateway),
            ]);

            $result = $gateway->createPayment($donate);

            Log::info('BALANCE_TOPUP_PAYMENT_CREATED', [
                'donate_id' => $donate->id,
                'gateway' => $validated['gateway'],
                'amount' => $amount,
                'result' => $result,
            ]);

            $redirectUrl = $result['url'] ?? null;

            if (! is_string($redirectUrl) || $redirectUrl === '') {
                throw new \Exception('Платёжный шлюз не вернул URL для редиректа');
            }

            Log::info('BALANCE_TOPUP_REDIRECTING_USER', [
                'donate_id' => $donate->id,
                'gateway' => $validated['gateway'],
                'redirect_url' => $redirectUrl,
            ]);

            return Inertia::location($redirectUrl);
        } catch (\Exception $e) {
            $donate->update(['status' => 2]);

            Log::error('BALANCE_TOPUP_PAYMENT_FAILED', [
                'donate_id' => $donate->id,
                'payment_id' => $donate->payment_id,
                'gateway' => $validated['gateway'],
                'error' => $e->getMessage(),
            ]);

            return redirect()->back()
                ->with('error', 'Ошибка создания платежа: '.$e->getMessage());
        }
    }

    public function tebex(Request $request): HttpResponse
    {
        Log::info('TEBEX_BALANCE_AUTH_CALLBACK_RECEIVED', [
            'query' => $request->query(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        if (! $request->has('donate_id') || $request->get('success') !== 'true') {
            return redirect()->route('payment')->with('error', 'Ошибка Tebex авторизации');
        }

        $donateId = (int) $request->get('donate_id');
        $donate = Donate::query()->where('id', $donateId)->where('status', 0)->first();

        if (! $donate) {
            return redirect()->route('payment')->with('error', 'Платёж не найден или уже обработан');
        }

        $basketIdent = (string) $donate->payment_id;
        if ($basketIdent === '') {
            return redirect()->route('payment')->with('error', 'Корзина Tebex не найдена');
        }

        $exchangeRate = (float) config('options.exchange_rate_usd', 70);
        if ($exchangeRate <= 0) {
            $exchangeRate = 70;
        }

        $priceUsd = (int) round((float) $donate->amount / $exchangeRate);
        $priceUsd = max($priceUsd, 1);
        $items = $this->createGiftCardArray($priceUsd);

        if ($items === []) {
            return redirect()->route('payment')->with('error', 'Не удалось сформировать корзину Tebex');
        }

        $checkoutUrl = null;
        foreach ($items as $item) {
            $response = Http::acceptJson()
                ->withHeaders([
                    'Content-Type' => 'application/json',
                ])
                ->post("https://headless.tebex.io/api/baskets/{$basketIdent}/packages", [
                    'package_id' => $item['package_id'],
                    'quantity' => $item['quantity'] ?? 1,
                ]);

            $responseData = $response->json();
            Log::channel('tebex')->info('TEBEX_BALANCE_ADD_PACKAGE_RESPONSE', [
                'donate_id' => $donate->id,
                'basket_ident' => $basketIdent,
                'request_item' => $item,
                'status' => $response->status(),
                'headers' => $response->headers(),
                'body' => $response->body(),
                'json' => $responseData,
            ]);

            if ($response->successful()) {
                $checkoutUrl = $responseData['data']['links']['checkout']
                    ?? $responseData['data']['checkoutUrl']
                    ?? $responseData['data']['checkout_url']
                    ?? $responseData['checkout']
                    ?? $checkoutUrl;
            }
        }

        if (! is_string($checkoutUrl) || $checkoutUrl === '') {
            return redirect()->route('payment')->with('error', 'Tebex не вернул ссылку оплаты после авторизации');
        }

        Log::channel('tebex')->info('TEBEX_BALANCE_REDIRECTING_TO_CHECKOUT', [
            'donate_id' => $donate->id,
            'basket_ident' => $basketIdent,
            'checkout_url' => $checkoutUrl,
        ]);

        return Inertia::location($checkoutUrl);
    }

    protected function createGiftCardArray(int $amount): array
    {
        $giftCards = [
            7205043 => 10,
            7205054 => 3,
            7205057 => 1,
        ];

        $items = [];
        foreach ($giftCards as $packageId => $value) {
            while ($amount >= $value) {
                if (isset($items[$packageId])) {
                    $items[$packageId]['quantity']++;
                } else {
                    $items[$packageId] = [
                        'package_id' => $packageId,
                        'quantity' => 1,
                    ];
                }
                $amount -= $value;
            }
        }

        return array_values($items);
    }
}
