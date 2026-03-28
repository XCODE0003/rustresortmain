<template>
    <MainLayout>
        <div class="container flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h1 class="show-section text-center text-[19px] font-bold text-white uppercase">
                {{ $t('payment.balance_page_title') }}
            </h1>

            <div class="show-section flex w-full items-center justify-center max-md:justify-around md:gap-12">
                <Link
                    href="/payment"
                    class="text-[15px] font-bold uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="$page.url.startsWith('/payment') ? 'text-white' : 'text-TextGray'"
                >
                    {{ $t('payment.tab_topup') }}
                </Link>
                <Link
                    href="/purchases"
                    class="text-[15px] font-bold uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="$page.url.startsWith('/purchases') ? 'text-white' : 'text-TextGray'"
                >
                    {{ $t('payment.tab_history') }}
                </Link>
            </div>

            <div class="show-section w-full max-w-3xl">
                <Link
                    href="/purchases"
                    class="mb-6 inline-flex items-center gap-1 rounded-lg border border-StrokeGray px-4 py-3 text-[12px]/[12px] font-medium uppercase text-TextGray button-black group hover:opacity-80 transition-opacity duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="group-hover:-translate-x-1 transition-transform duration-300"
                    >
                        <path d="M6.00014 12.001L17 12.001" stroke="#636363" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4365 17.0001L5.99991 12.0005L10.4365 7.00012" stroke="#636363" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {{ $t('purchase.back_to_list') }}
                </Link>

                <div class="block-black rounded-xl border border-StrokeGray p-6 md:p-8">
                    <div class="mb-6 flex items-start gap-5 border-b border-StrokeGray pb-6">
                        <div class="size-20 min-w-20 overflow-hidden rounded-lg border border-StrokeGray bg-[#0E1012]">
                            <img
                                :src="purchase.item?.image ? '/' + purchase.item.image : '/images/ak.png'"
                                :alt="itemName(purchase.item)"
                                class="h-full w-full object-cover"
                            />
                        </div>
                        <div class="flex flex-col gap-2">
                            <h2 class="text-lg font-bold text-white uppercase">
                                {{ itemName(purchase.item) }}
                            </h2>
                            <div
                                v-if="itemDescription(purchase.item)"
                                class="text-sm text-TextGray leading-relaxed purchase-desc"
                                v-html="decodeHtml(itemDescription(purchase.item))"
                            />
                            <span
                                v-if="purchase.validity"
                                class="w-max rounded-md px-2.5 py-1 text-[11px] font-bold uppercase"
                                :class="purchase.is_valid
                                    ? 'bg-[#0E2114] text-[#64CE82]'
                                    : 'bg-[#1C0E0E] text-[#CE6464]'"
                            >
                                {{ purchase.is_valid ? $t('purchase.active') : $t('purchase.expired') }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <div class="flex items-center justify-between border-b border-StrokeGray/50 pb-3">
                            <span class="text-sm text-TextGray">{{ $t('purchase.qty') }}</span>
                            <span class="text-sm font-bold text-white">{{ purchase.count }}</span>
                        </div>
                        <div class="flex items-center justify-between border-b border-StrokeGray/50 pb-3">
                            <span class="text-sm text-TextGray">{{ $t('purchase.unit_price') }}</span>
                            <span class="text-sm font-bold text-white">{{ formatPrice(purchase.price) }} ₽</span>
                        </div>
                        <div class="flex items-center justify-between border-b border-StrokeGray/50 pb-3">
                            <span class="text-sm text-TextGray">{{ $t('purchase.total_price') }}</span>
                            <span class="text-lg font-bold text-Orange">{{ formatPrice(purchase.price * purchase.count) }} ₽</span>
                        </div>
                        <div v-if="purchase.server" class="flex items-center justify-between border-b border-StrokeGray/50 pb-3">
                            <span class="text-sm text-TextGray">{{ $t('purchase.server') }}</span>
                            <span class="text-sm font-bold text-white">{{ purchase.server.name }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-TextGray">{{ $t('purchase.purchase_date') }}</span>
                            <span class="text-sm font-bold text-white">{{ formatDateTime(purchase.created_at) }}</span>
                        </div>
                        <div v-if="purchase.validity" class="flex items-center justify-between">
                            <span class="text-sm text-TextGray">{{ $t('purchase.valid_until') }}</span>
                            <span class="text-sm font-bold text-white">{{ formatDateTime(purchase.validity) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import MainLayout from '@/layouts/main.vue';

defineProps<{
    purchase: {
        id: number;
        count: number;
        price: number;
        created_at: string;
        validity?: string | null;
        is_valid: boolean;
        server?: { name: string } | null;
        item?: {
            name_ru?: string;
            name_en?: string | null;
            description_ru?: string | null;
            description_en?: string | null;
            image?: string;
        } | null;
    };
}>();

const { locale } = useI18n();
const { itemName, itemDescription } = useShopLocale();

const decodeHtml = (html: string): string => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
};

const formatDateTime = (value: string): string =>
    new Date(value).toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');

const formatPrice = (value: number): string =>
    Number(value).toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');

onMounted(() => {
    gsap.fromTo(
        '.show-section',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: 'power2.out' },
    );
});
</script>
