import '../css/app.css';
import './bootstrap';
import '@smastrom/react-rating/style.css'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { ToastContainer } from 'react-toastify';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el,
                <LaravelReactI18nProvider
                    files={import.meta.glob('/lang/*.json')}
                >
                    <ToastContainer />
                    <App {...props} />

                </LaravelReactI18nProvider>
            );
            return;
        }

        createRoot(el).render(  <LaravelReactI18nProvider files={import.meta.glob('/lang/*.json')}> <ToastContainer /> <App {...props} /> </LaravelReactI18nProvider> );
    },
    progress: {
        color: '#4B5563',
    },
});
