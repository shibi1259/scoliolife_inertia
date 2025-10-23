<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
     protected $fillable = ['key', 'value', 'lang'];

    protected $casts = [
        'value' => 'array',
    ];

    // Get setting for a specific language (default to app locale)
    // public static function get($key, $lang = null, $default = null)
    // {
    //     $lang ??= app()->getLocale();
    //     $setting = self::where('key', $key)->where('lang', $lang)->first();
    //     return $setting ? $setting->value : $default;
    // }
    public static function get($key, $lang = null, $default = null, $where = null)
    {
        $lang ??= app()->getLocale();

        $setting = self::where('key', $key)->where('lang', $lang)->first();

        if (!$setting) {
            return $default;
        }

        $value = $setting->value; // already cast to array

        // If filter provided
        if (is_array($where) && !empty($where)) {
            $value = collect($value)->filter(function ($item) use ($where) {
                foreach ($where as $k => $v) {
                    $values = is_array($v) ? $v : [$v];
                    if (!in_array($item[$k] ?? null, $values)) {
                        return false;
                    }
                }
                return true;
            })->values()->all();
        }

        return $value ?: $default;
    }

    // Set/update setting for a specific language
    public static function set($key, $value, $lang = null)
    {
        $lang ??= app()->getLocale();
        return self::updateOrCreate(
            ['key' => $key, 'lang' => $lang],
            ['value' => $value]
        );
    }

    public static function del($key, $lang = null)
    {
        $query = self::where('key', $key);
        if ($lang) {
            $query->where('lang', $lang);
        }
        
        return $query->delete();
    }
}
