<template>
    <ShopLayout>
        <div
            class="relative flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
            <div
                class="flex w-full flex-col items-center gap-9 md:gap-16 lg:gap-20"
            >
                <div class="relative flex w-full flex-col gap-6">
                    <div
                        class="flex w-full items-center justify-center gap-1.5"
                    >
                        <Link
                            href="/shop"
                            class="cat-back-btn button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white"
                        >
                            {{ $t('shop.back_to_categories') }}
                        </Link>
                    </div>
                </div>
                <div
                    class="flex flex-wrap justify-center gap-1 gap-y-12 md:gap-y-14 lg:gap-2.5"
                >
                    <div class="shop-card-item" v-for="item in category.items" :key="item.id">
                        <ShopItemCard
                            :item="item"
                            @buy="handleBuyItem"
                        />
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ShopItemCard from '@/components/ShopItemCard.vue';
import ShopLayout from '@/layouts/shop.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

defineProps<{
    category: {
        items: Array<{
            id: number;
            name_ru: string;
            name_en?: string | null;
            description_ru?: string;
            description_en?: string | null;
            price: number;
            image?: string;
            variations?: any[];
            amount?: number;
        }>;
    };
}>();

const { itemName, itemDescription } = useShopLocale();

onMounted(async () => {
    await nextTick();
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.cat-back-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
    const cards = document.querySelectorAll('.shop-card-item');
    if (cards.length) {
        tl.fromTo(cards, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.04 }, '-=0.2');
    }
});
const modalStore = useDescriptionModalStore();

const handleBuyItem = (payload: any): void => {
    const item = payload?.item ?? payload;
    const selectedQuantity = payload?.quantity ?? item?.amount ?? 1;

    modalStore.setPendingAmount(selectedQuantity);

    const variations =
        item?.variations && item.variations.length > 0
            ? item.variations.map((v: any) => ({
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
        imageSrc: item.image ? `/${item.image}` : '/images/subscriptions/elete-pack.png',
        variations,
        defaultAmount: selectedQuantity,
    });
};
</script>

<style></style>
