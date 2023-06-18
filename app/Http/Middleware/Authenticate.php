<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Authenticate.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : '/login';
    }
}
