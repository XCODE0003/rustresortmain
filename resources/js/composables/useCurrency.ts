import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

export function useCurrency() {
    const page = usePage();

    // Читаем локаль из page.props — она реактивна при любом Inertia-переходе
    const isEn = computed(() => (page.props as any).locale === 'en');

    const currencySymbol = computed(() => (isEn.value ? '$' : '₽'));

    /**
     * Выбирает и форматирует цену в зависимости от локали.
     * Если локаль — English и есть price_usd > 0, показывает USD.
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
