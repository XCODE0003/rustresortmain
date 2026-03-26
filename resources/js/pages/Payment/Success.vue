<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <div class="block-black max-w-2xl rounded-xl border border-StrokeGray p-8 text-center">
                <div class="mb-6 flex justify-center">
                    <div class="rounded-full bg-TextGreen/20 p-6">
                        <svg class="h-16 w-16 text-TextGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                </div>

                <h2 class="mb-4 text-2xl font-bold text-white">{{ $t('payment.success_title') }}</h2>
                <p class="mb-6 text-TextGray">
                    {{ $t('payment.success_text') }}
                </p>

                <div class="mb-6 rounded-lg border border-StrokeGray p-4">
                    <div class="flex justify-between text-sm">
                        <span class="text-TextGray">{{ $t('payment.payment_number') }}</span>
                        <span class="font-bold text-white">#{{ payment.id }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-TextGray">{{ $t('payment.amount') }}</span>
                        <span class="font-bold text-Orange">{{ payment.amount }} ₽</span>
                    </div>
                </div>

                <div class="flex gap-3">
                    <Link
                        href="/purchases"
                        class="flex-1 rounded-lg bg-Orange px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-Orange/80"
                    >
                        {{ $t('purchase.my_purchases') }}
                    </Link>
                    <Link
                        href="/shop"
                        class="flex-1 rounded-lg border border-StrokeGray px-6 py-3 font-bold text-white transition-all duration-300 hover:border-Orange"
                    >
                        {{ $t('payment.to_shop') }}
                    </Link>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import ShopLayout from '@/layouts/shop.vue';

defineProps({
    payment: Object,
});
</script>
