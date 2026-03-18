<template>
    <Transition name="modal">
        <div
            v-if="isOpen"
           class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center px-3.5 backdrop-blur-xl"
            @click="close"
        >
            <div
                class="bg-modal relative flex max-w-[579px] flex-col items-center gap-5 rounded-xl border border-StrokeGray p-2.5 md:p-5 lg:p-[30px]"
                @click.stop
            >
            <div class="p-10 md:p-11 lg:p-12">
                <div class="relative w-max">
                    <img
                        :src="imageSrc"
                        alt=""
                        class="relative z-10 h-[145px]"
                    />
                    <img
                        :src="imageSrc"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70"
                    />
                </div>
            </div>
            <div
                class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-white uppercase"
            >
                {{ title }}
            </div>
            <div class="flex flex-col gap-8 text-center">
                <h1 v-html="description" class="text-xs/[30px] max-h-[400px] overflow-y-auto description-modal-text font-medium text-white">
                </h1>

                <Transition
                    @before-enter="onGiftBeforeEnter"
                    @enter="onGiftEnter"
                    @before-leave="onGiftBeforeLeave"
                    @leave="onGiftLeave"
                >
                    <div
                        v-if="isGift"
                        class="flex flex-col gap-2.5 overflow-hidden text-left"
                    >
                        <input
                            v-model="giftSteamId"
                            type="text"
                            class="button-black rounded-lg border border-StrokeGray px-6 py-3.5 pr-2 text-sm font-bold text-white outline-0 duration-300 ease-in-out placeholder:text-TextGray"
                            placeholder="Steam ID64"
                        />
                        <span class="pl-2.5 text-xs font-medium text-TextGray">
                            Вы сделаете подарок этому пользователю
                        </span>
                    </div>
                </Transition>

                <div
                    class="flex items-stretch gap-2.5 text-nowrap max-md:flex-wrap max-md:justify-center"
                >
                    <button
                        type="button"
                        @click="handleBuy"
                        :disabled="itemId == null"
                        class="rounded-lg bg-Orange px-6 py-3.5 text-sm font-bold text-black duration-300 ease-in-out hover:bg-PaleOrange hover:text-Orange disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Купить за {{ currentPrice }} ₽
                    </button>

                    <AppSelect
                        v-if="hasVariations"
                        v-model="selectedVariation"
                        :options="variations"
                        prefix="Срок - "
                    />

                    <div
                        v-else
                        class="button-black flex items-center gap-2.5 rounded-lg border border-StrokeGray px-3 py-3.5 text-sm font-bold"
                    >
                        <span class="text-TextGray">Кол-во:</span>
                        <div class="flex items-center gap-2.5">
                            <button
                                type="button"
                                @click="decrementAmount"
                                class="flex size-6 items-center justify-center rounded text-white duration-300 hover:bg-StrokeGray"
                            >
                                -
                            </button>
                            <span class="text-white">x{{ amount }}</span>
                            <button
                                type="button"
                                @click="incrementAmount"
                                class="flex size-6 items-center justify-center rounded text-white duration-300 hover:bg-StrokeGray"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        @click="onGiftButtonClick"
                        :class="[
                            'button-black flex items-center gap-2.5 rounded-lg border border-StrokeGray px-6 py-3.5 pr-5 text-sm font-bold duration-300 ease-in-out',
                            isGift ? 'text-Orange' : 'text-TextGray',
                        ]"
                    >
                        Купить в подарок
                        <Toggle v-model="giftState" />
                    </button>
                </div>
            </div>
        </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { computed, onBeforeUnmount, onMounted } from 'vue';

import AppSelect from '@/components/select.vue';
import Toggle from '@/components/toggle.vue';
import { useDescriptionModalStore } from '@/stores/descriptionModal';

const {
    itemId,
    isOpen,
    title,
    description,
    imageSrc,
    isGift,
    giftSteamId,
    hasVariations,
    variations,
    selectedVariation,
    amount,
    currentPrice,
    close,
    setGift,
    incrementAmount,
    decrementAmount,
} = useDescriptionModalStore();

const giftState = computed({
    get() {
        return isGift.value;
    },
    set(value: boolean) {
        setGift(value);
    },
});

const handleBuy = (): void => {
    if (itemId.value == null) return;
    router.post('/shop/cart', {
        item_id: itemId.value,
        count: amount.value,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            close();
            router.visit('/shop/basket');
        },
    });
};

const onGiftButtonClick = (): void => {
    giftState.value = !giftState.value;
};

const onGiftBeforeEnter = (element: Element): void => {
    const el = element as HTMLElement;
    el.style.height = '0px';
    el.style.opacity = '0';
    el.style.transform = 'translateY(-6px)';
};

const onGiftEnter = (element: Element, done: () => void): void => {
    const el = element as HTMLElement;
    const targetHeight = `${el.scrollHeight}px`;

    el.style.transition = 'height 0.3s ease, opacity 0.25s ease, transform 0.25s ease';

    requestAnimationFrame(() => {
        el.style.height = targetHeight;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });

    const cleanup = (): void => {
        el.style.height = 'auto';
        el.style.transition = '';
        done();
    };

    el.addEventListener('transitionend', cleanup, { once: true });
};

const onGiftBeforeLeave = (element: Element): void => {
    const el = element as HTMLElement;
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
};

const onGiftLeave = (element: Element, done: () => void): void => {
    const el = element as HTMLElement;
    el.style.transition = 'height 0.3s ease, opacity 0.2s ease, transform 0.2s ease';

    requestAnimationFrame(() => {
        el.style.height = '0px';
        el.style.opacity = '0';
        el.style.transform = 'translateY(-6px)';
    });

    el.addEventListener('transitionend', done, { once: true });
};

const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
        close();
    }
};

onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown);
});
</script>

<style scoped>
.modal-enter-active {
    animation: modalIn 0.2s ease-out;
}

.modal-leave-active {
    animation: modalOut 0.15s ease-in;
}

.modal-enter-active .bg-modal {
    animation: modalContentIn 0.25s ease-out 0.05s backwards;
}

.modal-leave-active .bg-modal {
    animation: modalContentOut 0.1s ease-in;
}

@keyframes modalIn {
    from {
        opacity: 0;
        backdrop-filter: blur(0px);
    }
    to {
        opacity: 1;
        backdrop-filter: blur(24px);
    }
}

@keyframes modalOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes modalContentIn {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes modalContentOut {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.98);
    }
}
</style>
