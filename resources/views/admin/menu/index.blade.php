@extends('layout.admin')

@section('content')
    {!! Menu::render() !!}
@endsection
@push('scripts')
    {!! Menu::scripts() !!}
@endpush