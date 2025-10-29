@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Category</h4>
                        

                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-3">
            <a href="{{ route('admin.product.index') }}" class="btn btn-secondary">Back to Products</a>
            <a href="{{ route('admin.product.category.create') }}" class="btn btn-primary">Create Category</a>
        </div>  
    </div>
@endsection
