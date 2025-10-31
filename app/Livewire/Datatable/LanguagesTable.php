<?php

namespace App\Livewire\Datatable;

use App\Models\Language;
use App\Traits\DataTableTrait;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;

class LanguagesTable extends DataTableComponent
{
    use DataTableTrait;

    protected $model = Language::class;

    public function configure(): void
    {
        $this->applyDefaultTableConfig();
    }

    public function builder(): Builder
    {
        return Language::query()->select('*');
    }

    public function columns(): array
    {
        return [
            Column::make('Id', 'id')
                ->label(fn ($row) => $this->getRowIndex($row))->html()->sortable(),
            Column::make('Name', 'name')
                ->sortable()
                ->searchable(),
            Column::make('Status', 'status')
                ->sortable()
                ->searchable(),
            Column::make('Icon', 'icon')
                ->format(fn ($value) => "<img class='img-fluid zoom' src='".asset($value)."' alt='Language Icon' style='width: 50px; height: 50px;'></img>")
                ->html(),
            Column::make('Actions')
                ->label(fn ($row) => view('partials.datatable.languages', ['language' => $row])->render())
                ->html(),
        ];
    }
}
