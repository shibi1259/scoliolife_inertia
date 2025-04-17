<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/shop', function () {
    return Inertia::render('Shop/Shop');
})->name('shop.index');

Route::get('/shop/product/{product}', function ($lang,$product) {
    return Inertia::render('Shop/Product', [
        'product' => $product,'lang' => $lang
    ]);
})->name('shop.product');

Route::get('/shop/cart', function () {
    return Inertia::render('Shop/Cart');
})->name('shop.cart');