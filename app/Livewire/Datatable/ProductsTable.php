<?php

namespace App\Livewire\Datatable;

use App\Models\Language;
use App\Models\Product;
use App\Traits\DataTableTrait;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class ProductsTable extends DataTableComponent
{
    use DataTableTrait;

    protected $listeners = ['changeLanguage' => 'changeLanguage'];

    protected $model = Product::class;

    public string $selectedLanguage = 'en_US';

    public $languages = [];

    public function mount(): void
    {
        // Load languages so the component knows available languages (optional)
        $this->languages = Language::where('status', 'active')->get();
    }

    public function configure(): void
    {
        $this->applyDefaultTableConfig('Search Products...');
    }

    public function changeLanguage(string $langCode): void
    {
        $this->selectedLanguage = $langCode;
        $this->resetPage();
    }

    public function builder(): Builder
    {
        return Product::query()
            ->where('language', $this->selectedLanguage)
            ->select('*');
    }

    public function columns(): array
    {
        return [
            Column::make('Id', 'id')
                ->label(fn ($row) => $this->getRowIndex($row))->html()->sortable(),
            Column::make('Title', 'title')->searchable(),

            Column::make('Price', 'price')
                ->sortable()->searchable(),

            Column::make('Stock', 'stock')
                ->sortable()->searchable(),

            Column::make('Status', 'status')
                ->sortable()->searchable(),
            Column::make('Photo', 'photo')
                ->format(fn ($value) => '<img src="'.asset($value).'" alt="Product Photo" class="img-fluid zoom" style="width: 50px; height: 50px;">')
                ->html(),

            Column::make('Product type', 'product_type')->sortable()->searchable(),

            Column::make('Language', 'language')
                ->sortable()->searchable(),

            Column::make('Actions')
                ->label(fn ($row) => view('partials.datatable.products', ['product' => $row])->render())
                ->html(),

        ];
    }
}
