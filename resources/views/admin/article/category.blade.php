@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="card-title">Articles Categories Management</h4>
                            <a href="{{ route('admin.articles.create') }}" class="btn btn-primary mb-3">Articles</a>
                        </div>

                        {{-- Add Category Form --}}
                        <div class="mb-4">
                            <form action="{{ route('admin.articles.category.store') }}" method="POST" class="form-inline">
                                @csrf
                                <div class="form-group mr-2">
                                    <input type="text" name="name" class="form-control" placeholder="Category Name"
                                        required>
                                </div>
                                <div class="form-group mr-2">
                                    <input type="text" name="slug" class="form-control" placeholder="Category Slug"
                                        required>
                                </div>
                                <div class="form-group mr-2">
                                    <textarea name="description" id="" class="form-control"
                                        placeholder="Category Description"></textarea>
                                </div>
                                <button type="submit" class="btn btn-success">Add Category</button>
                            </form>
                        </div>

                        {{-- Categories Table --}}
                        <div class="mb-5">
                            <h5>Categories</h5>
                            <div class="table-responsive">
                                <table class="table table-bordered table-sm">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse ($categories as $category)
                                            <tr>
                                                <td>{{ $category->name }}</td>
                                                <td>
                                                    <form action="{{ route('admin.articles.category.destroy', $category->id) }}"
                                                        method="POST" style="display:inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-danger"
                                                            onclick="return confirm('Delete this category?')">
                                                            Delete
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="2" class="text-center">No categories found.</td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-flex justify-content-center">
                                {{ $categories->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        const confirmDelete = (e) => {
            e.preventDefault();
            const form = e.target;
            Swal.fire({
                title: 'Are you sure?',
                text: 'This article will be permanently deleted.',
                icon: 'warning',
                confirmButtonText: 'Yes, delete it!',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                customClass: {
                    confirmButton: 'btn btn-danger mx-2',
                    cancelButton: 'btn btn-secondary mx-2'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        }
    </script>
@endpush