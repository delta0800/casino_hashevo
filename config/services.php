<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   services.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

return [

    

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    
    'gtm' => [
        'container_id' => env('GTM_CONTAINER_ID'),
    ],

    
    'recaptcha' => [
        'public_key' => env('RECAPTCHA_PUBLIC_KEY'),
        'secret_key' => env('RECAPTCHA_SECRET_KEY'),
    ],

    'api' => [
        'crypto' => [
            'provider' => env('API_CRYPTO_PROVIDER', 'coincap'),
            'providers' => [
                'coincap' => [
                    'endpoint' => env('API_CRYPTO_PROVIDERS_COINCAP_ENDPOINT','https://api.coincap.io/v2/'),
                    'api_key' => env('API_CRYPTO_PROVIDERS_COINCAP_API_KEY'),
                ],
                'cryptocompare' => [
                    'endpoint' => env('API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_ENDPOINT','https://min-api.cryptocompare.com/data/'),
                    'api_key' => env('API_CRYPTO_PROVIDERS_CRYPTOCOMPARE_API_KEY'),
                ]
            ]
        ],
        'dicebeer' => [
            'scale' => env('API_DICEBEER_SCALE', 100)
        ]
    ],
];
