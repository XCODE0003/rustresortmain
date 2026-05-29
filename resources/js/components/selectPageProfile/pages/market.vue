<template>
    <ContentPageProfile :is_empty="purchases.length === 0">
        <div v-if="purchases.length > 0" class="grid grid-cols-2 gap-3 p-5 pt-6 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            <div
                v-for="purchase in purchases"
                :key="purchase.id"
                class="market-card block-black relative flex flex-col items-center gap-2 rounded-xl border border-StrokeGray p-3 transition-all duration-300 hover:border-Orange/40 hover:shadow-[0_0_18px_rgba(243,164,93,0.18)]"
            >
                <!-- Image with glow -->
                <div class="relative my-1 flex h-20 w-full items-center justify-center">
                    <div class="absolute h-14 w-14 rounded-full bg-Orange/25 blur-2xl"></div>
                    <img
                        :src="getItemImage(purchase)"
                        class="relative z-10 h-20 max-w-[90px] object-contain"
                        :alt="getItemName(purchase)"
                    />
                </div>

                <!-- Name -->
                <h3 class="line-clamp-2 min-h-[2lh] text-center text-[11px] leading-tight font-bold uppercase text-white">
                    {{ getItemName(purchase) }}
                </h3>

                <!-- Price + count row -->
                <div class="flex items-baseline gap-1.5">
                    <span class="text-sm font-bold text-Orange">{{ formatPrice(purchase) }} {{ currencySymbol }}</span>
                    <span class="text-[10px] font-bold text-TextGray">×{{ purchase.count }}</span>
                </div>

                <!-- Server + date meta -->
                <div class="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-[10px] font-medium uppercase text-TextGray">
                    <span v-if="purchase.server" class="text-Orange/85">{{ purchase.server.name }}</span>
                    <span v-if="purchase.server" class="size-1 shrink-0 rounded-full bg-StrokeGray"></span>
                    <span>{{ formatDate(purchase.created_at) }}</span>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <svg class="size-16 text-TextGray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <div>
                <h3 class="text-lg font-bold text-white">{{ $t('profile.no_purchases') }}</h3>
                <p class="mt-2 text-sm text-TextGray">{{ $t('profile.visit_shop') }}</p>
            </div>
        </div>
    </ContentPageProfile>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import { useCurrency } from '@/composables/useCurrency';
import ContentPageProfile from '../content.vue';

const { itemName, t } = useShopLocale();
const { locale } = useI18n();
const { currencySymbol } = useCurrency();

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    image?: string;
    price?: number;
    is_command?: boolean | number;
    wipe_block?: boolean | number;
}

interface Server {
    id: number;
    name: string;
}

interface Purchase {
    id: number;
    shop_item_id?: number;
    count: number;
    created_at: string;
    validity: string | null;
    shop_item?: ShopItem;
    server?: Server;
}

const page = usePage();
const user = computed(() => (page.props as any).user);

const toBool = (v: unknown): boolean => v === true || v === 1 || v === '1';

// Маркет = физические товары (которые выдаются один раз и могут сгорать на вайпе):
//   - НЕ является командной привилегией (!is_command), ИЛИ
//   - является командой, но привязан к вайпу (wipe_block — кит/набор/оружие,
//     которое исчезает на следующем вайпе, не подписка)
const purchases = computed(() =>
    (user.value?.shop_purchases || []).filter((p: Purchase) => {
        const isCommand = toBool(p.shop_item?.is_command);
        const wipeBlock = toBool(p.shop_item?.wipe_block);
        return !isCommand || wipeBlock;
    }),
);

const getItemImage = (purchase: Purchase): string => {
    if (purchase.shop_item?.image) {
        return '/' + purchase.shop_item.image;
    }
    return '/images/subscriptions/elete-pack.png';
};

const getItemName = (purchase: Purchase): string => {
    if (!purchase.shop_item) {
        return t('profile.item_fallback');
    }
    const name = itemName(purchase.shop_item);
    return name !== '' ? name : t('profile.item_fallback');
};

const formatPrice = (purchase: Purchase): string => {
    const price = Number(purchase.shop_item?.price ?? 0);
    return price.toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
};
</script>

<style scoped>
.market-card {
    background-image:
        linear-gradient(180deg, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
        linear-gradient(180deg, rgba(9, 11, 13, 0.6) 0%, rgba(9, 11, 13, 0.6) 100%);
}
</style>
