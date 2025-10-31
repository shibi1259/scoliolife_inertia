<?php

namespace App\Traits;

trait DataTableTrait
{
    public function applyDefaultTableConfig($placeholder = 'Search...'): void
    {
        $this->setPrimaryKey('id');
        $this->setColumnSelectDisabled();
        $this->setSearchPlaceholder($placeholder);
        $this->setPerPageFieldAttributes(['style' => 'width: 100px !important']);
        $this->setTableWrapperAttributes([
            'class' => 'table-responsive table-bordered',
        ]);
    }

    public function getRowIndex($row): float|int
    {
            $currentPage = $this->getPage();
            $perPage = $this->getPerPage();
            static $rowIndex = 0;
            $rowIndex++;
            return ($currentPage - 1) * $perPage + $rowIndex;
    }
}
