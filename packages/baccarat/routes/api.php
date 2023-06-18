<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   api.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

use Illuminate\Support\Facades\Route;
use Packages\Baccarat\Http\Controllers\GameController;


Route::name('games.baccarat.')
    ->middleware(['api', 'user', 'concurrent'])
    ->group(function () {
        
        Route::post('api/games/baccarat/play', [GameController::class, 'play'])->name('play');
    });
