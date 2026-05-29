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

    // Курс USD→RUB из общих пропсов Inertia (HandleInertiaRequests). Фолбэк 90.
    const usdRate = computed(() => {
        const r = Number((page.props as any)?.usd_rate);
        return r > 0 ? r : 90;
    });

    /**
     * Форматирует рублёвую сумму (баланс или любую сумму в ₽) под локаль:
     * в EN делит на курс и показывает $, в RU — рубли.
     */
    const displayMoney = (rub: number | string | null | undefined): string => {
        const value = Number(rub ?? 0);
        if (isEn.value) {
            return `$${(value / usdRate.value).toFixed(2)}`;
        }
        return `${value.toFixed(2)} ₽`;
    };

    /**
     * Цена товара под локаль. В EN: если задан price_usd — показываем его,
     * иначе конвертируем рублёвую цену по курсу. В RU — рублёвая цена.
     */
    const displayPrice = (priceRub: number | string | null | undefined, priceUsd?: number | string | null): string => {
        if (isEn.value) {
            if (priceUsd != null && Number(priceUsd) > 0) {
                return `$${Number(priceUsd).toFixed(2)}`;
            }
            return `$${(Number(priceRub ?? 0) / usdRate.value).toFixed(2)}`;
        }
        return `${Number(priceRub ?? 0).toFixed(2)} ₽`;
    };

    return { currencySymbol, displayPrice, displayMoney, usdRate, isEn };
}
