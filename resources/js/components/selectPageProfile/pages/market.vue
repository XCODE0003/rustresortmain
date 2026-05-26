<template>
    <ContentPageProfile :is_empty="purchases.length === 0">
        <div v-if="purchases.length > 0" class="flex flex-col gap-5 p-5 pt-6">
            <!-- Instructional banner: «/store» hint, as in the legacy inventory page -->
            <div class="flex items-start gap-3 rounded-xl border border-StrokeGray bg-Orange/[0.04] px-4 py-3 text-xs leading-relaxed text-TextGray">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    class="mt-0.5 size-4 shrink-0 text-Orange"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01" />
                </svg>
                <span>
                    {{ $t('profile.market_hint_pre') }}
                    <code class="rounded bg-Orange/15 px-1.5 py-0.5 font-mono text-[11px] font-bold text-Orange">/store</code>
                    {{ $t('profile.market_hint_post') }}
                </span>
            </div>

            <!-- Cards grid -->
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                <div
                    v-for="purchase in purchases"
                    :key="purchase.id"
                    class="market-card group block-black relative flex flex-col items-center gap-2 rounded-xl border border-StrokeGray p-3 transition-all duration-300 hover:border-Orange/40 hover:shadow-[0_0_18px_rgba(243,164,93,0.18)]"
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
                        <span class="text-sm font-bold text-Orange">{{ formatPrice(purchase) }} ₽</span>
                        <span class="text-[10px] font-bold text-TextGray">×{{ purchase.count }}</span>
                    </div>

                    <!-- Server + date meta -->
                    <div class="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-[10px] font-medium uppercase text-TextGray">
                        <span v-if="purchase.server" class="text-Orange/85">{{ purchase.server.name }}</span>
                        <span v-if="purchase.server" class="size-1 shrink-0 rounded-full bg-StrokeGray"></span>
                        <span>{{ formatDate(purchase.created_at) }}</span>
                    </div>

                    <!-- Refund button — always visible (was hover-only) -->
                    <button
                        type="button"
                        @click="refund(purchase)"
                        class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/[0.08] px-2 py-1.5 text-[10px] font-bold uppercase text-red-400 transition-all duration-200 hover:border-red-500/60 hover:bg-red-500/15 hover:text-red-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3">
                            <path d="M3 7v6h6" />
                            <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
                        </svg>
                        {{ $t('profile.refund') }}
                    </button>
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
import { computed, ref } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import ContentPageProfile from '../content.vue';

const { itemName, t } = useShopLocale();
const { locale } = useI18n();

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    image?: string;
    price?: number;
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
const deletedPurchases = ref<number[]>([]);

const purchases = computed(() =>
    (user.value?.shop_purchases || [])
        .filter((p: Purchase) => !p.validity)
        .filter((p: Purchase) => !deletedPurchases.value.includes(p.id))
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

const refund = (purchase: Purchase): void => {
    deletedPurchases.value.push(purchase.id);

    router.delete(`/profile/purchases/${purchase.id}`, {
        preserveScroll: true,
        preserveState: true,
        only: [],
    });
};
</script>

<style scoped>
.market-card {
    /* Subtle "stripe" texture for premium feel */
    background-image:
        linear-gradient(180deg, rgba(255, 255, 255, 0.015) 0%, transparent 50%),
        linear-gradient(180deg, rgba(9, 11, 13, 0.6) 0%, rgba(9, 11, 13, 0.6) 100%);
}
</style>
