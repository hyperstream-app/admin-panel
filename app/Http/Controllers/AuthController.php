<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AuthController extends Controller
{
  public function loginShow()
  {
    return Inertia::render('auth/login');
  }

  public function registerShow()
  {
    return Inertia::render('auth/register');
  }

  public function login(Request $request)
  {
    $r = $request->validate([
      'email' => 'required|email',
      'password' => 'required|min:8',
    ]);

    $u = User::where('email', $r['email'])->first();

    if (!$u) return Inertia::render(
      'auth/login',
      ['error' => 'An account with this email does not exist']
    );

    if (!Hash::check($r['password'], $u->password)) {
      return Inertia::render('auth/login', ['error' => 'Incorrect password']);
    }

    Auth::login($u, true);

    return redirect('/');
  }

  public function register(Request $request)
  {
    $r = $request->validate([
      'shop_name' => 'required|string',
      'address' => 'required|string',
      'phone' => 'required|string',
      'email' => 'required|email|unique:users,email',
      'password' => 'required|min:8',

      'owner_name' => 'required|string',

    ]);

    $u = new User($r);
    $u->shop_id = base64_encode($u->email);
    $u->hashPassword();
    $u->save();

    return Redirect::to('/auth/login');
  }

  public function destroy(Request $request)
  {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect('/');
  }
}
