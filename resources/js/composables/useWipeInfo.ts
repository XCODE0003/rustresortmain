import { useI18n } from 'vue-i18n';

export function useWipeInfo(): { formatWipeInfo: (wipeDate: string) => string } {
    const { t } = useI18n();

    const formatWipeInfo = (wipeDate: string): string => {
        try {
            const date = new Date(wipeDate);
            const now = new Date();
            const diffMs = date.getTime() - now.getTime();
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            if (diffDays < 0) {
                return t('wipe.days_ago', { n: Math.abs(diffDays) });
            }
            if (diffDays === 0) {
                return t('wipe.today');
            }
            if (diffDays === 1) {
                return t('wipe.tomorrow');
            }

            return t('wipe.in_days', { n: diffDays });
        } catch {
            return t('wipe.weekly');
        }
    };

    return { formatWipeInfo };
}
