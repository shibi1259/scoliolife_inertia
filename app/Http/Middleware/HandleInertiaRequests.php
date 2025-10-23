<?php

namespace App\Http\Middleware;

use App\Models\Language;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App;
use NguyenHuy\Menu\Models\Menus;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $languages = Language::where('status', 'active')->get();
        $language = app()->getLocale();
        $header = Menus::with(['items.children'])->where('menu_type', 'header')->where('lang', $language)->orderBy('id', 'ASC')->get();
        $footer = Menus::with(['items.children'])->where('menu_type', 'footer')->where('lang', $language)->orderBy('id', 'ASC')->get();
        $contactDetails = Setting::get('contact_details', $language, []);
        $widgets = Setting::get('widget', $language, [], ['type' => ['contact_info', 'telephone', 'opening_hour', 'whatsapp']]);
        $disclaimer = Setting::get('widget', $language, [], ['type' => ['disclaimer']]);
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'locale' => App::getLocale(),
            'header' => $header,
            'footer' => $footer,
            'contactDetails' => $contactDetails,
            'widgets' => $widgets,
            'disclaimer' => $disclaimer,
            'languages' => $languages->map(function ($lang) {
                return [
                    'id' => $lang->id,
                    'name' => $lang->name,
                    'code' => $lang->code,
                    'icon' => asset($lang->icon),
                ];
            }),
        ];
    }
}
