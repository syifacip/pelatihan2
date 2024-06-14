<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="icon" type="image/png" sizes="16x16" href="{{ url('/images/favicon.ico') }}">
	<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ 'Login | '.configuration('APP_NAME') }}</title>
    
	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link href="{{ url('/global_assets/css/icons/icomoon/styles.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('/css/bootstrap_limitless.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('/css/layout.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('/css/components.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('/css/colors.min.css') }}" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="{{ url('/global_assets/js/main/jquery.min.js') }}"></script>
	<script src="{{ url('/global_assets/js/main/bootstrap.bundle.min.js') }}"></script>
	<script src="{{ url('/global_assets/js/plugins/loaders/blockui.min.js') }}"></script>
	<script src="{{ url('/global_assets/js/plugins/ui/ripple.min.js') }}"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="{{ url('/global_assets/js/plugins/forms/styling/uniform.min.js') }}"></script>
	<script src="{{ url('/global_assets/js/plugins/notifications/sweet_alert.min.js') }}"></script>
    <script src="{{ url('/global_assets/js/plugins/forms/validation/validate.min.js') }}"></script>
    <script src="{{ url('/global_assets/js/plugins/forms/validation/localization/messages_id.js') }}"></script>

	<script src="{{ url('/js/app.js') }}"></script>

	<style>
	.login-cover2{
		background: url("{{ url('/global_assets/images/backgrounds/bg-01.jpg') }}") no-repeat;
		background-size: cover;
		/* background-color: #a4b9de; */
	}
	</style>
	
</head>
<body>
	<!-- Page content -->
	<div class="page-content login-cover2">

		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- Login form -->
                <form class="login-form wmin-sm-400" id="form-login" method="POST" action="{{ route('login') }}">
                    @csrf
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
								<img src="{{ url('/images/logo-01.png') }}" class="img-fluid mb-3" width="400" height="150" alt="">
								<h5 class="mb-0">{{ configuration('APP_NAME') }}</h5>
								<span class="d-block text-muted">{{ configuration('APP_DESC') }}</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="text" name="login" class="form-control" placeholder="{{ __('User ID') }}"  required="" placeholder="" aria-invalid="false" />
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="password" name="password" class="form-control" placeholder="{{ __('Kata Sandi') }}"  required="" placeholder="" aria-invalid="false" />
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>
							<!--
							<div class="form-group d-flex align-items-center">
								<div class="form-check mb-0">
									<label class="form-check-label">
										<input type="checkbox" name="remember" class="form-input-styled" data-fouc>
										{{ __('Ingat Saya') }}
									</label>
								</div>

								{{-- <a href="{{ route('password.request') }}" class="ml-auto">{{ __('Lupa Kata Sandi?') }}</a> --}}
							</div>
							-->
							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-block">{{ __('Login') }} <i class="icon-circle-right2 ml-2"></i></button>
							</div>

						<span class="form-text text-center text-muted">{{ configuration('INST_NAME') }}</span>
						</div>
					</div>
				</form>
				<!-- /login form -->

			</div>
			<!-- /content area -->

		</div>
		<!-- /main content -->

	</div>
	<!-- /page content -->

</body>
<script>
    $(document).ready(function(){
        $('.form-input-styled').uniform();

		@if ($errors->has('email'))
            swal({
                title: "{{ $errors->first('email') }}",
                type: "error",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                swal.close();
            });
        @endif

		@if ($errors->has('user_id'))
            swal({
                title: "{{ $errors->first('user_id') }}",
                type: "error",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                swal.close();
            });
        @endif

        @if ($errors->has('password'))
            swal({
                title: "{{ $errors->first('password') }}",
                type: "error",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                swal.close();
            });
        @endif

		var validator = $('#form-login').validate({
			ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
			errorClass: 'validation-invalid-label',
			successClass: 'validation-valid-label',
			validClass: 'validation-valid-label',
			highlight: function(element, errorClass) {
				$(element).removeClass(errorClass);
			},
			unhighlight: function(element, errorClass) {
				$(element).removeClass(errorClass);
			},
			// Different components require proper error label placement
			errorPlacement: function(error, element) {

				// Unstyled checkboxes, radios
				if (element.parents().hasClass('form-check')) {
					error.appendTo( element.parents('.form-check').parent() );
				}

				// Input with icons and Select2
				else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
					error.appendTo( element.parent() );
				}

				// Input group, styled file input
				else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
					error.appendTo( element.parent().parent() );
				}

				// Other elements
				else {
					error.insertAfter(element);
				}
			},
			rules: {
				password: {
					minlength: 5
				},
				repeat_password: {
					equalTo: '#password'
				},
				email: {
					email: true
				},
				repeat_email: {
					equalTo: '#email'
				},
				minimum_characters: {
					minlength: 10
				},
				maximum_characters: {
					maxlength: 10
				},
				minimum_number: {
					min: 10
				},
				maximum_number: {
					max: 10
				},
				number_range: {
					range: [10, 20]
				},
				url: {
					url: true
				},
				date: {
					date: true
				},
				date_iso: {
					dateISO: true
				},
				numbers: {
					number: true
				},
				digits: {
					digits: true
				},
				creditcard: {
					creditcard: true
				},
				basic_checkbox: {
					minlength: 2
				},
				styled_checkbox: {
					minlength: 2
				},
				switchery_group: {
					minlength: 2
				},
				switch_group: {
					minlength: 2
				}
			},
			messages: {
				custom: {
					required: 'This is a custom error message'
				},
				basic_checkbox: {
					minlength: 'Please select at least {0} checkboxes'
				},
				styled_checkbox: {
					minlength: 'Please select at least {0} checkboxes'
				},
				switchery_group: {
					minlength: 'Please select at least {0} switches'
				},
				switch_group: {
					minlength: 'Please select at least {0} switches'
				},
				agree: 'Please accept our policy'
			}
		});
    });
</script>
</html>
