@extends('layout.auth')

@section('content')
<div class="container">

    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9 mt-5">

            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <!-- Left side image (only on large screens) -->
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>

                        <!-- Login form -->
                        <div class="col-lg-6">
                            <div class="p-5">

                                <div class="text-center mb-4">
                                    <h1 class="h4 text-gray-900">Welcome Back!</h1>
                                </div>

                                {{-- Flash messages --}}
                                @if(session('success'))
                                    <div class="alert alert-success">{{ session('success') }}</div>
                                @endif

                                @if(session('error'))
                                    <div class="alert alert-danger">{{ session('error') }}</div>
                                @endif

                                <form class="user" method="POST" action="{{ route('admin.auth.login') }}">
                                    @csrf

                                    <div class="form-group">
                                        <input type="email" 
                                               name="email" 
                                               value="{{ old('email') }}" 
                                               class="form-control form-control-user @error('email') is-invalid @enderror" 
                                               placeholder="Enter Email Address..." 
                                               required autofocus>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <input type="password" 
                                               name="password" 
                                               class="form-control form-control-user @error('password') is-invalid @enderror" 
                                               placeholder="Password" 
                                               required>
                                        @error('password')
                                            <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
                                        @enderror
                                    </div>

                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" name="remember" id="remember" 
                                               {{ old('remember') ? 'checked' : '' }}>
                                        <label class="form-check-label" for="remember">Remember Me</label>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-user btn-block">
                                        Login
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
@endsection
