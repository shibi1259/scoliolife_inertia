<a href="{{ route('admin.language.edit', $language->id) }}" class="btn btn-primary">Edit</a>
<form action="{{ route('admin.language.destroy', $language->id) }}" method="POST" style="display:inline;">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-danger">Delete</button>
</form>