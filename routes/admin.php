<?php

use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\SetLocale;


Route::prefix("admin")->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('admin.index');

    Route::resource('language', LanguageController::class);
 });
