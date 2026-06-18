<!-- partial:partials/_navbar.html -->
<nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="navbar-brand-wrapper d-flex justify-content-center">
        <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
            <a class="navbar-brand brand-logo" href="{{ route('admin.index') }}">
                {{-- <img class="w-100" src="{{ asset('logo.png') }}" alt="logo" /> --}}
            </a>
            <a class="navbar-brand brand-logo-mini" href="{{ route('admin.index') }}">
                <img src="{{ asset('assets/images/logo-mini.svg') }}" alt="logo" />
            </a>
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span class="typcn typcn-th-menu"></span>
            </button>
        </div>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul class="navbar-nav me-lg-2">
            <li class="nav-item nav-profile dropdown">
                <a class="nav-link" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                    <div class="d-flex justify-content-center align-items-center">
                        <img src="{{ Auth::user()->info ? asset('storage/' . Auth::user()->info?->profile) : asset('/images/placeholder.png') }}"
                        alt="profile" />
                        <span class="nav-profile-name">{{ Auth::user()->name }}</span>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a class="dropdown-item" href="{{ route('admin.users.edit', Auth::user()->id) }}">
                        <i class="fa-solid fa-user text-primary"></i>
                        Profile
                    </a>
                    <a class="dropdown-item">
                        <i class="fa-solid fa-cog text-primary"></i>
                        Settings
                    </a>
                    <form method='POST' action="{{ route('admin.auth.logout') }}">
                        @csrf
                        <button type="submit" class="dropdown-item">
                            <i class="fa-solid fa-arrow-right-from-bracket text-primary"></i>
                            Logout
                        </button>
                    </form>
                </div>
            </li>
            <li class="nav-item nav-user-status dropdown">
                <p class="mb-0">Last login was {{ Carbon\Carbon::parse(Auth::user()->last_login)->diffForHumans() }}.
                </p>
            </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown">
                <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                    href="{{ route('home', ['locale' => app()->getLocale()]) }}" target="_blank">
                    <i class="typcn typcn-home mx-0"></i>
                    <span class="count"></span>
                </a>
            </li>
            <li class="nav-item dropdown me-0">
                <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                    id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                    <i class="typcn typcn-bell mx-0"></i>
                    <span class="count"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown">
                    <p class="mb-0 fw-normal float-start dropdown-header">Notifications</p>
                    <a class="dropdown-item preview-item">
                        <div class="preview-thumbnail">
                            <div class="preview-icon bg-success">
                                <i class="typcn typcn-info mx-0"></i>
                            </div>
                        </div>
                        <div class="preview-item-content">
                            <h6 class="preview-subject fw-normal">Application Error</h6>
                            <p class="fw-light small-text mb-0 text-muted">
                                Just now
                            </p>
                        </div>
                    </a>
                    <a class="dropdown-item preview-item">
                        <div class="preview-thumbnail">
                            <div class="preview-icon bg-warning">
                                <i class="typcn typcn-cog-outline mx-0"></i>
                            </div>
                        </div>
                        <div class="preview-item-content">
                            <h6 class="preview-subject fw-normal">Settings</h6>
                            <p class="fw-light small-text mb-0 text-muted">
                                Private message
                            </p>
                        </div>
                    </a>
                    <a class="dropdown-item preview-item">
                        <div class="preview-thumbnail">
                            <div class="preview-icon bg-info">
                                <i class="typcn typcn-user mx-0"></i>
                            </div>
                        </div>
                        <div class="preview-item-content">
                            <h6 class="preview-subject fw-normal">New user registration</h6>
                            <p class="fw-light small-text mb-0 text-muted">
                                2 days ago
                            </p>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
            data-toggle="offcanvas">
            <span class="typcn typcn-th-menu"></span>
        </button>
    </div>
</nav>