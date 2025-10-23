<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class WidgetForm extends Component
{
    public $langCode;
    public $widget;
    public $index;

    /**
     * Create a new component instance.
     */
    public function __construct($langCode, $widget, $index)
    {
        $this->langCode = $langCode;
        $this->widget = $widget;
        $this->index = $index;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.widget-form');
    }
}
