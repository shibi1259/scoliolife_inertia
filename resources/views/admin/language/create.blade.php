@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Language</h4>

                        <form action="{{ route('admin.language.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">Language Name</label>
                                <input type="text" class="form-control" id="name" name="name" value="{{ old('name') }}">
                                @error('name')
                                    <div class="text-danger form-text mt-2">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="code" class="form-label">Language Code</label>
                                <input type="text" class="form-control" id="code" name="code" value="{{ old('code') }}">
                                @error('code')
                                    <div class="text-danger form-text mt-2">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="icon" class="form-label">Language Icon</label>
                                <input type="file" class="form-control" id="icon" name="icon" accept="image/*">
                                @error('icon')
                                    <div class="text-danger form-text mt-2">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-3">
                                <label for="status" class="form-label">Status</label>
                                <select class="form-control" id="status" name="status">
                                    <option value="active" {{ old('status') == 'active' ? 'selected' : '' }}>Active</option>
                                    <option value="inactive" {{ old('status') == 'inactive' ? 'selected' : '' }}>Inactive
                                    </option>
                                </select>
                                @error('status')
                                    <div class="text-danger form-text mt-2">{{ $message }}</div>
                                @enderror
                            </div>
                            <button type="submit" class="btn btn-primary">Create Language</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <a href="{{ route('admin.language.index') }}" class="btn btn-secondary">Back to All Languages</a>
        </div>
    </div>
@endsection