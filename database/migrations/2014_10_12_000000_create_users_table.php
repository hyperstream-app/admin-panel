<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string('shop_name');
      $table->longText('address');
      $table->string('phone');
      $table->string('email')->unique();
      $table->string('password');

      $table->string('owner_name');
      // $table->boolean("email_verified")->default(false);
      $table->string('store_image')->default('default.jpg');
      $table->string('shop_id');

      $table->rememberToken();
      $table->timestamps();
      // Social authentication 
      // $table->string('provider')->default('local');
      // $table->string('social_id')->nullable();
      // $table->string('social_username')->nullable();
      // $table->string('social_avatar')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('users');
  }
}
