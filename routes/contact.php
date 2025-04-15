<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


Route::get('/contact-us', [ContactController::class, 'contact'])->name('contact');