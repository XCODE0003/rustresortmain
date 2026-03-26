<template>
    <MainLayout>
        <div class="container flex flex-col gap-6 md:gap-9 lg:gap-10">
            <div
                class="flex w-full items-center justify-center max-md:justify-around md:gap-12"
            >
                <Link
                    href="/tickets"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{
                        'text-white': $page.url.includes('/tickets'),
                    }"
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
            <div class="flex w-full flex-col gap-1 lg:gap-2.5">
                <div
                    v-for="(item, index) in faqItems"
                    :key="index"
                    class="group w-full cursor-pointer gap-3 rounded-xl border border-StrokeGray px-5 py-4  duration-300 ease-in-out hover:opacity-80 md:px-6 md:py-5"
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
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import MainLayout from '@/layouts/main.vue';

const { t } = useI18n();

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

const expanded = reactive<Record<number, boolean>>({});

const faqItems = computed(() =>
    faqKeys.map((key) => ({
        question: t(`faq.${key}`),
        answer: t('faq.placeholder_answer'),
    })),
);

function toggle(index: number): void {
    expanded[index] = !expanded[index];
}
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
