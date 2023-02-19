<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateConfirmToken()
    {
        if (DB::table('users_confirm_tokens')->where('user_id', $this->user_id)->exists()) return false;

        DB::table('users_confirm_tokens')
            ->insert([
                'user_id' => $this->id,
                'token' => Str::random(64),
                'created_at' => Carbon::now()->toDateTimeString(),
                'updated_at' => Carbon::now()->toDateTimeString(),
            ]);
    }

    public function confirmRegister($token)
    {
        if(!empty($this->email_verified_at)) return false;

        $userToken = DB::table('users_confirm_tokens')
            ->where('token', $token)
            ->where('user_id', $this->id)
            ->first();

        if(empty($userToken)) return false;

        $this->email_verified_at = Carbon::now()->toDateTimeString();
        $this->save();

        DB::table('users_confirm_tokens')
            ->where('id', $userToken->id)
            ->delete();

        return true;
    }

    public static function getUsersStats()
    {
        $users = static::withTrashed()->count();
        $blockedUsers = static::whereBlocked(true)->count();
        $deletedUsers = static::withTrashed()->where('deleted_at', '<>' , NULL)->count();

        return compact('users', 'blockedUsers', 'deletedUsers');
    }

    public static function checkUnique($column, $value)
    {
        return static::where($column, $value)->exists();
    }
}
