<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/shop', function () {
    return Inertia::render('Shop/Shop');
})->name('shop.index');

Route::get('/product/{product}', function (...$args) {
    app()->getLocale() === 'en_US' ? [$product] = $args : [$locale, $product] = $args;

    $data = Product::where('slug', $product)->where('language', $locale ?? 'en_US')->with(['category', 'attributes'])->first();
    
    return Inertia::render('Shop/Product', [
        'product' => $data , 'lang' => $locale ?? null,
    ]);
})->name('shop.product');

Route::get('/shop/cart', function () {
    return Inertia::render('Shop/Cart');
})->name('shop.cart');