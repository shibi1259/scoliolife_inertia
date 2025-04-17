<?php

namespace App\Http\Middleware;

use App;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if route has locale parameter
        if (!$request->route() || !$request->route()->hasParameter('locale')) {
            return $next($request);
        }

        $locale = $request->route('locale');

        if (!in_array($locale, ['en', 'fr', 'de'])) {
            $locale = config('app.locale');
        }

        app()->setLocale($locale);

        // Only set PHP locale if needed
        if (function_exists('setlocale')) {
            try {
                setlocale(LC_TIME, $locale . '_' . strtoupper($locale), $locale);
            } catch (\Exception $e) {
                report($e);
            }
        }
        return $next($request);
    }
}
