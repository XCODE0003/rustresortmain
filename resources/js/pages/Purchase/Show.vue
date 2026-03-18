<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
                class="text-center text-[15px] font-bold text-white uppercase md:text-[17px] lg:text-[19px]"
            >
                Детали покупки #{{ purchase.id }}
            </h2>

            <div class="block-black w-full max-w-3xl rounded-xl border border-StrokeGray p-8">
                <div class="mb-6 flex items-center gap-6 border-b border-StrokeGray pb-6">
                    <div class="size-24 overflow-hidden rounded-lg">
                        <img
                            :src="purchase.item?.image || '/images/ak.png'"
                            :alt="purchase.item?.name_ru"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-2 text-xl font-bold text-white">
                            {{ purchase.item?.name_ru }}
                        </h3>
                        <p class="text-sm text-TextGray">
                            {{ purchase.item?.description_ru }}
                        </p>
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="flex justify-between">
                        <span class="text-TextGray">Кол-во:</span>
                        <span class="font-bold text-white">{{ purchase.count }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">Цена за единицу:</span>
                        <span class="font-bold text-white">{{ purchase.price }} ₽</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">Общая цена:</span>
                        <span class="text-xl font-bold text-Orange">{{ purchase.price * purchase.count }} ₽</span>
                    </div>
                    <div v-if="purchase.server" class="flex justify-between">
                        <span class="text-TextGray">Сервер:</span>
                        <span class="font-bold text-white">{{ purchase.server.name }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">Дата покупки:</span>
                        <span class="font-bold text-white">{{ new Date(purchase.created_at).toLocaleString() }}</span>
                    </div>
                </div>

                <Link
                    href="/purchases"
                    class="mt-8 block w-full rounded-lg border border-StrokeGray py-3 text-center font-bold text-white transition-all duration-300 hover:border-Orange hover:text-Orange"
                >
                    Назад к покупкам
                </Link>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import ShopLayout from '@/layouts/shop.vue';

defineProps({
    purchase: Object,
});
</script>
