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
                                        @click="connectToServer(server)"
                                        class="cursor-pointer rounded-md bg-Orange px-6 py-3.5 text-[12px]/[12px] font-medium text-black transition-colors duration-300 hover:bg-Orange/80"
                                    >
                                        {{ $t('server.connect') }}
                                    </button>

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
    if (server.options?.ip && server.options?.port) {
        return `${server.options.ip}:${server.options.port}`;
    }
    return 'N/A';
};

const connectToServer = (server: Server) => {
    const ip = getServerIp(server);
    if (ip !== 'N/A') {
        window.location.href = `steam://connect/${ip}`;
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
