<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Product;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $languages;

    public function __construct()
    {
        $this->languages = Language::where('status', 'active')->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(10);

        return view('admin.product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $languages = $this->languages;
        $categories = ProductCategory::where('status', 'active')->get();
        $attributes = ProductAttributes::where('status', 'active')->get();
        return view('admin.product.create', compact('languages', 'categories', 'attributes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
