<?php

namespace App\Services\Payments;

use App\Models\PaymentGateway as PaymentGatewayModel;
use App\Services\Payments\Contracts\PaymentGatewayInterface;
use App\Services\Payments\Gateways\AlfabankGateway;
use App\Services\Payments\Gateways\CentGateway;
use App\Services\Payments\Gateways\CryptoCloudGateway;
use App\Services\Payments\Gateways\EnotGateway;
use App\Services\Payments\Gateways\FreekassaGateway;
use App\Services\Payments\Gateways\HeleketGateway;
use App\Services\Payments\Gateways\PallyGateway;
use App\Services\Payments\Gateways\PayKeeperGateway;
use App\Services\Payments\Gateways\PayPalGateway;
use App\Services\Payments\Gateways\QiwiGateway;
use App\Services\Payments\Gateways\SteamGateway;
use App\Services\Payments\Gateways\TebexGateway;
use App\Services\Payments\Gateways\UnitPayGateway;
use App\Services\Payments\Gateways\YooKassaGateway;
use Illuminate\Support\Facades\Cache;
use InvalidArgumentException;

class PaymentManager
{
    protected array $gateways = [];

    public function __construct()
    {
        $this->registerGateways();
    }

    protected function registerGateways(): void
    {
        $this->gateways = [
            'enot' => EnotGateway::class,
            'freekassa' => FreekassaGateway::class,
            'qiwi' => QiwiGateway::class,
            'cent' => CentGateway::class,
            'yookassa' => YooKassaGateway::class,
            'unitpay' => UnitPayGateway::class,
            'cryptocloud' => CryptoCloudGateway::class,
            'paykeeper' => PayKeeperGateway::class,
            'alfabank' => AlfabankGateway::class,
            'tebex' => TebexGateway::class,
            'pally' => PallyGateway::class,
            'heleket' => HeleketGateway::class,
            'paypal' => PayPalGateway::class,
            'steam' => SteamGateway::class,
        ];
    }

    public function gateway(string $name): PaymentGatewayInterface
    {
        $gatewayClass = $this->resolveGatewayClass($name);

        if (! $gatewayClass) {
            throw new InvalidArgumentException("Payment gateway [{$name}] not found.");
        }

        return app($gatewayClass);
    }

    public function availableGateways(): array
    {
        return Cache::remember('active_payment_gateways', 3600, function () {
            return PaymentGatewayModel::active()
                ->get()
                ->mapWithKeys(function ($gateway) {
                    $isSteam = $gateway->getSetting('backend') === 'steam';

                    $data = [
                        'id' => $gateway->id,
                        'name' => $gateway->name_ru,
                        'logo' => $gateway->logo,
                        'currency' => $gateway->currency,
                        'min_amount' => $gateway->min_amount,
                        'max_amount' => $gateway->max_amount,
                        'commission_percent' => $gateway->commission_percent,
                        'type' => $isSteam ? 'steam_trade' : 'default',
                    ];

                    if ($isSteam) {
                        $data['trade_url'] = $gateway->getSetting('trade_url', '');
                    }

                    return [$gateway->code => $data];
                })
                ->toArray();
        });
    }

    public function hasGateway(string $name): bool
    {
        return (bool) $this->resolveGatewayClass($name);
    }

    public function clearCache(): void
    {
        Cache::forget('active_payment_gateways');
    }

    protected function resolveGatewayClass(string $name): ?string
    {
        if (PaymentGatewayModel::getConnectionResolver()) {
            $methodGateway = PaymentGatewayModel::query()
                ->where('code', $name)
                ->first();

            if ($methodGateway) {
                $backendCode = $methodGateway->getSetting('backend');

                if (is_string($backendCode) && isset($this->gateways[$backendCode])) {
                    $this->safeLog('info', 'PAYMENT_GATEWAY_RESOLVED_VIA_BACKEND', [
                        'requested_gateway' => $name,
                        'backend_code' => $backendCode,
                        'gateway_class' => $this->gateways[$backendCode],
                    ]);

                    return $this->gateways[$backendCode];
                }

                if (isset($this->gateways[$methodGateway->code])) {
                    $this->safeLog('info', 'PAYMENT_GATEWAY_RESOLVED_VIA_METHOD_CODE', [
                        'requested_gateway' => $name,
                        'method_code' => $methodGateway->code,
                        'gateway_class' => $this->gateways[$methodGateway->code],
                    ]);

                    return $this->gateways[$methodGateway->code];
                }
            }
        }

        if (isset($this->gateways[$name])) {
            $this->safeLog('info', 'PAYMENT_GATEWAY_RESOLVED_DIRECT', [
                'requested_gateway' => $name,
                'gateway_class' => $this->gateways[$name],
            ]);

            return $this->gateways[$name];
        }

        $this->safeLog('warning', 'PAYMENT_GATEWAY_NOT_FOUND', [
            'requested_gateway' => $name,
        ]);

        return null;
    }

    protected function safeLog(string $level, string $message, array $context = []): void
    {
        if (! function_exists('logger')) {
            return;
        }

        try {
            logger()->log($level, $message, $context);
        } catch (\Throwable) {
            // Keep gateway resolver usable in lightweight tests without bootstrapped facades.
        }
    }
}
