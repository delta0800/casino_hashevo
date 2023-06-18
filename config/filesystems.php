<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   filesystems.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

return [

    

    'default' => env('FILESYSTEM_DISK', 'local'),

    

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
            'throw' => false,
        ],

        'assets' => [
            'driver' => 'local',
            'root' => public_path(),
        ],

        'resources' => [
            'driver' => 'local',
            'root' => resource_path(),
        ],

        'routes' => [
            'driver' => 'local',
            'root' => base_path('routes'),
        ],

        'logs' => [
            'driver' => 'local',
            'root' => storage_path('logs'),
        ],

        'public' => [
            'driver' => 'local',
            'root' => storage_path('app/public'),
            'url' => env('APP_URL').'/storage',
            'visibility' => 'public',
            'throw' => false,
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
            'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
            'throw' => false,
        ],

    ],

    

    'links' => [
        public_path('storage') => storage_path('app/public'),
        public_path('lang') => resource_path('lang'),
    ],

];
