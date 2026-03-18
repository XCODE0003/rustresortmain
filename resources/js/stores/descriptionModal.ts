import { computed, reactive, toRefs } from 'vue';

export type VariationOption = {
    label: string;
    value: number;
    price: number;
    variationId: number;
};

type DescriptionModalPayload = {
    itemId?: number;
    title?: string;
    description?: string;
    priceRub?: number;
    imageSrc?: string;
    variations?: VariationOption[];
    defaultAmount?: number;
};

let pendingAmount: number | null = null;

const state = reactive({
    itemId: null as number | null,
    isOpen: false,
    title: 'Event Rate X3',
    description:
        'Рейты действуют только на добычу ресурсов: дерево, камень, железо, сера (добытые инструментами). Количество получаемых ресурсов инструментами: Камень(3000), Металл(1800), Сера(900). Не влияют на компоненты, ящики, дизель и другие...',
    priceRub: 599,
    imageSrc: '/images/subscriptions/elete-pack.png',

    variations: [] as VariationOption[],
    selectedVariationIndex: 0,
    amount: 1,
    isGift: false,
    giftSteamId: '',
});

const defaultVariations: VariationOption[] = [
    { label: '7 дней', value: 7, price: 599, variationId: 1 },
    { label: '14 дней', value: 14, price: 999, variationId: 2 },
    { label: '30 дней', value: 30, price: 1799, variationId: 3 },
];

export function useDescriptionModalStore() {
    const hasVariations = computed(() => state.variations.length > 0);

    const selectedVariation = computed<VariationOption>({
        get() {
            return (
                state.variations[state.selectedVariationIndex] ??
                defaultVariations[0]
            );
        },
        set(option) {
            const index = state.variations.findIndex((v) => v.variationId === option.variationId);
            if (index !== -1) {
                state.selectedVariationIndex = index;
            }
        },
    });

    const currentPrice = computed(() => {
        if (hasVariations.value) {
            return selectedVariation.value.price;
        }
        return state.priceRub * state.amount;
    });

    const setPendingAmount = (amount: number): void => {
        pendingAmount = Math.max(1, Math.floor(Number(amount)));
    };

    const open = (payload: DescriptionModalPayload = {}): void => {
        // Количество: сначала defaultAmount из payload, иначе pendingAmount, иначе 1
        const amountFromPayload = payload.defaultAmount;
        const amountFromPending = pendingAmount;
        state.amount = (amountFromPayload != null && amountFromPayload >= 1)
            ? Math.floor(Number(amountFromPayload))
            : (amountFromPending != null && amountFromPending >= 1)
                ? amountFromPending
                : 1;
        pendingAmount = null; // сбрасываем после использования

        if (payload.itemId !== undefined) {
            state.itemId = payload.itemId;
        }
        if (payload.title !== undefined) {
            state.title = payload.title;
        }
        if (payload.description !== undefined) {
            state.description = payload.description;
        }
        if (payload.priceRub !== undefined) {
            state.priceRub = payload.priceRub;
        }
        if (payload.imageSrc !== undefined) {
            state.imageSrc = payload.imageSrc;
        }
        
        if (payload.variations !== undefined && payload.variations.length > 0) {
            state.variations = payload.variations;
            state.selectedVariationIndex = 0;
        } else {
            state.variations = [];
        }

        state.isOpen = true;
    };

    const close = (): void => {
        state.isOpen = false;
        state.itemId = null;
    };

    const toggleGift = (): void => {
        state.isGift = !state.isGift;

        if (!state.isGift) {
            state.giftSteamId = '';
        }
    };

    const setGift = (value: boolean): void => {
        state.isGift = value;

        if (!state.isGift) {
            state.giftSteamId = '';
        }
    };

    const incrementAmount = (): void => {
        state.amount++;
    };

    const decrementAmount = (): void => {
        if (state.amount > 1) {
            state.amount--;
        }
    };

    const setAmount = (value: number): void => {
        if (value >= 1) {
            state.amount = value;
        }
    };

    return {
        ...toRefs(state),
        hasVariations,
        selectedVariation,
        currentPrice,
        open,
        close,
        setPendingAmount,
        toggleGift,
        setGift,
        incrementAmount,
        decrementAmount,
        setAmount,
    };
}

