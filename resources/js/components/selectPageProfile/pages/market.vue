<template>
    <ContentPageProfile :is_empty="purchases.length === 0">
        <div v-if="purchases.length > 0" class="flex flex-wrap gap-3.5 gap-y-14 p-5 pt-9">
            <div
                v-for="purchase in purchases"
                :key="purchase.id"
                class="group block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray"
            >
                <img
                    :src="getItemImage(purchase)"
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-auto max-w-[100px] object-contain -translate-x-1/2 -translate-y-1/2"
                    :alt="getItemName(purchase)"
                />
                <div class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-Orange/20"></div>

                <div class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-xl border border-StrokeGray bg-[#0E1012] px-5 py-3.5 text-xs font-bold text-nowrap text-white uppercase">
                    {{ getItemName(purchase) }}
                    <div
                        v-if="purchase.server"
                        class="absolute -bottom-3.5 left-1/2 -translate-x-1/2 rounded-md border border-StrokeGray bg-[#0E1012] px-2 py-1 text-[10px]/[19px] text-Orange"
                    >
                        {{ purchase.server.name }}
                    </div>
                </div>

                <div class="absolute bottom-[-22px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 text-nowrap">
                    <div class="rounded-lg bg-PaleOrange px-4 py-2.5 text-sm font-bold text-Orange">
                        x{{ purchase.count }}
                    </div>
                    <div class="rounded-lg bg-PaleGreen px-4 py-2.5 text-sm font-bold text-Green">
                        {{ formatDate(purchase.created_at) }}
                    </div>
                </div>

                <!-- Кнопка возврата (появляется при наведении) -->
                <button
                    @click="refund(purchase)"
                    class="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-bold text-white uppercase"
                >
                    {{ $t('profile.refund') }}
                </button>
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
import { useShopLocale } from '@/composables/useShopLocale';
import ContentPageProfile from '../content.vue';

const { itemName, t } = useShopLocale();

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
    shop_item_id: number;
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

<style></style>
