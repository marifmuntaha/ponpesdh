<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('pages/auth/login');
    }

    public function store(LoginRequest $request)
    {
        try {
            return Auth::attempt($request->only(['email', 'password']))
                ? $request->session()->regenerate() && redirect('/admin/dashboard')
                : throw new Exception('Nama Pengguna atau Kata Sandi salah.');
        } catch (Exception $exception){
            return back()->withErrors($exception->getMessage());
        }
    }

    public function destroy()
    {
        Auth::logout();
        return redirect('/masuk');
    }
}
