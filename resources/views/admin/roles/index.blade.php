@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Roles Management</h4>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Guard Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($roles as $role)
                                        <tr>
                                            <td>{{ $role->name }}</td>
                                            <td>{{ $role->guard_name }}</td>
                                            <td>
                                                <a href="{{ route('admin.roles.edit', $role->id) }}"
                                                    class="btn btn-primary">Edit</a>
                                                <form action="{{ route('admin.roles.destroy', $role->id) }}" onsubmit="return confirmDelete(event);" method="POST"
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
                            {{ $roles->links() }}
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