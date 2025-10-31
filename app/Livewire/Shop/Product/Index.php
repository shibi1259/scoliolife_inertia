<?php

namespace App\Livewire\Shop\Product;

use App\Models\Language;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $languages = [];

    protected $paginationTheme = 'bootstrap';

    public string $selectedLanguage = 'en_US';

    public function mount()
    {
        $this->languages = Language::where('status', 'active')->get();
    }

    public function handleSelection($value)
    {
        $this->dispatch('changeLanguage', $value);
        $this->selectedLanguage = $value;
    }

    public function render()
    {
        return view('livewire.shop.product.index');
    }
}
