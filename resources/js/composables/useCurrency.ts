import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useCurrency() {
    const { locale } = useI18n();

    const isEn = computed(() => locale.value === 'en');

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
