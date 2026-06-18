@php
	$currentUrl = url()->current();
@endphp

<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link href="{{asset('vendor/nguyendachuy-menu/style.css')}}" rel="stylesheet">

<div id="nguyen-huy" class="card mt-2 mb-2">
	<div class="card-header p-0">
		<form method="GET" action="{{ $currentUrl }}" class="mb-4">

			<div class="card border-0 w-100">
				<div class="card-body">

					<label for="menu" class="form-label fw-semibold">
						Select the menu you want to edit
					</label>

					<select name="menu" id="menu" class="form-select mb-3">
						@foreach($menulist as $key => $value)
							<option value="{{ $key }}"
								{{ request('menu') == $key ? 'selected' : '' }}>
								{{ $value }}
							</option>
						@endforeach
					</select>

					<div class="d-flex align-items-center gap-3 flex-wrap">

						<button type="submit" class="btn btn-primary px-4">
							Submit
						</button>

						<span class="text-muted">or</span>

						<a href="{{ $currentUrl }}?action=edit&menu=0" class="btn btn-outline-primary">
							Create New Menu
						</a>

					</div>

				</div>
			</div>

		</form>
	</div>

	<div class="card-body">
		<input type="hidden" id="idmenu" value="{{$indmenu->id ?? null}}" />
		<div class="row">
			<div class="col-md-4">
				@include('nguyendachuy-menu::partials.left')
			</div>
			{{-- /col-md-4 --}}
			<div class="col-md-8">
				@include('nguyendachuy-menu::partials.right')
			</div>
		</div>
	</div>

	<div class="ajax-loader" id="ajax_loader">
		<div class="lds-ripple">
			<div></div>
			<div></div>
		</div>
	</div>
</div>