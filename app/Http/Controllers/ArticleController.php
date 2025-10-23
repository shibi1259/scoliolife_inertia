<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $language = strpos(app()->getLocale(), 'en_') !== false ? 'en_All' : app()->getLocale();
        $articles = Article::where('status', 'active')->where('language', $language)->get();
        return Inertia::render('Articles/Articles', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */

    public function show(...$args)
    {
        app()->getLocale() === 'en_US' ? [$slug] = $args : [$locale, $slug] = $args;

        $article = Article::where('slug', $slug)->with(['creator'])->firstOrFail();
        return Inertia::render('Articles/Show', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
