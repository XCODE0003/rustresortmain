import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

type TitleFields = { title_ru?: string | null; title_en?: string | null };
type NameFields = { name_ru?: string | null; name_en?: string | null };
type DescFields = { description_ru?: string | null; description_en?: string | null };

export function useShopLocale() {
    const { locale, t } = useI18n();

    const isEn = computed(() => locale.value === 'en');

    const categoryTitle = (entity: TitleFields | null | undefined): string => {
        if (!entity) {
            return '';
        }
        if (isEn.value && entity.title_en) {
            return entity.title_en;
        }

        return entity.title_ru ?? '';
    };

    const itemName = (entity: NameFields | null | undefined): string => {
        if (!entity) {
            return '';
        }
        if (isEn.value && entity.name_en) {
            return entity.name_en;
        }

        return entity.name_ru ?? '';
    };

    const itemDescription = (entity: DescFields | null | undefined, fallbackKey = 'shop.no_description'): string => {
        if (isEn.value && entity?.description_en) {
            return entity.description_en;
        }
        if (entity?.description_ru) {
            return entity.description_ru;
        }

        return t(fallbackKey);
    };

    return { locale, isEn, categoryTitle, itemName, itemDescription, t };
}
