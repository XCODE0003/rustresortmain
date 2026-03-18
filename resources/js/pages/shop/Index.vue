<template>
    <ShopLayout>
        <div class="relative flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
            <!-- Баннеры -->
            <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                <div
                    class="relative h-[180px] overflow-hidden rounded-xl border border-StrokeGray md:h-[220px] lg:h-[260px]"
                >
                    <img
                        src="/images/banner-1.png"
                        alt="Баннер 1"
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
                            Специальное предложение
                        </h2>
                        <p class="text-sm text-TextGray">
                            Скидки до 50% на избранные товары
                        </p>
                    </div>
                </div>

                <div
                    class="relative h-[180px] overflow-hidden rounded-xl border border-StrokeGray md:h-[220px] lg:h-[260px]"
                >
                    <img
                        src="/images/banner-2.png"
                        alt="Баннер 2"
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
                            Новые товары
                        </h2>
                        <p class="text-sm text-TextGray">
                            Эксклюзивные предметы в магазине
                        </p>
                    </div>
                </div>
            </div>

            <!-- Блок выбора сервера -->
            <div
                class="relative w-full rounded-xl border border-StrokeGray p-5 md:p-6 lg:p-8"
            >
                <div class="flex flex-col gap-4">
                    <h3 class="text-base font-bold text-white uppercase md:text-lg">
                        Выбор сервера
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <Link
                            v-if="selectedServer"
                            href="/shop/server"
                            class="button-black flex items-center gap-2 rounded-lg border border-Orange px-4 py-2.5 text-sm font-bold text-Orange duration-300 ease-in-out hover:opacity-80"
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
                            Выбрать сервер
                        </Link>
                    </div>
                    <p class="text-xs text-TextGray">
                        {{ selectedServer ? 'Показаны товары для выбранного сервера' : 'Выберите сервер для фильтрации товаров' }}
                    </p>
                </div>
            </div>

            <!-- Поиск товаров -->
            <div class="w-full">
                <div class="relative">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Поиск товаров..."
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
                <div class="flex w-full flex-wrap items-center justify-center gap-1.5">
                    <button
                        @click="selectedCategory = null"
                        :class="[
                            'button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedCategory === null ? 'text-Orange border-Orange' : 'text-TextGray hover:text-white'
                        ]"
                    >
                        Все товары
                    </button>
                    <button
                        v-for="category in categories"
                        :key="category.id"
                        @click="selectedCategory = category.id"
                        :class="[
                            'button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold uppercase duration-300 ease-in-out',
                            selectedCategory === category.id ? 'text-Orange border-Orange' : 'text-TextGray hover:text-white'
                        ]"
                    >
                        {{ category.title_ru }}
                    </button>
                    <Link
                        href="/shop/basket"
                        class="button-black top-0 right-0 flex items-center gap-1 rounded-lg border border-StrokeGray p-2.5 text-sm font-bold uppercase duration-300 ease-in-out hover:opacity-80 md:absolute"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.34204 17.5265C9.00552 17.5265 9.54907 18.0819 9.54907 18.7677C9.54887 19.4452 9.0054 20.0001 8.34204 20.0001C7.67069 20.0001 7.1274 19.4452 7.1272 18.7677C7.1272 18.0819 7.67056 17.5265 8.34204 17.5265ZM17.3352 17.5265C17.9986 17.5266 18.5422 18.082 18.5422 18.7677C18.542 19.4451 17.9985 20.0001 17.3352 20.0001C16.1639 20.0001 16.1206 19.4452 16.1204 18.7677C16.1204 18.0819 16.6637 17.5265 17.3352 17.5265ZM4.70435 4.00698L6.6106 4.29995C6.38238 4.34975 6.58271 4.57803 6.60669 4.85561L6.75806 6.68374C6.78204 6.9458 6.99054 7.14174 7.74634 7.14174H18.5413C19.0289 7.14174 19.3485 7.31405 19.6682 7.6896C19.4879 8.06514 20.0439 8.60392 19.9719 9.09292L19.2131 14.4484C19.0692 15.4777 18.2058 16.2364 17.1907 16.2365H8.46899C7.40598 16.2363 6.52664 15.4038 6.43872 14.3263L5.70337 5.4269L4.49634 5.21499C4.17671 5.15783 3.95327 4.83928 4.00903 4.51284C4.06499 4.17893 4.3766 3.95718 4.70435 4.00698ZM13.6965 10.1623C13.361 10.1625 13.0979 10.4318 13.0979 10.7746C13.098 11.109 13.3611 11.3866 13.6965 11.3869H15.9114C16.247 11.3868 16.0109 11.1092 16.511 10.7746C16.511 10.4317 16.2471 10.1623 15.9114 10.1623H13.6965Z"
                                fill="#636363"
                            />
                        </svg>
                        <span class="text-xs/[20px] font-bold text-Orange">
                            0 ₽
                        </span>
                        <div
                            class="flex size-4 items-center justify-center rounded-full bg-PaleGreen text-[9px]/[20px] font-bold text-Green"
                        >
                            0
                        </div>
                    </Link>
                </div>
            </div>

            <!-- Товары -->
            <div class="flex flex-wrap justify-center gap-x-1 gap-y-16 md:gap-x-2 md:gap-y-20 lg:gap-x-2.5 lg:gap-y-24">
                <ShopItemCard
                    v-for="item in filteredItems"
                    :key="item.id"
                    :item="item"
                    @buy="handleBuyItem"
                    @add-to-cart="addToCart"
                />
            </div>

            <div v-if="filteredItems.length === 0" class="py-8 text-center text-TextGray">
                <p class="text-lg">Товары не найдены</p>
                <p v-if="selectedServer" class="mt-2 text-sm">
                    Для сервера: {{ selectedServer.name }}
                </p>
                <p v-else-if="searchQuery" class="mt-2 text-sm">
                    По запросу: "{{ searchQuery }}"
                </p>
                <Link
                    v-if="selectedServer"
                    href="/shop/server"
                    class="mt-4 inline-block text-Orange hover:underline"
                >
                    Выбрать другой сервер
                </Link>
            </div>
        </div>
    </ShopLayout>
</template>

<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { ref, computed, watch } from 'vue';
import ShopItemCard from '@/components/ShopItemCard.vue';
import ShopLayout from '@/layouts/shop.vue';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

interface Category {
    id: number;
    title_ru: string;
    path: string;
}

interface Server {
    id: number;
    name: string;
}

interface ShopItem {
    id: number;
    name_ru: string;
    description_ru?: string;
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

const selectedCategory = ref<number | null>(null);
const searchQuery = ref('');
const searchQueryDebounced = ref('');
const modalStore = useDescriptionModalStore();

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
        filtered = filtered.filter((item: ShopItem) =>
            item.name_ru.toLowerCase().includes(query)
        );
    }

    return filtered;
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
        title: item.name_ru,
        description: item.description_ru || 'Описание товара',
        priceRub: item.price,
        imageSrc: item.image ? '/' + item.image : '/images/subscriptions/elete-pack.png',
        variations: variations,
        defaultAmount: selectedQuantity,
    });
};

const addToCart = (item: any) => {
    router.post('/shop/cart', {
        item_id: item.id,
        count: item.quantity || 1,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            // Можно добавить уведомление
        },
    });
};
</script>
