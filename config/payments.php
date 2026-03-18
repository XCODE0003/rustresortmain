<?php

return [
    'default_currency' => env('PAYMENT_CURRENCY', 'RUB'),
    'usd_to_rub_rate' => env('USD_TO_RUB_RATE', 75.0),

    'heleket' => [
        'shop_id' => env('HELEKET_SHOP_ID'),
        'secret' => env('HELEKET_SECRET'),
    ],

    'pally' => [
        'api_key' => env('PALLY_API_KEY'),
        'secret' => env('PALLY_SECRET'),
        'shop_id' => env('PALLY_SHOP_ID'),
        'api_url' => env('PALLY_API_URL', 'https://api.pally.gg'),
    ],

    'paypal' => [
        'email' => env('PAYPAL_EMAIL'),
        'sandbox' => env('PAYPAL_SANDBOX', true),
    ],

    'freekassa' => [
        'merchant_id' => env('FREEKASSA_MERCHANT_ID'),
        'secret_1' => env('FREEKASSA_SECRET_1'),
        'secret_2' => env('FREEKASSA_SECRET_2'),
    ],

    'enot' => [
        'shop_id' => env('ENOT_SHOP_ID'),
        'secret' => env('ENOT_SECRET'),
    ],

    'qiwi' => [
        'secret_key' => env('QIWI_SECRET_KEY'),
        'public_key' => env('QIWI_PUBLIC_KEY'),
    ],

    'yookassa' => [
        'shop_id' => env('YOOKASSA_SHOP_ID'),
        'secret' => env('YOOKASSA_SECRET'),
    ],

    'unitpay' => [
        'public_key' => env('UNITPAY_PUBLIC_KEY'),
        'secret_key' => env('UNITPAY_SECRET_KEY'),
    ],

    'cryptocloud' => [
        'shop_id' => env('CRYPTOCLOUD_SHOP_ID'),
        'api_key' => env('CRYPTOCLOUD_API_KEY'),
    ],

    'paykeeper' => [
        'server' => env('PAYKEEPER_SERVER'),
        'user' => env('PAYKEEPER_USER'),
        'password' => env('PAYKEEPER_PASSWORD'),
    ],

    'alfabank' => [
        'username' => env('ALFABANK_USERNAME'),
        'password' => env('ALFABANK_PASSWORD'),
    ],

    'tebex' => [
        'public_key' => env('TEBEX_PUBLIC_KEY'),
        'secret_key' => env('TEBEX_SECRET_KEY'),
    ],

    'skinspay' => [
        'api_key' => env('SKINSPAY_API_KEY'),
        'shop_id' => env('SKINSPAY_SHOP_ID'),
    ],

    'pagseguro' => [
        'email' => env('PAGSEGURO_EMAIL'),
        'token' => env('PAGSEGURO_TOKEN'),
        'sandbox' => env('PAGSEGURO_SANDBOX', true),
    ],

    'paymentwall' => [
        'api_key' => env('PAYMENTWALL_API_KEY'),
        'secret_key' => env('PAYMENTWALL_SECRET_KEY'),
    ],

    'appcent' => [
        'merchant_id' => env('APPCENT_MERCHANT_ID'),
        'secret' => env('APPCENT_SECRET'),
    ],

    'primepayments' => [
        'api_key' => env('PRIMEPAYMENTS_API_KEY'),
        'secret' => env('PRIMEPAYMENTS_SECRET'),
    ],
];
