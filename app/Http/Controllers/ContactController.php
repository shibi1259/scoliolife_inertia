<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Contact/Contact', [
            'title' => 'Contact Us',
            'description' => 'Get in touch with us for any inquiries or support.',
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email_address' => 'required|email|max:255',
            'phone_number' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'contact_enquiry' => 'required|string',
            'description' => 'required|string',
            'subscribe' => 'boolean',
            'files.*' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'form_type' => 'required|string',
        ]);

        $filePaths = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $userName = preg_replace('/[^A-Za-z0-9_\-]/', '_', $validated['name']);
                $path = $file->store("uploads/contact/{$userName}", 'public');
                $filePaths[] = $path;
            }
        }

        Contact::create([
            'name' => $validated['name'],
            'email' => $validated['email_address'],
            'phone' => $validated['phone_number'],
            'country' => $validated['country'],
            'enquiry_type' => $validated['contact_enquiry'],
            'language' => app()->getLocale(),
            'description' => $validated['description'],
            'subscribes_to_newsletter' => $validated['subscribe'],
            'image' => json_encode($filePaths),
            'type' => $validated['form_type'],
            'slug' => Str::slug($validated['name'] . '-' . time()),
        ]);

        return Inertia::render('Contact/Contact', [
            'title' => 'Contact Us',
            'description' => 'Get in touch with us for any inquiries or support.',
            'success' => 'Your message has been sent successfully!',
        ]);
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


    public function contact()
    {
        return Inertia::render('Contact/Contact', [
            'title' => 'Contact Us',
            'description' => 'Get in touch with us for any inquiries or support.',
        ]);
    }
}
