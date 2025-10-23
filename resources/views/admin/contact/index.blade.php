@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Contacts Management</h4>
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                        <th>Enquiry Type</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($contacts as $contact)
                                        <tr>
                                            <td>{{ $contact->name }}</td>
                                            <td>{{ $contact->email }}</td>
                                            <td>{{ $contact->phone ?? '-' }}</td>
                                            <td>{{ $contact->country ?? '-' }}</td>
                                            <td>{{ $contact->enquiry_type ?? '-' }}</td>
                                            <td>
                                                <span
                                                    class="badge {{ $contact->status == 'active' ? 'badge-success' : 'badge-secondary' }}">
                                                    {{ ucfirst($contact->status) }}
                                                </span>
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.contacts.show', $contact->id) }}"
                                                    class="btn btn-sm btn-info">
                                                    <i class="mdi mdi-eye"></i> View
                                                </a>
                                                <form action="{{ route('admin.contacts.destroy', $contact->id) }}"
                                                    onsubmit="return confirmDelete(event);" method="POST"
                                                    style="display:inline;">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-danger">
                                                        <i class="mdi mdi-delete"></i> Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="7" class="text-center">No contacts found.</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <div class="d-flex justify-content-center">
                            {{ $contacts->links() }}
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
                text: 'This contact will be permanently deleted.',
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