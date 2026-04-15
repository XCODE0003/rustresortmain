<template>
    <MainLayout>
        <div class="container flex flex-col gap-8 md:gap-16 lg:gap-20">
            <div class="home-servers-section flex w-full flex-col gap-6">
                <h2 class="text-center text-2xl font-bold uppercase text-white md:text-3xl">
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
                        <div class="flex gap-4 p-3 max-md:flex-col md:items-center md:p-5">
                            <div class="relative overflow-hidden rounded-xl">
                                <img
                                    :src="server.image || '/images/test-bg-server.png'"
                                    :alt="server.name"
                                    loading="lazy"
                                    decoding="async"
                                    height="120"
                                    class="h-[120px] w-full object-cover max-md:min-w-full max-md:w-full max-md:object-top md:w-[200px]"
                                />
                                <div class="absolute top-0 left-0 flex h-full w-full gap-1.5 p-1.5">
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
                                        {{ serverCategoryLabel(server) }}
                                    </h3>
                                    <h3 class="text-[16px] font-bold text-white">
                                        {{ server.name }}
                                    </h3>
                                </div>

                                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-TextGray">
                                    <span class="flex items-center gap-1">
                                        <span class="inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                                        <span class="text-white">{{ server.online_players ?? 0 }}</span>/<span class="text-white/80">{{ server.max_players ?? 500 }}</span>
                                        <span class="text-TextGray">{{ $t('home.players_online') }}</span>
                                    </span>
                                    <span v-if="server.last_wipe" class="text-TextGray">
                                        {{ $t('home.last_wipe') }}: <span class="text-white/70">{{ formatLastWipe(server.last_wipe) }}</span>
                                    </span>
                                </div>

                                <div class="flex items-center gap-3">
                                    <button
                                        type="button"
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

            <div class="home-shop-section flex w-full flex-col gap-6">
                <h2 class="text-center text-3xl font-bold uppercase text-white md:text-4xl">
                    {{ $t('home.shop_section_title') }}
                </h2>

                <div class="flex w-full flex-col gap-8">
                    <div class="flex w-full flex-wrap items-center justify-center gap-1.5">
                        <button
                            v-for="server in servers"
                            :key="server.id"
                            type="button"
                            @click="selectedShopServerId = server.id"
                            :class="[
                                'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                                selectedShopServerId === server.id
                                    ? 'text-Orange! border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                    : 'border-StrokeGray text-TextGray hover:border-white/40 hover:text-white',
                            ]"
                        >
                            {{ server.name }}
                        </button>
                    </div>

                    <div
                        v-if="selectedShopServerId"
                        class="flex w-full flex-wrap items-center justify-center gap-1.5"
                    >
                        <button
                            type="button"
                            @click="selectedShopCategoryId = null"
                            :class="[
                                'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                                selectedShopCategoryId === null
                                    ? 'text-Orange! border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                    : 'border-StrokeGray text-TextGray hover:border-white/40 hover:text-white',
                            ]"
                        >
                            {{ $t('shop.all_items') }}
                        </button>

                        <button
                            v-for="category in shopCategories"
                            :key="category.id"
                            type="button"
                            @click="selectedShopCategoryId = category.id"
                            :class="[
                                'button-black rounded-lg border px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                                selectedShopCategoryId === category.id
                                    ? 'text-Orange! border-Orange bg-Orange/10 shadow-[0_0_12px_rgba(255,140,0,0.3)]'
                                    : 'border-StrokeGray text-TextGray hover:border-white/40 hover:text-white',
                            ]"
                        >
                            {{ categoryTitle(category) }}
                        </button>
                    </div>

                    <div
                        v-if="selectedShopServerId"
                        class="flex flex-wrap justify-center gap-x-2 gap-y-16 md:gap-y-20 lg:gap-x-2.5 lg:gap-y-24"
                    >
                        <div
                            v-for="item in paginatedShopItems"
                            :key="item.id"
                            class="home-shop-item"
                        >
                            <ShopItemCard :item="item" @buy="handleBuyItem" />
                        </div>
                    </div>

                    <div
                        v-if="selectedShopServerId && totalShopPages > 1"
                        class="flex flex-wrap items-center justify-center gap-2 pt-6"
                    >
                        <button
                            type="button"
                            class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            :disabled="currentShopPage <= 1"
                            @click="goToShopPage(currentShopPage - 1)"
                        >
                            {{ $t('common.back') }}
                        </button>

                        <button
                            v-for="page in shopPageNumbers"
                            :key="page"
                            type="button"
                            class="button-black rounded-md border px-3 py-2 text-xs font-bold transition-all duration-300"
                            :class="currentShopPage === page ? 'border-Orange text-Orange' : 'border-StrokeGray text-TextGray hover:text-white'"
                            @click="goToShopPage(page)"
                        >
                            {{ page }}
                        </button>

                        <button
                            type="button"
                            class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            :disabled="currentShopPage >= totalShopPages"
                            @click="goToShopPage(currentShopPage + 1)"
                        >
                            {{ $t('home.forward') }}
                        </button>
                    </div>

                    <div
                        v-if="selectedShopServerId && filteredShopItems.length === 0"
                        class="py-8 text-center text-TextGray"
                    >
                        <p class="text-lg">{{ $t('shop.no_items_server') }}</p>
                    </div>

                    <div
                        v-if="!selectedShopServerId"
                        class="py-8 text-center text-TextGray"
                    >
                        <p class="text-lg">{{ $t('shop.pick_server_to_filter') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <DescriptionModal />
    </MainLayout>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { gsap } from 'gsap';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import DescriptionModal from '@/components/modals/descriptionModal.vue';
import ShopItemCard from '@/components/ShopItemCard.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useWipeInfo } from '@/composables/useWipeInfo';
import MainLayout from '@/layouts/main.vue';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

interface Server {
    id: number;
    name: string;
    image?: string;
    next_wipe?: string;
    last_wipe?: string;
    online_players?: number;
    max_players?: number;
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

interface ShopItemVariation {
    variation_id?: number;
    variation_name?: string;
    variation_price?: number;
    id?: number;
    name?: string;
    price?: number;
}

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    price: number;
    image?: string;
    description_ru?: string;
    description_en?: string | null;
    category_id: number;
    servers?: unknown;
    variations?: ShopItemVariation[];
    category?: {
        title_ru?: string;
        title_en?: string | null;
    };
}

const props = defineProps<{
    servers: Server[];
    shopCategories: ShopCategory[];
    shopItems: ShopItem[];
}>();

const { t } = useI18n();
const { itemName, itemDescription, categoryTitle } = useShopLocale();
const { formatWipeInfo } = useWipeInfo();
const modalStore = useDescriptionModalStore();

const formatLastWipe = (wipeDate: string): string => {
    try {
        const date = new Date(wipeDate);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) {
            return t('wipe.today');
        }
        return t('wipe.days_ago', { n: diffDays });
    } catch {
        return '—';
    }
};

const selectedShopServerId = ref<number | null>(props.servers[0]?.id ?? null);
const selectedShopCategoryId = ref<number | null>(null);
const currentShopPage = ref(1);
const shopItemsPerPage = 12;

const serverCategoryLabel = (server: Server): string => {
    const label = categoryTitle(server.category);

    return label !== '' ? label.toUpperCase() : t('home.server_badge');
};

const normalizeServerIds = (value: unknown): string[] => {
    if (Array.isArray(value)) {
        return value.map((entry) => String(entry));
    }

    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) {
                return parsed.map((entry) => String(entry));
            }
        } catch {
            return [];
        }
    }

    return [];
};

const normalizedShopItems = computed(() => {
    return props.shopItems.map((item) => ({
        ...item,
        serverIds: normalizeServerIds(item.servers),
    }));
});

const filteredShopItems = computed(() => {
    let filtered = normalizedShopItems.value;

    if (selectedShopServerId.value !== null) {
        const targetId = String(selectedShopServerId.value);
        filtered = filtered.filter((item) => item.serverIds.includes(targetId));
    }

    if (selectedShopCategoryId.value !== null) {
        filtered = filtered.filter((item) => item.category_id === selectedShopCategoryId.value);
    }

    return filtered;
});

const totalShopPages = computed<number>(() => {
    return Math.max(1, Math.ceil(filteredShopItems.value.length / shopItemsPerPage));
});

const paginatedShopItems = computed(() => {
    const start = (currentShopPage.value - 1) * shopItemsPerPage;
    const end = start + shopItemsPerPage;

    return filteredShopItems.value.slice(start, end);
});

const shopPageNumbers = computed<number[]>(() => {
    const start = Math.max(1, currentShopPage.value - 2);
    const end = Math.min(totalShopPages.value, currentShopPage.value + 2);
    const pages: number[] = [];

    for (let page = start; page <= end; page += 1) {
        pages.push(page);
    }

    return pages;
});

const goToShopPage = (page: number): void => {
    currentShopPage.value = Math.min(Math.max(page, 1), totalShopPages.value);
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

const handleBuyItem = (payload: { item?: ShopItem; quantity?: number } | ShopItem): void => {
    const item = 'item' in payload && payload.item ? payload.item : (payload as ShopItem);
    openItemModal(item);
};

const animateShopItems = (): void => {
    nextTick().then(() => {
        const cards = document.querySelectorAll('.home-shop-item');
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out' },
            );
        }
    });
};

watch(filteredShopItems, animateShopItems);
watch(selectedShopServerId, animateShopItems);
watch(selectedShopCategoryId, animateShopItems);
watch(currentShopPage, animateShopItems);
watch([selectedShopServerId, selectedShopCategoryId], () => {
    currentShopPage.value = 1;
});
watch(totalShopPages, (lastPage) => {
    if (currentShopPage.value > lastPage) {
        currentShopPage.value = lastPage;
    }
});

const getServerIp = (server: Server): string => {
    if (server.options?.ip && server.options?.port) {
        return `${server.options.ip}:${server.options.port}`;
    }

    return 'N/A';
};

const connectToServer = (server: Server): void => {
    const ip = getServerIp(server);
    if (ip !== 'N/A') {
        window.location.href = `steam://connect/${ip}`;
    }
};

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.home-servers-section', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 });
    tl.fromTo('.home-server-card', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.07 }, '-=0.25');
    tl.fromTo('.home-shop-section', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2');
    tl.add(() => {
        animateShopItems();
    }, '-=0.15');
});
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
