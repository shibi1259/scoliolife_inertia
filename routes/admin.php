<?php

use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetLocale;


Route::prefix("admin")->name('admin.')->middleware(['web'])->group(function () {

    require __DIR__ . '/admin_auth.php';

    Route::middleware(['admin'])->group(function () {
        Route::get('/dashboard', fn() => view('admin.dashboard'))->name('index');
        Route::resource('language', LanguageController::class);
    });
});


