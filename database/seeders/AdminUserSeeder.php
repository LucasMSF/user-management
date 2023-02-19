<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (!User::checkUnique('email', 'admin@admin.com')) {
            $admin = new User;

            $admin->name = 'Administrador';
            $admin->email = 'admin@admin.com';
            $admin->password = bcrypt('admin');
            $admin->is_admin = true;
            $admin->email_verified_at = Carbon::now()->toDateTimeString();

            $admin->save();
        }
    }
}
