<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductAttributes extends Model
{
    protected $fillable = [
        'product_id',
        'title',
        'values',
        'status',
    ];

    protected $casts = [
        'values' => 'array',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
