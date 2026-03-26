<template>
    <ShopLayout>
        <div class="relative flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">

            <div class="flex w-full flex-col items-center gap-9 md:gap-16 lg:gap-20">
                <!-- Выбор сервера -->

                <div class="flex w-full flex-col gap-6">
                    <h2 class="text-white text-center text-4xl font-bold uppercase">
                        {{ $t('shop.title') }}
                    </h2>
                    <div class="flex w-full flex-wrap items-center justify-center gap-1.5">
                        <button v-for="server in servers" :key="server.id" @click="selectedServerId = server.id" :class="[
                            'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedServerId === server.id
                                ? '!text-Orange border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                : 'border-StrokeGray text-TextGray hover:text-white hover:border-white/40'
                        ]">
                            {{ server.name }}

                        </button>
                    </div>
                </div>

                <!-- Категории как теги -->
                <div v-if="selectedServerId" class="relative flex w-full flex-col gap-6">
                    <div class="flex w-full flex-wrap items-center justify-center gap-1.5">
                        <button @click="selectedCategoryId = null" :class="[
                            'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedCategoryId === null
                                ? '!text-Orange border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                : 'border-StrokeGray text-TextGray hover:text-white hover:border-white/40'
                        ]">
                            {{ $t('shop.all_items') }}
                        </button>
                        <button v-for="category in shopCategories" :key="category.id" @click="selectedCategoryId = category.id" :class="[
                            'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedCategoryId === category.id
                                ? '!text-Orange border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                : 'border-StrokeGray text-TextGray hover:text-white hover:border-white/40'
                        ]">
                            {{ categoryTitle(category) }}
                        </button>
                    </div>
                </div>

                <!-- Товары -->
                <div
                    v-if="selectedServerId"
                    class="flex flex-wrap justify-center gap-x-1 gap-y-16 md:gap-x-2 md:gap-y-20 lg:gap-x-2.5 lg:gap-y-24"
                >
                    <ShopItemCard v-for="item in filteredItems" :key="item.id" :item="item" @buy="handleBuyItem" />
                </div>

                <div v-if="selectedServerId && filteredItems.length === 0" class="text-center text-TextGray py-8">
                    <p class="text-lg">{{ $t('shop.no_items_server') }}</p>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import ShopItemCard from '@/components/ShopItemCard.vue';
import ShopLayout from '@/layouts/shop.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

const { itemName, itemDescription, categoryTitle } = useShopLocale();

const props = defineProps({
    servers: {
        type: Array,
        default: () => []
    },
    shopCategories: {
        type: Array,
        default: () => []
    },
    items: {
        type: Array,
        default: () => []
    },
});

const selectedServerId = ref(props.servers[0]?.id ?? null);
const selectedCategoryId = ref(null);
const modalStore = useDescriptionModalStore();

const normalizedItems = computed(() => {
    return props.items.map((item) => {
        let serverIds = [];
        if (item.servers) {
            const raw = item.servers;
            serverIds = Array.isArray(raw) ? raw : (typeof raw === 'string' ? (() => { try { return JSON.parse(raw); } catch { return []; } })() : []);
            serverIds = serverIds.map((id) => String(id));
        }
        return { ...item, serverIds };
    });
});

const filteredItems = computed(() => {
    let filtered = normalizedItems.value;

    if (selectedServerId.value !== null) {
        const targetId = String(selectedServerId.value);
        filtered = filtered.filter((item) => item.serverIds.includes(targetId));
    }

    if (selectedCategoryId.value !== null) {
        filtered = filtered.filter((item) => item.category_id === selectedCategoryId.value);
    }

    return filtered;
});

const handleBuyItem = (payload) => {
    const item = payload?.item ?? payload;
    const selectedQuantity = payload?.quantity ?? item?.amount ?? 1;

    modalStore.setPendingAmount(selectedQuantity);

    const variations = item?.variations && item.variations.length > 0
        ? item.variations.map(v => ({
            label: v.variation_name || v.name,
            value: v.variation_id || v.id,
            price: v.variation_price || v.price,
            variationId: v.variation_id || v.id,
        }))
        : undefined;

    modalStore.open({
        itemId: item.id,
        title: itemName(item),
        description: itemDescription(item),
        priceRub: item.price,
        imageSrc: item.image ? '/' + item.image : '/images/subscriptions/elete-pack.png',
        variations: variations,
        defaultAmount: selectedQuantity,
    });
};
</script>

