@extends('layout.admin')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="card-title">Articles Management</h4>
                            <a href="{{ route('admin.articles.index') }}" class="btn btn-secondary mb-3">Back</a>
                        </div>

                        <form action="{{ route('admin.articles.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="accordion" id="accordionExample">
                                {{-- English Accordion --}}
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading-en">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse-en" aria-expanded="true" aria-controls="collapse-en">
                                            English <img src="{{ asset('flags/us.png') }}" alt="English"
                                                style="width:24px; height:auto; margin-left:8px;">
                                        </button>
                                    </h2>
                                    <div id="collapse-en" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <x-article-form language="en_All" :categories="$categories" :tags="$tags" />
                                        </div>
                                    </div>
                                </div>

                                {{-- Other Languages --}}
                                @foreach ($otherLanguages as $language)
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
                                                <x-article-form :language="$language->code" :categories="$categories"
                                                    :tags="$tags" />
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            {{-- Shared fields --}}
                            <div class="mt-4">

                                <div class="mb-3">
                                    <label class="form-label">Category</label>
                                    <select name="category_id" class="form-select">
                                        <option value="">-- Select Category --</option>
                                        @foreach ($categories as $cat)
                                            <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                        @endforeach
                                    </select>
                                    @error('category_id')
                                        <div class="text-danger mt-2">{{ $message }}</div>
                                    @enderror
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Tag</label>
                                    <select name="tag_id" class="form-select">
                                        <option value="">-- Select Tag --</option>
                                        @foreach ($tags as $tag)
                                            <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                                        @endforeach
                                    </select>
                                    @error('tag_id')
                                        <div class="text-danger mt-2">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Save Article</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            tinymce.init({
                selector: 'textarea.tinymce-editor',
                height: 400,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table code help wordcount'
                ],
                relative_urls: false,
                remove_script_host: false,
                document_base_url: "{{ url('/') }}/",
            });
        });
    </script>
@endpush