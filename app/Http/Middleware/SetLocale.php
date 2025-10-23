<?php

namespace App\Http\Middleware;

use App;
use App\Models\Language;
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
        \Log::info('Current locale: ' . $locale);

        $availableLocales = Language::where('status', 'active')->pluck('code')->toArray();
        $segments = $request->segments();

        \Log::info('Current segment: ', [$segments]);
        if (!$locale || $locale === config('app.locale')) {
            if (!empty($segments) && in_array($segments[0], $availableLocales)) {
                array_shift($segments);
                return redirect()->to('/' . implode('/', $segments));
            }
            App::setLocale(config('app.locale'));
        } elseif (in_array($locale, $availableLocales)) {
            App::setLocale($locale);
        } else {
            return redirect()->route('home', ['locale' => app()->getLocale()]);
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
