<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ArticleForm extends Component
{
    public $language;
    public $categories;
    public $tags;

    /**
     * Create a new component instance.
     */
    public function __construct($language, $categories, $tags)
    {
        $this->language = $language;
        $this->categories = $categories;
        $this->tags = $tags;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.article-form', [
            'language' => $this->language,
            'categories' => $this->categories,
            'tags' => $this->tags,
        ]);
    }
}
