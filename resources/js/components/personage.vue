<template>
    <div ref="root" class="relative w-[240px] lg:w-[340px]">
        <div
            class="relative z-20 w-[240px] rounded-3xl border border-StrokeGray lg:w-[340px]"
        >
            <img
                src="/images/bg-personage.png"
                class="h-full min-h-[440px] w-full rounded-3xl object-cover"
                alt=""
            />
            <div class="absolute top-5 left-6 lg:left-12">
                <img
                    src="/images/hero.png"
                    class="relative z-10 w-[168px] lg:min-h-[490px] lg:w-[200px]"
                    alt=""
                />
                <img
                    src="/images/glow-hero.png"
                    class="absolute top-0 left-4.5 z-0 h-full"
                    alt=""
                />
            </div>
            <div
                class="button-black absolute top-2.5 left-2.5 size-14 rounded-lg border border-StrokeGray p-1  max-md:hidden"
            >
                <img
                    src="/images/lattice.png"
                    alt=""
                    class="h-full w-full object-cover"
                />
                <div
                    class="button-black absolute top-1/2 -right-3 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-StrokeGray "
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 4L5 7L2 4"
                            stroke="#636363"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div
                class="button-black absolute -top-6 left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray px-6 py-3.5 text-xs font-bold text-nowrap text-white "
            >
                GIBA • 25 LVL
            </div>
            <Transition
                :css="false"
                @enter="onCompendiumEnter"
                @leave="onCompendiumLeave"
            >
                <div
                    v-show="showCompendium"
                    class="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-lg bg-PaleOrange px-6 py-3.5 text-xs font-bold text-nowrap text-Orange uppercase "
                >
                    компендиум
                </div>
            </Transition>
        </div>
        <Transition
            :css="false"
            @enter="onBottomWeaponsEnter"
            @leave="onBottomWeaponsLeave"
        >
            <div
                v-show="isInventory"
                class="absolute top-[calc(100%+10px)] left-0 z-10 flex w-[240px] flex-wrap items-center justify-center gap-1 max-lg:hidden lg:w-[340px] lg:gap-2.5"
            >
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
            </div>
        </Transition>

        <Transition
            :css="false"
            @enter="onSideWeaponsEnter"
            @leave="onSideWeaponsLeave"
        >
            <div
                v-show="isInventory"
                class="absolute top-3.5 right-0 flex h-full flex-col items-center gap-1 max-lg:hidden lg:gap-2.5"
            >
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
                <div
                    class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
                >
                    <img
                        src="/images/ak.png"
                        alt=""
                        class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                    />

                    <img
                        src="/images/ak.png"
                        alt=""
                        class="size-full object-cover"
                    />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps<{
    activePage: string;
}>();

const root = ref<HTMLElement | null>(null);

const isInventory = computed(() => props.activePage === 'inventory');
const showCompendium = computed(
    () => props.activePage === 'market' || props.activePage === 'subscriptions',
);

function animateRootWidth(animate: boolean): void {
    if (!root.value) {
        return;
    }

    const isLg =
        typeof window !== 'undefined' &&
        window.matchMedia('(min-width: 1024px)').matches;
    if (!isLg) {
        return;
    }

    const minWidth = isInventory.value ? '404px' : '340px';
    if (!animate) {
        gsap.set(root.value, { minWidth });
        return;
    }

    gsap.to(root.value, { minWidth, duration: 0.35, ease: 'power3.out' });
}
function onBottomWeaponsEnter(el: Element, done: () => void): void {
    gsap.fromTo(
        el,
        { autoAlpha: 0, y: -18 },
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: 'power3.out',
            onComplete: done,
        },
    );
}

function onBottomWeaponsLeave(el: Element, done: () => void): void {
    gsap.to(el, {
        autoAlpha: 0,
        y: -18,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done,
    });
}

function onSideWeaponsEnter(el: Element, done: () => void): void {
    gsap.fromTo(
        el,
        { autoAlpha: 0, x: -18 },
        {
            autoAlpha: 1,
            x: 0,
            duration: 0.35,
            ease: 'power3.out',
            onComplete: done,
        },
    );
}

function onSideWeaponsLeave(el: Element, done: () => void): void {
    gsap.to(el, {
        autoAlpha: 0,
        x: -18,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: done,
    });
}

function onCompendiumEnter(el: Element, done: () => void): void {
    gsap.fromTo(
        el,
        { autoAlpha: 0, y: 8 },
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.28,
            ease: 'power3.out',
            onComplete: done,
        },
    );
}

function onCompendiumLeave(el: Element, done: () => void): void {
    gsap.to(el, {
        autoAlpha: 0,
        y: 8,
        duration: 0.18,
        ease: 'power2.inOut',
        onComplete: done,
    });
}

onMounted(() => {
    animateRootWidth(false);
});

watch(isInventory, () => {
    animateRootWidth(true);
});
</script>

<style></style>
