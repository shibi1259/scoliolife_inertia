<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Product;
use App\Models\ProductAttributes;
use App\Models\ProductCategory;
use DB;
use Illuminate\Http\Request;
use Str;

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

        DB::beginTransaction();

        try {
            // Loop through each language data
            foreach ($request->post as $code => $langData) {
                $product = new Product;

                $product->title = $langData['title'] ?? null;
                $product->slug = $request->product_slug ?? Str::slug($langData['title']);
                $product->description = $langData['description'] ?? null;
                $product->summary = $langData['main_content'] ?? null;

                // Basic
                $product->category_id = $request->category_id;
                $product->product_type = $request->product_type;

                // Pricing
                $product->price = $request->price;

                // SEO
                $product->seo_meta_title = $langData['seo_meta_title'] ?? null;
                $product->seo_meta_description = $langData['seo_meta_description'] ?? null;
                $product->seo_meta_tag = $langData['seo_meta_tag'] ?? null;

                // Media
                $product->featured_video_url = $langData['featured_video_url'] ?? null;

                // Dimensions
                $product->weight = $request->product_actual_weight;
                $product->length = $request->dimension_length;
                $product->width = $request->dimension_width;
                $product->height = $request->dimension_height;

                // Status
                $product->status = $request->status ?? 'inactive';
                $product->language = $code;

                $product->save();

                if ($request->has('attributes')) {
                    // foreach ($request->attributes as $attrName => $attrValues) {
                    //     ProductAttributes::create([
                    //         'product_id' => $product->id,
                    //         'title' => $attrName,
                    //         'values' => json_encode($attrValues), // will be auto-cast on retrieval
                    //     ]);
                    // }

                    $attributes = [];

                    foreach ($request->input('attributes', []) as $attr) {
                        $key = $attr['key'];
                        $values = array_map('trim', explode(',', $attr['values']));
                        $details = array_map('trim', explode(',', $attr['details'] ?? ''));

                        $attrData = [];

                        foreach ($values as $v) {
                            $match = collect($details)->first(fn ($d) => str_starts_with($d, "$v:"));
                            if ($match) {
                                [$val, $price, $sku, $stock] = array_pad(explode(':', $match), 4, null);
                                $attrData[$val] = [
                                    'price' => (float) ($price ?? 0),
                                    'sku' => $sku ?? null,
                                    'stock' => (int) ($stock ?? 0),
                                ];
                            } else {
                                $attrData[$v] = ['price' => 0, 'sku' => null, 'stock' => 0];
                            }
                        }

                        $attributes[$key] = $attrData;

                        ProductAttributes::create([
                            'product_id' => $product->id,
                            'title' => $key,
                            'values' => json_encode($attrData, JSON_PRETTY_PRINT),
                        ]);
                    }

                }

            }

            DB::commit();

            return redirect()->route('admin.product.index')->with('success', 'Product created successfully!');

        } catch (\Exception $e) {
            DB::rollBack();

            return back()->with('error', 'Failed to create product: '.$e->getMessage());
        }
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
