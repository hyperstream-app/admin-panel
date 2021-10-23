<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // User::factory()->times(20)->create();
    (new \App\Models\User([
      'shop_name' => 'Haldiram',
      'address' => 'Noida',
      'phone' => "9090952909",
      'email' => 'admin@dpsrkp.net',
      'password' => Hash::make('adminadmin'),

      'owner_name' => 'Admin Admin',

      'remember_token' => Str::random(10),
      'shop_id' => Str::random(23)
    ]))->save();
    (new \App\Models\User([
      'shop_name' => 'Walmart',
      'address' => 'Somdatt Towers, K-2, Noida Sector 18, Noida - 201301, Near Citi Bank',
      'phone' => "9090952909",
      'email' => 'unique@gmail.com',
      'password' => Hash::make('adminadmin'),

      'owner_name' => 'Mr Valli',
      'shop_id' => '9xSr8BhYOfgRATS3Y46B',

      'remember_token' => Str::random(10),
    ]))->save();
    (new \App\Models\User([
      'shop_name' => 'Evergreen Supermart',
      'address' => 'Shop No. 1, Plot No. 2, Golf Avenue, Noida Sector 75, Noida - 201304, Near Metro Station',
      'phone' => "9090952909",
      'email' => 'totla@gmail.com',
      'password' => Hash::make('adminadmin'),

      'owner_name' => 'Mr Valli',
      'shop_id' => 'N2GxEUHE1VvdYM2mQ4gf',

      'remember_token' => Str::random(10),
    ]))->save();
  }
}
