<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ensure the role exists
        $adminRole = Role::where('name', 'admin')->firstOrFail();

        // Create or get the admin user
        $admin = User::firstOrCreate(
            ['email' => 'admin@yopmail.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('password')
            ]
        );

        // Assign the role (idempotent, won’t duplicate)
        if (!$admin->hasRole($adminRole->name)) {
            $admin->assignRole($adminRole);
        }
    }
}
