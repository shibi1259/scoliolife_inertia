<?php

use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix("admin")->name('admin.')->middleware(['web'])->group(function () {

    require __DIR__ . '/admin_auth.php';

    Route::middleware(['admin'])->group(function () {
        Route::get('/dashboard', fn() => view('admin.dashboard'))->name('index');
        Route::resource('language', LanguageController::class);

        Route::resource('users', UserController::class);
        Route::resource('roles', RolesController::class);
        Route::resource('contacts', ContactController::class);
        Route::get('menu', fn() => view('admin.menu.index'))->name('menu.index');

        Route::resource('setting', SettingController::class);
        Route::prefix('product')->name('product.')->group(function () {
            Route::resource('category', ProductCategoryController::class);
            Route::resource('/', ProductController::class)->parameters(['' => 'product']);
        });
        require __DIR__ . '/admin_articles.php';
    });

});


