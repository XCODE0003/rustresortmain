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

            <!-- Блок выбора сервера -->
            <div
                ref="serverBlockRef"
                class="relative w-full rounded-xl border border-StrokeGray p-5 md:p-6 lg:p-8"
            >
                <div class="flex flex-col gap-4">
                    <h3 class="text-base font-bold text-white uppercase md:text-lg">
                        {{ $t('shop.select_server') }}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <Link
                            v-if="selectedServer"
                            href="/shop/server"
                            class="button-black flex items-center gap-2 rounded-lg border border-Orange px-4 py-2.5 text-sm font-bold !text-Orange duration-300 ease-in-out hover:opacity-80"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8 1C8.78793 1 9.56815 1.15519 10.2961 1.45672C11.0241 1.75825 11.6855 2.20021 12.2426 2.75736C12.7998 3.31451 13.2417 3.97595 13.5433 4.70392C13.8448 5.43189 14 6.21207 14 7C14 8.5913 13.3679 10.1174 12.2426 11.2426C11.1174 12.3679 9.5913 13 8 13C5.24 13 2.93 11.152 2.216 8.638L4.514 9.586C4.67 10.36 5.36 10.948 6.182 10.948C7.118 10.948 7.88 10.186 7.88 9.25V9.172L9.92 7.714H9.968C11.216 7.714 12.23 6.7 12.23 5.452C12.23 4.204 11.216 3.19 9.968 3.19C8.72 3.19 7.7 4.204 7.7 5.452V5.482L6.278 7.558L6.182 7.552C5.828 7.552 5.498 7.66 5.228 7.846L2 6.52C2.258 3.43 4.838 1 8 1ZM5.768 9.769C6.248 9.97 6.8 9.745 6.998 9.265C7.196 8.785 6.968 8.239 6.5 8.041L5.732 7.723C6.026 7.615 6.356 7.609 6.668 7.741C6.986 7.867 7.232 8.113 7.358 8.431C7.49 8.743 7.49 9.091 7.358 9.403C7.1 9.917 6.338 10.229 5.824 9.959C5.523 9.8 5.295 9.572 5.169 9.302L5.768 9.769ZM11.48 5.452C11.48 6.286 10.802 6.964 9.968 6.964C9.14 6.964 8.462 6.286 8.462 5.452C8.46119 5.25401 8.49958 5.05782 8.57499 4.87474C8.6504 4.69167 8.76133 4.52533 8.90132 4.38533C9.04132 4.24533 9.20767 4.13441 9.39074 4.059C9.57382 3.98358 9.77001 3.9452 9.968 3.946C10.802 3.946 11.48 4.624 11.48 5.452ZM8.84 5.452C8.84 6.076 9.344 6.586 9.974 6.586C10.598 6.586 11.102 6.076 11.102 5.452C11.102 4.828 10.598 4.318 9.974 4.318C9.344 4.318 8.84 4.828 8.84 5.452Z"
                                    fill="currentColor"
                                />
                            </svg>
                            {{ selectedServer.name }}
                        </Link>
                        <Link
                            v-else
                            href="/shop/server"
                            class="button-black rounded-lg border border-StrokeGray px-4 py-2.5 text-sm font-bold text-TextGray duration-300 ease-in-out hover:text-white"
                        >
                            {{ $t('shop.pick_server') }}
                        </Link>
                    </div>
                    <p class="text-xs text-TextGray">
                        {{ selectedServer ? $t('shop.items_for_selected_server') : $t('shop.pick_server_to_filter') }}
                    </p>
                </div>
            </div>

            <!-- Поиск товаров -->
            <div ref="searchRef" class="w-full">
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
                >
                    <ShopItemCard
                        :item="item"
                        @buy="handleBuyItem"
                    />
                </div>
            </div>

            <div v-if="filteredItems.length === 0" class="py-8 text-center text-TextGray">
                <p class="text-lg">{{ $t('shop.no_items') }}</p>
                <p v-if="selectedServer" class="mt-2 text-sm">
                    {{ $t('shop.for_server', { name: selectedServer.name }) }}
                </p>
                <p v-else-if="searchQuery" class="mt-2 text-sm">
                    {{ $t('shop.for_query', { q: searchQuery }) }}
                </p>
                <Link
                    v-if="selectedServer"
                    href="/shop/server"
                    class="mt-4 inline-block text-Orange hover:underline"
                >
                    {{ $t('shop.pick_other_server') }}
                </Link>
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
    image?: string;
    category_id: number;
    variations?: any[];
}

const props = defineProps<{
    categories: Category[];
    items: ShopItem[];
    selectedServer?: Server | null;
    categorySlug?: string | null;
}>();

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

    modalStore.open({
        itemId: item.id,
        title: itemName(item),
        description: itemDescription(item),
        priceRub: item.price,
        imageSrc: item.image ? '/' + item.image : '/images/subscriptions/elete-pack.png',
        variations: variations,
        defaultAmount: selectedQuantity,
    });
};
</script>
