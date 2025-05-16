<!DOCTYPE html>
<html lang="en">

<head>
    @include('layout.partials.head')
</head>

<body>
    <div class="container-scroller">

        @include('layout.partials.navbar')

        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_sidebar.html -->

            @include('layout.partials.sidebar')
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">

                    <!-- ... (Main Content) ... -->

                    @yield('content')
                    <!-- ... (Main Content) ... -->

                </div>
                <!-- content-wrapper ends -->

                <!-- partial -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    @include('layout.partials.footer')
</body>

</html>
