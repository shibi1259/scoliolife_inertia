@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Edit User - {{ $user->name }}</h4>

                        <form method="post" action="{{ route('admin.users.update', $user->id) }}"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PATCH')

                            <!-- Row: Name + Photo -->
                            <div class="row mb-4">
                                <!-- Name input (left) -->
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <label for="inputTitle" class="col-form-label">Name</label>
                                        <input id="inputTitle" type="text" name="name" placeholder="Enter name"
                                            value="{{ $user->name }}" class="form-control w-100">
                                        @error('name')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <!-- Profile image (right) -->
                                <div class="col-md-4 text-center">
                                    <label class="col-form-label d-block">Photo</label>
                                    <div class="position-relative d-inline-block">
                                        <img id="profilePreview"
                                            src="{{ $user->info && $user->info->profile ? asset("storage/{$user->info->profile}") : asset('images/placeholder.png') }}"
                                            class="rounded-circle border" alt="{{ $user->name }}"
                                            style="width: 120px; height: 120px; object-fit: cover;">

                                        <input type="file" id="photoInput" name="photo" class="d-none" accept="image/*">

                                        <button type="button" onclick="document.getElementById('photoInput').click();"
                                            class="btn btn-sm btn-primary rounded-circle position-absolute"
                                            style="bottom: 0; right: 0;">
                                            <i class="fa-solid fa-camera"></i>
                                        </button>
                                    </div>
                                    @error('photo')
                                        <span class="text-danger d-block mt-2">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>

                            <!-- Full-width fields -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="inputEmail" class="col-form-label">Email</label>
                                        <input id="inputEmail" type="email" name="email" placeholder="Enter email"
                                            value="{{ $user->email }}" class="form-control w-100">
                                        @error('email')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="inputPassword" class="col-form-label">New Password</label>
                                        <input id="inputPassword" type="password" name="password"
                                            class="form-control w-100">
                                        @error('password')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="role" class="col-form-label">Role</label>
                                        <select name="role" class="form-control w-100">
                                            <option value="">-----Select Role-----</option>
                                            @foreach($roles as $role)
                                                <option value="{{ $role->name }}" @if($user->hasRole($role->name)) selected
                                                @endif>
                                                    {{ $role->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                        @error('role')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label for="status" class="col-form-label">Status</label>
                                        <select name="status" class="form-control w-100">
                                            <option value="active" {{ $user->status == 'active' ? 'selected' : '' }}>Active
                                            </option>
                                            <option value="inactive" {{ $user->status == 'inactive' ? 'selected' : '' }}>
                                                Inactive</option>
                                        </select>
                                        @error('status')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <!-- Button full-width centered -->
                                    <div class="form-group mb-3 text-center">
                                        <button class="btn btn-success px-5" type="submit">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        document.getElementById('photoInput').addEventListener('change', function (event) {
            let reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profilePreview').src = e.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        });
    </script>
@endpush