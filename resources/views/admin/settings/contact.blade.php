@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        @if (session('success'))
            <div class="toast align-items-center text-bg-success border-0 show position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true" style="z-index: 1055;">
                <div class="d-flex">
                    <div class="toast-body">
                        {{ session('success') }}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        @endif

        @if ($errors->any())
            <div class="toast align-items-center text-bg-danger border-0 show position-fixed top-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true" style="z-index: 1055;">
                <div class="d-flex">
                    <div class="toast-body">
                        {{ $errors->first() }}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        @endif

        <form action="{{ route('admin.setting.store', ['setting' => 'contact_details']) }}" method="POST">
            @csrf
            <div class="row">
                <div class="col-12 grid-margin">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Contact Details</h4>

                            <div class="accordion" id="accordionExample">
                                @foreach ($languages as $language)
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading-{{ $language->id }}">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-{{ $language->id }}" aria-expanded="false"
                                                aria-controls="collapse-{{ $language->id }}">
                                                {{ $language->name }}
                                                @isset($language->icon)
                                                    <img src="{{ asset($language->icon) }}" alt="{{ $language->name }}"
                                                        style="width:24px; height:auto; margin-left:8px;">
                                                @endisset
                                            </button>
                                        </h2>
                                        <div id="collapse-{{ $language->id }}" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                @php
                                                    $langCode = $language->code;
                                                    $setting = $settings[$langCode] ?? [];
                                                @endphp

                                                <div class="mb-3 ">
                                                    <label class="form-label">WhatsApp Number</label>
                                                    <input type="text" name="contact[{{ $langCode }}][whatsapp]"
                                                        class="form-control" value="{{ $setting['whatsapp'] ?? '' }}">
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Phone Numbers (comma separated)</label>
                                                    <input type="text" name="contact[{{ $langCode }}][phones]"
                                                        class="form-control"
                                                        value="{{ isset($setting['phones']) ? $setting['phones'] : '' }}">
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" name="contact[{{ $langCode }}][email]"
                                                        class="form-control" value="{{ $setting['email'] ?? '' }}">
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Address</label>
                                                    <textarea name="contact[{{ $langCode }}][address]" class="form-control"
                                                        rows="2">{{ $setting['address'] ?? '' }}</textarea>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label">Google Maps Link</label>
                                                    <input type="text" name="contact[{{ $langCode }}][map_link]"
                                                        class="form-control" value="{{ $setting['map_link'] ?? '' }}">
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Google Tag ID</label>
                                                    <input type="text" name="contact[{{ $langCode }}][google_tag_id]"
                                                        class="form-control" value="{{ $setting['google_tag_id'] ?? '' }}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            <div class="mt-3">
                                <button type="submit" class="btn btn-primary">Save Contact Details</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection