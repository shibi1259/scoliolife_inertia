<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Models\Language;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetLocale;
use Inertia\Inertia;

$languages = Language::where('status', 'active')->pluck('code')->toArray();
array_push($languages, '');

$routeHandler = function () {
    Route::get('/', fn() => Inertia::render('Home'))->name('home');
    Route::middleware('auth')->group(function () {
        Route::get('/my-account', fn() => Inertia::render('Dashboard'))->middleware(['auth', 'verified'])->name('dashboard');
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::get('online-booking', fn() => Inertia::render('OnlineBooking'))->name('online-booking');
    Route::resource('articles', ArticleController::class);

    require __DIR__ . '/auth.php';
    require __DIR__ . '/contact.php';
    require __DIR__ . '/shop.php';
};

require __DIR__ . '/admin.php';
Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth')->name('logout');

// For default locale (en_US) - no prefix
Route::middleware(['web'])->group($routeHandler);

// For all other locales - with prefix
Route::prefix('{locale?}')->whereIn('locale', $languages)->middleware([SetLocale::class, 'web'])->group($routeHandler);
