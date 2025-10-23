@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title mb-4 text-primary">
                            <i class="mdi mdi-account-box-outline"></i> Contact Details
                        </h3>

                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Name:</label>
                                    <div class="form-control bg-light">{{ $contact->name }}</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Email:</label>
                                    <div class="form-control bg-light">{{ $contact->email }}</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Phone:</label>
                                    <div class="form-control bg-light">{{ $contact->phone }}</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Enquiry Type:</label>
                                    <div class="form-control bg-light">{{ $contact->enquiry_type ?? '-' }}</div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Received At:</label>
                                    <div class="form-control bg-light">
                                        {{ $contact->created_at->format('d M Y, h:i A') }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Message:</label>
                                    <textarea disabled class="form-control bg-light"
                                        style="min-height: 120px; white-space: pre-wrap;">{{ $contact->description ?? $contact->message }}</textarea>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label fw-bold text-secondary">Attachments:</label>
                                    <div class="d-flex flex-wrap gap-3">
                                        @php
                                            $images = json_decode($contact->image, true) ?? [];
                                        @endphp
                                        @forelse ($images as $img)
                                            <a href="{{ asset('storage/' . $img) }}" target="_blank">
                                                <img src="{{ asset('storage/' . $img) }}" alt="Attachment"
                                                    class="img-thumbnail rounded shadow-sm"
                                                    style="width: 120px; height: 120px; object-fit: cover;">
                                            </a>
                                        @empty
                                            <span class="text-muted">No attachments uploaded</span>
                                        @endforelse
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between mt-4">
                            <form action="{{ route('admin.contacts.destroy', $contact->id) }}" method="POST"
                                onsubmit="confirmDelete(event)" class="ms-2">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-outline-danger">
                                    <i class="mdi mdi-delete"></i> Delete
                                </button>
                            </form>

                            <a href="{{ route('admin.contacts.index') }}" class="btn btn-outline-secondary">
                                <i class="mdi mdi-arrow-left"></i> Back
                            </a>
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