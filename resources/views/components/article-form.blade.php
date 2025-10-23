<div>
    <input type="hidden" name="languages[]" value="{{ $language }}">

    {{-- Title --}}
    <div class="mb-3">
        <label class="form-label">Title ({{ $language }})</label>
        <input type="text" name="title[{{ $language }}]" class="form-control" value="{{ old('title.' . $language) }}">
        @error("title.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    {{-- Slug --}}
    <div class="mb-3">
        <label class="form-label">Slug ({{ $language }})</label>
        <input type="text" name="slug[{{ $language }}]" class="form-control" value="{{ old('slug.' . $language) }}">
        @error("slug.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    {{-- Excerpt --}}
    <div class="mb-3">
        <label class="form-label">Excerpt ({{ $language }})</label>
        <textarea name="excerpt[{{ $language }}]" class="form-control"
            rows="2">{{ old('excerpt.' . $language) }}</textarea>
        @error("excerpt.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    {{-- Description --}}
    <div class="mb-3">
        <label class="form-label">Description ({{ $language }})</label>
        <textarea id="description-{{ $language }}" name="description[{{ $language }}]"
            class="form-control tinymce-editor">{{ old('description.' . $language) }}</textarea>
        @error("description.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    {{-- Image per language --}}
    <div class="mb-3">
        <label class="form-label">Image ({{ $language }})</label>
        <input type="file" name="image[{{ $language }}]" class="form-control">
        @error("image.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    {{-- SEO --}}
    <h6 class="mt-3">SEO ({{ $language }})</h6>

    <div class="mb-3">
        <label class="form-label">SEO Title</label>
        <input type="text" name="seo_title[{{ $language }}]" class="form-control"
            value="{{ old('seo_title.' . $language) }}">
        @error("seo_title.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>

    <div class="mb-3">
        <label class="form-label">SEO Description</label>
        <textarea name="seo_description[{{ $language }}]" class="form-control"
            rows="2">{{ old('seo_description.' . $language) }}</textarea>
        @error("seo_description.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror

    </div>

    <div class="mb-3">
        <label class="form-label">SEO Keywords</label>
        <input type="text" name="seo_keywords[{{ $language }}]" class="form-control"
            value="{{ old('seo_keywords.' . $language) }}">
        @error("seo_keywords.$language")
            <div class="text-danger mt-2">{{ $message }}</div>
        @enderror
    </div>
</div>