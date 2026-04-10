<template>
    <div class="container flex flex-col gap-8 md:gap-10">
        <h1 class="text-center text-[19px] font-bold text-white">
            {{ $t('bans_page.title') }}
        </h1>

        <div v-if="loadError" class="rounded-xl border border-StrokeGray  px-5 py-6 text-center text-sm text-TextGray">
            {{ $t('bans_page.load_error') }}
        </div>


        <div v-else-if="bans.length === 0" class="rounded-xl border border-StrokeGray px-5 py-12 text-center text-TextGray">
            {{ $t('bans_page.empty') }}
        </div>

        <div v-else class="flex flex-col gap-4">
            <div v-for="(ban, index) in bans" :key="`${ban.nickname}-${ban.banned_at}-${index}`" class="flex items-start gap-4 rounded-xl border border-StrokeGray p-4 md:p-5" :class="{ 'opacity-60': !ban.is_active }">
                <div class="shrink-0">
                    <img v-if="ban.avatar" :src="ban.avatar" :alt="ban.nickname" class="h-14 w-14 rounded-full object-cover ring-1 ring-StrokeGray" />
                    <div v-else class="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-StrokeGray">
                        <svg class="h-7 w-7 text-TextGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </div>
                <div class="flex min-w-0 flex-1 flex-col gap-2">
                    <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span class="text-base font-bold text-white">{{ ban.nickname }}</span>
                        <span class="text-xs text-TextGray">
                            {{ $t('bans_page.banned_at') }}: {{ formatDate(ban.banned_at) }}
                        </span>
                    </div>
                    <p class="text-sm text-TextGray">
                        <span class="font-medium text-white/90">{{ $t('bans_page.reason') }}:</span>
                        {{ ban.reason }}
                    </p>
                    <p v-if="ban.expires_at === 0" class="text-xs text-Orange">
                        {{ $t('bans_page.permanent') }}
                    </p>
                    <p v-else class="text-xs text-TextGray">
                        {{ $t('bans_page.expires') }}: {{ formatDate(ban.expires_at) }}
                    </p>
                </div>
            </div>
        </div>

        <div v-if="!loadError && meta.last_page > 1" class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p class="text-center text-xs text-TextGray sm:text-left">
                {{ $t('bans_page.page_of', { current: meta.current_page, last: meta.last_page }) }}
                <span class="text-white/70"> · {{ $t('bans_page.total', { n: meta.total }) }}</span>
            </p>
            <div class="flex items-center gap-3">
                <Link v-if="meta.current_page > 1" :href="pageUrl(meta.current_page - 1)" class="rounded-md border border-StrokeGray px-4 py-2 text-xs font-medium text-white transition-colors hover:border-Orange hover:text-Orange">
                    {{ $t('bans_page.prev') }}
                </Link>
                <span v-else class="px-4 py-2 text-xs text-TextGray/50">{{ $t('bans_page.prev') }}</span>
                <Link v-if="meta.current_page < meta.last_page" :href="pageUrl(meta.current_page + 1)" class="rounded-md border border-StrokeGray px-4 py-2 text-xs font-medium text-white transition-colors hover:border-Orange hover:text-Orange">
                    {{ $t('bans_page.next') }}
                </Link>
                <span v-else class="px-4 py-2 text-xs text-TextGray/50">{{ $t('bans_page.next') }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MainLayout from '@/layouts/main.vue';

defineOptions({ layout: MainLayout });

interface BanRow {
    nickname: string;
    avatar: string | null;
    banned_at: number | null;
    reason: string;
    is_active: boolean;
    expires_at: number;
}

interface Meta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
}

const props = defineProps<{
    bans: BanRow[];
    meta: Meta;
    loadError: boolean;
}>();

const page = usePage();

const appLocale = computed(() => (page.props as { locale?: string }).locale ?? 'ru');

function formatDate(timestamp: number | null): string {
    if (timestamp === null || timestamp <= 0) {
        return '—';
    }
    const d = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat(appLocale.value === 'en' ? 'en-GB' : 'ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(d);
}

function pageUrl(pageNum: number): string {
    if (pageNum <= 1) {
        return '/bans';
    }
    return `/bans?page=${pageNum}`;
}
</script>
