<template>
    <div ref="pageRoot" class="container flex flex-col gap-10">
        <h1 ref="pageTitle" class="text-center text-[19px] font-bold text-white">
            {{ $t('servers_page.title') }}
        </h1>
        <div v-if="servers && servers.length > 0" ref="cardList" class="flex flex-col gap-5">
            <div
                v-for="server in servers"
                :key="server.id"
                class="bg-opacity-80 flex items-center justify-between rounded-xl border border-StrokeGray p-5  md:p-3.5"
            >
                <div class="flex w-full items-center gap-5">
                    <div
                        class="relative min-w-max overflow-hidden rounded-xl max-md:hidden"
                    >
                        <img
                            :src="'/' + server.image || '/images/test-bg-server.png'"
                            :alt="server.name"
                            class="h-[158px] w-[260px] object-cover"
                        />
                        <div
                            class="absolute top-0 left-0 flex h-full w-full gap-1.5 p-1.5"
                        >
                            <div
                                v-if="server.options?.rate"
                                class="bg-table flex h-[26px] w-max items-center justify-center rounded-sm border border-StrokeGray px-2 py-0.5 text-[10px]/[10px] font-medium text-TextGray backdrop-blur-xs"
                            >
                                {{ server.options.rate }}
                            </div>
                            <div
                                v-if="server.next_wipe"
                                class="bg-table flex h-[26px] w-max items-center justify-center rounded-sm border border-StrokeGray px-2 py-0.5 text-[10px]/[10px] font-medium text-TextGray backdrop-blur-xs"
                            >
                                {{ formatWipeInfo(server.next_wipe) }}
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full items-center justify-between">
                        <div
                            class="flex min-h-[148px] flex-col justify-between gap-1 pt-2.5"
                        >
                            <div class="flex flex-col gap-2">
                                <h2
                                    v-if="server.category"
                                    class="text-[12px]/[12px] font-medium text-TextGray"
                                >
                                    {{ serverCategoryLabel(server) }}
                                </h2>
                                <h2 class="text-[16px] font-bold text-white">
                                    {{ server.name }}
                                </h2>
                            </div>
                            <div class="flex items-center gap-5">
                                <div class="flex items-stretch gap-1.5">
                                    <button
                                        v-if="connectString(server)"
                                        type="button"
                                        @click="copyConnect(server)"
                                        class="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-Orange px-6 py-3.5 text-[12px]/[12px] font-medium text-black transition-colors duration-300 hover:bg-Orange/80"
                                    >
                                        <svg v-if="copiedServerId === server.id" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
                                            <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        {{ copiedServerId === server.id ? $t('server.connect_copied') : $t('server.connect') }}
                                    </button>
                                    <span
                                        v-else
                                        class="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-Orange/35 px-6 py-3.5 text-[12px]/[12px] font-medium text-black/55"
                                        aria-disabled="true"
                                    >
                                        {{ $t('server.connect') }}
                                    </span>
                                </div>
                                <div>
                                    <h2
                                        class="border-StrokeGray text-[12px]/[12px] font-medium text-TextGray max-md:absolute max-md:-top-2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:rounded-sm max-md:border max-md:bg-black/10 max-md:p-1.5 max-md:"
                                    >
                                        <span class="text-[#F3A45D]">IP</span>: {{ getServerIp(server) }}
                                    </h2>
                                    <h2
                                        class="text-[18px]/[18px] font-bold text-TextGray md:hidden"
                                    >
                                        <span class="text-[#F3A45D]">{{ server.online_players || 0 }}</span>/{{ server.max_players || 500 }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <h2
                            class="pr-20 text-[20px]/[20px] font-bold text-TextGray max-md:hidden"
                        >
                            <span class="text-[#F3A45D]">{{ server.online_players || 0 }}</span>/{{ server.max_players || 500 }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center text-TextGray">
            <p>{{ $t('servers_page.no_servers') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useShopLocale } from '@/composables/useShopLocale';
import { useWipeInfo } from '@/composables/useWipeInfo';
import MainLayout from '@/layouts/main.vue';

defineOptions({ layout: MainLayout });

interface Server {
    id: number;
    name: string;
    image?: string;
    online_players?: number;
    max_players?: number;
    next_wipe?: string;
    last_wipe?: string;
    options?: {
        ip?: string;
        port?: number;
        rate?: string;
        connect?: string;
    };
    category?: {
        title_ru?: string;
        title_en?: string | null;
    };
}

const props = defineProps<{
    servers: Server[];
}>();

const { t } = useI18n();
const { categoryTitle } = useShopLocale();
const { formatWipeInfo } = useWipeInfo();

const serverCategoryLabel = (server: Server): string => {
    const label = categoryTitle(server.category);

    return label !== '' ? label.toUpperCase() : t('servers_page.server');
};

const pageTitle = ref<HTMLElement | null>(null);
const cardList = ref<HTMLElement | null>(null);

const getServerIp = (server: Server): string => {
    const ip = server.options?.ip;
    if (!ip || typeof ip !== 'string') {
        return 'N/A';
    }
    // В БД часто хранят "37.230.137.209:28015" в одном поле ip
    if (ip.includes(':')) {
        return ip;
    }
    const port = server.options?.port;
    if (port !== undefined && port !== null && port !== '') {
        return `${ip}:${port}`;
    }

    return 'N/A';
};

// Адрес для коннекта: предпочитаем заданный в админке домен (options.connect),
// иначе падаем на IP. Сюда же копируется строка вида "connect host:port".
const connectAddress = (server: Server): string => {
    const explicit = server.options?.connect;
    if (typeof explicit === 'string' && explicit.trim() !== '') {
        return explicit.trim().replace(/^connect\s+/i, '');
    }
    const ip = getServerIp(server);
    return ip === 'N/A' ? '' : ip;
};

const connectString = (server: Server): string => {
    const addr = connectAddress(server);
    return addr === '' ? '' : `connect ${addr}`;
};

const copiedServerId = ref<number | null>(null);

const copyConnect = async (server: Server): Promise<void> => {
    const text = connectString(server);
    if (!text) {
        return;
    }
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
        } else {
            const el = document.createElement('textarea');
            el.value = text;
            el.style.position = 'fixed';
            el.style.opacity = '0';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        copiedServerId.value = server.id;
        setTimeout(() => {
            if (copiedServerId.value === server.id) {
                copiedServerId.value = null;
            }
        }, 2000);
    } catch {
        // буфер недоступен (нет https/разрешения) — тихо игнорируем
    }
};

onMounted(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (pageTitle.value) {
        tl.fromTo(pageTitle.value, { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.4 });
    }

    if (cardList.value) {
        const cards = Array.from(cardList.value.children) as HTMLElement[];
        tl.fromTo(
            cards,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 },
            '-=0.15',
        );
    }
});
</script>

<style>
.bg-card {
    background: linear-gradient(
        180deg,
        rgba(9, 11, 13, 0.8) 0%,
        rgba(9, 11, 13, 0.8) 100%
    );
}

.bg-table {
    background: linear-gradient(
        180deg,
        rgba(9, 11, 13, 0.8) 0%,
        rgba(9, 11, 13, 0.8) 100%
    );
}
</style>
