@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        @if (session('success'))
            <div class="toast align-items-center text-bg-success border-0 show position-fixed top-0 end-0 m-3">
                <div class="d-flex">
                    <div class="toast-body">{{ session('success') }}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        @endif

        <form action="{{ route('admin.setting.store', ['setting' => 'widget']) }}" method="POST"
            enctype="multipart/form-data">
            @csrf

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Widget Settings</h4>
                    <div class="accordion" id="accordionExample">
                        @foreach ($languages as $language)
                            @php
                                $langCode = $language->code;
                                $widgets = $settings[$langCode] ?? [];
                                if (empty($widgets))
                                    $widgets = [[]]; // default empty widget form
                            @endphp

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-{{ $language->id }}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-{{ $language->id }}">
                                        {{ $language->name }}
                                        @isset($language->icon)
                                            <img src="{{ asset($language->icon) }}" alt="{{ $language->name }}"
                                                style="width:24px; margin-left:8px;">
                                        @endisset
                                    </button>
                                </h2>

                                <div id="collapse-{{ $language->id }}" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        
                                        <div class="widgets-container" data-lang="{{ $langCode }}">
                                            @foreach ($widgets as $index => $widget)
                                                <x-widget-form :langCode="$langCode" :widget="$widget" :index="$index" />
                                            @endforeach
                                        </div>

                                        {{-- Hidden template to clone from --}}
                                        <template id="widget-template-{{ $langCode }}">
                                            <x-widget-form :langCode="$langCode" :widget="[]" :index="'__INDEX__'" />
                                        </template>

                                        <button type="button" class="btn btn-outline-primary mt-2 add-widget-btn"
                                            data-lang="{{ $langCode }}">
                                            + Add Widget
                                        </button>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="btn btn-success">Save Widgets</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

@endsection

@push('scripts')
    {{-- ================= JS ================= --}}
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.add-widget-btn').forEach(button => {
                button.addEventListener('click', function () {
                    const lang = this.dataset.lang;
                    const container = document.querySelector(`.widgets-container[data-lang="${lang}"]`);
                    const template = document.getElementById(`widget-template-${lang}`).innerHTML;

                    const newIndex = container.children.length;
                    const html = template.replaceAll('__INDEX__', newIndex);

                    container.insertAdjacentHTML('beforeend', html);
                });
            });

            document.addEventListener('click', e => {
                if (e.target.classList.contains('remove-widget')) {
                    const container = e.target.closest('.widgets-container');
                    const items = container.querySelectorAll('.widget-item');

                    if (items.length <= 1) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Cannot remove',
                            text: 'At least one widget must remain!'
                        });
                        return;
                    }

                    e.target.closest('.widget-item').remove();
                }
            });
        });
    </script>
@endpush