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

        // if (in_array($locale, config('app.available_locales'))) {
        //     App::setLocale($locale);
        // } else {
        //     App::setLocale(config('app.locale'));
        // }

        if (!$locale || $locale === config('app.locale')) {
            $segments = $request->segments();
            if (!empty($segments) && in_array($segments[0], config('app.available_locales'))) {
                array_shift($segments);
                return redirect()->to('/' . implode('/', $segments));
            }
            
            App::setLocale(config('app.locale'));

        } elseif (in_array($locale, config('app.available_locales'))) {
            App::setLocale($locale);
        } else {
            abort(404);
        }
     
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
