@extends('layout.admin')

@section('content')
<div class="content-wrapper">
    <div class="row">
        <div class="col-12 grid-margin">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Create Product</h4>

                    <form method="POST" action="{{ route('admin.product.store') }}" enctype="multipart/form-data">
                        @csrf

                        {{-- 🔹 Multilingual Tabs --}}
                        <ul class="nav nav-tabs mb-3" role="tablist">
                            @foreach ($languages as $code => $language)
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link {{ $loop->first ? 'active' : '' }}" data-bs-toggle="tab" data-bs-target="#lang-{{ $code }}" type="button" role="tab">
                                        <img src="{{ asset($language->icon) }}" width="18" class="me-1"> {{ $language->name }}
                                    </button>
                                </li>
                            @endforeach
                        </ul>

                        <div class="tab-content">
                            @foreach ($languages as $code => $language)
                                <div class="tab-pane fade {{ $loop->first ? 'show active' : '' }}" id="lang-{{ $code }}" role="tabpanel">
                                    <div class="border rounded p-3 mb-4">
                                        <div class="mb-3">
                                            <label class="form-label">Title <span class="text-danger">*</span></label>
                                            <input type="text" name="post[{{ $code }}][title]" class="form-control">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Main Content</label>
                                            <textarea name="post[{{ $code }}][main_content]" class="form-control summernote"></textarea>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Description</label>
                                            <textarea name="post[{{ $code }}][description]" class="form-control summernote"></textarea>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Gallery Images</label>
                                            <input type="file" name="post[{{ $code }}][product_gallery][]" multiple class="form-control">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label">Featured Video URL</label>
                                            <input type="text" name="post[{{ $code }}][featured_video_url]" class="form-control">
                                        </div>

                                        {{-- 🔹 SEO Settings --}}
                                        <h5 class="mt-4">SEO Settings</h5>
                                        <div class="row">
                                            <div class="col-md-4 mb-3">
                                                <label class="form-label">Meta Title</label>
                                                <input type="text" name="post[{{ $code }}][seo_meta_title]" class="form-control">
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <label class="form-label">Meta Description</label>
                                                <input type="text" name="post[{{ $code }}][seo_meta_description]" class="form-control">
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <label class="form-label">Meta Keywords</label>
                                                <input type="text" name="post[{{ $code }}][seo_meta_tag]" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        {{-- 🔹 General Product Info --}}
                        <div class="mb-3">
                            <label class="form-label">Category <span class="text-danger">*</span></label>
                            <select name="category_id" class="form-select">
                                <option value="">-- Select Category --</option>
                                @foreach ($categories as $cat)
                                    <option value="{{ $cat->id }}">{{ $cat->title }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Product Type</label>
                            <select id="product_type" name="product_type" class="form-select">
                                <option value="">-- Select Type --</option>
                                <option value="simple-product">Simple Product</option>
                                <option value="variable-product">Variable Product</option>
                                <option value="aws3-bucket-product">AWS3 Bucket Product</option>
                                <option value="digital">Digital Product</option>
                            </select>
                        </div>

                        {{-- 🔹 Variable Attributes --}}
                        <div id="variable-section" class="mb-4 d-none">
                            <h5>Product Variations</h5>
                            @foreach ($attributes as $attr)
                                @php
                                    $subAttributes = DB::table('product_attributes')
                                        ->where('parent_id', $attr->id)
                                        ->pluck('title');
                                @endphp
                                <div class="mb-3">
                                    <label class="form-label">{{ $attr->title }}</label>
                                    <select name="attr[{{ $attr->title }}][]" class="form-select selectpicker" multiple data-live-search="true">
                                        @foreach ($subAttributes as $sub)
                                            <option value="{{ $sub }}">{{ $sub }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            @endforeach
                        </div>

                        {{-- 🔹 AWS3 Video Section --}}
                        <div id="aws3-section" class="mb-4 d-none">
                            <h5>AWS3 Bucket Videos</h5>
                            <table class="table table-bordered" id="video-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Duration</th>
                                        <th>Image</th>
                                        <th>Video</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" name="aw3_buckets[video_title][]" class="form-control"></td>
                                        <td><input type="text" name="aw3_buckets[video_duration][]" class="form-control"></td>
                                        <td><input type="file" name="aw3_buckets[image_link][]" class="form-control"></td>
                                        <td><input type="file" name="aw3_buckets[video_link][]" class="form-control"></td>
                                        <td><button type="button" class="btn btn-danger remove-row">X</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" id="add-video" class="btn btn-primary btn-sm">Add Video</button>
                        </div>

                        {{-- 🔹 Shipping --}}
                        <h5>Shipping</h5>
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Weight (g)</label>
                                <input type="text" name="product_actual_weight" class="form-control">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Length (cm)</label>
                                <input type="text" name="dimension_length" class="form-control">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Width (cm)</label>
                                <input type="text" name="dimension_width" class="form-control">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label class="form-label">Height (cm)</label>
                                <input type="text" name="dimension_height" class="form-control">
                            </div>
                        </div>

                        {{-- 🔹 Pricing --}}
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Price ($)</label>
                                <input type="number" name="price" step="0.01" class="form-control">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Price (Rp)</label>
                                <input type="number" name="indonesian_price" step="0.01" class="form-control">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label">Price (RM)</label>
                                <input type="number" name="malaysian_price" step="0.01" class="form-control">
                            </div>
                        </div>

                        {{-- 🔹 Featured Image --}}
                        <div class="mb-3">
                            <label class="form-label">Featured Image</label>
                            <input type="file" name="image" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Slug</label>
                            <input type="text" name="product_slug" class="form-control">
                        </div>

                        {{-- 🔹 Status --}}
                        <div class="mb-3">
                            <label class="form-label">Status</label>
                            <select name="status" class="form-select">
                                <option value="active">Publish</option>
                                <option value="inactive">Draft</option>
                            </select>
                        </div>

                        <div class="d-flex gap-2">
                            <button type="reset" class="btn btn-warning">Reset</button>
                            <button type="submit" class="btn btn-success">Publish</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

    <div class="text-center mt-3">
        <a href="{{ route('admin.product.index') }}" class="btn btn-secondary">Back to Products</a>
    </div>
</div>
@endsection

@push('scripts')

<script>
document.addEventListener('DOMContentLoaded', function () {
    // $('.summernote').summernote({ height: 120 });
    // $('.selectpicker').selectpicker();

    const productType = document.getElementById('product_type');
    const variableSection = document.getElementById('variable-section');
    const aws3Section = document.getElementById('aws3-section');

    productType.addEventListener('change', function() {
        variableSection.classList.toggle('d-none', this.value !== 'variable-product');
        aws3Section.classList.toggle('d-none', this.value !== 'aws3-bucket-product');
    });

    // Add / remove AWS3 rows dynamically
    document.getElementById('add-video').addEventListener('click', () => {
        const table = document.querySelector('#video-table tbody');
        const newRow = table.rows[0].cloneNode(true);
        newRow.querySelectorAll('input').forEach(i => i.value = '');
        table.appendChild(newRow);
    });

    $(document).on('click', '.remove-row', function () {
        if ($('#video-table tbody tr').length > 1) {
            $(this).closest('tr').remove();
        }
    });
});
</script>
@endpush
