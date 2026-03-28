<template>
    <MainLayout>
        <div class="container flex flex-col gap-8 md:gap-16 lg:gap-20">
            <!-- Hero Section -->
            <!-- <div class="relative flex w-full flex-col items-center gap-8 text-center">
                <div class="flex flex-col gap-4">
                    <h1
                        class="text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl"
                    >
                        Rust Resort
                    </h1>
                    <p class="text-base text-TextGray md:text-lg">
                        {{ $t('home.tagline') }}
                    </p>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/servers"
                        class="cursor-pointer rounded-lg bg-Orange px-8 py-4 text-sm font-bold uppercase text-black duration-300 ease-in-out hover:bg-Orange/80"
                    >
                        {{ $t('shop.pick_server') }}
                    </Link>
                    <Link
                        href="/shop"
                        class="button-black cursor-pointer rounded-lg border border-StrokeGray px-8 py-4 text-sm font-bold uppercase text-white duration-300 ease-in-out hover:border-Orange hover:text-Orange"
                    >
                        {{ $t('home.go_shop') }}
                    </Link>
                </div>
            </div> -->

            <!-- Баннеры -->
            <!-- <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                <div
                    class="relative h-[200px] overflow-hidden rounded-xl border border-StrokeGray md:h-[240px] lg:h-[280px]"
                >
                    <img
                        src="/images/banner-1.png"
                        :alt="$t('shop.special_offer')"
                        loading="eager"
                        decoding="async"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"
                    ></div>
                    <div class="absolute bottom-6 left-6 flex flex-col gap-2">
                        <h2 class="text-xl font-bold text-white lg:text-2xl">
                            {{ $t('shop.special_offer') }}
                        </h2>
                        <p class="text-sm text-TextGray">
                            {{ $t('shop.special_offer_sub') }}
                        </p>
                        <Link
                            href="/shop"
                            class="mt-2 inline-flex w-max items-center gap-2 text-sm font-bold text-Orange duration-300 hover:opacity-80"
                        >
                            {{ $t('home.go_shop') }}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div
                    class="relative h-[200px] overflow-hidden rounded-xl border border-StrokeGray md:h-[240px] lg:h-[280px]"
                >
                    <img
                        src="/images/banner-2.png"
                        :alt="$t('shop.new_items')"
                        loading="eager"
                        decoding="async"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"
                    ></div>
                    <div class="absolute bottom-6 left-6 flex flex-col gap-2">
                        <h2 class="text-xl font-bold text-white lg:text-2xl">
                            {{ $t('shop.new_items') }}
                        </h2>
                        <p class="text-sm text-TextGray">
                            {{ $t('shop.new_items_sub') }}
                        </p>
                        <Link
                            href="/shop"
                            class="mt-2 inline-flex w-max items-center gap-2 text-sm font-bold text-Orange duration-300 hover:opacity-80"
                        >
                            {{ $t('home.view_all') }}
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div> -->


      <!-- Популярные сервера -->
            <div class="home-servers-section flex w-full flex-col gap-6">
                <h2
                    class="text-center text-2xl font-bold uppercase text-white md:text-3xl"
                >
                    {{ $t('home.our_servers') }}
                </h2>

                <div
                    v-if="servers && servers.length > 0"
                    class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5"
                >
                    <div
                        v-for="server in servers.slice(0, 4)"
                        :key="server.id"
                        class="home-server-card relative overflow-hidden rounded-xl border border-StrokeGray"
                    >
                        <div class="flex md:items-center gap-4 p-3 md:p-5 max-md:flex-col">
                            <div
                                class="relative overflow-hidden rounded-xl"
                            >
                                <img
                                    :src="server.image || '/images/test-bg-server.png'"
                                    :alt="server.name"
                                    loading="lazy"
                                    decoding="async"
              
                                    height="120"
                                    class="h-[120px] max-md:min-w-full w-full max-md:w-full md:w-[200px] object-cover max-md:object-top"
                                />
                                <div
                                    class="absolute top-0 left-0 flex h-full w-full gap-1.5 p-1.5"
                                >
                                    <div
                                        v-if="server.options?.rate"
                                        class="bg-table flex h-[26px] w-max items-center justify-center rounded-sm border border-StrokeGray px-2 py-0.5 text-[10px]/[10px] font-medium text-TextGray backdrop-blur-xs"
                                    >
                                        {{ server.options.rate }}
                                    </div>
                                    <div
                                        v-if="server.next_wipe"
                                        class="bg-table flex h-[26px] w-max items-center justify-center rounded-sm border border-StrokeGray px-2 py-0.5 text-[10px]/[10px] font-medium text-TextGray backdrop-blur-xs"
                                    >
                                        {{ formatWipeInfo(server.next_wipe) }}
                                    </div>
                                </div>
                            </div>

                            <div class="flex w-full flex-col justify-between gap-3">
                                <div class="flex flex-col gap-2">
                                    <h3
                                        v-if="server.category"
                                        class="text-[12px]/[12px] font-medium text-TextGray"
                                    >
                                        {{
                                            serverCategoryLabel(server)
                                        }}
                                    </h3>
                                    <h3 class="text-[16px] font-bold text-white">
                                        {{ server.name }}
                                    </h3>
                                </div>

                                <div class="flex items-center gap-3">
                                    <button
                                        @click="connectToServer(server)"
                                        class="cursor-pointer rounded-md bg-Orange px-5 py-2.5 text-[12px]/[12px] font-medium text-black transition-colors duration-300 hover:bg-Orange/80"
                                    >
                                        {{ $t('server.connect') }}
                                    </button>
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <Link
                        href="/servers"
                        class="button-black rounded-lg border border-StrokeGray px-8 py-4 text-sm font-bold uppercase text-TextGray duration-300 ease-in-out hover:border-Orange hover:text-Orange"
                    >
                        {{ $t('home.view_all_servers') }}
                    </Link>
                </div>
            </div>
            
            <!-- Товары магазина -->
            <div class="home-shop-section flex w-full flex-col gap-6">
                <div class="flex flex-col items-center gap-2 text-center">
                    <h2 class="text-2xl font-bold uppercase text-white md:text-3xl">
                        {{ $t('home.shop_section_title') }}
                    </h2>
                    <p class="max-w-2xl text-sm text-TextGray md:text-base">
                        {{ $t('home.shop_section_sub') }}
                    </p>
                </div>

                <div class="flex w-full flex-col gap-3 rounded-xl border border-StrokeGray p-3 md:gap-4 md:p-6">
                    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div class="flex flex-wrap gap-1.5">
                            <button
                                type="button"
                                @click="changeShopCategory(null)"
                                class="button-black rounded-lg border px-3 py-1.5 text-[11px] font-bold uppercase transition-all duration-300 md:px-4 md:py-2 md:text-sm"
                                :class="selectedShopCategory === null ? 'border-Orange !text-Orange shadow-[0_0_12px_rgba(255,140,0,0.3)]' : 'border-StrokeGray text-TextGray hover:text-white'"
                            >
                                {{ $t('home.all') }}
                            </button>
                            <button
                                v-for="category in shopCategories"
                                :key="category.id"
                                type="button"
                                @click="changeShopCategory(category.id)"
                                class="button-black rounded-lg border px-3 py-1.5 text-[11px] font-bold uppercase transition-all duration-300 md:px-4 md:py-2 md:text-sm"
                                :class="selectedShopCategory === category.id ? 'border-Orange !text-Orange shadow-[0_0_12px_rgba(255,140,0,0.3)]' : 'border-StrokeGray text-TextGray hover:text-white'"
                            >
                                {{ categoryTitle(category) }}
                            </button>
                        </div>

                        <form class="flex w-full gap-2 md:w-[360px]" @submit.prevent="submitShopSearch">
                            <input
                                v-model="shopSearchInput"
                                type="text"
                                :placeholder="$t('home.search_items_placeholder')"
                                class="button-black w-full rounded-lg border border-StrokeGray px-3 py-2 text-sm text-white placeholder:text-TextGray focus:border-Orange focus:outline-none"
                            />
                            <button
                                type="submit"
                                class="rounded-lg bg-Orange px-3 py-2 text-sm font-bold text-black transition-all duration-300 hover:bg-Orange/80 shrink-0"
                            >
                                {{ $t('home.find') }}
                            </button>
                        </form>
                    </div>

                    <div v-if="shopItems.data.length > 0" class="grid grid-cols-2 gap-2 md:gap-4 lg:grid-cols-4">
                        <div
                            v-for="item in shopItems.data"
                            :key="item.id"
                            class="home-shop-item button-black flex flex-col rounded-xl border border-StrokeGray p-2.5 md:p-4 transition-all duration-300 hover:border-Orange"
                        >
                            <div class="relative mb-3 flex h-[100px] md:h-[140px] items-center justify-center overflow-hidden rounded-lg border border-StrokeGray bg-[#0E1012]">
                                <img
                                    :src="item.image ? '/' + item.image : '/images/subscriptions/elete-pack.png'"
                                    :alt="itemName(item)"
                                    class="h-[80px] md:h-[120px] w-auto object-contain"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <span
                                    v-if="categoryTitle(item.category)"
                                    class="absolute top-1.5 left-1.5 rounded-md border border-StrokeGray bg-black/70 px-1.5 py-0.5 text-[9px] md:text-[10px] font-bold uppercase text-TextGray"
                                >
                                    {{ categoryTitle(item.category) }}
                                </span>
                            </div>

                            <h3 class="mb-1 min-h-[32px] md:min-h-[40px] overflow-hidden text-[11px] md:text-sm font-bold uppercase text-white leading-tight">
                                {{ itemName(item) }}
                            </h3>
                            <div class="mt-auto flex items-center justify-between gap-1.5 pt-1.5 md:gap-2 md:pt-2">
                                <span class="text-sm md:text-base font-bold text-Orange">
                                    {{ formatPrice(item.price) }} ₽
                                </span>
                                <button
                                    type="button"
                                    @click="openItemModal(item)"
                                    class="rounded-md bg-PaleOrange px-2.5 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase text-Orange transition-all duration-300 hover:bg-Orange hover:text-PaleOrange shrink-0"
                                >
                                    {{ $t('shop.buy') }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-else class="rounded-lg border border-StrokeGray p-6 text-center text-sm text-TextGray">
                        {{ $t('home.no_items_filters') }}
                    </div>

                    <div
                        v-if="shopItems.last_page > 1"
                        class="flex flex-wrap items-center justify-center gap-2 pt-2"
                    >
                        <button
                            type="button"
                            class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            :disabled="shopItems.current_page <= 1"
                            @click="goToShopPage(shopItems.current_page - 1)"
                        >
                            {{ $t('common.back') }}
                        </button>

                        <button
                            v-for="page in shopPageNumbers"
                            :key="page"
                            type="button"
                            class="button-black rounded-md border px-3 py-2 text-xs font-bold transition-all duration-300"
                            :class="shopItems.current_page === page ? 'border-Orange text-Orange' : 'border-StrokeGray text-TextGray hover:text-white'"
                            @click="goToShopPage(page)"
                        >
                            {{ page }}
                        </button>

                        <button
                            type="button"
                            class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            :disabled="shopItems.current_page >= shopItems.last_page"
                            @click="goToShopPage(shopItems.current_page + 1)"
                        >
                            {{ $t('home.forward') }}
                        </button>
                    </div>
                </div>
            </div>

      

            <!-- Преимущества -->
            <!-- <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
                <div
                    class="flex flex-col gap-4 rounded-xl border border-StrokeGray p-6"
                >
                    <div
                        class="flex size-12 items-center justify-center rounded-lg bg-Orange/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                fill="#F3A45D"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white">
                        {{ $t('home.feat_perf_title') }}
                    </h3>
                    <p class="text-sm text-TextGray">
                        {{ $t('home.feat_perf_text') }}
                    </p>
                </div>

                <div
                    class="flex flex-col gap-4 rounded-xl border border-StrokeGray p-6"
                >
                    <div
                        class="flex size-12 items-center justify-center rounded-lg bg-Green/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="#64CE82"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white">
                        {{ $t('home.feat_fair_title') }}
                    </h3>
                    <p class="text-sm text-TextGray">
                        {{ $t('home.feat_fair_text') }}
                    </p>
                </div>

                <div
                    class="flex flex-col gap-4 rounded-xl border border-StrokeGray p-6"
                >
                    <div
                        class="flex size-12 items-center justify-center rounded-lg bg-Orange/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                                stroke="#F3A45D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-white">
                        {{ $t('home.feat_comm_title') }}
                    </h3>
                    <p class="text-sm text-TextGray">
                        {{ $t('home.feat_comm_text') }}
                    </p>
                </div>
            </div> -->

            <!-- Призыв к действию -->
            <!-- <div
                class="relative flex flex-col items-center gap-6 rounded-xl border border-StrokeGray p-8 text-center md:p-12"
            >
                <div
                    class="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-Orange/10 blur-3xl"
                ></div>
                <h2 class="relative z-10 text-2xl font-bold text-white md:text-3xl">
                    {{ $t('home.cta_title') }}
                </h2>
                <p class="relative z-10 max-w-2xl text-base text-TextGray">
                    {{ $t('home.cta_text') }}
                </p>
                <div class="relative z-10 flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/servers"
                        class="cursor-pointer rounded-lg bg-Orange px-8 py-4 text-sm font-bold uppercase text-black duration-300 ease-in-out hover:bg-Orange/80"
                    >
                        {{ $t('shop.pick_server') }}
                    </Link>
                    <Link
                        href="/shop"
                        class="button-black cursor-pointer rounded-lg border border-StrokeGray px-8 py-4 text-sm font-bold uppercase text-white duration-300 ease-in-out hover:border-Orange hover:text-Orange"
                    >
                        {{ $t('home.buy_starter') }}
                    </Link>
                </div>
            </div> -->
        </div>
        <DescriptionModal />
    </MainLayout>
</template>

<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';
import DescriptionModal from '@/components/modals/descriptionModal.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useWipeInfo } from '@/composables/useWipeInfo';
import MainLayout from '@/layouts/main.vue';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

interface Server {
    id: number;
    name: string;
    image?: string;
    online_players?: number;
    max_players?: number;
    next_wipe?: string;
    options?: {
        ip?: string;
        port?: number;
        rate?: string;
    };
    category?: {
        title_ru?: string;
        title_en?: string | null;
    };
}

interface ShopCategory {
    id: number;
    title_ru: string;
    title_en?: string | null;
}

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    price: number;
    image?: string;
    description_ru?: string;
    description_en?: string | null;
    variations?: Array<{
        variation_id?: number;
        variation_name?: string;
        variation_price?: number;
        id?: number;
        name?: string;
        price?: number;
    }>;
    category?: {
        title_ru?: string;
        title_en?: string | null;
    };
}

interface ShopPaginated {
    data: ShopItem[];
    current_page: number;
    last_page: number;
}

const props = defineProps<{
    servers: Server[];
    shopCategories: ShopCategory[];
    shopItems: ShopPaginated;
    shopFilters: {
        shop_category: number | null;
        shop_search: string;
    };
}>();

const { locale, t } = useI18n();
const { itemName, itemDescription, categoryTitle } = useShopLocale();
const { formatWipeInfo } = useWipeInfo();

const selectedShopCategory = ref<number | null>(props.shopFilters.shop_category);
const shopSearchInput = ref(props.shopFilters.shop_search ?? '');
const modalStore = useDescriptionModalStore();

const serverCategoryLabel = (server: Server): string => {
    const label = categoryTitle(server.category);

    return label !== '' ? label.toUpperCase() : t('home.server_badge');
};

watch(
    () => props.shopFilters,
    (filters) => {
        selectedShopCategory.value = filters.shop_category;
        shopSearchInput.value = filters.shop_search ?? '';
    },
);

const animateShopItems = async (): Promise<void> => {
    await nextTick();
    const cards = document.querySelectorAll('.home-shop-item');
    if (cards.length) {
        gsap.fromTo(
            cards,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: 'power2.out' },
        );
    }
};

watch(() => props.shopItems.data, animateShopItems);

const shopPageNumbers = computed<number[]>(() => {
    const current = props.shopItems.current_page;
    const last = props.shopItems.last_page;
    const start = Math.max(1, current - 2);
    const end = Math.min(last, current + 2);
    const pages: number[] = [];

    for (let page = start; page <= end; page += 1) {
        pages.push(page);
    }

    return pages;
});

const submitShopSearch = (): void => {
    goToShopPage(1);
};

const changeShopCategory = (categoryId: number | null): void => {
    selectedShopCategory.value = categoryId;
    goToShopPage(1);
};

const goToShopPage = (page: number): void => {
    const normalizedSearch = shopSearchInput.value.trim();

    router.get(
        '/',
        {
            shop_category: selectedShopCategory.value ?? undefined,
            shop_search: normalizedSearch !== '' ? normalizedSearch : undefined,
            shop_page: page > 1 ? page : undefined,
        },
        {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        },
    );
};

const formatPrice = (value: number): string => {
    return Number(value).toLocaleString(locale.value === 'en' ? 'en-US' : 'ru-RU');
};

const toSafeNumber = (value: unknown, fallback = 0): number => {
    if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
    }

    if (typeof value === 'string') {
        const normalized = value.replace(',', '.').replace(/[^\d.-]/g, '');
        const parsed = Number(normalized);
        if (Number.isFinite(parsed)) {
            return parsed;
        }
    }

    return fallback;
};

const openItemModal = (item: ShopItem): void => {
    const fallbackItemPrice = toSafeNumber(item.price, 0);
    const mappedVariations = Array.isArray(item.variations) && item.variations.length > 0
        ? item.variations.map((variation) => ({
            label: variation.variation_name || variation.name || t('shop.variation_default'),
            value: toSafeNumber(variation.variation_id ?? variation.id ?? 0, 0),
            price: toSafeNumber(variation.variation_price ?? variation.price, fallbackItemPrice),
            variationId: toSafeNumber(variation.variation_id ?? variation.id ?? 0, 0),
        }))
        : undefined;

    modalStore.open({
        itemId: item.id,
        title: itemName(item),
        description: itemDescription(item),
        priceRub: fallbackItemPrice,
        imageSrc: item.image ? `/${item.image}` : '/images/subscriptions/elete-pack.png',
        variations: mappedVariations,
        defaultAmount: 1,
    });
};

const getServerIp = (server: Server): string => {
    if (server.options?.ip && server.options?.port) {
        return `${server.options.ip}:${server.options.port}`;
    }
    return 'N/A';
};

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.home-servers-section', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    tl.fromTo('.home-server-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.07 }, '-=0.25');
    tl.fromTo('.home-shop-section', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, '-=0.1');
    tl.add(() => animateShopItems(), '-=0.1');
});

const connectToServer = (server: Server) => {
    const ip = getServerIp(server);
    if (ip !== 'N/A') {
        window.location.href = `steam://connect/${ip}`;
    }
};
</script>

<style scoped>
.bg-table {
    background: linear-gradient(
        180deg,
        rgba(9, 11, 13, 0.8) 0%,
        rgba(9, 11, 13, 0.8) 100%
    );
}
</style>
