<template>
    <MainLayout>
        <div class="container flex flex-col gap-6 md:gap-9 lg:gap-10">
            <div
                class="page-section flex w-full items-center justify-center max-md:justify-around md:gap-12"
            >
                <Link
                    href="/tickets"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{ 'text-white': $page.url.includes('/tickets') }"
                >
                    {{ $t('faq.tickets') }}
                </Link>
                <Link
                    href="/faq"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{ 'text-white': $page.url.includes('/faq') }"
                >
                    {{ $t('faq.questions') }}
                </Link>
            </div>

            <div v-if="faqs.length === 0" class="page-section flex flex-col gap-2">
                <div
                    v-for="i in 4"
                    :key="i"
                    class="animate-pulse w-full rounded-xl border border-StrokeGray px-5 py-4"
                >
                    <div class="h-4 w-3/4 rounded bg-white/10" />
                </div>
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
import { Link } from '@inertiajs/vue3';
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
