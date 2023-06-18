<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   LogRequestAndResponse.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

class LogRequestAndResponse
{
    
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }

    
    public function terminate(Request $request, $response)
    {
        $requestContent = $request->getContent();

        if ($request->isJson()) {
            $requestContent = json_decode($requestContent);
        } elseif (strpos($requestContent, '&') !== FALSE) {
            parse_str($requestContent, $requestContent);
        }

        $totalTime = Carbon::createFromTimestamp(LARAVEL_START)->diffInMilliseconds(Carbon::now());

        info(json_encode([
            'action'            => $request->route()->getActionName(),
            'url'               => $request->getUri(),
            'method'            => $request->method(),
            'content'           => $requestContent,
            'ip'                => $request->ip(),
            'headers'           => $request->header(),
            'response_code'     => $response->getStatusCode(),
            'response_content'  => $response instanceof JsonResponse ? json_decode($response->getContent()) : $response->getContent(),
            'total_time'        => sprintf('%.3f', $totalTime / 1000),
        ], JSON_PRETTY_PRINT));
    }
}
