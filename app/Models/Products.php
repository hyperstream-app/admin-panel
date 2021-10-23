<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
  use HasFactory;
  protected $fillable = [
    'product_id',
    'associated_store_id',
    'product_name',
    'product_image',
    'product_description',
    'product_price'
  ];
}
