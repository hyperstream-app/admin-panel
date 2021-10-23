<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('index');
})->name('home');

// ----- Authentication -----
Route::prefix('/auth')
  ->middleware(['guest'])
  ->name('auth.')
  ->group(function () {
    Route::get('/register', [AuthController::class, 'registerShow'])
      ->name('register');
    Route::get('/login', [AuthController::class, 'loginShow'])
      ->name('login');
    Route::post('/register', [AuthController::class, 'register'])
      ->name('handleRegister');
    Route::post('/login', [AuthController::class, 'login'])
      ->name('handleLogin');
  });
Route::get('/auth/logout', [AuthController::class, 'destroy'])
  ->middleware(['auth'])
  ->name('auth.logout');

// ----- Admin -----
Route::prefix('/admin')
  ->middleware(['auth'])
  ->name('admin.')
  ->group(function () {
    Route::get('/', function () {

      return Inertia::render('admin/index');
    })->name('index');

    Route::prefix('/payments')->name("payments.")->group(function () {
      Route::get("/", [PaymentsController::class, 'index'])->name('index');
    });
    Route::prefix('/user')->name("user.")->group(function () {
      Route::post("/update", [UserController::class, 'update'])->name('update');
    });
    Route::prefix('/items')->name("items.")->group(function () {
      Route::get("/", [ItemsController::class, 'index'])->name('index');
    });
  });
