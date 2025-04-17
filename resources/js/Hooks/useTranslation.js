import { usePage } from '@inertiajs/react';

export default function useTranslation() {
  const { translations } = usePage().props;

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, k)) {
        value = value[k];
      } else {
        return key; // fallback if key doesn't exist
      }
    }

    return value;
  };

  return { t };
}
