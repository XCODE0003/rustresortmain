<template>
    <div class="container flex flex-col gap-6 md:gap-8">
            <h1 class="text-center text-[19px] font-bold text-white">
                {{ $t('bans_page.title') }}
            </h1>

            <div
                v-if="loadError"
                class="rounded-xl border border-StrokeGray px-5 py-6 text-center text-sm text-TextGray"
            >
                {{ $t('bans_page.load_error') }}
            </div>

            <div
                v-else-if="bans.length === 0"
                class="rounded-xl border border-StrokeGray px-5 py-12 text-center text-TextGray"
            >
                {{ $t('bans_page.empty') }}
            </div>

            <div v-else class="flex flex-col gap-3">
                <div
                    class="-mx-4 overflow-x-auto rounded-xl border border-StrokeGray px-4 sm:mx-0 sm:px-0"
                >
                    <table
                        class="w-full min-w-[720px] border-collapse text-left text-[13px] text-white"
                    >
                        <thead>
                            <tr
                                class="border-b border-StrokeGray bg-white/4 text-[10px] font-semibold uppercase tracking-wide text-TextGray"
                            >
                                <th class="px-3 py-2.5 pl-4 sm:px-4">
                                    {{ $t('bans_page.col_player') }}
                                </th>
                                <th class="px-3 py-2.5 sm:px-4">
                                    {{ $t('bans_page.col_reason') }}
                                </th>
                                <th class="whitespace-nowrap px-3 py-2.5 sm:px-4">
                                    {{ $t('bans_page.col_banned_at') }}
                                </th>
                                <th class="whitespace-nowrap px-3 py-2.5 pr-4 sm:px-4">
                                    {{ $t('bans_page.col_expires') }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-StrokeGray">
                            <tr
                                v-for="(ban, index) in bans"
                                :key="`${ban.nickname}-${ban.banned_at}-${index}`"
                                class="transition-colors hover:bg-white/3"
                                :class="{ 'opacity-55': !ban.is_active }"
                            >
                                <td class="max-w-[200px] px-3 py-2 pl-4 sm:max-w-[240px] sm:px-4 sm:py-2.5">
                                    <div class="flex min-w-0 items-center gap-2.5">
                                        <img
                                            v-if="ban.avatar"
                                            :src="ban.avatar"
                                            :alt="''"
                                            class="h-8 w-8 shrink-0 rounded-full object-cover ring-1 ring-StrokeGray"
                                        />
                                        <div
                                            v-else
                                            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-StrokeGray"
                                        >
                                            <svg
                                                class="h-4 w-4 text-TextGray"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                />
                                            </svg>
                                        </div>
                                        <span class="truncate font-medium">{{ ban.nickname }}</span>
                                    </div>
                                </td>
                                <td class="max-w-0 px-3 py-2 sm:px-4 sm:py-2.5">
                                    <span
                                        class="block truncate text-TextGray"
                                        :title="ban.reason"
                                    >
                                        {{ ban.reason }}
                                    </span>
                                </td>
                                <td
                                    class="whitespace-nowrap px-3 py-2 text-xs text-TextGray sm:px-4 sm:py-2.5"
                                >
                                    {{ formatDate(ban.banned_at) }}
                                </td>
                                <td
                                    class="whitespace-nowrap px-3 py-2 pr-4 text-xs sm:px-4 sm:py-2.5"
                                >
                                    <span v-if="ban.expires_at === 0" class="font-medium text-Orange">
                                        {{ $t('bans_page.permanent') }}
                                    </span>
                                    <span v-else class="text-TextGray">
                                        {{ formatDate(ban.expires_at) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                v-if="!loadError && meta.last_page > 1"
                class="flex flex-col items-center gap-3 border-t border-StrokeGray/80 pt-4 sm:flex-row sm:justify-between"
            >
                <p class="text-center text-xs text-TextGray sm:text-left">
                    {{ $t('bans_page.page_of', { current: meta.current_page, last: meta.last_page }) }}
                    <span class="text-white/70">
                        · {{ $t('bans_page.total', { n: meta.total }) }}
                    </span>
                </p>
                <div class="flex items-center gap-2">
                    <Link
                        v-if="meta.current_page > 1"
                        :href="pageUrl(meta.current_page - 1)"
                        class="rounded-md border border-StrokeGray px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-Orange hover:text-Orange"
                    >
                        {{ $t('bans_page.prev') }}
                    </Link>
                    <span v-else class="px-3 py-1.5 text-xs text-TextGray/50">{{
                        $t('bans_page.prev')
                    }}</span>
                    <Link
                        v-if="meta.current_page < meta.last_page"
                        :href="pageUrl(meta.current_page + 1)"
                        class="rounded-md border border-StrokeGray px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-Orange hover:text-Orange"
                    >
                        {{ $t('bans_page.next') }}
                    </Link>
                    <span v-else class="px-3 py-1.5 text-xs text-TextGray/50">{{
                        $t('bans_page.next')
                    }}</span>
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

defineProps<{
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
