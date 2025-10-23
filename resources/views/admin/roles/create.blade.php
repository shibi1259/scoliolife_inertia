@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Create Role</h4>
                        <form action="{{ route('admin.roles.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="name">Role Name</label>
                                <input type="text" name="name" id="name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="guard_name">Guard Name</label>
                                <input type="text" name="guard_name" id="guard_name" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-success">Create Role</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
