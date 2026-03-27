<template>
    <MainLayout>
        <div class="container flex flex-col gap-10">
            <h1 class="text-center text-[19px] font-bold text-white uppercase">
                {{ $t('news.title') }}
            </h1>

            <div v-if="articles.length === 0" class="flex flex-col gap-5">
                <div
                    v-for="i in 3"
                    :key="i"
                    class="animate-pulse flex items-center gap-5 rounded-xl border border-StrokeGray p-5 md:p-3.5"
                >
                    <div class="h-[158px] w-[260px] rounded-lg bg-white/10 max-md:hidden" />
                    <div class="flex flex-col gap-3 flex-1">
                        <div class="h-3 w-24 rounded bg-white/10" />
                        <div class="h-5 w-48 rounded bg-white/10" />
                        <div class="h-3 w-full rounded bg-white/10" />
                        <div class="h-3 w-3/4 rounded bg-white/10" />
                    </div>
                </div>
            </div>

            <div v-else class="flex flex-col gap-5">
                <Link
                    v-for="(article, index) in articles"
                    :key="article.id"
                    :href="`/info/${article.path}`"
                    prefetch
                    class="article-card bg-opacity-80 hover:opacity-80 cursor-pointer transition-opacity duration-300 flex items-center justify-between rounded-xl border border-StrokeGray p-5 md:p-3.5"
                    :style="{ animationDelay: `${index * 80}ms` }"
                >
                    <div class="flex w-full items-center gap-5">
                        <img
                            v-if="article.image"
                            :src="article.image"
                            :alt="article.title"
                            class="h-[158px] w-[260px] object-cover rounded-lg max-md:hidden"
                        />
                        <div
                            v-else
                            class="h-[158px] w-[260px] rounded-lg bg-white/5 flex items-center justify-center max-md:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-TextGray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="flex min-h-[148px] flex-col gap-5 pt-2.5">
                            <div class="flex flex-col gap-3.5">
                                <span class="text-[12px]/[12px] font-medium text-TextGray">
                                    {{ formatDate(article.created_at) }}
                                </span>
                                <h2 class="text-[20px] font-bold text-white">
                                    {{ article.title }}
                                </h2>
                            </div>
                            <p
                                class="text-[12px]/[12px] font-medium text-TextGray max-w-[745px] leading-[20px] line-clamp-3"
                                v-html="stripHtml(article.description)"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/main.vue';

defineProps({
    articles: {
        type: Array,
        default: () => [],
    },
});

function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
</script>

<style scoped>
.article-card {
    animation: slideUp 0.4s ease both;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
