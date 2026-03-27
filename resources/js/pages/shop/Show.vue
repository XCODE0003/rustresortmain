<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <div class="grid w-full gap-6 lg:grid-cols-2">
                <div class="show-image-block block-black overflow-hidden rounded-xl border border-StrokeGray ">
                    <div class="aspect-square w-full overflow-hidden">
                        <img
                            :src="item.image || '/images/ak.png'"
                            :alt="displayName"
                            class="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div class="show-details-block flex flex-col gap-6">
                    <div class="block-black flex flex-col gap-4 rounded-xl border border-StrokeGray p-6 ">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-bold text-white">
                                {{ displayName }}
                            </h1>
                            <div v-if="item.discount" class="rounded-full bg-TextGreen px-3 py-1 text-sm font-bold text-TextBlack">
                                -{{ ((item.discount / item.price) * 100).toFixed(0) }}%
                            </div>
                        </div>

                        <p class="text-sm text-TextGray">
                            {{ displayDesc }}
                        </p>

                        <div class="flex items-center gap-4">
                            <div v-if="item.discount" class="text-xl text-TextGray line-through">
                                {{ item.price }} ₽
                            </div>
                            <div class="text-3xl font-bold text-Orange">
                                {{ finalPrice }} ₽
                            </div>
                        </div>

                        <button
                            type="button"
                            @click="openBuyModal"
                            class="w-full rounded-lg bg-Orange px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-Orange/80"
                        >
                            {{ $t('shop.buy') }}
                        </button>
                    </div>

                    <div class="block-black flex flex-col gap-4 rounded-xl border border-StrokeGray p-6 ">
                        <h3 class="text-lg font-bold text-white">{{ $t('shop.specifications') }}</h3>
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-sm">
                                <span class="text-TextGray">{{ $t('shop.category_label') }}</span>
                                <span class="text-white">{{ displayCategory }}</span>
                            </div>
                            <div v-if="item.type" class="flex justify-between text-sm">
                                <span class="text-TextGray">{{ $t('shop.type_label') }}</span>
                                <span class="text-white">{{ item.type === 'item' ? $t('shop.type_item') : $t('shop.type_set') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import ShopLayout from '@/layouts/shop.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

interface ShopItemShow {
    id: number;
    name_ru: string;
    name_en?: string | null;
    description_ru?: string | null;
    description_en?: string | null;
    price: number;
    discount?: number;
    image?: string;
    type?: string;
    category?: {
        title_ru?: string;
        title_en?: string | null;
    };
    variations?: Array<{
        variation_id?: number;
        variation_name?: string;
        id?: number;
        name?: string;
        variation_price?: number;
        price?: number;
    }>;
}

const props = defineProps<{
    item: ShopItemShow;
}>();

const { itemName, itemDescription, categoryTitle } = useShopLocale();
const modalStore = useDescriptionModalStore();

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.show-image-block', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45 });
    tl.fromTo('.show-details-block', { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45 }, '-=0.3');
});

const displayName = computed(() => itemName(props.item));
const displayDesc = computed(() => itemDescription(props.item));
const displayCategory = computed(() => categoryTitle(props.item.category ?? undefined));
const finalPrice = computed(() => props.item.price - (props.item.discount || 0));

const openBuyModal = (): void => {
    const item = props.item;
    const variations =
        item.variations && item.variations.length > 0
            ? item.variations.map((v) => ({
                label: v.variation_name || v.name || '',
                value: v.variation_id ?? v.id ?? 0,
                price: v.variation_price ?? v.price ?? item.price,
                variationId: v.variation_id ?? v.id ?? 0,
            }))
            : undefined;

    modalStore.open({
        itemId: item.id,
        title: itemName(item),
        description: itemDescription(item),
        priceRub: finalPrice.value,
        imageSrc: item.image ? `/${item.image}` : '/images/ak.png',
        variations,
        defaultAmount: 1,
    });
};
</script>
