<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\EditUserRequest;
use App\Models\User;
// use Illuminate\Http\Request;

class UsersController extends Controller
{

    // API
    public function stats()
    {
        return User::getUsersStats();
    }

    public function list()
    {
        return User::all('id', 'name', 'email', 'created_at', 'blocked');
    }

    public function edit(User $user, EditUserRequest $request)
    {
        $payload = $request->validated();

        $user->name = $payload['name'];
        $user->email = $payload['email'];
        $user->blocked = $payload['blocked'];

        if($payload['password']) $user->password = bcrypt($payload['password']);

        $user->save();

        return response(['status' => 'success']);
    
    }

    public function delete(User $user)
    {
        $user->delete();

        return response(['status' => 'success']);
    }
}
