<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web'])->group(function () {
    Route::get('login', function () {
        if (auth()->check()) {
            return auth()->user()->hasRole('admin')
                ? redirect()->route('admin.index')
                : redirect()->route('home', ['locale' => app()->getLocale()]);
        }

        return view('admin.auth.login');
    })->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('auth.login');
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('auth.logout');
});
