<div class="widget-item border rounded p-3 mb-3">
    <div class="form-group">
        <label for="header_menu_title">Type</label>
        <select id="dropdown" name="widgets[{{ $langCode }}][{{ $index }}][type]" class="form-control">
            <option @selected(isset($widget['type']) && $widget['type'] === '') value="">--Select any one--</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'contact_info') value="contact_info">Contact Info</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'telephone') value="telephone">Telephone</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'opening_hour') value="opening_hour">Opening Hours</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'scoliosis_result') value="scoliosis_result">Scoliosis Results</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'our_promise') value="our_promise">Our Promise</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'whatsapp') value="whatsapp">WhatsApp</option>
            <option @selected(isset($widget['type']) && $widget['type'] === 'disclaimer') value="disclaimer">Disclaimer</option>
        </select>
    </div>

    <div class="d-flex justify-content-end align-items-center mb-2">
        <button type="button" class="btn btn-danger btn-sm remove-widget">Remove</button>
    </div>

    <div class="form-group mb-3">
        <label>Title</label>
        <input type="text" name="widgets[{{ $langCode }}][{{ $index }}][title]" class="form-control"
            placeholder="Enter widget title" value="{{ $widget['title'] ?? '' }}">
    </div>

    <div class="form-group mb-3">
        <label>Description</label>
        <textarea name="widgets[{{ $langCode }}][{{ $index }}][description]" class="form-control summernote"
            rows="3">{{ $widget['description'] ?? '' }}</textarea>
    </div>

    <div class="form-group mb-3">
        <label>Image</label>
        <input type="file" name="widgets[{{ $langCode }}][{{ $index }}][image]" class="form-control">
        @if (!empty($widget['image']))
            <img src="{{ asset($widget['image']) }}" alt="Widget Image" class="mt-2" width="100">
        @endif
    </div>
</div>