<?php

use App\Http\Controllers\ProfileController;
use App\Http\Middleware\SetLocale;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home', []);
// })->name('home');
Route::get('/', function () {
    return redirect('/en'); // or config('app.locale')
});

// Route::group(['prefix' => '{locale}', 'middleware' => ['setLocale']], function () {
//     Route::get('/', function () {
//         return Inertia::render('Home');
//     })->name('home');
    
//     // other routes...
// });


Route::prefix('{locale?}')
    ->middleware([SetLocale::class, 'web'])
    ->group(function () {
        
        Route::get('/', function () {
            return Inertia::render('Home');
        })->name('home');
        
        // All other routes that need localization
        Route::get('/my-account', function () {
            return Inertia::render('Dashboard');
        })->middleware(['auth', 'verified'])->name('dashboard');

        Route::get('/my-account', function () {
            return Inertia::render('Dashboard');
        })->middleware(['auth', 'verified'])->name('dashboard');
        
        Route::middleware('auth')->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });
        
        Route::get('online-booking', function () {
            return Inertia::render('OnlineBooking');
        })->name('online-booking');
        
        require __DIR__.'/auth.php';
        require __DIR__.'/contact.php';
        require __DIR__.'/shop.php';
    });
