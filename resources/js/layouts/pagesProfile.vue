<template>
    <div class="flex w-full flex-col items-center gap-2.5 md:gap-3.5 lg:gap-5">
        <SelectPageProfile v-model="activePageProxy" />

        <Transition
            mode="out-in"
            :css="false"
            @enter="onEnter"
            @leave="onLeave"
        >
            <component
                :is="activeComponent"
                :key="activePageProxy"
                :is_empty="is_empty"
            />
        </Transition>
    </div>
</template>

<script>
import gsap from 'gsap';
import BonusesPage from '@/components/selectPageProfile/pages/bonuses.vue';
import InventoryPage from '@/components/selectPageProfile/pages/Inventory.vue';
import MarketPage from '@/components/selectPageProfile/pages/market.vue';
import StatisticsPage from '@/components/selectPageProfile/pages/statistics.vue';
import SubscriptionsPage from '@/components/selectPageProfile/pages/subscriptions.vue';
import SelectPageProfile from '@/components/selectPageProfile/select.vue';

export default {
    components: {
        BonusesPage,
        InventoryPage,
        MarketPage,
        SelectPageProfile,
        StatisticsPage,
        SubscriptionsPage,
    },
    props: {
        modelValue: { type: String, required: true },
        is_empty: { type: Boolean, default: false },
    },
    emits: ['update:modelValue'],
    computed: {
        activePageProxy: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
        activeComponent() {
            switch (this.activePageProxy) {
                case 'bonuses':
                    return BonusesPage;
                case 'market':
                    return MarketPage;
                case 'inventory':
                    return InventoryPage;
                case 'subscriptions':
                    return SubscriptionsPage;
                case 'statistics':
                default:
                    return StatisticsPage;
            }
        },
    },
    methods: {
        onEnter(el, done) {
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: 10 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power3.out',
                    onComplete: done,
                },
            );
        },
        onLeave(el, done) {
            gsap.to(el, {
                autoAlpha: 0,
                y: -6,
                duration: 0.2,
                ease: 'power2.inOut',
                onComplete: done,
            });
        },
    },
};
</script>

<style></style>
