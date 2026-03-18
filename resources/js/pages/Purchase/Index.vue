<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
                class="text-center text-[15px] font-bold text-white uppercase md:text-[17px] lg:text-[19px]"
            >
                Мои покупки
            </h2>

            <div class="w-full space-y-4">
                <div
                    v-for="purchase in purchases.data"
                    :key="purchase.id"
                    class="block-black flex items-center justify-between rounded-xl border border-StrokeGray p-6"
                >
                    <div class="flex items-center gap-6">
                        <div class="size-16 overflow-hidden rounded-lg">
                            <img
                                :src="purchase.item?.image || '/images/ak.png'"
                                :alt="purchase.item?.name_ru"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div class="flex flex-col gap-2">
                            <h3 class="text-base font-bold text-white">
                                {{ purchase.item?.name_ru }}
                            </h3>
                            <p class="text-xs text-TextGray">
                                Куплено: {{ new Date(purchase.created_at).toLocaleDateString() }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <div class="text-lg font-bold text-Orange">{{ purchase.price }} ₽</div>
                            <div class="text-xs text-TextGray">x{{ purchase.count }}</div>
                        </div>
                        <Link
                            :href="`/purchases/${purchase.id}`"
                            class="rounded-lg bg-Orange px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-Orange/80"
                        >
                            Детали
                        </Link>
                    </div>
                </div>
            </div>

            <div v-if="purchases.links" class="flex gap-2">
                <Link
                    v-for="(link, index) in purchases.links"
                    :key="index"
                    :href="link.url"
                    :class="[
                        'rounded-lg px-4 py-2 text-sm font-bold transition-all duration-300',
                        link.active
                            ? 'bg-Orange text-white'
                            : 'border border-StrokeGray text-TextGray hover:border-Orange hover:text-white'
                    ]"
                    v-html="link.label"
                />
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import ShopLayout from '@/layouts/shop.vue';

defineProps({
    purchases: Object,
});
</script>
