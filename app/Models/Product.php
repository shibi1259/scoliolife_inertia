<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        // Basic info
        'title',
        'slug',
        'summary',
        'description',

        // Relations
        'category_id',

        // Pricing
        'price',
        'discount',

        // Stock & Status
        'stock',
        'is_featured',
        'status',

        // Media
        'photo',
        'product_gallery',
        'featured_video_url',

        // Product type & attributes
        'product_type',
        'attributes',

        // SEO
        'seo_meta_title',
        'seo_meta_description',
        'seo_meta_tag',

        // Physical dimensions
        'weight',
        'length',
        'width',
        'height',

        // External links
        'amazon_url',
        'amazon_image_url',

        // Identification
        'sku',
        'language',
    ];


    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function attributes()
    {
        return $this->hasMany(ProductAttributes::class);
    }
}
