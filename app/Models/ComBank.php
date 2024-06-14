<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComBank extends Model{
    protected $table      = 'com_bank';
    protected $primaryKey = 'bank_cd'; 
    public $incrementing  = false;

    protected $fillable = [
        'bank_cd', 'bank_nm', 'note', 'created_id', 'updated_id'
    ];
}
