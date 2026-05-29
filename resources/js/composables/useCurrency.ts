import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePage } from '@inertiajs/vue3';

export function useCurrency() {
    const { locale } = useI18n();
    const page = usePage();

    const currentLocale = computed(() => {
        const pageLocale = (page.props as any)?.locale;
        return String(pageLocale ?? locale.value ?? 'ru').toLowerCase();
    });

    const isEn = computed(() => currentLocale.value.startsWith('en'));

    const currencySymbol = computed(() => (isEn.value ? '$' : '₽'));

    /**
     * Выбирает и форматирует цену в зависимости от локали.
     * Если локаль — English и есть price_usd, показывает USD.
     * Иначе показывает рублёвую цену.
     */
    const displayPrice = (priceRub: number | string | null | undefined, priceUsd?: number | string | null): string => {
        if (isEn.value && priceUsd != null && Number(priceUsd) > 0) {
            return `$${Number(priceUsd).toFixed(2)}`;
        }
        return `${Number(priceRub ?? 0).toFixed(2)} ₽`;
    };

    return { currencySymbol, displayPrice, isEn };
}
