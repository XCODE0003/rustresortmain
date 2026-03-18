<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
                class="text-center text-[15px] font-bold text-white uppercase md:text-[17px] lg:text-[19px]"
            >
                Корзина
            </h2>

            <div v-if="cart.length === 0" class="block-black rounded-xl border border-StrokeGray p-8 text-center">
                <p class="text-TextGray">Ваша корзина пуста</p>
                <Link href="/shop" class="mt-4 inline-block rounded-lg bg-Orange px-6 py-3 font-bold text-white">
                    Перейти в магазин
                </Link>
            </div>

            <div v-else
                class="relative flex w-full items-start gap-2.5 max-md:flex-col-reverse md:gap-5 lg:gap-8"
            >
                <div
                    class="block-black relative flex w-full flex-col gap-2.5 rounded-xl border border-StrokeGray p-2.5  md:p-6 lg:p-8"
                >
                    <div
                        class="absolute top-1 left-0 flex w-full items-center px-5 max-lg:justify-end md:top-3 md:justify-between md:px-12 lg:top-5 lg:px-16"
                    >
                        <div class="flex w-[165px] justify-end gap-2.5 max-md:hidden lg:w-[190px]">
                            <div class="rounded-sm border border-StrokeGray bg-[#0A0C0E] px-2 py-1 text-xs font-medium text-TextGray">
                                Описание
                            </div>
                        </div>
                        <div class="flex items-center lg:px-0.5">
                            <div class="flex items-center gap-1 lg:gap-4">
                                <div class="rounded-sm border border-StrokeGray bg-[#0A0C0E] px-2 py-1 text-xs font-medium text-TextGray max-md:text-[9px]">
                                    количество
                                </div>
                                <div class="rounded-sm border border-StrokeGray bg-[#0A0C0E] px-2 py-1 text-xs font-medium text-TextGray max-md:text-[9px]">
                                    Удалить
                                </div>
                            </div>
                            <div class="relative flex items-center justify-center max-lg:pr-[20px] max-lg:pl-[13px] max-md:pr-[30px] max-md:pl-[9px] lg:w-[170px]">
                                <div class="rounded-sm border border-StrokeGray bg-[#0A0C0E] px-2 py-1 text-xs font-medium text-TextGray max-md:text-[9px]">
                                    Цена
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-for="item in cart"
                        :key="item.id"
                        class="block-black flex  w-full items-center justify-between rounded-xl border border-StrokeGray p-6 md:p-5 lg:p-8"
                    >
                        <div class="flex relative items-center md:gap-6 lg:gap-8">
                            <div class="relative size-[70px] max-md:absolute max-md:top-1/2 max-md:left-[10px] max-md:-translate-y-1/2 max-md:opacity-70 max-md:blur-[1px] lg:size-[85px]">
                                <img
                                    :src="'/'+item.item.image || '/images/ak.png'"
                                    :alt="item.item.name_ru"
                                    class="h-full w-full object-cover"
                                />
                                <img
                                    :src="'/'+item.item.image || '/images/ak.png'"
                                    :alt="item.item.name_ru"
                                    class="absolute top-0 left-0 h-full w-full object-cover "
                                />
                            </div>
                            <div class="relative z-10 flex flex-col gap-1.5">
                                <h3 class="text-sm font-bold text-nowrap text-white uppercase max-md:w-[102px] md:text-[17px] lg:text-[19px]">
                                    {{ item.item.name_ru }}
                                </h3>
                                <!-- <p v-html="item.item.description_ru" class="text-xs font-medium max-w-[200px] overflow-hidden text-ellipsis text-TextGray max-md:hidden">
                                </p> -->
                            </div>
                        </div>
                        <div class="flex items-center md:gap-1 lg:gap-2.5">
                            <div class="flex items-stretch gap-3.5 lg:gap-9">
                                <div class="button-black relative flex min-w-[55px] transition-all duration-300 ease-in-out flex-col items-center gap-1 rounded-md border border-StrokeGray px-1 py-2.5 text-xs font-bold text-white  md:min-w-[64px] md:py-3.5">
                                    <button
                                        v-if="hasNoVariations(item)"
                                        @click="updateCount(item, item.count - 1)"
                                        :disabled="item.count <= 1"
                                        class="button-black absolute top-1/2 left-[-8px] flex size-4 -translate-y-1/2 items-center justify-center rounded-full border border-StrokeGray duration-300 ease-in-out hover:scale-110 hover:border-white/70 hover:opacity-80 disabled:opacity-50"
                                    >
                                        <svg width="5" height="1" viewBox="0 0 5 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" width="1" height="5" rx="0.5" transform="rotate(90 5 0)" fill="currentColor" />
                                        </svg>
                                    </button>
                                    x{{ item.count }}
                                    <button
                                        v-if="hasNoVariations(item)"
                                        @click="updateCount(item, item.count + 1)"
                                        class="button-black absolute text- top-1/2 right-[-8px] flex size-4 -translate-y-1/2 items-center justify-center rounded-full border border-StrokeGray duration-300 ease-in-out hover:scale-110 hover:border-white/70 hover:opacity-80"
                                    >
                                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="2" width="1" height="5" rx="0.5" fill="currentColor" />
                                            <rect x="5" y="2" width="1" height="5" rx="0.5" transform="rotate(90 5 2)" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    @click="removeItem(item.id)"
                                    class="button-black flex size-10 transition-all duration-300 ease-in-out items-center justify-center rounded-md border border-StrokeGray  p-1 hover:border-TextRed hover:!text-BgRed md:size-12"
                                >
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="1.13135" height="10.1822" rx="0.565675" transform="matrix(0.706994 0.70722 -0.706994 0.70722 7.19824 0)" fill="currentColor" />
                                        <rect width="1.13135" height="10.1822" rx="0.565676" transform="matrix(-0.706994 0.70722 -0.706994 -0.70722 8.00024 7.20117)" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <div class="relative flex w-[70px] items-center justify-center md:w-[90px] lg:w-[170px]">
                                <h1 class="relative z-10 text-xs font-bold text-Orange md:text-sm">
                                    {{ (item.item.price - (item.item.discount || 0)) * item.count }} ₽
                                </h1>
                                <h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-Orange  md:text-sm">
                                    {{ (item.item.price - (item.item.discount || 0)) * item.count }} ₽
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-black top-0 flex flex-col gap-2.5 rounded-xl border border-StrokeGray p-2.5  md:sticky md:gap-3.5 md:p-3.5 lg:gap-5 lg:p-5">
                    <div class="flex items-center justify-between gap-2.5 md:min-w-[400px] lg:min-w-[420px]">
                        <h1 class="text-xs font-bold text-white uppercase md:pl-3.5 md:text-sm lg:pl-5">
                            Ваш заказ
                        </h1>
                        <Link
                            href="/payment/create"
                            class="rounded-lg bg-TextGreen px-6 py-3.5 font-bold text-TextBlack duration-300 ease-in-out hover:bg-TextGreen/80"
                        >
                            Оплатить
                        </Link>
                    </div>
                    <div class="flex items-center justify-between gap-2.5 rounded-xl border border-StrokeGray px-6 py-5 md:px-8 relative overflow-hidden">
                        <div class="flex items-center gap-6 md:gap-8">
                            <div class="flex flex-col items-start gap-1 text-left">
                                <h1 class="text-xs font-medium text-TextGray">Цена</h1>
                                <p class="text-sm font-bold text-Orange">{{ total + discount }} ₽</p>
                            </div>
                            <div class="flex flex-col items-start gap-1 text-left">
                                <h1 class="text-xs font-medium text-TextGray">Скидка</h1>
                                <p class="text-sm font-bold text-white">-{{ discount }} ₽</p>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1 text-left">
                            <h1 class="text-xs font-medium text-TextGray">Итоговая цена</h1>
                            <p class="text-sm font-bold text-TextGreen">{{ total }} ₽</p>
                        </div>
                        <div class="absolute top-0 left-0 w-0.5 bg-Orange h-full"></div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h1 class="text-xs font-medium text-TextGray px-2">Промокод</h1>
                        <div class="flex items-stretch gap-1">
                            <input
                                v-model="promoCode"
                                type="text"
                                class="w-full rounded-md border border-StrokeGray bg-transparent px-6 py-2 text-xs font-medium text-white outline-none placeholder:text-TextGray"
                                placeholder="Введите промокод"
                            />
                            <button
                                @click="applyPromoCode"
                                class="w-max rounded-lg bg-PaleOrange px-6 py-3.5 text-[12px]/[20px] font-bold text-Orange transition-all duration-300 hover:bg-Orange hover:text-PaleOrange"
                            >
                                Активировать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import ShopLayout from '@/layouts/shop.vue';

const props = defineProps({
    cart: Array,
    total: Number,
    discount: Number,
});

const promoCode = ref('');

const hasNoVariations = (item) => !item?.item?.variations?.length;

const updateCount = (item, newCount) => {
    if (newCount < 1) return;
    if (!hasNoVariations(item)) return;

    router.patch(`/shop/cart/${item.id}`, {
        count: newCount,
    }, {
        preserveScroll: true,
    });
};

const removeItem = (cartId) => {
    if (confirm('Удалить товар из корзины?')) {
        router.delete(`/shop/cart/${cartId}`, {
            preserveScroll: true,
        });
    }
};

const applyPromoCode = () => {
    alert('Функция промокодов будет добавлена позже');
};
</script>

