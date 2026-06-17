import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import '../css/app.css';
import i18n from './i18n';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Yandex.Metrika counter id (see resources/views/app.blade.php).
const YANDEX_METRIKA_ID = 109891335;

// Report client-side Inertia navigations as virtual pageviews. The counter's
// `init` already tracks the initial server-rendered load, and the `success`
// event never fires for that load, so there is no double-counting.
router.on('success', (event) => {
    const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
    ym?.(YANDEX_METRIKA_ID, 'hit', event.detail.page.url);
});

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

