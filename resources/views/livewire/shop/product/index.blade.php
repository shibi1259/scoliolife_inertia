<div>
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Select Language</label>
        <select class="form-select" id="inputGroupSelect01" wire:model.live="selectedLanguage"
            wire:change="handleSelection($event.target.value)">
            @foreach ($languages as $language)
                <option value="{{ $language->code }}">{{ $language->name }}</option>
            @endforeach
        </select>
    </div>
    <livewire:datatable.products-table />
</div>