<template>
    <ContentPageProfile :is_empty="purchases.length === 0">
        <div v-if="purchases.length > 0" class="flex flex-wrap gap-3.5 gap-y-14 p-5 pt-9">
            <div
                v-for="purchase in purchases"
                :key="purchase.id"
                class="block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray"
                :class="isExpired(purchase) ? 'opacity-50' : ''"
            >
                <img
                    :src="getItemImage(purchase)"
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-auto max-w-[100px] object-contain -translate-x-1/2 -translate-y-1/2"
                    :alt="getItemName(purchase)"
                />
                <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-Orange/20 blur-2xl"></div>

                <div class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-xl border border-StrokeGray bg-[#0E1012] px-5 py-3.5 text-xs font-bold text-nowrap text-white uppercase">
                    {{ getItemName(purchase) }}
                    <div
                        v-if="purchase.server"
                        class="absolute -bottom-3.5 left-1/2 -translate-x-1/2 rounded-md border border-StrokeGray bg-[#0E1012] px-2 py-1 text-[10px]/[19px] text-Orange"
                    >
                        {{ purchase.server.name }}
                    </div>
                </div>

                <div class="absolute bottom-[-22px] left-1/2 z-10 -translate-x-1/2 text-nowrap">
                    <div v-if="isExpired(purchase)" class="rounded-lg border border-StrokeGray bg-[#0E1012] px-4 py-2 text-xs font-bold text-TextGray">
                        {{ $t('profile.expired') }}
                    </div>
                    <div v-else class="rounded-lg bg-PaleOrange px-4 py-2 text-xs font-bold text-Orange text-center">
                        {{ getCountdown(purchase) }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <svg class="size-16 text-TextGray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
                <h3 class="text-lg font-bold text-white">{{ $t('profile.no_subscriptions') }}</h3>
                <p class="mt-2 text-sm text-TextGray">{{ $t('profile.no_subscriptions_hint') }}</p>
            </div>
        </div>
    </ContentPageProfile>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import ContentPageProfile from '../content.vue';

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    image?: string;
}

interface Server {
    id: number;
    name: string;
}

interface Purchase {
    id: number;
    count: number;
    created_at: string;
    validity: string | null;
    shop_item?: ShopItem;
    server?: Server;
}

const page = usePage();
const { locale, t } = useI18n();
const { itemName } = useShopLocale();
const user = computed(() => (page.props as any).user);
const purchases = computed(() =>
    (user.value?.shop_purchases || []).filter((p: Purchase) => !!p.validity)
);

// Tick every minute to update countdowns
const tick = ref(Date.now());
let timer: ReturnType<typeof setInterval>;
onMounted(() => { timer = setInterval(() => { tick.value = Date.now(); }, 60_000); });
onUnmounted(() => clearInterval(timer));

const isExpired = (purchase: Purchase): boolean => {
    if (!purchase.validity) return false;
    return new Date(purchase.validity).getTime() <= tick.value;
};

const getCountdown = (purchase: Purchase): string => {
    if (!purchase.validity) {
        return '';
    }
    const diff = new Date(purchase.validity).getTime() - tick.value;
    if (diff <= 0) {
        return t('profile.expired');
    }

    const totalMinutes = Math.floor(diff / 60_000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    const en = locale.value === 'en';

    if (days > 0) {
        return en ? `${days}d ${hours}h` : `${days}д ${hours}ч`;
    }
    if (hours > 0) {
        return en ? `${hours}h ${minutes}m` : `${hours}ч ${minutes}м`;
    }

    return en ? `${minutes}m` : `${minutes}м`;
};

const getItemImage = (purchase: Purchase): string => {
    if (purchase.shop_item?.image) return '/' + purchase.shop_item.image;
    return '/images/subscriptions/elete-pack.png';
};

const getItemName = (purchase: Purchase): string => {
    if (!purchase.shop_item) {
        return t('profile.subscription_fallback');
    }

    const name = itemName(purchase.shop_item);

    return name !== '' ? name : t('profile.subscription_fallback');
};
</script>

<style></style>
