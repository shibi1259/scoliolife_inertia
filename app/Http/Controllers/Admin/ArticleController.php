<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\ArticleTag;
use App\Models\Language;
use Illuminate\Http\Request;
use Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with(['categories', 'tags', 'creator'])->paginate(10);
        return view('admin.article.index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $languages = Language::where('status', 'active')->get();
        $englishLanguages = $languages->filter(fn($lang) => str_starts_with($lang->code, 'en_'));
        $otherLanguages = $languages->reject(fn($lang) => str_starts_with($lang->code, 'en_'));
        $categories = ArticleCategory::all();
        $tags = ArticleTag::all();
        return view('admin.article.create', compact('languages', 'englishLanguages', 'otherLanguages', 'categories', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|integer',
            'tag_id' => 'nullable|integer',
            'title.*' => 'required|string|max:255',
            'slug.*' => 'required|string|max:255|unique:articles,slug',
            'description.*' => 'nullable|string',
            'seo_title.*' => 'nullable|string|max:255',
            'seo_description.*' => 'nullable|string',
            'seo_keywords.*' => 'nullable|string',
            'image.*' => 'nullable|image|max:2048',
        ], [
            'title.*.required' => 'The title field is required for each language.',
            'slug.*.required' => 'The slug field is required for each language.',
            'slug.*.unique' => 'The slug must be unique for each language.',
            'image.*.image' => 'The image must be a valid image file.',
            'image.*.max' => 'The image size must not exceed 2MB.',
        ]);

        // loop over languages submitted
        foreach ($request->input('title') as $langCode => $title) {
            $article = new Article();
            $article->language = $langCode;

            // global
            $article->category_id = $request->input('category_id');
            $article->tag_id = $request->input('tag_id');

            // per-language
            $article->title = $title;
            $article->slug = Str::slug($request->slug[$langCode]);
            $article->excerpt = $request->excerpt[$langCode] ?? null;
            $article->description = $request->description[$langCode] ?? null;
            $article->seo_title = $request->seo_title[$langCode] ?? null;
            $article->seo_description = $request->seo_description[$langCode] ?? null;
            $article->seo_keywords = $request->seo_keywords[$langCode] ?? null;

            // handle image if uploaded for this language
            if ($request->hasFile("image.$langCode")) {
                $path = $request->file("image.$langCode")->store("uploads/articles/$title/$langCode", 'public');
                $article->image = $path;
            }

            $article->save();
        }

        return redirect()->route('admin.articles.index')->with('success', 'Articles created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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


    // Category Methods
    public function createCategory()
    {
        $categories = ArticleCategory::paginate(10);
        return view('admin.article.category', compact('categories'));
    }
    public function storeCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:article_categories,name',
            'slug' => 'required|string|max:255|unique:article_categories,slug',
            'description' => 'nullable|string',
        ]);

        $category = new ArticleCategory();
        $category->name = $request->input('name');
        $category->slug = Str::slug($request->input('slug'));
        $category->description = $request->input('description');
        $category->save();

        return redirect()->route('admin.articles.category.create')->with('success', 'Category created successfully.');
    }

    // Tag Methods
    public function createTag()
    {
        return view('admin.article.tag');
    }

    public function storeTag(Request $request)
    {
        //
    }
}
