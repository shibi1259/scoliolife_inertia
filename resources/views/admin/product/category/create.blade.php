@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Product Category</h4>

                        {{-- Success / Error Messages --}}
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul class="mb-0">
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <form class="form-sample" action="{{ route('admin.product.category.store') }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf

                            <div class="row">
                                {{-- Title --}}
                                <div class="col-md-6 mb-3">
                                    <label>Category Title</label>
                                    <input type="text" name="title" class="form-control" placeholder="Enter Category Title"
                                        required>
                                </div>

                                {{-- Slug --}}
                                <div class="col-md-6 mb-3">
                                    <label>Slug (optional)</label>
                                    <input type="text" name="slug" class="form-control" placeholder="example-category">
                                </div>

                                {{-- Summary --}}
                                <div class="col-md-12 mb-3">
                                    <label>Summary</label>
                                    <textarea name="summary" class="form-control" rows="2"
                                        placeholder="Short summary..."></textarea>
                                </div>

                                {{-- Description --}}
                                <div class="col-md-12 mb-3">
                                    <label>Description</label>
                                    <textarea name="description" class="form-control" rows="3"
                                        placeholder="Category description..."></textarea>
                                </div>

                                {{-- Parent Category --}}
                                <div class="col-md-6 mb-3">
                                    <label>Parent Category</label>
                                    <select name="parent_id" class="form-control">
                                        <option value="">-- None (Main Category) --</option>
                                        @foreach ($categories as $cat)
                                            <option value="{{ $cat->id }}">{{ $cat->title }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                {{-- Status --}}
                                <div class="col-md-6 mb-3">
                                    <label>Status</label>
                                    <select name="status" class="form-control" required>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>

                                {{-- Photo --}}
                                <div class="col-md-6 mb-3">
                                    <label>Category Photo</label>
                                    <input type="file" name="photo" class="form-control" accept="image/*">
                                </div>
                            </div>

                            <div class="text-center mt-3">
                                <button type="submit" class="btn btn-primary">Create Category</button>
                                <a href="{{ route('admin.product.category.index') }}" class="btn btn-secondary">Back to
                                    Categories</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection