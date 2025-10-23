<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.index') }}">
                <i class="typcn typcn-device-desktop menu-icon"></i>
                <span class="menu-title">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false"
                aria-controls="ui-basic">
                <i class="fa-solid fa-language menu-icon"></i>
                <span class="menu-title">Languages</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.language.create') }}">Add
                            Language</a></li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.language.index') }}">All
                            Languages</a></li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                <i class="fa-solid fa-newspaper menu-icon"></i>
                <span class="menu-title">Articles</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.articles.index') }}">All
                            Articles</a></li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.articles.create') }}">Add
                            Article</a></li>
                    <li class="nav-item"> <a class="nav-link"
                            href="{{ route('admin.articles.category.create') }}">Article
                            Categories</a></li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.articles.tag.create') }}">Article
                            Tags</a></li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                <i class="typcn typcn-th-small-outline menu-icon"></i>
                <span class="menu-title">Tables</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="tables">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i class="fa-solid fa-user-plus menu-icon"></i>
                <span class="menu-title">Users</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.users.index') }}"> All Users </a>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.users.create') }}"> Create User </a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
                aria-controls="form-elements">
                <i class="fa-solid fa-address-book menu-icon"></i>
                <span class="menu-title">Contacts</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"><a class="nav-link" href="{{ route('admin.contacts.index') }}">All Contacts</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#menu-elements" aria-expanded="false"
                aria-controls="menu-elements">
                <i class="fa-solid fa-address-book menu-icon"></i>
                <span class="menu-title">Menu</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="menu-elements">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"><a class="nav-link" href="{{ route('admin.menu.index') }}">Header Menu List</a>
                    </li>
                </ul>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                <i class="fa-solid fa-screwdriver-wrench menu-icon"></i>
                <span class="menu-title">Roles</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="icons">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.roles.index') }}">List</a>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('admin.roles.create') }}">Add Role</a>
                    </li>
                </ul>
            </div>
        </li>




        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#settting-elements" aria-expanded="false"
                aria-controls="settting-elements">
                <i class="fa-solid fa-gears menu-icon"></i>
                <span class="menu-title">Settings</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="settting-elements">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"><a class="nav-link" href="{{ route('admin.setting.index', ['setting' => 'contact_details']) }}">Contacts Details</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{{ route('admin.setting.index', ['setting' => 'widget']) }}">Widgets</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>