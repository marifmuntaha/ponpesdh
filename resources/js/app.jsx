import React from 'react';
import ReactDOM from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import '../css/dashlite.scss'
import ThemeProvider from "./layouts/provider/Theme";

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = ReactDOM.createRoot(document.getElementById('app'), el);
        return root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );
    },
}).then();

InertiaProgress.init();
