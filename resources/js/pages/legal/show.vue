<template>
    <MainLayout>
        <div class="container flex flex-col gap-8">
            <Link
                href="/"
                class="page-section text-[12px]/[12px] uppercase border border-StrokeGray rounded-lg hover:opacity-80 cursor-pointer transition-opacity duration-300 font-medium text-TextGray button-black pl-4 pr-6 py-3 flex items-center gap-1 group w-max"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="group-hover:-translate-x-1 transition-transform duration-300"
                >
                    <path d="M6.00014 12.001L17 12.001" stroke="#636363" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.4365 17.0001L5.99991 12.0005L10.4365 7.00012" stroke="#636363" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                На главную
            </Link>

            <div class="page-section border border-StrokeGray rounded-xl p-8 md:p-12 block-black flex flex-col gap-8">
                <h1 class="text-[22px] md:text-[28px] font-bold text-white uppercase leading-tight">
                    {{ title }}
                </h1>

                <div
                    class="legal-body text-TextGray text-[14px] leading-relaxed"
                    v-html="content || 'Содержимое страницы будет добавлено позже.'"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { gsap } from 'gsap';
import MainLayout from '@/layouts/main.vue';

defineProps<{
    title: string | null;
    content: string | null;
}>();

onMounted(() => {
    gsap.fromTo(
        '.page-section',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
    );
});
</script>

<style>
.legal-body h1,
.legal-body h2,
.legal-body h3 {
    color: #ffffff;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.legal-body h1 { font-size: 1.5rem; }
.legal-body h2 { font-size: 1.25rem; }
.legal-body h3 { font-size: 1.1rem; }

.legal-body p {
    margin-bottom: 1rem;
    line-height: 1.75;
}

.legal-body ul,
.legal-body ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.legal-body ul { list-style-type: disc; }
.legal-body ol { list-style-type: decimal; }

.legal-body li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
}

.legal-body a {
    color: #F3A45D;
    text-decoration: underline;
}
</style>
