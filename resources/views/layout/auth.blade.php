<!DOCTYPE html>
<html lang="en">

<head> @include('layout.partials.head') </head>

    <body>
        <div class="container-scroller">

            @yield('content')

        </div>

        @include('layout.partials.footer')
    </body>

</html>