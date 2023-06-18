<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   app.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [

    'version' => '1.20.0',

    

    'name' => env('APP_NAME', 'Stake'),

    

    'logo' => env('APP_LOGO', '/images/logo/logo.png'),

    

    'env' => env('APP_ENV', 'production'),

    

    'debug' => (bool) env('APP_DEBUG', false),

    

    'url' => env('APP_URL', ''),

    'asset_url' => env('ASSET_URL'),

    'force_ssl' => env('FORCE_SSL', FALSE),

    

    'timezone' => 'UTC',

    

    'locale' => env('LOCALE', 'en'),

    
    
    'default_locale' => env('LOCALE', 'en'),

    'detect_browser_locale' => env('DETECT_BROWSER_LOCALE', TRUE),

    'locales' => [
        'en' => [
            'flag'  => 'us',
            'title' => 'English'
        ],
        'ru' => [
            'title' => 'Русский'
        ],
        'de' => [
            'title' => 'Deutsch',
        ],
        'es' => [
            'title' => 'Español',
        ],
        'fr' => [
            'title' => 'Français',
        ],
        'pt' => [
            'title' => 'Português',
        ],
        'nl' => [
            'title' => 'Nederlands',
        ],
        'cs' => [
            'flag'  => 'cz',
            'title' => 'Česky',
        ],
        'it' => [
            'title' => 'Italiano',
        ],
        'fi' => [
            'title' => 'Suomi',
        ],
        'sv' => [
            'flag'  => 'se',
            'title' => 'Svenska',
        ],
        'hu' => [
            'title' => 'Magyar',
        ],
        'el' => [
            'flag'  => 'gr',
            'title' => 'Ελληνικά',
        ],
        'da' => [
            'flag'  => 'dk',
            'title' => 'Dansk',
        ],
        'lv' => [
            'title' => 'Latviešu',
        ],
        'lt' => [
            'title' => 'Lietuvių',
        ],
        'et' => [
            'flag'  => 'ee',
            'title' => 'Eesti',
        ],
        'sk' => [
            'title' => 'Slovenčina',
        ],
        'sl' => [
            'flag'  => 'si',
            'title' => 'Slovenščina',
        ],
        'ko' => [
            'flag'  => 'kr',
            'title' => '한국어',
        ],
        
        'zh-cn' => [
            'flag'  => 'cn',
            'title' => '简体',
        ],
        
        'zh-tw' => [
            'flag'  => 'tw',
            'title' => '繁体',
        ],
        'ja' => [
            'flag'  => 'jp',
            'title' => '日本語',
        ],
    ],

    'translation_files_folder' => env('TRANSLATION_FILES_FOLDER', 'lang'),

    

    'fallback_locale' => 'en',

    

    'faker_locale' => 'en_US',

    

    'key' => env('APP_KEY'),

    'cipher' => 'AES-256-CBC',

    'hash' => 'da34b0aa975fddd5a90a1eb2bb8cb9d2',

    'hashb' => '0dcd235baec3bed9c8374828935afa0d',

    

    'api' => [
        'releases' => [
            'base_url' => env('API_RELEASES_BASE_URL', 'http://127.0.0.1:8000/api/')
        ],
        'products' => [
            'base_url' => env('API_PRODUCTS_BASE_URL', 'http://127.0.0.1:8000/api/')
        ],
    ],

    

    'maintenance' => [
        'driver' => 'file',
        
    ],

    

    'providers' => ServiceProvider::defaultProviders()->merge([
        
        SocialiteProviders\Manager\ServiceProvider::class,

        
        App\Providers\AppServiceProvider::class,
        App\Providers\AuthServiceProvider::class,
        App\Providers\BroadcastServiceProvider::class,
        App\Providers\EventServiceProvider::class,
        App\Providers\RouteServiceProvider::class,
    ])->toArray(),

    

    'aliases' => Facade::defaultAliases()->merge([
        
    ])->toArray(),
];
