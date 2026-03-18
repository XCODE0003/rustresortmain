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
                    return [$gateway->code => [
                        'id' => $gateway->id,
                        'name' => $gateway->name_ru,
                        'logo' => $gateway->logo,
                        'currency' => $gateway->currency,
                        'min_amount' => $gateway->min_amount,
                        'max_amount' => $gateway->max_amount,
                        'commission_percent' => $gateway->commission_percent,
                    ]];
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
        if (isset($this->gateways[$name])) {
            return $this->gateways[$name];
        }

        if (! PaymentGatewayModel::getConnectionResolver()) {
            return null;
        }

        $methodGateway = PaymentGatewayModel::query()
            ->where('code', $name)
            ->first();

        if (! $methodGateway) {
            return null;
        }

        $backendCode = $methodGateway->getSetting('backend');

        if (is_string($backendCode) && isset($this->gateways[$backendCode])) {
            return $this->gateways[$backendCode];
        }

        return isset($this->gateways[$methodGateway->code])
            ? $this->gateways[$methodGateway->code]
            : null;
    }
}

