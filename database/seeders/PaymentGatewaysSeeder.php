<?php

namespace Database\Seeders;

use App\Models\PaymentGateway;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PaymentGatewaysSeeder extends Seeder
{
    public function run(): void
    {
        try {
            $oldConnection = config('database.connections.mysql_old');

            if (! $oldConnection || ! $oldConnection['database']) {
                Log::warning('Old database connection not configured. Skipping payment gateways migration.');
                $this->seedDefaultGateways();

                return;
            }

            DB::connection('mysql_old')->getPdo();

            if (! DB::connection('mysql_old')->getSchemaBuilder()->hasTable('options')) {
                Log::warning('Options table not found in old database. Seeding default gateways.');
                $this->seedDefaultGateways();

                return;
            }

            $this->migrateFromOldDatabase();

        } catch (\Exception $e) {
            Log::warning('Could not connect to old database: '.$e->getMessage());
            $this->seedDefaultGateways();
        }
    }

    protected function migrateFromOldDatabase(): void
    {
        $oldOptions = DB::connection('mysql_old')
            ->table('options')
            ->whereIn('key', [
                'tebex_public_token', 'tebex_webhook_Key', 'tebex_package_id',
                'paypal_email',
                'freekassa_merchant_id', 'freekassa_secret_word', 'freekassa_secret_word_2',
            ])
            ->get()
            ->keyBy('key');

        $tebexSettings = [
            'public_token' => $oldOptions['tebex_public_token']->value ?? '',
            'webhook_key' => $oldOptions['tebex_webhook_Key']->value ?? '',
            'package_id' => $oldOptions['tebex_package_id']->value ?? '',
        ];
        $paypalEmail = $oldOptions['paypal_email']->value ?? '';

        $gateways = $this->getDefaultGateways();

        PaymentGateway::updateOrCreate(
            ['code' => 'tebex'],
            [
                'code' => 'tebex',
                'name' => 'Tebex',
                'name_ru' => 'Tebex',
                'is_active' => false,
                'sort' => 0,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => $tebexSettings,
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'pally'],
            [
                'code' => 'pally',
                'name' => 'Pally',
                'name_ru' => 'Pally',
                'is_active' => false,
                'sort' => 1,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'shop_id' => $this->legacyEnv('PALLY_SHOP_ID'),
                    'api_key' => $this->legacyEnv('PALLY_TOKEN'),
                    'api_url' => $this->legacyEnv('PALLY_API_URL', 'https://pal24.pro/api/v1'),
                ],
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'heleket'],
            [
                'code' => 'heleket',
                'name' => 'Heleket',
                'name_ru' => 'Heleket',
                'is_active' => false,
                'sort' => 2,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => [
                    'merchant_uuid' => $this->legacyEnv('HELEKET_MERCHANT_UUID'),
                    'payment_key' => $this->legacyEnv('HELEKET_PAYMENT_KEY'),
                    'payout_key' => $this->legacyEnv('HELEKET_PAYOUT_KEY'),
                ],
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'freekassa'],
            [
                'code' => 'freekassa',
                'name' => 'Freekassa',
                'name_ru' => 'Freekassa',
                'is_active' => false,
                'sort' => 3,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'merchant_id' => $oldOptions['freekassa_merchant_id']->value ?? '',
                    'secret_word' => $oldOptions['freekassa_secret_word']->value ?? '',
                    'secret_word_2' => $oldOptions['freekassa_secret_word_2']->value ?? '',
                ],
            ]
        );

        foreach ($gateways as $gateway) {
            if ($gateway['code'] === 'paypal') {
                $gateway['settings']['email'] = $paypalEmail;
            }

            $gateway['is_active'] = true;

            PaymentGateway::updateOrCreate(
                ['code' => $gateway['code']],
                $gateway
            );
        }

        app(\App\Services\Payments\PaymentManager::class)->clearCache();
        Log::info('Payment gateways migrated from old database');
    }

    protected function seedDefaultGateways(): void
    {
        PaymentGateway::updateOrCreate(
            ['code' => 'tebex'],
            [
                'code' => 'tebex',
                'name' => 'Tebex',
                'name_ru' => 'Tebex',
                'is_active' => false,
                'sort' => 0,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => [
                    'public_token' => env('TEBEX_PUBLIC_TOKEN', ''),
                    'webhook_key' => env('TEBEX_WEBHOOK_KEY', ''),
                    'package_id' => env('TEBEX_PACKAGE_ID', ''),
                ],
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'pally'],
            [
                'code' => 'pally',
                'name' => 'Pally',
                'name_ru' => 'Pally',
                'is_active' => false,
                'sort' => 1,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'shop_id' => $this->legacyEnv('PALLY_SHOP_ID'),
                    'api_key' => $this->legacyEnv('PALLY_TOKEN'),
                    'api_url' => $this->legacyEnv('PALLY_API_URL', 'https://pal24.pro/api/v1'),
                ],
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'heleket'],
            [
                'code' => 'heleket',
                'name' => 'Heleket',
                'name_ru' => 'Heleket',
                'is_active' => false,
                'sort' => 2,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => [
                    'merchant_uuid' => $this->legacyEnv('HELEKET_MERCHANT_UUID'),
                    'payment_key' => $this->legacyEnv('HELEKET_PAYMENT_KEY'),
                    'payout_key' => $this->legacyEnv('HELEKET_PAYOUT_KEY'),
                ],
            ]
        );

        PaymentGateway::updateOrCreate(
            ['code' => 'freekassa'],
            [
                'code' => 'freekassa',
                'name' => 'Freekassa',
                'name_ru' => 'Freekassa',
                'is_active' => false,
                'sort' => 3,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'merchant_id' => env('FREEKASSA_MERCHANT_ID', ''),
                    'secret_word' => env('FREEKASSA_SECRET_WORD', ''),
                    'secret_word_2' => env('FREEKASSA_SECRET_WORD_2', ''),
                ],
            ]
        );

        $gateways = $this->getDefaultGateways();
        foreach ($gateways as $gateway) {
            $gateway['is_active'] = true;
            PaymentGateway::updateOrCreate(
                ['code' => $gateway['code']],
                $gateway
            );
        }

        app(\App\Services\Payments\PaymentManager::class)->clearCache();
        Log::info('Default payment gateways seeded');
    }

    protected function getDefaultGateways(): array
    {
        return [
            [
                'code' => 'viza_mc_rf',
                'name' => 'Visa / Mastercard RF',
                'name_ru' => 'Visa / Mastercard РФ',
                'is_active' => false,
                'sort' => 10,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'backend' => 'pally',
                    'payment_method' => 'BANK_CARD',
                ],
                'logo' => 'images/payment-logos/viza_mc_rf.png',
            ],
            [
                'code' => 'gpay',
                'name' => 'Google Pay',
                'name_ru' => 'Google Pay',
                'is_active' => false,
                'sort' => 20,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'tebex'],
                'logo' => 'images/payment-logos/google-pay.svg', // was GPAY.png in old DB
            ],
            [
                'code' => 'viza_mc_world',
                'name' => 'Visa / Mastercard World',
                'name_ru' => 'Visa / Mastercard',
                'is_active' => false,
                'sort' => 30,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => ['backend' => 'tebex'],
                'logo' => 'images/payment-logos/viza_mc_world.png',
            ],
            [
                'code' => 'paypal',
                'name' => 'PayPal',
                'name_ru' => 'PayPal',
                'is_active' => false,
                'sort' => 40,
                'currency' => 'USD',
                'min_amount' => 1,
                'commission_percent' => 0,
                'settings' => [
                    'backend' => 'tebex',
                ],
                'logo' => 'images/payment-logos/PayPal.png',
            ],
            [
                'code' => 'alipay',
                'name' => 'Alipay',
                'name_ru' => 'Alipay',
                'is_active' => false,
                'sort' => 50,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'tebex'],
                'logo' => 'images/payment-logos/Alipay.png',
            ],
            [
                'code' => 'mir',
                'name' => 'Mir',
                'name_ru' => 'Мир',
                'is_active' => false,
                'sort' => 60,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'backend' => 'pally',
                    'payment_method' => 'MIR',
                ],
                'logo' => 'images/payment-logos/mir.svg',
            ],
            [
                'code' => 'jcb',
                'name' => 'JCB',
                'name_ru' => 'JCB',
                'is_active' => false,
                'sort' => 70,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'tebex'],
                'logo' => 'images/payment-logos/JCB_logo.svg.png',
            ],
            [
                'code' => 'american_express',
                'name' => 'American Express',
                'name_ru' => 'American Express',
                'is_active' => false,
                'sort' => 80,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'tebex'],
                'logo' => 'images/payment-logos/AmericanExpress_.png',
            ],
            [
                'code' => 'steam',
                'name' => 'Steam',
                'name_ru' => 'Steam',
                'is_active' => false,
                'sort' => 90,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'freekassa'],
                'logo' => 'images/payment-logos/steam-logo3.png',
            ],
            [
                'code' => 'bitcoin',
                'name' => 'Bitcoin',
                'name_ru' => 'Bitcoin',
                'is_active' => false,
                'sort' => 100,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'backend' => 'heleket',
                    'to_currency' => 'BTC',
                ],
                'logo' => 'images/payment-logos/bitcoin.svg',
            ],
            [
                'code' => 'usdt',
                'name' => 'USDT',
                'name_ru' => 'USDT',
                'is_active' => false,
                'sort' => 110,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => [
                    'backend' => 'heleket',
                    'to_currency' => 'USDT',
                ],
                'logo' => 'images/payment-logos/USDT.png',
            ],
            [
                'code' => 'tinkoff_crypto',
                'name' => 'Tinkoff / Sber CRYPTO',
                'name_ru' => 'Тинькофф / Сбер CRYPTO',
                'is_active' => false,
                'sort' => 120,
                'currency' => 'RUB',
                'min_amount' => 10,
                'commission_percent' => 0,
                'settings' => ['backend' => 'heleket'],
                'logo' => 'images/payment-logos/sbp-crypto.svg', // was SBP.png in old DB
            ],
        ];
    }

    protected function legacyEnv(string $key, string $default = ''): string
    {
        $value = env($key);

        if (is_string($value) && $value !== '') {
            return $value;
        }

        $legacy = $this->legacyEnvValues()[$key] ?? null;

        return is_string($legacy) && $legacy !== '' ? $legacy : $default;
    }

    protected function legacyEnvValues(): array
    {
        static $cached = null;

        if (is_array($cached)) {
            return $cached;
        }

        $legacyEnvPath = base_path('../rustresortOld/.env');
        if (! is_file($legacyEnvPath)) {
            return $cached = [];
        }

        $contents = file($legacyEnvPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if (! is_array($contents)) {
            return $cached = [];
        }

        $values = [];
        foreach ($contents as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) {
                continue;
            }

            if (! str_contains($line, '=')) {
                continue;
            }

            [$k, $v] = explode('=', $line, 2);
            $k = trim($k);
            $v = trim($v);

            if ($k === '') {
                continue;
            }

            if (
                (str_starts_with($v, '"') && str_ends_with($v, '"')) ||
                (str_starts_with($v, "'") && str_ends_with($v, "'"))
            ) {
                $v = substr($v, 1, -1);
            }

            $values[$k] = $v;
        }

        return $cached = $values;
    }
}
