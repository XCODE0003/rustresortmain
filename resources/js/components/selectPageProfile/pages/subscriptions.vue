<template>
    <ContentPageProfile :is_empty="purchases.length === 0">
        <div v-if="purchases.length > 0" class="flex flex-wrap gap-3.5 gap-y-14 p-5 pt-9">
            <div
                v-for="purchase in purchases"
                :key="purchase.id"
                class="block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray"
            >
                <img
                    :src="getItemImage(purchase)"
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-auto max-w-[100px] object-contain -translate-x-1/2 -translate-y-1/2"
                    :alt="getItemName(purchase)"
                />
                <div
                    class="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-Orange/20"
                ></div>

                <div
                    class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-xl border border-StrokeGray bg-[#0E1012] px-5 py-3.5 text-xs font-bold text-nowrap text-white uppercase"
                >
                    {{ getItemName(purchase) }}
                    <div
                        v-if="purchase.server"
                        class="absolute -bottom-3.5 left-1/2 -translate-x-1/2 rounded-md border border-StrokeGray bg-[#0E1012] px-2 py-1 text-[10px]/[19px] text-Orange"
                    >
                        {{ purchase.server.name }}
                    </div>
                </div>
                <div
                    class="absolute bottom-[-22px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 text-nowrap"
                >
                    <div class="rounded-lg bg-PaleOrange px-4 py-2.5 text-sm font-bold text-Orange">
                        x{{ purchase.count }}
                    </div>
                    <div class="rounded-lg bg-PaleGreen px-4 py-2.5 text-sm font-bold text-Green">
                        {{ formatDate(purchase.created_at) }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-4 p-10 text-center">
            <svg class="size-16 text-TextGray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <div>
                <h3 class="text-lg font-bold text-white">Нет купленных товаров</h3>
                <p class="mt-2 text-sm text-TextGray">Посетите магазин, чтобы приобрести товары</p>
            </div>
        </div>
    </ContentPageProfile>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';
import ContentPageProfile from '../content.vue';

interface ShopItem {
    id: number;
    name_ru: string;
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
    shop_item?: ShopItem;
    server?: Server;
}

const page = usePage();
const user = computed(() => (page.props as any).user);
const purchases = computed(() => user.value?.shop_purchases || []);

const getItemImage = (purchase: Purchase): string => {
    if (purchase.shop_item?.image) {
        return '/' + purchase.shop_item.image;
    }
    return '/images/subscriptions/elete-pack.png';
};

const getItemName = (purchase: Purchase): string => {
    return purchase.shop_item?.name_ru || 'Товар';
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
};
</script>

<style></style>
