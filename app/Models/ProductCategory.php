<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
   protected $fillable = [
        'title',
        'slug',
        'summary',
        'description',
        'photo',
        'parent_id',
        'status',
    ];
}
