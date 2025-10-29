{{-- Dynamic Attributes Section --}}
<div class="card mb-4 shadow-none d-none" id="variable-section">
    <div class="card-header d-flex justify-content-between align-items-center">
        <strong>Product Attributes</strong>
        <button type="button" id="addAttributeBtn" class="btn btn-sm btn-primary">+ Add Attribute</button>
    </div>

    <div class="card-body" id="attributesContainer">
        {{-- Default first attribute --}}
        <div class="attribute-block border p-3 mb-3">
            <div class="mb-2">
                <label>Attribute Key</label>
                <input type="text" name="attributes[0][key]" class="form-control" placeholder="e.g. Size, Color"
                    required>
            </div>

            <div class="mb-2">
                <label>Values (comma separated)</label>
                <input type="text" name="attributes[0][values]" class="form-control" placeholder="e.g. S, M, L"
                    required>
            </div>

            <div class="mb-2">
                <label>Price / SKU / Stock (optional for each value)</label>
                <small class="text-muted d-block mb-2">Format: value:price:sku:stock (comma separated)</small>
                <input type="text" name="attributes[0][details]" class="form-control"
                    placeholder="S:10:SKU-S:50, M:12:SKU-M:40, L:15:SKU-L:20">
            </div>

            <button type="button" class="btn btn-sm btn-danger removeAttributeBtn" disabled>Remove</button>
        </div>
    </div>
</div>


@push('scripts')
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const productType = document.getElementById("product_type");
            const variableSection = document.getElementById("variable-section");
            const addBtn = document.getElementById("addAttributeBtn");
            const container = document.getElementById("attributesContainer");

            // Toggle visibility based on type
            productType.addEventListener("change", function () {
                if (this.value === "variable-product") {
                    variableSection.classList.remove("d-none");
                } else {
                    variableSection.classList.add("d-none");
                }
            });

            // Add new attribute block
            addBtn.addEventListener("click", function () {
                const index = container.querySelectorAll(".attribute-block").length;
                const block = document.createElement("div");
                block.classList.add("attribute-block", "border", "p-3", "mb-3");

                block.innerHTML = `
                <div class="mb-2">
                    <label>Attribute Key</label>
                    <input type="text" name="attributes[${index}][key]" class="form-control" placeholder="e.g. Size, Color" required>
                </div>

                <div class="mb-2">
                    <label>Values (comma separated)</label>
                    <input type="text" name="attributes[${index}][values]" class="form-control" placeholder="e.g. S, M, L" required>
                </div>

                <div class="mb-2">
                    <label>Price / SKU / Stock (optional for each value)</label>
                    <small class="text-muted d-block mb-2">Format: value:price:sku:stock (comma separated)</small>
                    <input type="text" name="attributes[${index}][details]" class="form-control"
                        placeholder="S:10:SKU-S:50, M:12:SKU-M:40, L:15:SKU-L:20">
                </div>

                <button type="button" class="btn btn-sm btn-danger removeAttributeBtn">Remove</button>
            `;
                container.appendChild(block);
                updateRemoveButtons();
            });

            // Remove attribute (except last one)
            container.addEventListener("click", function (e) {
                if (e.target.classList.contains("removeAttributeBtn")) {
                    const blocks = container.querySelectorAll(".attribute-block");
                    if (blocks.length > 1) {
                        e.target.closest(".attribute-block").remove();
                        updateRemoveButtons();
                    }
                }
            });

            // Prevent last one removal
            function updateRemoveButtons() {
                const blocks = container.querySelectorAll(".attribute-block");
                blocks.forEach((block) => {
                    const removeBtn = block.querySelector(".removeAttributeBtn");
                    removeBtn.disabled = (blocks.length === 1);
                });
            }

            updateRemoveButtons();
        });
    </script>
@endpush