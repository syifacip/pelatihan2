@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-xl-12">
		<div class="card" style="zoom: 1;">
			<div class="card-header header-elements-inline">
				<h5 class="card-title">{{ $title }}</h5>
			</div>
			<!--<div class="card-header header-elements-inline">
				<h5 class="card-title">{{ $title }}</h5>
				<div class="header-elements">
					<div class="list-icons">
						<a class="list-icons-item" data-action="reload" id="reload-table"></a>
					</div>
				</div>
			</div>-->

			<div class="card-body">
				<div id="frame-tabel">
					<button type="button" class="btn btn-primary legitRipple" id="tambah"><i class="icon-add mr-2"></i> Tambah</button>
					<div class="table-responsive">
						<table class="table datatable-pagination" id="tabel-data">
							<thead>
								<tr>
									<th>Kode Autorisasi</th>
									<th>Nama Autorisasi</th>
									<th>Autorisasi [CRUD]</th>
									<th class="text-center" width="20%"></th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</div>
				<div id="frame-form">
					<form class="form-validate-jquery" id="form-data" action="#">
						@csrf
						<div class="row">
							<div class="col-md-6">
								<div class="form-group form-group-float">
									<label class="form-group-float-label is-visible">Kode Autorisasi <span class="text-danger">*</span></label>
									<input type="text" name="role_cd" class="form-control" required="" placeholder="" aria-invalid="false">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group form-group-float">
									<label class="form-group-float-label is-visible">Nama Autorisasi <span class="text-danger">*</span></label>
									<input type="text" name="role_nm" class="form-control" required="" placeholder="" aria-invalid="false">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group pt-2">
									<label class="font-weight-semibold">Hak Akses</label>
									<div class="form-check">
										<label class="form-check-label">
											<input type="checkbox" class="form-check-input-styled" data-fouc name="create" checked value="C">
											Create
										</label>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input type="checkbox" class="form-check-input-styled" data-fouc name="read" checked value="R">
											Read
										</label>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input type="checkbox" class="form-check-input-styled" data-fouc name="update" checked value="U">
											Update
										</label>
									</div>
									<div class="form-check">
										<label class="form-check-label">
											<input type="checkbox" class="form-check-input-styled" data-fouc name="delete" checked value="D">
											Delete
										</label>
									</div>
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
	</div>
</div>
@endsection
@push('scripts')
<script>
    var tabelData;
    var tabelMenu;
    var baseUrl = '{{ url("sistem/autorisasi/") }}';
	var dataCd;
	
    $(document).ready(function(){
        $('#frame-form').hide();  
        $('#bagian-detail').hide();  

        tabelData = $('#tabel-data').DataTable({
            //language	: {"url": "{{ asset('theme/plugin/datatables/indonesian.json')}}"},
            pagingType: "simple",
            language: {
                paginate: {'next': $('html').attr('dir') == 'rtl' ? 'Next &larr;' : 'Next &rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr; Prev' : '&larr; Prev'}
            },
            processing	: true, 
            serverSide	: true, 
            order		: [], 
            ajax		: {
				url: baseUrl + '/data',
                //url: "{{ url('sistem/autorisasi/data') }}",
                type: "POST",
                data: {
                    '_token': $('meta[name="csrf-token"]').attr('content'),
                },
            },
            dom : 'tpi',
            columns: [
                { data: 'role_cd', name: 'role_cd', visible:true },
                { data: 'role_nm', name: 'role_nm' },
                { data: 'rule_tp', name: 'rule_tp' },
                { data: 'actions', name: 'actions' }
            ],
        });

        //--Tambah data
        $('#tambah').click(function()   {
            saveMethod  = 'tambah';

            $('input[name=role_nm]').focus();
            $('#frame-tabel').hide();      
            $('#frame-form').show(); 
            $('.card-title').text('Tambah Data');       
        });
		
		//--Reset form
        $('#reset').click(function()   {
            saveMethod  = '';

            $('#frame-tabel').show();      
            $('#frame-form').hide(); 
            tabelData.ajax.reload();
            $('.card-title').text('Data Autorisasi');       
        });
        
        //--Submit form
        $('#form-data').submit(function(e){
            if (e.isDefaultPrevented()) {
            //--Handle the invalid form
            } else {
                e.preventDefault();
                var record=$('#form-data').serialize();
				var url     = baseUrl;
                //var url     = '{{ url("/sistem/autorisasi/") }}';
                var method  = 'POST';

                swal({
                    title               : 'Simpan data?',
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
		
        //--Detail data
        $(document).on('click', '#detail',function(){ 
            var rowData=tabelData.row($(this).parents('tr')).data();
            dataCd = rowData['role_cd'];
			
            window.location = '/sistem/autorisasi/detail/' + dataCd;
        });
		
        //--Hapus data
        $(document).on('click', '#hapus',function(){ 
            var rowData=tabelData.row($(this).parents('tr')).data();
            dataCd = rowData['role_cd'];
            
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
						url: baseUrl + '/' + dataCd,
                        //url : '{{ url("/sistem/autorisasi/") }}' + '/' + dataCd,
                        type: "DELETE",
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
                                    tabelData.ajax.reload();
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
        });
    });
</script>
@endpush