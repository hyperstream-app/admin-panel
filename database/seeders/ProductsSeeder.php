<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    (new \App\Models\Products([
      'product_id' => "8904145912025",
      'associated_store_id' => 2,
      'product_name' => "Pediasure",
      "product_image" => "pediasure",
      'product_description' => "To maximize your child's growth potential, he needs a reliable growth supplem",
      'product_price' => "200"
    ]))->save();
  }
}
