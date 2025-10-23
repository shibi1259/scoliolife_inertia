<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


Route::get('/contact-us', [ContactController::class, 'index'])->name('contact');
Route::resource('contacts', ContactController::class)->except(['index']);