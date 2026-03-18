import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { createI18n } from 'vue-i18n';
import '../css/app.css';

import de from './lang/de.json';
import en from './lang/en.json';
import es from './lang/es.json';
import fr from './lang/fr.json';
import it from './lang/it.json';
import ru from './lang/ru.json';
import uk from './lang/uk.json';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
        de,
        fr,
        it,
        es,
        uk,
    },
});

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

