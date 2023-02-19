<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class ConfirmRegisterController extends Controller
{
    private function checkNewUser() {
        if(empty(session()->get('newUser'))) return false;
        return true;
    }

    // Esse cara só existe porque eu não vou disparar o Email
    private function getTokenURL()
    {   
        $userId = session()->get('newUser')->id;
        $token = \Illuminate\Support\Facades\DB::table('users_confirm_tokens')
                        ->where('user_id', $userId)
                        ->first();

        return route('auth.confirm.token', ['user' => $userId, 'token' => $token->token]);
    }

    public function index()
    {
        $newUser = $this->checkNewUser();

        if(!$newUser) return redirect()->route('auth.login');

        return Inertia::render('ConfirmRegister', [
            'status' => 'confirm',
            'title' => 'Cadastro efetuado',
            'text' => 'Confirme seu registro através do link enviado ao seu E-mail para poder acessar o sistema',
            'redirect' => $this->getTokenURL()
        ]);

    }

    public function confirm(User $user, $token)
    {
        if($user->confirmRegister($token)) {
            return Inertia::render('ConfirmRegister', [
                'status' => 'confirmed',
                'title' => 'Cadastro confirmado',
                'text' => 'Parabéns! Agora você já pode acessar o sistema',
                'redirect' => route('auth.login')
            ]);
        } else {
            return redirect()->route('auth.login');
        }
    }
}
