<?php

namespace App\Services;

use App\Models\Product;
use App\Models\ProductAttributes;
use DB;
use Log;
use Storage;
use Str;

class ProductService 
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function create(array $data)
    {
        return $this->save($data);
    }

    public function update(Product $product, array $data)
    {
        return $this->save($data, $product);
    }


    /**
     * Create or update a product.
     *
     * @return Product|bool
     */
    protected function save(array $data, ?Product $existingProduct = null)
    {
        DB::beginTransaction();

        try {
            $featuredImagePath = null;

            // ✅ Upload featured image
            if (isset($data['image']) && $data['image']->isValid()) {
                $featuredImagePath = $data['image']->store('products', 'public');
            }

            // ✅ Loop through each language
            foreach ($data['post'] as $langCode => $langData) {
                $product = $existingProduct ?? new Product();

                // Basic multilingual fields
                $product->title = $langData['title'] ?? null;
                $product->slug = $data['product_slug']
                    ? "{$data['product_slug']}-{$langCode}"
                    : Str::slug(($langData['title'] ?? 'product')."-{$langCode}");
                $product->summary = $langData['main_content'] ?? null;
                $product->description = $langData['description'] ?? null;

                // General info
                $product->category_id = $data['category_id'];
                $product->product_type = $data['product_type'];
                $product->price = $data['price'] ?? 0;
                $product->status = $data['status'] ?? 'inactive';
                $product->language = $langCode;

                // Media
                $product->featured_video_url = $langData['featured_video_url'] ?? null;

                // ✅ Set featured image (if available)
                if ($featuredImagePath) {
                    $product->photo = "storage/{$featuredImagePath}";
                }

                // ✅ Handle gallery images
                $galleryPaths = [];
                if (isset($data['post'][$langCode]['product_gallery'])) {
                    foreach ($data['post'][$langCode]['product_gallery'] as $file) {
                        if ($file && $file->isValid()) {
                            $path = $file->store('products/gallery', 'public');
                            $galleryPaths[] = "storage/{$path}";
                        }
                    }
                }

                $product->product_gallery = ! empty($galleryPaths)
                    ? json_encode($galleryPaths, JSON_PRETTY_PRINT)
                    : $product->product_gallery;

                // Dimensions
                $product->weight = $data['product_actual_weight'] ?? null;
                $product->length = $data['dimension_length'] ?? null;
                $product->width = $data['dimension_width'] ?? null;
                $product->height = $data['dimension_height'] ?? null;

                // SEO
                $product->seo_meta_title = $langData['seo_meta_title'] ?? null;
                $product->seo_meta_description = $langData['seo_meta_description'] ?? null;
                $product->seo_meta_tag = $langData['seo_meta_tag'] ?? null;

                $product->save();

                // ✅ Handle attributes (optional)
                if (! empty($data['attributes'])) {
                    foreach ($data['attributes'] as $attr) {
                        if (! isset($attr['key']) || ! isset($attr['values'])) {
                            continue;
                        }

                        $key = trim($attr['key']);
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

                        ProductAttributes::create([
                            'product_id' => $product->id,
                            'title' => $key,
                            'values' => json_encode($attrData, JSON_PRETTY_PRINT),
                        ]);
                    }
                }
            }

            DB::commit();

            return $existingProduct ?? $product;

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Product creation failed: '.$e->getMessage());

            // Cleanup uploaded files if failed
            if (isset($featuredImagePath) && Storage::disk('public')->exists($featuredImagePath)) {
                Storage::disk('public')->delete($featuredImagePath);
            }

            return false;
        }
    }
}
