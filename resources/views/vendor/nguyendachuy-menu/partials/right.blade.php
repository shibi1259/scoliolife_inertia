<div class="card mt-2">
    <div class="card-body">
        <div class="row">
            <div class="col-md-12">
                <form action="" method="post">
                    <div class="row align-items-end g-3">
                        <div class="col">
                            <label for="menu-name" class="form-label fw-semibold">
                                Menu Name
                            </label>
                            <input
                                name="menu-name"
                                id="menu-name"
                                type="text"
                                class="form-control"
                                placeholder="Enter menu name"
                                value="@if(isset($indmenu)){{$indmenu->name}}@endif">
                        </div>
                        <div class="col-auto">
                            @if(request()->has('action'))
                                <button
                                    type="button"
                                    onclick="createNewMenu()"
                                    class="btn btn-primary px-4">
                                    Create Menu
                                </button>
                            @elseif(request()->has('menu'))
                                <button
                                    type="button"
                                    onclick="actualizarMenu(false)"
                                    class="btn btn-primary px-4">
                                    Save Menu
                                </button>
                            @else
                                <button
                                    type="button"
                                    onclick="createNewMenu()"
                                    class="btn btn-primary px-4">
                                    Create Menu
                                </button>
                            @endif
                        </div>
                    </div>
                </form>
                <hr>
            </div>
            <div class="col-md-12">
                @if(request()->get('menu') != 0 && isset($menus) && count($menus) > 0)
                <div class="jumbotron jumbotron-fluid p-2">
                    <div class="container">
                        <h3>Menu Structure</h3>
                        <p class="lead">Place each item in the order you prefer. Click <i class="fa fa-pencil-square-o" aria-hidden="true"></i> to the right of the item to display more configuration options.</p>
                    </div>
                </div>
                @elseif(request()->get('menu') == 0)
                <div class="jumbotron jumbotron-fluid p-2">
                    <div class="container">
                        <h3>Menu Creation</h3>
                        <p class="lead">Please enter the name and select "Create menu" button</p>
                    </div>
                </div>
                @else
                <div class="jumbotron jumbotron-fluid p-2">
                    <div class="container">
                        <h3>Create Menu Item</h3>
                        <p class="lead"></p>
                    </div>
                </div>
                @endif

                <div id="accordion" class="">
                    @if(isset($menus) && count($menus) > 0)
                    <div class="dd nestable-menu" id="nestable">
                        <ol class="dd-list">	
                            @foreach($menus as $key => $m)
                                @include('nguyendachuy-menu::partials.loop-item', ['key' => $key])
                            @endforeach
                        </ol>
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    @if(request()->get('menu') != 0)
    <div class="card-footer">
        <button type="button" class="btn btn-danger btn-sm submitdelete deletion menu-delete" 
            onclick="deleteMenu()" href="javascript:void(9)">Delete Menu
        </button>
        @if(isset($menus) && count($menus) > 0)
        <button type="button" class="btn btn-info btn-sm" 
            onclick="updateItem()" href="javascript:void(9)">Update All Item
        </button>
        @endif
    </div>
    @endif
</div>