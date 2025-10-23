<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::nonAdmin()->paginate(10);
        return view('admin.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $roles = Role::all();
        return view('admin.users.create', compact('roles'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'profile' => 'nullable|image|mimes:jpeg,png,jpg',
            'password' => 'required|string|min:8',
            'status' => 'required|in:active,inactive',
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->status = $request->status;

        $user->save();

        if ($request->hasFile('profile')) {
            $user->info()->create(['user_id' => $user->id, 'profile' => $request->file('profile')->store('profiles', 'public')]);
        }

        $roleNames = Role::whereIn('id', $request->roles)->pluck('name')->toArray();
        $user->syncRoles($roleNames);

        return redirect()->route('admin.users.index')->with('success', 'User created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        $roles = Role::all();
        return view('admin.users.edit', compact('user', 'roles'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);

        // Validate input
        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'role' => 'nullable|string|exists:roles,name',
            'status' => 'nullable|in:active,inactive',
        ]);

        // Update basic fields
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->status = $validated['status'];

        // Handle password (only if provided)
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        // Handle photo upload
        if ($request->hasFile('photo')) {
            // Delete old photo if exists
            if ($user->photo && Storage::disk('public')->exists($user->photo)) {
                Storage::disk('public')->delete($user->photo);
            }

            $path = $request->file('photo')->store('users', 'public');

            $user->info ? $user->info->update(['profile' => $path]) : $user->info()->create(['profile' => $path]);
        }

        $user->save();

        // Sync role
        $user->syncRoles([$validated['role']]);

        return redirect()->route('admin.users.index')->with('success', 'User updated successfully.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        
        return redirect()->route('admin.users.index')->with('success', 'User deleted successfully.');
    }
}
