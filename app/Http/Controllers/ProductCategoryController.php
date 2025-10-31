<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Str;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ProductCategory::paginate(10);

        return view('admin.product.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = ProductCategory::where('status', 'active')->whereNull('parent_id')->get();

        return view('admin.product.category.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:product_categories,slug',
            'summary' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        try {
            $data = $request->only(['title', 'slug', 'summary', 'description', 'parent_id', 'status']);

            // Generate slug automatically if not provided
            $data['slug'] = $request->slug ?: Str::slug($request->title);

            // Handle Image Upload
            if ($request->hasFile('photo')) {
                $fileName = time().'.'.$request->photo->extension();
                $request->photo->move(public_path('uploads/category'), $fileName);
                $data['photo'] = 'uploads/category/'.$fileName;
            }

            ProductCategory::create($data);

            return redirect()
                ->route('admin.product.category.index')
                ->with('success', 'Category created successfully!');
        } catch (\Exception $e) {
            return back()->withErrors(['error' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductCategory $productCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductCategory $productCategory)
    {
        //
    }
}
