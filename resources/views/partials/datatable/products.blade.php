<a href="{{ route('admin.product.edit', $product->id) }}" class="btn btn-primary">Edit</a>
<form action="{{ route('admin.product.destroy', $product->id) }}" onsubmit="return confirmDelete(event);" method="POST"
    style="display:inline;">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-danger">Delete</button>
</form>