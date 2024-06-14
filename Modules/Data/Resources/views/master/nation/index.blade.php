@extends('layouts.app')

@section('content')
<div class="card">
	<div class="card-header header-elements-inline">
		<h5 class="card-title">{{ $title }}</h5>
		<div class="header-elements">
			<div class="list-icons">
				<a class="list-icons-item" data-action="reload" id="reload-table"></a>
			</div>
		</div>
	</div>
	<div class="card-body">
		<!--Frame Tabel-->
		<div id="frame-tabel">
			<button type="button" class="btn btn-primary legitRipple" id="3"><i class="icon-add mr-2"></i> Tambah</button>
			<button type="button" class="btn btn-warning legitRipple" id="ubah"><i class="icon-pencil mr-2"></i> Ubah</button>
			<button type="button" class="btn btn-danger legitRipple" id="hapus"><i class="icon-trash mr-2"></i> Hapus</button>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group form-group-float">
						<input name="search_param" id="search_param" placeholder="Pencarian Nama" class="form-control" data-fouc />
					</div>
				</div>
			</div>
			<div class="table-responsive">
				<table class="table table-single-select datatable-pagination" id="tabel-data" width="100%">
					<thead>
						<tr>
							<th width="25%">Kode Negara</th>
							<th width="30%" id="nation_nm_table">Nama Negara</th>
							<th width="25%" id="capital_table">Ibu Kota</th>
							<th width="25%" id="kode_telepon_table">Kode Telepon</th>
							<th width="25%" id="tahun_table">Tahun</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
		<!--Frame Form-->
		<div id="frame-form">
			<form class="form-validate-jquery" id="form-data" action="#">
				@csrf
				<div class="row">
					<div class="col-md-2">
						<div class="form-group form-group-float">
							<label class="form-group-float-label is-visible">Kode Negara <span class="text-danger">*</span></label>
							<input type="text" name="nation_cd" class="form-control text-uppercase" required="" placeholder="" aria-invalid="false">
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group form-group-float">
							<label class="form-group-float-label is-visible">Nama Negara <span class="text-danger">*</span></label>
							<input type="text" name="nation_nm" class="form-control" required="" placeholder="" aria-invalid="false">
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group form-group-float">
							<label class="form-group-float-label is-visible">Ibu Kota</label>
							<input type="text" name="capital" class="form-control" placeholder="" aria-invalid="false">
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group form-group-float">
							<label class="form-group-float-label is-visible">Tahun</label>
							<select name="tahun" id="tahun" class="form-control form-control-select2" required data-fouc>
							@for ($i = date('Y')-10; $i <= date('Y'); $i++)
								<option value="{{ $i }}">{{ $i }}</option>
							@endfor
						</select>
						</div>
					</div>
				</div>
				<div class="d-flex justify-content-end align-items-center">
					<button type="submit" class="btn btn-primary legitRipple">Simpan <i class="icon-floppy-disk ml-2"></i></button>
					<button type="reset" class="btn btn-light ml-2 legitRipple" id="reset">Selesai <i class="icon-reload-alt ml-2"></i></button>
				</div>
			</form>
		</div>
	</div>
</div>
@endsection
@push('scripts')
<script>
    var tabelData;
    var saveMethod = 'tambah';
    var baseUrl = '{{ url("data/nation/") }}';
	
    $(document).ready(function(){
		$('select[name=tahun]').val('{{ date("Y") }}').trigger('change');
		
        $('#frame-form').hide();  

        tabelData = $('#tabel-data').DataTable({
            language: {
                paginate: {'next': $('html').attr('dir') == 'rtl' ? 'Next &larr;' : 'Next &rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr; Prev' : '&larr; Prev'}
            },
            pagingType: "simple",
            processing	: true, 
            serverSide	: true, 
            order		: [], 
            ajax		: {
                url: baseUrl + '/data',
				//url: "{{ url('data/nation/data') }}",
                type: "POST",
                data: {
                    '_token': $('meta[name="csrf-token"]').attr('content'),
                },
            },
            dom : 'tpi',
            columns: [
                { data: 'nation_cd', name: 'nation_cd', visible:true },
                { data: 'nation_nm', name: 'nation_nm' },
				{ data: 'capital', name: 'capital' },
				{ data: 'kode_telepon', name: 'kode_telepon' },
				{ data: 'tahun', name: 'tahun' }
            ],
        });

        $(document).on('keyup', '#search_param',function(){ 
            tabelData.column('#nation_nm_table').search($(this).val()).draw();
			//tabelData.search($(this).val()).draw();
        });

        $('#reload-table').click(function(){
			$('input[name=search_param]').val('').trigger('keyup');

			tabelData.ajax.reload();
		});

        //--Tambah data
        $('#tambah').click(function()   {
			saveMethod  = 'tambah';

            $('input[name=nation_nm]').focus();
            $('#frame-tabel').hide();      
            $('#frame-form').show(); 
            $('.card-title').text('Tambah Data');       
        });

        //--Cek kode
        $('input[name=nation_cd]').focusout(function(){
			var id          = $(this).val();
            var urlUpdate   = baseUrl + '/' + id;
            
            if ($(this).val() && saveMethod === 'tambah') {
                $.getJSON( urlUpdate, function(data){
                    if (data['status'] == 'ok') {
                        swal({
                            title: "Peringatan !",
                            text: "Kode sudah digunakan",
                            type: "warning",
                            showCancelButton: false,
                            showConfirmButton: false,
                            timer: 1000
                        }).then(() => {
                            $('input[name=nation_cd]').val('');
                            $('input[name=nation_cd]').focus();
                            swal.close();
                        });
                    }
                });
            }
        });

        //--Reset form
        $('#reset').click(function()   {
            saveMethod  = '';

            tabelData.ajax.reload();
            $('#frame-tabel').show();      
            $('#frame-form').hide(); 
            $('.card-title').text('Data Negara');
			$('input[name=nation_cd]').val(rowData['nation_cd']).prop('readonly',false);
        });
        
        //--Submit form
        $('#form-data').submit(function(e){
            if (e.isDefaultPrevented()) {
			//--Handle the invalid form
            } else {
				e.preventDefault();

                var record  = $('#form-data').serialize();
                if(saveMethod == 'tambah'){
					var url     = baseUrl;
                    var method  = 'POST';
                }else{
					var url     = baseUrl + '/' + dataCd;
                    var method  = 'PUT';
                }
					
				/* var record=$('#form-data').serialize();
                var url     = '{{ url("/data/Negara/") }}';
                var method  = 'POST'; */

                swal({
                    title               : 'Simpan data ?',
                    type                : "question",
                    showCancelButton    : true,
                    confirmButtonColor  : "#00a65a",
                    confirmButtonText   : "OK",
                    cancelButtonText    : "NO",
                    allowOutsideClick : false,
                }).then(function(result){
					if(result.value){
                        swal({allowOutsideClick : false,title: "Proses simpan",onOpen: () => {swal.showLoading();}});

                        $.ajax({
                            'type': method,
                            'url' : url,
                            'data': record,
                            'dataType': 'JSON',
                            'success': function(response){
                                if(response["status"] == 'ok') {
									swal({
                                        title: "Proses berhasil",
                                        type: "success",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000
                                    }).then(() => {
                                        $('#reset').click();
                                        swal.close();
                                    });
                                }else{
                                    swal({title: "Proses gagal",type: "error",showCancelButton: false,showConfirmButton: false,timer: 1000});
                                }
                            },
                            'error': function(response){ 
                                var errorText = '';
                                $.each(response.responseJSON.errors, function(key, value) {
                                    errorText += value+'<br>'
                                });

                                swal({
                                    title             : response.status+':'+response.responseJSON.message,
                                    type              : "error",
                                    html              : errorText, 
                                    showCancelButton  : false,
                                    confirmButtonColor: "#DD6B55",
                                    confirmButtonText : "OK",
                                    cancelButtonText  : "NO",
                                }).then(function(result){
                                    if(result.value){   	
                                        reset('ubah');
                                    }
                                });  
                            }
                        });
                    }
                });
            }
        });

        //--Ubah data
        $(document).on('click', '#ubah',function(){ 
            if (dataCd == null) {
                swal({
                    title: "Pilih data !",
                    type: "warning",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000
                });
            }else{
                saveMethod  = 'ubah';
				
				$('input[name=nation_cd]').val(rowData['nation_cd']).prop('readonly',true);
				$('input[name=nation_nm]').val(rowData['nation_nm']);
				$('input[name=capital]').val(rowData['capital']);
				$('select[name=tahun]').val(rowData['tahun']).trigger('change');

                $('#frame-tabel').hide();      
                $('#frame-form').show(); 
            }
        });

        //--Hapus data
        $(document).on('click', '#hapus',function(){
			if (dataCd == null) {
                swal({
                    title: "Pilih Data!",
                    type: "warning",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 1000
                });
            }else{
				var dataNm = rowData['nation_nm'];
				
                swal({
                    title             : "Hapus data?",
                    type              : "question",
                    showCancelButton  : true,
                    confirmButtonColor: "#00a65a",
                    confirmButtonText : "OK",
                    cancelButtonText  : "NO",
                    allowOutsideClick : false,
                }).then(function(result){
                    if(result.value){
                        swal({allowOutsideClick : false, title: "Proses hapus",onOpen: () => {swal.showLoading();}});
                        
                        $.ajax({
                            //url : baseUrl + '/' + dataCd,
                            //type: "DELETE",
							url : baseUrl + '/hapus/' + dataNm,
                            type: "POST",
                            dataType: "JSON",
                            data: {
                                '_token': $('input[name=_token]').val(),
                            },
                            success: function(response)
                            {
                                if (response.status == 'ok') {
                                    swal({
                                        title: "Proses berhasil",
                                        type: "success",
                                        showCancelButton: false,
                                        showConfirmButton: false,
                                        timer: 1000
                                    }).then(() => {
                                        reset('')
                                        swal.close();
                                    });
                                }else{
                                    swal({title: "Proses gagal",type: "error",showCancelButton: false,showConfirmButton: false,timer: 1000});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown)
                            {
                                swal({title: "Terjadi kesalahan sistem !", text:"Silakan hubungi Administrator", type: "error",showCancelButton: false,showConfirmButton: false,timer: 1000});
                            }
                        })
                    }else {
                        swal.close();
                    }
                });
            } 
        });
    });

    function reset(type) {
        saveMethod  = '';
        dataCd = null;
        rowData = null;
        tabelData.ajax.reload();
        
        $('#frame-tabel').show();      
        $('#frame-form').hide(); 
        $('input[name=nation_cd]').val('').prop('readonly',false);
        $('input[name=nation_nm]').val('');
        $('.card-title').text('Data Negara');       
    }
</script>
@endpush