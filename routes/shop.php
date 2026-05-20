<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/shop', fn() => Inertia::render('Shop/Shop'))->name('shop.index');

Route::get('/product/{product}', function (...$args) {
    $product = end($args);
    $locale = count($args) > 1 ? $args[0] : (app()->getLocale() ?: 'en_US');

    $data = Product::where('slug', $product)->where('language', $locale)->with(['category', 'attributes'])->first();

    return Inertia::render('Shop/Product', [
        'product' => $data,
        'lang' => $locale,
    ]);
})->name('shop.product');

Route::get('/shop/cart', fn() => Inertia::render('Shop/Cart'))->name('shop.cart');