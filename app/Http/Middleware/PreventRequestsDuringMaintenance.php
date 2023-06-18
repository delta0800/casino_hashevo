<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   PreventRequestsDuringMaintenance.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode as Middleware;

class PreventRequestsDuringMaintenance extends Middleware
{
    
    protected $except = [
        
    ];

    
    public function handle($request, Closure $next)
    {
        $user = $request->user();

        if ($this->app->isDownForMaintenance() && $user && $user->is_admin) {
            return $next($request);
        }

        return parent::handle($request, $next);
    }
}
