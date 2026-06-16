<template>
    <MainLayout>
        <div class="container flex flex-col gap-6 md:gap-9 lg:gap-10">
            <div class="page-section flex w-full items-center justify-center">
                <h1
                    class="text-[19px] font-bold text-white uppercase md:text-[22px] lg:text-[26px]"
                >
                    {{ $t('faq.questions') }}
                </h1>
            </div>

            <div
                v-if="faqs.length === 0"
                class="page-section flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-StrokeGray px-5 py-12 text-center"
            >
                <p class="text-sm font-medium text-TextGray md:text-base">
                    {{ $t('faq.empty') }}
                </p>
            </div>

            <div v-else class="flex w-full flex-col gap-1 lg:gap-2.5">
                <div
                    v-for="(item, index) in faqs"
                    :key="item.id"
                    class="faq-item group w-full cursor-pointer gap-3 rounded-xl border border-StrokeGray px-5 py-4 duration-300 ease-in-out hover:opacity-80 md:px-6 md:py-5"
                    @click="toggle(index)"
                >
                    <div
                        class="flex items-center justify-between text-sm font-medium text-white duration-300 ease-in-out group-hover:text-white uppercase"
                    >
                        <h1 class="pr-3 text-left">{{ item.question }}</h1>
                        <svg
                            width="24"
                            height="24"
                            class="shrink-0 duration-300 ease-in-out"
                            :class="{ 'rotate-180': expanded[index] }"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <Transition name="faq">
                        <p
                            v-show="expanded[index]"
                            class="overflow-hidden pt-3 text-sm font-medium text-TextGray"
                        >
                            {{ item.answer }}
                        </p>
                    </Transition>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { gsap } from 'gsap';
import MainLayout from '@/layouts/main.vue';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const props = defineProps<{
    faqs: FaqItem[];
}>();

const expanded = reactive<Record<number, boolean>>({});

function toggle(index: number): void {
    expanded[index] = !expanded[index];
}

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo(
        '.page-section',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.1 },
    );
    tl.fromTo(
        '.faq-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.06 },
        '-=0.2',
    );
});
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
    transition:
        opacity 0.25s ease,
        transform 0.2s ease;
}
.faq-enter-from,
.faq-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
