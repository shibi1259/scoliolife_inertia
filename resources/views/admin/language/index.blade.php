@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">All Languages</h4>
                        <livewire:datatable.languages-table />
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection