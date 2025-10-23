<?php

namespace App\Http\Controllers;

use App\DataTables\LanguagesDataTable;
use App\Models\Language;
use Illuminate\Http\Request;
use Str;

class LanguageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(LanguagesDataTable $datatable)
    {
        $languages = Language::paginate(10);
        // return $datatable->render('admin.language.index');
        return view("admin.language.index", compact("languages", 'datatable'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("admin.language.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            "name" => "required",
            "code" => "required",
            "icon" => "required|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "status" => "required|in:active,inactive"
        ]);

        if ($request->file('icon')) {
            $iconName = time() . '_' . $request->file('icon')->getClientOriginalName();
            $request->file('icon')->move(public_path('uploads/language_icons'), $iconName);
            $icon = "uploads/language_icons/$iconName";
        } else {
            $icon = null;
        }

        Language::create([
            'name' => $request->name,
            'code' => $request->code,
            'slug' => Str::slug($request->name),
            'icon' => $icon,
            'status' => $request->status
        ]);

        return redirect()->route('admin.language.index');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
