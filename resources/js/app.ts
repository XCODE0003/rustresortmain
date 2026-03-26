import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import '../css/app.css';
import i18n from './i18n';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const locale = (props.initialPage.props as any).locale || 'ru';
        i18n.global.locale.value = locale;

        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n);

        // Make i18n globally accessible for language switcher
        (window as any).$i18n = i18n;

        app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

