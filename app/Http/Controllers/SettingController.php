<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    private $languages;

    public function __construct()
    {
        $this->languages = Language::where('status', 'active')->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $setting_type = $_GET['setting'] ?? null;
        $languages = $this->languages;
        if ($setting_type === 'contact_details') {

            $settings = [];
            foreach ($languages as $lang) {
                $settings[$lang->code] = Setting::get('contact_details', $lang->code, []);
            }

            return view('admin.settings.contact', compact('setting_type', 'settings', 'languages'));
        } elseif ($setting_type === 'widget') {
            $settings = [];
            foreach ($languages as $lang) {
                $settings[$lang->code] = Setting::get('widget', $lang->code, []);
            }

            return view('admin.settings.widget', compact('setting_type', 'settings', 'languages'));
        }

        return view('admin.settings.index', compact('setting_type', 'languages'));

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
        $query = $request->query('setting');
        if ($query === 'contact_details') {
            foreach ($this->languages as $lang) {
                $data = [
                    'whatsapp' => $request->input("contact.{$lang->code}.whatsapp"),
                    'phones' => $request->input("contact.{$lang->code}.phones", []),
                    'email' => $request->input("contact.{$lang->code}.email"),
                    'address' => $request->input("contact.{$lang->code}.address"),
                    'map_link' => $request->input("contact.{$lang->code}.map_link"),
                    'google_tag_id' => $request->input("contact.{$lang->code}.google_tag_id"),
                ];

                Setting::set('contact_details', $data, $lang->code);
            }

            return redirect()->back()->with('success', 'Contact details updated successfully.');
        } elseif ($query === 'widget') {
          
            $widgets = $request->input('widgets', []);
            foreach ($widgets as $lang => &$widgetList) {
                    $existingWidgets = Setting::get('widget', $lang, []);
                foreach ($widgetList as $index => &$widget) {
                    $existingWidget = $existingWidgets[$index] ?? [];
                    $widget = array_merge($existingWidget, $widget);
                    $fileKey = "widgets.{$lang}.{$index}.image";
                    if ($request->hasFile($fileKey)) {
                        $file = $request->file($fileKey);
                        $widget['image'] = 'storage/'.$file->store("widgets/{$lang}", 'public');
                    }
                }
                $currentWidget = $widgets[$lang];
                Setting::set('widget', $currentWidget, $lang);
            }

            return back()->with('success', 'Widgets saved successfully!');
        }

        return redirect()->back()->with('error', 'Invalid setting type.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
