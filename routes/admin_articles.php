<?php

use App\Http\Controllers\Admin\ArticleController;
use Illuminate\Support\Facades\Route;


Route::resource('articles', ArticleController::class);
Route::get('articles/category/create', [ArticleController::class, 'createCategory'])->name('articles.category.create');
Route::post('articles/category/store', [ArticleController::class, 'storeCategory'])->name('articles.category.store');
Route::delete('articles/category/destroy/{id}', [ArticleController::class, 'destroyCategory'])->name('articles.category.destroy');
Route::get('articles/tag/create', [ArticleController::class, 'createTag'])->name('articles.tag.create');
Route::post('articles/tag/store', [ArticleController::class, 'storeTag'])->name('articles.tag.store');
Route::delete('articles/tag/destroy/{id}', [ArticleController::class, 'destroyTag'])->name('articles.tag.destroy');