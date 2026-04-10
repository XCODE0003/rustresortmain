<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
                class="text-center text-[15px] font-bold text-white uppercase md:text-[17px] lg:text-[19px]"
            >
                {{ $t('payment.choose_method') }}
            </h2>

            <div class="flex w-full items-start gap-4 max-lg:flex-col">
                <div class="block-black w-full flex-1 rounded-xl border border-StrokeGray p-6">
                    <div class="grid w-full grid-cols-3 gap-2.5 lg:grid-cols-4">
                        <div
                            v-for="(gateway, code) in gateways"
                            :key="code"
                            @click="selectedGateway = code"
                            class="black-button relative flex h-[84px] cursor-pointer items-center justify-center rounded-xl border px-5 py-4 duration-300 ease-in-out md:h-[95px] lg:h-[130px]"
                            :class="{
                                'border-Orange bg-PaleOrange': selectedGateway === code,
                                'border-StrokeGray hover:border-Orange hover:bg-PaleOrange hover:opacity-80': selectedGateway !== code
                            }"
                        >
                            <img
                                v-if="gateway.logo"
                                :src="'/' + gateway.logo"
                                :alt="gateway.name"
                                class="h-10 max-h-10 w-auto max-w-[min(100%,9rem)] object-contain"
                            />
                            <span v-else class="text-xs font-bold text-white">
                                {{ gateway.name }}
                            </span>
                            <div
                                class="button-black absolute top-1.5 right-1.5 rounded-md border border-StrokeGray px-2 py-1 text-[10px] font-bold text-TextGray uppercase"
                            >
                                {{ gateway.currency }}
                            </div>
                        </div>
                    </div>

                    <button
                        @click="submitPayment"
                        :disabled="!selectedGateway || form.processing"
                        class="mt-6 w-full rounded-lg bg-TextGreen px-6 py-4 text-base font-bold text-TextBlack transition-all duration-300 hover:bg-TextGreen/80 disabled:opacity-50"
                    >
                        {{ $t('payment.continue') }}
                    </button>
                </div>

                <div class="block-black w-full rounded-xl border border-StrokeGray p-6 lg:w-96">
                    <h3 class="mb-4 text-lg font-bold text-white">{{ $t('payment.your_order') }}</h3>
                    <div class="space-y-3">
                        <div
                            v-for="item in cart"
                            :key="item.id"
                            class="flex items-center justify-between text-sm"
                        >
                            <span class="text-TextGray">{{ itemName(item.item) }} x{{ item.count }}</span>
                            <span class="text-white font-bold">{{ ((item.item.price || 0) - (item.item.discount || 0)) * item.count }} ₽</span>
                        </div>
                        <div class="border-t border-StrokeGray pt-3">
                            <div class="flex items-center justify-between">
                                <span class="text-base font-bold text-white">{{ $t('payment.total') }}</span>
                                <span class="text-2xl font-bold text-Orange">{{ total }} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useShopLocale } from '@/composables/useShopLocale';
import ShopLayout from '@/layouts/shop.vue';

const { itemName } = useShopLocale();

const props = defineProps({
    cart: Array,
    total: Number,
    gateways: Object,
});

const selectedGateway = ref(Object.keys(props.gateways || {})[0] ?? null);
const form = useForm({
    gateway: null,
});

const gateways = props.gateways || {};

const submitPayment = () => {
    if (!selectedGateway.value) return;

    form.gateway = selectedGateway.value;
    form.post('/payment', {
        preserveScroll: true,
    });
};
</script>
