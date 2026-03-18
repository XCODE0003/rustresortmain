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
                            class="button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white"
                        >
                            Назад к категориям
                        </Link>
                        <Link
                            href="/shop/basket"
                            class="button-black top-0 right-0 flex items-center gap-1 rounded-lg border border-StrokeGray p-2.5 text-sm font-bold uppercase duration-300 ease-in-out hover:opacity-80 md:absolute"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.34204 17.5265C9.00552 17.5265 9.54907 18.0819 9.54907 18.7677C9.54887 19.4452 9.0054 20.0001 8.34204 20.0001C7.67069 20.0001 7.1274 19.4452 7.1272 18.7677C7.1272 18.0819 7.67056 17.5265 8.34204 17.5265ZM17.3352 17.5265C17.9986 17.5266 18.5422 18.082 18.5422 18.7677C18.542 19.4451 17.9985 20.0001 17.3352 20.0001C16.6639 20.0001 16.1206 19.4452 16.1204 18.7677C16.1204 18.0819 16.6637 17.5265 17.3352 17.5265ZM4.70435 4.00698L6.6106 4.29995C6.88238 4.34975 7.08271 4.57803 7.10669 4.85561L7.25806 6.68374C7.28204 6.9458 7.49054 7.14174 7.74634 7.14174H18.5413C19.0289 7.14174 19.3485 7.31405 19.6682 7.6896C19.9879 8.06514 20.0439 8.60392 19.9719 9.09292L19.2131 14.4484C19.0692 15.4777 18.2058 16.2364 17.1907 16.2365H8.46899C7.40598 16.2363 6.52664 15.4038 6.43872 14.3263L5.70337 5.4269L4.49634 5.21499C4.17671 5.15783 3.95327 4.83928 4.00903 4.51284C4.06499 4.17893 4.3766 3.95718 4.70435 4.00698ZM13.6965 10.1623C13.361 10.1625 13.0979 10.4318 13.0979 10.7746C13.098 11.109 13.3611 11.3866 13.6965 11.3869H15.9114C16.247 11.3868 16.5109 11.1092 16.511 10.7746C16.511 10.4317 16.2471 10.1623 15.9114 10.1623H13.6965Z"
                                    fill="#636363"
                                />
                            </svg>
                            <span class="text-xs/[20px] font-bold text-Orange">
                                0 ₽
                            </span>
                            <div
                                class="flex size-4 items-center justify-center rounded-full bg-PaleGreen text-[9px]/[20px] font-bold text-Green"
                            >
                                0
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    class="flex flex-wrap justify-center gap-1 gap-y-12 md:gap-y-14 lg:gap-2.5"
                >
                    <ShopItemCard
                        v-for="item in category.items"
                        :key="item.id"
                        :item="item"
                        @buy="buyItem"
                        @add-to-cart="addToCart"
                    />
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';
import ShopItemCard from '@/components/ShopItemCard.vue';
import ShopLayout from '@/layouts/shop.vue';

defineProps({
    category: {
        type: Object,
        required: true
    },
});

const buyItem = (item) => {
    router.visit(`/shop/item/${item.id}`);
};

const addToCart = (item) => {
    router.post('/shop/cart', {
        item_id: item.id,
        count: 1,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            // Можно добавить уведомление
        },
    });
};
</script>

<style></style>
