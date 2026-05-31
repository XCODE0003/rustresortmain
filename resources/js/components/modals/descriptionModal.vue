<template>
    <Transition name="modal">
        <div
            v-if="isOpen"
            class="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto overscroll-contain px-3.5 py-8 backdrop-blur-xl"
            @click="close"
        >
            <div class="flex min-h-full items-center justify-center">
            <div
                class="bg-modal relative flex w-full max-w-[660px] flex-col items-center gap-5 rounded-xl border border-StrokeGray p-2.5 md:p-5 lg:p-[30px]"
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
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 blur-2xl"
                    />
                </div>
            </div>
            <div
                class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-white uppercase"
            >
                {{ title }}
            </div>
            <!-- Сколько товара будет выдано (за выбранное количество) -->
            <div
                v-if="!hasVariations && unitAmount > 1"
                class="absolute right-3 top-3 z-20 rounded-md border border-StrokeGray bg-[#0E1012]/90 px-3 py-1.5 text-xs font-bold text-Orange"
            >
                x{{ receivedFormatted }}
            </div>
            <div class="flex w-full flex-col gap-8 text-center">
                <h1 v-html="cleanedDescription" class="text-xs/[30px] description-modal-text font-medium text-white rounded-lg">
                </h1>

                <!-- Привилегии (is_command) активируются сразу через RCON на ВЫБРАННОМ
                     сервере, даже если игрок оффлайн (нужно для пропуска очереди) →
                     требуется выбор сервера. Обычные товары идут в корзину и забираются
                     на любом сервере → выбор не нужен. -->
                <div v-if="isCommand" ref="serverDropdownRef" class="relative">
                    <button
                        type="button"
                        @click="toggleServerDropdown"
                        :disabled="!allServers.length"
                        :class="[
                            'flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 transition-all duration-300',
                            isServerDropdownOpen
                                ? 'border-Orange/70'
                                : serverId
                                    ? 'button-black border-StrokeGray hover:border-white/30'
                                    : 'border-yellow-500/50 bg-yellow-500/5 hover:border-yellow-400',
                            !allServers.length ? 'cursor-default' : 'cursor-pointer',
                        ]"
                    >
                        <template v-if="serverId">
                            <span class="size-2 shrink-0 rounded-full bg-green-400"></span>
                            <span class="text-xs font-medium text-TextGray">{{ $t('shop.server_label') }}</span>
                            <span class="flex-1 truncate text-left text-xs font-bold text-white">{{ serverName }}</span>
                        </template>
                        <template v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 shrink-0 text-yellow-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            <span class="flex-1 text-left text-xs font-medium text-yellow-400">{{ $t('shop.no_server_selected') }}</span>
                        </template>
                        <svg
                            v-if="allServers.length"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            :class="['size-4 shrink-0 text-TextGray transition-transform duration-200', isServerDropdownOpen ? 'rotate-180' : '']"
                        >
                            <path d="m6 9 6 6 6-6"/>
                        </svg>
                    </button>

                    <Transition name="server-dropdown">
                        <div
                            v-if="isServerDropdownOpen && allServers.length"
                            class="server-dropdown-panel absolute top-full left-0 right-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-lg border border-StrokeGray shadow-2xl"
                        >
                            <button
                                v-for="server in allServers"
                                :key="server.id"
                                type="button"
                                @click="selectServer(server)"
                                :class="[
                                    'flex w-full items-center gap-3 px-4 py-2.5 text-left text-xs transition-colors duration-200 cursor-pointer hover:bg-white/5',
                                    server.id === serverId ? 'bg-Orange/10' : '',
                                ]"
                            >
                                <span class="size-2 shrink-0 rounded-full bg-green-400"></span>
                                <span :class="['flex-1 truncate font-medium', server.id === serverId ? 'text-Orange' : 'text-white']">
                                    {{ server.name }}
                                </span>
                                <svg
                                    v-if="server.id === serverId"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="size-4 shrink-0 text-Orange"
                                >
                                    <path d="M20 6 9 17l-5-5"/>
                                </svg>
                            </button>
                        </div>
                    </Transition>
                </div>
                <!-- Обычный товар — на любой сервер -->
                <div
                    v-else
                    class="rounded-lg border border-StrokeGray bg-white/5 px-4 py-2.5 text-center text-xs font-medium text-TextGray"
                >
                    {{ $t('shop.available_any_server') }}
                </div>

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
                            {{ $t('shop.gift_hint') }}
                        </span>
                    </div>
                </Transition>

                <div
                    class="flex items-stretch justify-center gap-2.5"
                >
                    <button
                        type="button"
                        @click="handleBuy"
                        :disabled="itemId == null || (isCommand && serverId == null)"
                        class="shrink-0 rounded-lg bg-Orange px-5 py-3.5 text-sm font-bold whitespace-nowrap text-black duration-300 ease-in-out hover:bg-PaleOrange hover:text-Orange disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {{ $t('shop.buy_for', { price: displayCurrentPrice }) }}
                    </button>

                    <AppSelect
                        v-if="hasVariations"
                        v-model="selectedVariation"
                        :options="variations"
                        :prefix="$t('shop.duration_prefix')"
                    />

                    <div
                        v-else
                        class="button-black flex shrink-0 items-center gap-2.5 rounded-lg border border-StrokeGray px-3 py-3.5 text-sm font-bold whitespace-nowrap"
                    >
                        <span class="text-TextGray">{{ $t('shop.quantity_label') }}</span>
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
                            'button-black flex min-w-0 items-center gap-2.5 rounded-lg border border-StrokeGray px-5 py-3.5 text-sm font-bold duration-300 ease-in-out',
                            isGift ? 'text-Orange' : 'text-TextGray',
                        ]"
                    >
                        <span class="truncate">{{ $t('shop.buy_as_gift') }}</span>
                        <Toggle v-model="giftState" class="shrink-0" />
                    </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

import AppSelect from '@/components/select.vue';
import Toggle from '@/components/toggle.vue';
import { useDescriptionModalStore, type ServerOption } from '@/stores/descriptionModal';
import { useCurrency } from '@/composables/useCurrency';

const {
    itemId,
    isOpen,
    title,
    description,
    imageSrc,
    priceUsd,
    isGift,
    giftSteamId,
    hasVariations,
    variations,
    selectedVariation,
    amount,
    unitAmount,
    isCommand,
    kind,
    currentPrice,
    serverId,
    serverName,
    availableServers,
    close,
    setGift,
    setServer,
    isItemAvailableOnServer,
    incrementAmount,
    decrementAmount,
} = useDescriptionModalStore();

const { displayPrice } = useCurrency();

// Список активных серверов шарится глобально (HandleInertiaRequests.shop_servers),
// поэтому выбор сервера для привилегий работает на любой странице магазина.
const page = usePage();
const allServers = computed<ServerOption[]>(() => ((page.props as any).shop_servers ?? []) as ServerOption[]);

const displayCurrentPrice = computed(() => {
    // Для обычных товаров USD-цена масштабируется множителем (priceUsd × amount).
    // Для вариаций отдельной USD-цены нет → displayPrice сконвертирует ₽ по курсу.
    const usd = (! hasVariations.value && priceUsd.value != null && Number(priceUsd.value) > 0)
        ? Number(priceUsd.value) * amount.value
        : null;
    return displayPrice(currentPrice.value, usd);
});

// Сколько единиц товара выдастся за выбранное количество (множитель × базовое).
const receivedFormatted = computed(() =>
    (Number(amount.value) * Number(unitAmount.value)).toLocaleString('ru-RU'),
);

const isServerDropdownOpen = ref(false);
const serverDropdownRef = ref<HTMLElement | null>(null);

const toggleServerDropdown = (): void => {
    if (!allServers.value.length) return;
    isServerDropdownOpen.value = !isServerDropdownOpen.value;
};

const selectServer = (server: ServerOption): void => {
    setServer(server);
    isServerDropdownOpen.value = false;
};

const onServerDropdownPointerDown = (event: PointerEvent): void => {
    if (!isServerDropdownOpen.value) return;
    const root = serverDropdownRef.value;
    const target = event.target as Node | null;
    if (!root || !target) return;
    if (!root.contains(target)) {
        isServerDropdownOpen.value = false;
    }
};

// Закрываем дропдаун при закрытии модалки + блокируем скролл фона (магазина),
// чтобы при докрутке описания не скроллилась страница под модалкой.
watch(isOpen, (value) => {
    if (!value) isServerDropdownOpen.value = false;
    if (typeof document !== 'undefined') {
        document.body.style.overflow = value ? 'hidden' : '';
    }
});

/**
 * Вырезаем мусорный блок «Дополнительные услуги» / «Additional services» из описания товара.
 * Эти секции остались от legacy-импорта где в описание VIP-паков копировали список других услуг (Rate, SkinBox, Stamina и т.д.) —
 * показывать их пользователю при покупке КОНКРЕТНОГО товара неправильно (вводит в заблуждение).
 * Стрим — самый дешёвый фикс: данные в БД не трогаем, только рендер.
 */
const DESCRIPTION_CUTOFF_MARKERS = [
    'Дополнительные услуги',
    'Дополнительные  услуги',
    'дополнительные услуги',
    'Additional services',
    'additional services',
];

const cleanedDescription = computed<string>(() => {
    const raw = String(description.value ?? '');
    if (!raw) return '';

    // Найдём самую раннюю позицию любого маркера и обрежем по ней
    let cutAt = -1;
    for (const marker of DESCRIPTION_CUTOFF_MARKERS) {
        const pos = raw.indexOf(marker);
        if (pos !== -1 && (cutAt === -1 || pos < cutAt)) {
            cutAt = pos;
        }
    }

    if (cutAt === -1) return raw;

    // Если маркер сидит внутри HTML-тега — поднимемся к началу тега, чтобы не оставить «огрызок»
    let cleanCut = cutAt;
    const lastTagStart = raw.lastIndexOf('<', cutAt);
    const lastTagEnd = raw.lastIndexOf('>', cutAt);
    if (lastTagStart > lastTagEnd) {
        cleanCut = lastTagStart;
    }

    return raw.slice(0, cleanCut).trimEnd();
});

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
    // Привилегию нельзя выдать без сервера (RCON-команда уходит на конкретный сервер).
    if (isCommand.value && serverId.value == null) return;

    const pageProps = usePage().props as any;
    const userBalance = Number(pageProps.auth?.user?.balance ?? 0);
    const price = Number(currentPrice.value);

    if (userBalance >= price) {
        const payload: Record<string, unknown> = {
            count: hasVariations.value ? 1 : amount.value,
            var_id: hasVariations.value ? (selectedVariation.value?.variationId ?? null) : null,
            server_id: serverId.value,
            gift_steam_id: isGift.value && giftSteamId.value ? String(giftSteamId.value).trim() : null,
        };
        // Набор покупается по set_id, обычный товар — по item_id.
        if (kind.value === 'set') {
            payload.set_id = itemId.value;
        } else {
            payload.item_id = itemId.value;
        }

        router.post('/shop/buy-balance', payload, {
            // Быстрые повторные покупки: не перезагружаем весь магазин, а обновляем
            // только баланс (auth). preserveState не даёт перемонтировать страницу
            // (без повторных GSAP-анимаций 100+ карточек) → покупка мгновенная.
            preserveScroll: true,
            preserveState: true,
            only: ['auth'],
            onSuccess: () => close(),
        });
    } else {
        close();
        router.visit('/payment');
    }
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
        // Сначала гасим вложенный дропдаун, и только потом — модалку
        if (isServerDropdownOpen.value) {
            isServerDropdownOpen.value = false;
        } else {
            close();
        }
    }
};

onMounted(() => {
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onServerDropdownPointerDown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('pointerdown', onServerDropdownPointerDown);
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
    }
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

.server-dropdown-panel {
    background: rgba(14, 16, 18, 0.97);
    backdrop-filter: blur(24px);
}

.server-dropdown-enter-active,
.server-dropdown-leave-active {
    transition:
        opacity 0.18s ease,
        transform 0.18s ease;
    transform-origin: top center;
}

.server-dropdown-enter-from,
.server-dropdown-leave-to {
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
}
</style>
