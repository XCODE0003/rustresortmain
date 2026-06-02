<template>
    <ShopLayout>
        <div class="relative flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">

            <!-- Декоративные элементы фона -->
            <div class="pointer-events-none absolute inset-0 overflow-hidden">
                <img
                    ref="decorWorkbenchRef"
                    src="/source/Home/workbench3.png"
                    alt=""
                    class="absolute -right-16 top-[60px] w-[280px] opacity-[0.07] select-none"
                    aria-hidden="true"
                />
                <img
                    ref="decorFurnaceRef"
                    src="/source/Home/furnace-large.png"
                    alt=""
                    class="absolute -left-16 bottom-[120px] w-[220px] opacity-[0.07] select-none"
                    aria-hidden="true"
                />
            </div>

            <!-- Баннеры -->
            <div ref="bannersRef" class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                <div
                    class="relative h-[180px] overflow-hidden rounded-xl border border-StrokeGray md:h-[220px] lg:h-[260px]"
                    style="opacity: 0"
                >
                    <img
                        src="/images/banner-1.png"
                        :alt="$t('shop.banner_alt_1')"
                        loading="eager"
                        decoding="async"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    ></div>
                    <div
                        class="absolute bottom-6 left-6 flex flex-col gap-2"
                    >
                        <h2 class="text-xl font-bold text-white lg:text-2xl">
                            {{ $t('shop.special_offer') }}
                        </h2>
                        <p class="text-sm text-TextGray">
                            {{ $t('shop.special_offer_sub') }}
                        </p>
                    </div>
                </div>

                <div
                    class="relative h-[180px] overflow-hidden rounded-xl border border-StrokeGray md:h-[220px] lg:h-[260px]"
                    style="opacity: 0"
                >
                    <img
                        src="/images/banner-2.png"
                        :alt="$t('shop.banner_alt_2')"
                        loading="eager"
                        decoding="async"
                        class="h-full w-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    ></div>
                    <div
                        class="absolute bottom-6 left-6 flex flex-col gap-2"
                    >
                        <h2 class="text-xl font-bold text-white lg:text-2xl">
                            {{ $t('shop.new_items') }}
                        </h2>
                        <p class="text-sm text-TextGray">
                            {{ $t('shop.new_items_sub') }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Поиск товаров -->
            <div ref="searchRef" class="w-full" style="opacity: 0">
                <div class="relative">
                    <input
                        v-model="searchQuery"
                        type="text"
                        :placeholder="$t('shop.search_placeholder')"
                        class="button-black w-full rounded-lg border border-StrokeGray px-5 py-3.5 text-sm font-medium text-white placeholder:text-TextGray focus:border-Orange focus:outline-none"
                    />
                    <svg
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-TextGray"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17.5 17.5L13.875 13.875"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <!-- Категории и корзина -->
            <div class="relative flex w-full flex-col gap-6">
                <div ref="categoriesRef" class="flex w-full flex-wrap items-center justify-center gap-1.5">
                        <button
                            @click="selectCategory(null)"
                            style="opacity: 0"
                            :class="[
                                'button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                                selectedCategory === null ? 'text-Orange border-Orange' : 'text-TextGray hover:text-white'
                            ]"
                        >
                            {{ $t('shop.all_items') }}
                        </button>
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        @click="selectCategory(category.id)"
                        style="opacity: 0"
                        :class="[
                            'button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedCategory === category.id ? 'text-Orange border-Orange' : 'text-TextGray hover:text-white'
                        ]"
                    >
                        {{ categoryTitle(category) }}
                    </button>
                </div>
            </div>

            <!-- Товары -->
            <div
                ref="itemsGridRef"
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-10 sm:gap-x-2 sm:gap-y-12 md:gap-x-2 md:gap-y-16 lg:gap-x-2.5 lg:gap-y-20 w-full place-items-center"
            >
                <div
                    v-for="item in filteredItems"
                    :key="item.id"
                    class="shop-card"
                    style="opacity: 0"
                >
                    <ShopItemCard
                        :item="item"
                        @buy="handleBuyItem"
                    />
                </div>
            </div>

            <div v-if="filteredItems.length === 0" class="py-8 text-center text-TextGray">
                <p class="text-lg">{{ $t('shop.no_items') }}</p>
                <p v-if="searchQuery" class="mt-2 text-sm">
                    {{ $t('shop.for_query', { q: searchQuery }) }}
                </p>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ShopItemCard from '@/components/ShopItemCard.vue';
import ShopLayout from '@/layouts/shop.vue';
import { useShopLocale } from '@/composables/useShopLocale';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

interface Category {
    id: number;
    title_ru: string;
    title_en?: string | null;
    path: string;
}

interface Server {
    id: number;
    name: string;
}

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    description_ru?: string;
    description_en?: string | null;
    price: number;
    price_usd?: number | null;
    image?: string;
    category_id: number;
    server?: number | string | null;
    servers?: unknown;
    variations?: any[];
}

const props = defineProps<{
    categories: Category[];
    items: ShopItem[];
    selectedServer?: Server | null;
    servers?: Server[];
    categorySlug?: string | null;
}>();

const normalizeServerIds = (value: unknown): string[] => {
    const toIds = (arr: unknown[]): string[] =>
        arr
            .filter((entry) => entry !== null && entry !== undefined && entry !== '')
            .map((entry) => String(entry));

    if (Array.isArray(value)) return toIds(value);
    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return toIds(parsed);
        } catch {
            return [];
        }
    }
    return [];
};

const { itemName, itemDescription, categoryTitle } = useShopLocale();

const selectedCategory = ref<number | null>(null);
const searchQuery = ref('');
const searchQueryDebounced = ref('');
const modalStore = useDescriptionModalStore();

// Template refs for GSAP
const bannersRef = ref<HTMLElement | null>(null);
const serverBlockRef = ref<HTMLElement | null>(null);
const searchRef = ref<HTMLElement | null>(null);
const categoriesRef = ref<HTMLElement | null>(null);
const itemsGridRef = ref<HTMLElement | null>(null);
const decorWorkbenchRef = ref<HTMLElement | null>(null);
const decorFurnaceRef = ref<HTMLElement | null>(null);

let searchTimeout: ReturnType<typeof setTimeout>;
watch(searchQuery, (val) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchQueryDebounced.value = val;
    }, 200);
}, { immediate: true });

if (props.categorySlug) {
    const category = props.categories.find((c: Category) => c.path === props.categorySlug);
    if (category) {
        selectedCategory.value = category.id;
    }
}

const filteredItems = computed(() => {
    let filtered = props.items;

    if (selectedCategory.value !== null) {
        filtered = filtered.filter((item: ShopItem) => item.category_id === selectedCategory.value);
    }

    if (searchQueryDebounced.value.trim()) {
        const query = searchQueryDebounced.value.toLowerCase().trim();
        filtered = filtered.filter((item: ShopItem) => {
            const ru = item.name_ru?.toLowerCase() ?? '';
            const en = item.name_en?.toLowerCase() ?? '';
            return ru.includes(query) || en.includes(query);
        });
    }

    return filtered;
});

// Animate shop item cards
const animateItems = async () => {
    await nextTick();
    const cards = itemsGridRef.value?.querySelectorAll('.shop-card');
    if (cards && cards.length > 0) {
        gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, ease: 'power2.out' },
        );
    }
};

function selectCategory(id: number | null) {
    selectedCategory.value = id;
}

watch(filteredItems, () => {
    animateItems();
});

watch(searchQueryDebounced, () => {
    animateItems();
});

onMounted(async () => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Banners
    if (bannersRef.value?.children) {
        tl.fromTo(
            Array.from(bannersRef.value.children),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
        );
    }

    // Server block
    if (serverBlockRef.value) {
        tl.fromTo(
            serverBlockRef.value,
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            '-=0.35',
        );
    }

    // Search
    if (searchRef.value) {
        tl.fromTo(
            searchRef.value,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4 },
            '-=0.3',
        );
    }

    // Category buttons
    if (categoriesRef.value?.children) {
        tl.fromTo(
            Array.from(categoriesRef.value.children),
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, stagger: 0.05 },
            '-=0.25',
        );
    }

    // Items
    tl.add(() => animateItems(), '-=0.1');

    // Decorative float animations
    if (decorWorkbenchRef.value) {
        gsap.to(decorWorkbenchRef.value, {
            y: -12,
            duration: 3.5,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
        });
    }
    if (decorFurnaceRef.value) {
        gsap.to(decorFurnaceRef.value, {
            y: 10,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
        });
    }
});

const handleBuyItem = (payload: any) => {
    const item = payload?.item ?? payload;
    const selectedQuantity = payload?.quantity ?? item?.amount ?? 1;

    modalStore.setPendingAmount(selectedQuantity);

    const variations = item?.variations && item.variations.length > 0
        ? item.variations.map((v: any) => ({
            label: v.variation_name || v.name,
            value: v.variation_id || v.id,
            price: v.variation_price || v.price,
            variationId: v.variation_id || v.id,
        }))
        : undefined;

    const itemServerField = item.server === null || item.server === undefined
        ? null
        : Number(item.server);
    const itemServerIds = normalizeServerIds(item.servers);

    modalStore.open({
        itemId: item.id,
        title: itemName(item),
        description: itemDescription(item),
        priceRub: item.price,
        priceUsd: item.price_usd ?? null,
        imageSrc: item.image ? '/' + item.image : '/images/subscriptions/elete-pack.png',
        variations: variations,
        defaultAmount: selectedQuantity,
        unitAmount: Number(item.amount ?? 1),
        isCommand: !!(item as any).is_command,
        wipeBlock: Number((item as any).wipe_block ?? 0),
        kind: (item as any).kind ?? 'item',
        serverId: props.selectedServer?.id ?? null,
        serverName: props.selectedServer?.name ?? null,
        availableServers: (props.servers ?? []).map((s) => ({ id: s.id, name: s.name })),
        itemServerField,
        itemServerIds,
    });
};
</script>

<style scoped>
@keyframes server-cta-breathe {
    0%, 100% {
        box-shadow: 0 0 16px rgba(243, 164, 93, 0.22), inset 0 0 0 1px rgba(243, 164, 93, 0.15);
    }
    50% {
        box-shadow: 0 0 28px rgba(243, 164, 93, 0.45), inset 0 0 0 1px rgba(243, 164, 93, 0.35);
    }
}

.server-cta-attention {
    animation: server-cta-breathe 2.4s ease-in-out infinite;
}

.server-cta-attention:hover {
    animation: none;
}

@media (prefers-reduced-motion: reduce) {
    .server-cta-attention {
        animation: none;
    }
}
</style>
