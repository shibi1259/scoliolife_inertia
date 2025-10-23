@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="card-title">Articles Management</h4>
                            <a href="{{ route('admin.articles.create') }}" class="btn btn-primary mb-3">Create New
                                Article</a>
                        </div>

                        {{-- Articles Table --}}
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Status</th>
                                        <th>Published At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($articles as $article)
                                        <tr>
                                            <td>{{ $article->title }}</td>
                                            <td>{{ $article->creator->name ?? '-' }}</td>
                                            <td>
                                                <span
                                                    class="badge {{ $article->status == 'published' ? 'badge-success' : 'badge-secondary' }}">
                                                    {{ ucfirst($article->status) }}
                                                </span>
                                            </td>
                                            <td>{{ $article->created_at ? $article->created_at->format('Y-m-d') : '-' }}
                                            </td>
                                            <td>
                                                <a href="{{ route('admin.articles.show', $article->id) }}"
                                                    class="btn btn-sm btn-info">
                                                    <i class="mdi mdi-eye"></i> View
                                                </a>
                                                <a href="{{ route('admin.articles.edit', $article->id) }}"
                                                    class="btn btn-sm btn-warning">
                                                    <i class="mdi mdi-pencil"></i> Edit
                                                </a>
                                                <form action="{{ route('admin.articles.destroy', $article->id) }}"
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
                                            <td colspan="5" class="text-center">No articles found.</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <div class="d-flex justify-content-center">
                            {{ $articles->links() }}
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