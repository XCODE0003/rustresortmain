<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <div class="grid w-full gap-6 lg:grid-cols-2">
                <div class="block-black overflow-hidden rounded-xl border border-StrokeGray ">
                    <div class="aspect-square w-full overflow-hidden">
                        <img
                            :src="item.image || '/images/ak.png'"
                            :alt="item.name_ru"
                            class="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div class="flex flex-col gap-6">
                    <div class="block-black flex flex-col gap-4 rounded-xl border border-StrokeGray p-6 ">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-bold text-white">
                                {{ item.name_ru }}
                            </h1>
                            <div v-if="item.discount" class="rounded-full bg-TextGreen px-3 py-1 text-sm font-bold text-TextBlack">
                                -{{ ((item.discount / item.price) * 100).toFixed(0) }}%
                            </div>
                        </div>

                        <p class="text-sm text-TextGray">
                            {{ item.description_ru }}
                        </p>

                        <div class="flex items-center gap-4">
                            <div v-if="item.discount" class="text-xl text-TextGray line-through">
                                {{ item.price }} ₽
                            </div>
                            <div class="text-3xl font-bold text-Orange">
                                {{ item.price - (item.discount || 0) }} ₽
                            </div>
                        </div>

                        <button
                            @click="addToCart"
                            class="w-full rounded-lg bg-Orange px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-Orange/80"
                        >
                            Добавить в корзину
                        </button>
                    </div>

                    <div class="block-black flex flex-col gap-4 rounded-xl border border-StrokeGray p-6 ">
                        <h3 class="text-lg font-bold text-white">Характеристики</h3>
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-sm">
                                <span class="text-TextGray">Категория:</span>
                                <span class="text-white">{{ item.category?.title_ru }}</span>
                            </div>
                            <div v-if="item.type" class="flex justify-between text-sm">
                                <span class="text-TextGray">Тип:</span>
                                <span class="text-white">{{ item.type === 'item' ? 'Предмет' : 'Набор' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
import ShopLayout from '@/layouts/shop.vue';

const props = defineProps({
    item: Object,
});

const addToCart = () => {
    router.post('/shop/cart', {
        item_id: props.item.id,
        count: 1,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            alert('Товар добавлен в корзину');
        },
    });
};
</script>
