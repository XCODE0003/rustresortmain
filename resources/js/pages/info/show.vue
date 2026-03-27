<template>
    <MainLayout>
        <div class="container flex flex-col gap-10 page-enter" :class="{ 'page-visible': visible }">
            <h1 class="text-center text-[19px] font-bold text-white uppercase">
                {{ $t('news.title') }}
            </h1>

            <div class="flex flex-col gap-5">
                <Link
                    href="/info"
                    class="text-[12px]/[12px] uppercase border border-StrokeGray rounded-lg hover:opacity-80 cursor-pointer transition-opacity duration-300 font-medium text-TextGray button-black pl-4 pr-6 py-3 flex items-center gap-1 group w-max"
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
                    {{ $t('news.back') }}
                </Link>

                <div class="border border-StrokeGray rounded-xl p-8 md:p-12 block-black flex flex-col gap-8">
                    <h2 class="text-[22px] md:text-[28px] font-bold text-white uppercase leading-tight">
                        {{ article.title }}
                    </h2>

                    <img
                        v-if="article.image"
                        :src="article.image"
                        :alt="article.title"
                        class="w-full rounded-xl object-cover max-h-[480px]"
                    />

                    <div
                        class="article-body text-TextGray text-[14px] leading-relaxed"
                        v-html="article.description"
                    />

                    <div class="border-t border-StrokeGray pt-4 text-[12px] text-TextGray">
                        {{ formatDate(article.created_at) }}
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/main.vue';

defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const visible = ref(false);

onMounted(() => {
    requestAnimationFrame(() => {
        visible.value = true;
    });
});

function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
</script>

<style scoped>
.page-enter {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-visible {
    opacity: 1;
    transform: translateY(0);
}
</style>

<style>
.article-body h1,
.article-body h2,
.article-body h3 {
    color: #ffffff;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.article-body h1 { font-size: 1.5rem; }
.article-body h2 { font-size: 1.25rem; }
.article-body h3 { font-size: 1.1rem; }

.article-body p {
    margin-bottom: 1rem;
    line-height: 1.75;
}

.article-body ul,
.article-body ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.article-body ul { list-style-type: disc; }
.article-body ol { list-style-type: decimal; }

.article-body li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
}

.article-body a {
    color: #9ca3af;
    text-decoration: underline;
}

.article-body img {
    max-width: 100%;
    border-radius: 0.75rem;
    margin: 1rem 0;
}

.article-body small {
    font-size: 0.75rem;
    color: #636363;
}
</style>
