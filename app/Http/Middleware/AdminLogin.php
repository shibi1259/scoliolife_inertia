<?php

namespace App\Http\Middleware;

use App;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        App::setLocale('en_US');
        // If not logged in → redirect to admin login
        if (!$user) {
            return redirect()->route('admin.login');
        }

        // If logged in but not admin → forbid
        if (!$user->hasRole('admin')) {
            abort(403, 'Unauthorized access.');
        }

        return $next($request);
    }
}
