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
                :alt="displayName"
                loading="lazy"
                decoding="async"
                width="145"
                height="145"
                class="absolute top-1/2 left-1/2 z-10 h-[145px] w-auto object-contain -translate-x-1/2 -translate-y-1/2"
            />

            <div
                class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-nowrap text-white uppercase"
            >
                {{ displayName }}
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useShopLocale } from '@/composables/useShopLocale';

interface ShopItem {
    id: number;
    name_ru: string;
    name_en?: string | null;
    price: number;
    image?: string;
    variations?: any[];
}

const props = defineProps<{
    item: ShopItem;
}>();

const { itemName } = useShopLocale();
const displayName = computed(() => itemName(props.item));

const emit = defineEmits<{
    buy: [payload: { item: ShopItem; quantity: number }];
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
</script>
