<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'language',
        'description',
        'image',
        'author',
        'status',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'category_id',
        'tag_id',
    ];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function creator()
    {
        return $this->belongsTo(User::class, 'author');
    }

    public function categories()
    {
        return $this->hasOne(ArticleCategory::class, 'id', 'category_id');
    }

    public function tags()
    {
        return $this->hasOne(ArticleTag::class, 'id', 'tag_id');
    }
}
