<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private function confirmPassword($pass, $confirm)
    {
        if (!$pass === $confirm) throw new Exception('As senhas não correspondem');
    }

    public function register(RegisterRequest $request)
    {
        try {
            $payload = $request->validated();

            $this->confirmPassword($payload['password'], $payload['confirmPassword']);
            if(User::checkUnique('email', $payload['email'])) throw new Exception('E-mail já cadastrado');

            $newUser = User::create([
                'name' => $payload['name'],
                'email' => $payload['email'],
                'password' => bcrypt($payload['password']),
            ]);

            $newUser->generateConfirmToken();
        } catch (Exception $e) {
            return redirect()->back()->withErrors(['msg' => $e->getMessage()]);
        }

        return redirect()->route('auth.confirm')->with('newUser', $newUser);
    }

    public function login(LoginRequest $request)
    {
        $payload = $request->validated();

        try {
            if (Auth::attempt($payload)) {
                if($request->user()->blocked) throw new Exception('Usuário bloqueado');

                $request->session()->regenerate();

                return redirect()->intended('dashboard');
            } else {
                throw new Exception('Usuário ou senha incorretos');
            }
        } catch (Exception $e) {
            session()->flush();
            return redirect()->back()->withErrors(['msg' => $e->getMessage()]);
        }
    }

    public function logout() 
    {
        Auth::logout();
    }
}
