<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Product;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use App\Services\ProductService;
use DB;
use Illuminate\Http\Request;
use Log;
use Storage;
use Str;

class ProductController extends Controller
{
    private $languages;

    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->languages = Language::where('status', 'active')->get();
        $this->productService = $productService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.product.index');
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
        $validated = $request->validate([
            'category_id' => 'required|exists:product_categories,id',
            'product_type' => 'required|string',
            'price' => 'nullable|numeric',
            'status' => 'required|in:active,inactive',
            'post.*.title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
            'post.*.product_gallery.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
        ]);

        $product = $this->productService->create($request->all());

        if (! $product) {
            return back()->with('error', 'Failed to create product.');
        }

        return redirect()->route('admin.product.index')->with('success', 'Product created successfully!');
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
        $validated = $request->validate([
            'category_id' => 'required|exists:product_categories,id',
            'product_type' => 'required|string',
            'price' => 'nullable|numeric',
            'status' => 'required|in:active,inactive',
            'post.*.title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
            'post.*.product_gallery.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
        ]);

        $this->productService->update($product, $request->all());

        if (! $product) {
            return back()->with('error', 'Failed to update product.');
        }

        return redirect()->route('admin.product.index')->with('success', 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
