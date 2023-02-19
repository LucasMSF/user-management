<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ConfirmRegisterController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', fn () => redirect()->route('dashboard'));

Route::middleware('guest')->group(function () {
    Route::inertia('/login', 'Login')->name('auth.login');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.post.login');

    Route::inertia('/register', 'Register')->name('auth.register');
    Route::post('/register', [AuthController::class, 'register'])->name('auth.post.register');

    Route::get('/confirmRegister', [ConfirmRegisterController::class, 'index'])->name('auth.confirm');
    Route::get('/confirmRegister/{user}/{token}', [ConfirmRegisterController::class, 'confirm'])->name('auth.confirm.token');
});


Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::middleware('can:admin')->prefix('users')->group(function() {
        Route::inertia('/', 'Users')->name('users');
    });
});
