@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Users</h4>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($users as $user)
                                        <tr>
                                            <td>{{ $user->name }}</td>
                                            <td>{{ $user->email }}</td>
                                            <td><span
                                                    class="badge text-white {{ $user->status === 'active' ? 'text-bg-success' : 'text-bg-danger' }}">{{ ucfirst($user->status) }}</span>
                                            </td>
                                            <td>
                                                @foreach ($user->roles as $role)
                                                    <span class="badge text-bg-info text-light">{{ $role->name }}</span>
                                                @endforeach
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.users.edit', $user->id) }}"
                                                    class="btn btn-primary">Edit</a>
                                                <form action="{{ route('admin.users.destroy', $user->id) }}"
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
                            {{ $users->links() }}
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