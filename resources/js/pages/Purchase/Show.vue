<template>
    <ShopLayout>
        <div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h2
                class="text-center text-[15px] font-bold text-white uppercase md:text-[17px] lg:text-[19px]"
            >
                {{ $t('purchase.details_title', { id: purchase.id }) }}
            </h2>

            <div class="block-black w-full max-w-3xl rounded-xl border border-StrokeGray p-8">
                <div class="mb-6 flex items-center gap-6 border-b border-StrokeGray pb-6">
                    <div class="size-24 overflow-hidden rounded-lg">
                        <img
                            :src="purchase.item?.image || '/images/ak.png'"
                            :alt="itemName(purchase.item)"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div class="flex-1">
                        <h3 class="mb-2 text-xl font-bold text-white">
                            {{ itemName(purchase.item) }}
                        </h3>
                        <p class="text-sm text-TextGray">
                            {{ itemDescription(purchase.item) }}
                        </p>
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="flex justify-between">
                        <span class="text-TextGray">{{ $t('purchase.qty') }}</span>
                        <span class="font-bold text-white">{{ purchase.count }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">{{ $t('purchase.unit_price') }}</span>
                        <span class="font-bold text-white">{{ purchase.price }} ₽</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">{{ $t('purchase.total_price') }}</span>
                        <span class="text-xl font-bold text-Orange">{{ purchase.price * purchase.count }} ₽</span>
                    </div>
                    <div v-if="purchase.server" class="flex justify-between">
                        <span class="text-TextGray">{{ $t('purchase.server') }}</span>
                        <span class="font-bold text-white">{{ purchase.server.name }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-TextGray">{{ $t('purchase.purchase_date') }}</span>
                        <span class="font-bold text-white">{{ formatDateTime(purchase.created_at) }}</span>
                    </div>
                </div>

                <Link
                    href="/purchases"
                    class="mt-8 block w-full rounded-lg border border-StrokeGray py-3 text-center font-bold text-white transition-all duration-300 hover:border-Orange hover:text-Orange"
                >
                    {{ $t('purchase.back_to_list') }}
                </Link>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import ShopLayout from '@/layouts/shop.vue';

defineProps<{
    purchase: {
        id: number;
        count: number;
        price: number;
        created_at: string;
        server?: { name: string };
        item?: {
            name_ru?: string;
            name_en?: string | null;
            description_ru?: string | null;
            description_en?: string | null;
            image?: string;
        };
    };
}>();

const { locale } = useI18n();
const { itemName, itemDescription } = useShopLocale();

const formatDateTime = (value: string): string =>
    new Date(value).toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');
</script>
