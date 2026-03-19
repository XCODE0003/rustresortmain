<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaymentRequest;
use App\Models\Donate;
use App\Models\ShopCart;
use App\Models\User;
use App\Services\Payments\PaymentManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\Response as HttpResponse;

class PaymentController extends Controller
{
    public function __construct(
        private PaymentManager $paymentManager
    ) {}

    public function create(): Response
    {
        $cart = ShopCart::with('item')
            ->where('user_id', auth()->id())
            ->get();

        $total = $cart->sum(fn ($item) => $item->item->getFinalPrice() * $item->count);

        return Inertia::render('Payment/Create', [
            'cart' => $cart,
            'total' => $total,
            'gateways' => $this->paymentManager->availableGateways(),
        ]);
    }

    public function store(StorePaymentRequest $request): HttpResponse
    {
        $cart = ShopCart::with('item')
            ->where('user_id', auth()->id())
            ->get();

        if ($cart->isEmpty()) {
            return redirect()->route('shop.index')
                ->with('error', 'Your cart is empty');
        }

        $total = $cart->sum(fn ($item) => $item->item->getFinalPrice() * $item->count);

        $donate = Donate::create([
            'user_id' => auth()->id(),
            'payment_id' => uniqid('donate_', true),
            'amount' => $total,
            'payment_system' => $request->validated('gateway'),
            'status' => 0,
            'items_data' => $cart->toArray(),
        ]);

        try {
            $gateway = $this->paymentManager->gateway($request->validated('gateway'));
            $result = $gateway->createPayment($donate);

            Log::info('Payment redirect created', [
                'donate_id' => $donate->id,
                'payment_id' => $donate->payment_id,
                'gateway' => $request->validated('gateway'),
                'redirect_url' => $result['url'] ?? null,
            ]);

            $redirectUrl = $result['url'] ?? null;

            if (! is_string($redirectUrl) || $redirectUrl === '') {
                throw new \Exception('Платёжный шлюз не вернул URL для редиректа');
            }

            return Inertia::location($redirectUrl);
        } catch (\Exception $e) {
            $donate->update(['status' => 2]);

            Log::error('Payment creation failed', [
                'donate_id' => $donate->id,
                'payment_id' => $donate->payment_id,
                'gateway' => $request->validated('gateway'),
                'message' => $e->getMessage(),
            ]);

            return redirect()->route('payment.cancel', $donate)
                ->with('error', 'Ошибка создания платежа: '.$e->getMessage());
        }
    }

    public function success(Request $request, Donate $donate): Response
    {
        Log::info('PAYMENT_SUCCESS_PAGE_OPENED', [
            'donate_id' => $donate->id,
            'payment_id' => $donate->payment_id,
            'status' => $donate->status,
            'payment_system' => $donate->payment_system,
            'query' => $request->query(),
            'is_auth_before' => Auth::check(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        if (! Auth::check() && $donate->user_id) {
            $user = User::find($donate->user_id);
            if ($user) {
                Auth::login($user, true);
                $request->session()->regenerate();
                Log::info('PAYMENT_SUCCESS_AUTOLOGIN_PERFORMED', [
                    'donate_id' => $donate->id,
                    'user_id' => $user->id,
                ]);
            }
        }

        return Inertia::render('Payment/Success', [
            'payment' => $donate,
        ]);
    }

    public function cancel(Request $request, Donate $donate): Response
    {
        Log::info('PAYMENT_CANCEL_PAGE_OPENED', [
            'donate_id' => $donate->id,
            'payment_id' => $donate->payment_id,
            'status' => $donate->status,
            'payment_system' => $donate->payment_system,
            'query' => $request->query(),
            'is_auth_before' => Auth::check(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        if (! Auth::check() && $donate->user_id) {
            $user = User::find($donate->user_id);
            if ($user) {
                Auth::login($user, true);
                $request->session()->regenerate();
                Log::info('PAYMENT_CANCEL_AUTOLOGIN_PERFORMED', [
                    'donate_id' => $donate->id,
                    'user_id' => $user->id,
                ]);
            }
        }

        return Inertia::render('Payment/Cancel', [
            'payment' => $donate,
        ]);
    }
}
