import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useCurrency() {
    const { locale } = useI18n();

    const isEn = computed(() => locale.value === 'en');

    const currencySymbol = computed(() => (isEn.value ? '$' : '₽'));

    const formatCurrency = (amount: number | string): string => {
        const num = Number(amount);
        return isEn.value ? `$${num}` : `${num} ₽`;
    };

    return { currencySymbol, formatCurrency, isEn };
}
