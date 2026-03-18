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
                    Тикеты
                </Link>
                <Link
                    href="/faq"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{ 'text-white': $page.url.includes('/faq') }"
                >
                    Частые вопросы
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
                            :class="{ 'rotate-180': item.open }"
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
                            v-show="item.open"
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
import { reactive } from 'vue';
import MainLayout from '@/layouts/main.vue';

const faqItems = reactive([
    {
        question: 'Проблема с подключением к серверу',
        answer:
            'Одно из самых важных, популярных, невероятно ненавистных и сложных действий в Rust - это набеги. Механика набегов постоянно настраивается и сбалансирована, поскольку игроки толкают эту игру к ее пределам. Пожалуйста, ознакомьтесь важных, популярных, невероятно ненавистных и сложных',
        open: false,
    },
    {
        question: 'Как приобрести VIP-услугу для обхода очереди?',
        answer:
            'Одно из самых важных, популярных, невероятно ненавистных и сложных действий в Rust - это набеги. Механика набегов постоянно настраивается и сбалансирована, поскольку игроки толкают эту игру к ее пределам. Пожалуйста, ознакомьтесь важных, популярных, невероятно ненавистных и сложных',
        open: false,
    },
    {
        question: 'Как начать играть в RUST?',
        answer:
            'Одно из самых важных, популярных, невероятно ненавистных и сложных действий в Rust - это набеги. Механика набегов постоянно настраивается и сбалансирована, поскольку игроки толкают эту игру к ее пределам. Пожалуйста, ознакомьтесь важных, популярных, невероятно ненавистных и сложных',
        open: false,
    },
    {
        question:
            'У меня проблема с оплатой/игрой/блокировокой, куда мне обратиться?',
        answer:
            'Одно из самых важных, популярных, невероятно ненавистных и сложных действий в Rust - это набеги. Механика набегов постоянно настраивается и сбалансирована, поскольку игроки толкают эту игру к ее пределам. Пожалуйста, ознакомьтесь важных, популярных, невероятно ненавистных и сложных',
        open: false,
    },
    {
        question:
            'Общие сведения и реквизиты, контакты для связи с проектом',
        answer:
            'Одно из самых важных, популярных, невероятно ненавистных и сложных действий в Rust - это набеги. Механика набегов постоянно настраивается и сбалансирована, поскольку игроки толкают эту игру к ее пределам. Пожалуйста, ознакомьтесь важных, популярных, невероятно ненавистных и сложных',
        open: false,
    },
]);

function toggle(index: number): void {
    const item = faqItems[index];
    item.open = !item.open;
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
