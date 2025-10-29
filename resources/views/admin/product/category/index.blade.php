@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Product Categories</h4>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($categories as $category)
                                        <tr>
                                            <td>{{ $category->title }}</td>
                                            <td>{{ $category->price }}</td>
                                            <td>
                                                <a href="{{ route('admin.product.edit', $category->id) }}"
                                                    class="btn btn-primary">Edit</a>
                                                <form action="{{ route('admin.product.destroy', $category->id) }}"
                                                    onsubmit="return confirmDelete(event);" method="POST"
                                                    style="display:inline;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger">Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
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
        <div class="text-center mt-3">
            <a href="{{ route('admin.product.index') }}" class="btn btn-secondary">Back to Products</a>
            <a href="{{ route('admin.product.category.create') }}" class="btn btn-primary">Create Category</a>
        </div>  
    </div>
@endsection


@push('scripts')
    <script>
        const confirmDelete = (e) => {
            e.preventDefault();
            const form = e.target;
            Swal.fire({
                title: 'Warning!',
                text: 'Do you want to continue',
                icon: 'warning',
                confirmButtonText: 'Delete',
                showDenyButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        }
    </script>
@endpush