<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Models\Language;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetLocale;
use Inertia\Inertia;

use Illuminate\Support\Facades\Schema;

// Helper to safely fetch languages during bootstrapping
$languages = [];
try {
    if (Schema::hasTable('languages')) {
        $languages = Language::where('status', 'active')->pluck('code')->toArray();
    }
} catch (\Exception $e) {
    // Migration might be running, fallback to empty
}

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


// 1. Prefixed routes (e.g. /fr_FR/login)
if (!empty($languages)) {
    Route::prefix('{locale}')
        ->whereIn('locale', $languages)
        ->middleware([SetLocale::class, 'web'])
        ->name('localized.')
        ->group($routeHandler);
}


// 2. Default routes (e.g. /login)
Route::middleware(['web'])->group($routeHandler);
