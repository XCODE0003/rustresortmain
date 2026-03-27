<template>
    <MainLayout>
        <div class="container flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <h1 class="purchase-section text-center text-[19px] font-bold text-white uppercase">
                {{ $t('payment.balance_page_title') }}
            </h1>

            <div class="purchase-section flex w-full items-center justify-center max-md:justify-around md:gap-12">
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

            <div class="purchase-section w-full">
                <div v-if="purchases.data.length > 0" class="flex flex-col gap-3">
                    <div
                        v-for="purchase in purchases.data"
                        :key="purchase.id"
                        class="purchase-card block-black flex items-center justify-between gap-4 rounded-xl border border-StrokeGray p-4 md:p-5"
                    >
                        <div class="flex items-center gap-4 md:gap-5">
                            <div class="size-14 min-w-14 overflow-hidden rounded-lg border border-StrokeGray bg-[#0E1012]">
                                <img
                                    :src="purchase.item?.image ? '/' + purchase.item.image : '/images/ak.png'"
                                    :alt="itemName(purchase.item)"
                                    class="h-full w-full object-cover"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <h3 class="text-sm font-bold text-white uppercase">
                                    {{ itemName(purchase.item) }}
                                </h3>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="text-xs text-TextGray">
                                        {{ formatDate(purchase.created_at) }}
                                    </span>
                                    <span
                                        v-if="purchase.validity"
                                        class="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase"
                                        :class="purchase.is_valid
                                            ? 'bg-[#0E2114] text-[#64CE82]'
                                            : 'bg-[#1C0E0E] text-[#CE6464]'"
                                    >
                                        {{ purchase.is_valid ? $t('purchase.active') : $t('purchase.expired') }}
                                    </span>
                                    <span v-if="purchase.server" class="text-xs text-TextGray">
                                        {{ purchase.server.name }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 md:gap-5 shrink-0">
                            <div class="text-right">
                                <div class="text-base font-bold text-Orange">{{ formatPrice(purchase.price * purchase.count) }} ₽</div>
                                <div class="text-xs text-TextGray">x{{ purchase.count }}</div>
                            </div>
                            <Link
                                :href="`/purchases/${purchase.id}`"
                                class="button-black rounded-lg border border-StrokeGray px-4 py-2.5 text-xs font-bold text-TextGray uppercase duration-300 ease-in-out hover:border-Orange hover:text-Orange"
                            >
                                {{ $t('common.details') }}
                            </Link>
                        </div>
                    </div>
                </div>

                <div v-else class="block-black rounded-xl border border-StrokeGray p-10 text-center text-sm text-TextGray">
                    {{ $t('purchase.no_purchases') }}
                </div>
            </div>

            <div
                v-if="purchases.last_page > 1"
                class="purchase-section flex flex-wrap items-center justify-center gap-2"
            >
                <button
                    type="button"
                    class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="purchases.current_page <= 1"
                    @click="goToPage(purchases.current_page - 1)"
                >
                    {{ $t('common.back') }}
                </button>

                <button
                    v-for="page in pageNumbers"
                    :key="page"
                    type="button"
                    class="button-black rounded-md border px-3 py-2 text-xs font-bold transition-all duration-300"
                    :class="purchases.current_page === page ? 'border-Orange text-Orange' : 'border-StrokeGray text-TextGray hover:text-white'"
                    @click="goToPage(page)"
                >
                    {{ page }}
                </button>

                <button
                    type="button"
                    class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    :disabled="purchases.current_page >= purchases.last_page"
                    @click="goToPage(purchases.current_page + 1)"
                >
                    {{ $t('home.forward') }}
                </button>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { computed, onMounted } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import MainLayout from '@/layouts/main.vue';

interface PurchaseItem {
    name_ru?: string;
    name_en?: string | null;
    image?: string;
}

interface Purchase {
    id: number;
    count: number;
    price: number;
    created_at: string;
    validity?: string | null;
    is_valid: boolean;
    server?: { name: string } | null;
    item?: PurchaseItem | null;
}

const props = defineProps<{
    purchases: {
        data: Purchase[];
        current_page: number;
        last_page: number;
    };
}>();

const { locale } = useI18n();
const { itemName } = useShopLocale();

const formatDate = (value: string): string =>
    new Date(value).toLocaleDateString(locale.value === 'en' ? 'en-US' : 'ru-RU');

const formatPrice = (value: number): string =>
    Number(value).toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');

const pageNumbers = computed<number[]>(() => {
    const current = props.purchases.current_page;
    const last = props.purchases.last_page;
    const start = Math.max(1, current - 2);
    const end = Math.min(last, current + 2);
    const pages: number[] = [];
    for (let p = start; p <= end; p++) pages.push(p);
    return pages;
});

const goToPage = (page: number): void => {
    router.get('/purchases', { page: page > 1 ? page : undefined }, {
        preserveScroll: true,
        preserveState: true,
        replace: true,
    });
};

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.purchase-section', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.1 });
    tl.fromTo('.purchase-card', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.05 }, '-=0.2');
});
</script>
