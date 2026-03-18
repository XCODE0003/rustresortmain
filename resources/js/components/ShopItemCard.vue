<template>
    <div class="relative">
        <!-- Блок выбора количества слева -->
        <!-- <div
            v-if="!hasVariations"
            @click.stop
            class="button-black absolute top-[30%] -left-[38px] flex -translate-y-1/2 flex-col items-center gap-2 rounded-md border border-StrokeGray px-3 py-3 text-sm font-bold text-white"
        >
            <button
                type="button"
                @click.stop="decrementQuantity"
                class="button-black absolute top-1/2 left-[-10px] flex size-5 -translate-y-1/2 items-center justify-center rounded-full border border-StrokeGray duration-300 ease-in-out hover:scale-110 hover:border-white/70 hover:opacity-80"
            >
                <svg
                    width="5"
                    height="1"
                    viewBox="0 0 5 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="5"
                        width="1"
                        height="5"
                        rx="0.5"
                        transform="rotate(90 5 0)"
                        fill="#636363"
                    />
                </svg>
            </button>
            x{{ quantity }}
            <button
                type="button"
                @click.stop="incrementQuantity"
                class="button-black absolute top-1/2 right-[-10px] flex size-5 -translate-y-1/2 items-center justify-center rounded-full border border-StrokeGray duration-300 ease-in-out hover:scale-110 hover:border-white/70 hover:opacity-80"
            >
                <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="2"
                        width="1"
                        height="5"
                        rx="0.5"
                        fill="#636363"
                    />
                    <rect
                        x="5"
                        y="2"
                        width="1"
                        height="5"
                        rx="0.5"
                        transform="rotate(90 5 2)"
                        fill="#636363"
                    />
                </svg>
            </button>
        </div> -->

        <!-- Карточка товара -->
        <div
            @click="handleBuy"
            class="block-black relative h-[245px] w-[225px] rounded-xl border border-StrokeGray transition-colors duration-200 hover:border-Orange cursor-pointer"
            style="contain: layout style"
        >
            <!-- Декоративный glow -->
            <!-- <div
                class="absolute top-1/2 left-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-Orange/20"
            ></div> -->

            <img
                :src="imageSrc"
                :alt="item.name_ru"
                loading="lazy"
                decoding="async"
                width="145"
                height="145"
                class="absolute top-1/2 left-1/2 z-10 h-[145px] w-auto object-contain -translate-x-1/2 -translate-y-1/2"
            />

            <div
                class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-nowrap text-white uppercase"
            >
                {{ item.name_ru }}
            </div>
            <div
                class="absolute bottom-[-22px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 text-nowrap"
            >
                <button
                    @click.stop="handleBuy"
                    class="cursor-pointer rounded-md bg-PaleOrange px-5 py-2.5 text-sm font-bold text-Orange duration-300 ease-in-out hover:bg-Orange hover:text-PaleOrange"
                >
                    {{ item.price }} ₽
                </button>

                <button
                    @click.stop="handleAddToCart"
                    class="flex size-10 items-center justify-center rounded-md bg-PaleGreen text-Green duration-300 ease-in-out hover:bg-Green hover:text-PaleGreen hover:opacity-80"
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
                            d="M7.84204 17.5265C8.50552 17.5265 9.04907 18.0819 9.04907 18.7677C9.04887 19.4452 8.5054 20.0001 7.84204 20.0001C7.17069 20.0001 6.6274 19.4452 6.6272 18.7677C6.6272 18.0819 7.17056 17.5265 7.84204 17.5265ZM16.8352 17.5265C17.4986 17.5266 18.0422 18.082 18.0422 18.7677C18.042 19.4451 17.4985 20.0001 16.8352 20.0001C16.1639 20.0001 15.6206 19.4452 15.6204 18.7677C15.6204 18.0819 16.1637 17.5265 16.8352 17.5265ZM4.20435 4.00698L6.1106 4.29995C6.38238 4.34975 6.58271 4.57803 6.60669 4.85561L6.75806 6.68374C6.78204 6.9458 6.99054 7.14174 7.24634 7.14174H18.0413C18.5289 7.14174 18.8485 7.31405 19.1682 7.6896C19.4879 8.06514 19.5439 8.60392 19.4719 9.09292L18.7131 14.4484C18.5692 15.4777 17.7058 16.2364 16.6907 16.2365H7.96899C6.90598 16.2363 6.02664 15.4038 5.93872 14.3263L5.20337 5.4269L3.99634 5.21499C3.67671 5.15783 3.45327 4.83928 3.50903 4.51284C3.56499 4.17893 3.8766 3.95718 4.20435 4.00698ZM13.1965 10.1623C12.861 10.1625 12.5979 10.4318 12.5979 10.7746C12.598 11.109 12.8611 11.3866 13.1965 11.3869H15.4114C15.747 11.3868 16.0109 11.1092 16.011 10.7746C16.011 10.4317 15.7471 10.1623 15.4114 10.1623H13.1965Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface ShopItem {
    id: number;
    name_ru: string;
    price: number;
    image?: string;
    variations?: any[];
}

const props = defineProps<{
    item: ShopItem;
}>();

const emit = defineEmits<{
    buy: [payload: { item: ShopItem; quantity: number }];
    addToCart: [item: ShopItem & { quantity: number }];
}>();

const quantity = ref(1);

const hasVariations = computed(() => {
    return props.item.variations && props.item.variations.length > 0;
});

const imageSrc = computed(() => {
    return props.item.image ? '/' + props.item.image : '/images/subscriptions/elete-pack.png';
});

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const handleBuy = () => {
    emit('buy', {
        item: props.item,
        quantity: quantity.value
    });
};

const handleAddToCart = () => {
    emit('addToCart', { ...props.item, quantity: quantity.value });
};
</script>
