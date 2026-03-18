<template>
    <div ref="pageRoot" class="container flex flex-col gap-10">
        <h1 ref="pageTitle" class="text-center text-[19px] font-bold text-white">
            НАШИ СЕРВЕРА
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
                            :src="server.image || '/images/test-bg-server.png'"
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
                                    {{ server.category.title_ru?.toUpperCase() || 'СЕРВЕР' }}
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
                                        Подключиться
                                    </button>
                                    <Link
                                        :href="`/shop/server/${server.id}`"
                                        class="flex items-center justify-center cursor-pointer rounded-md bg-Green p-3 text-[12px]/[12px] font-medium text-black transition-colors duration-300 hover:bg-Green/80"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M7.88368 18.2168C8.63003 18.2169 9.2411 18.8419 9.2411 19.6133C9.24099 20.3755 8.62997 21 7.88368 21C7.12833 21 6.5166 20.3756 6.51649 19.6133C6.51649 18.8418 7.12826 18.2168 7.88368 18.2168ZM18.0009 18.2168C18.7473 18.2168 19.3593 18.8418 19.3593 19.6133C19.3592 20.3755 18.7472 21 18.0009 21C17.2455 21 16.6338 20.3756 16.6337 19.6133C16.6337 18.8418 17.2455 18.2168 18.0009 18.2168ZM3.79188 3.00785L5.93641 3.33793C6.24209 3.39394 6.46695 3.64979 6.49403 3.96195L6.66493 6.01957C6.69191 6.31438 6.92599 6.53519 7.21375 6.5352H19.3593C19.9076 6.5353 20.2672 6.72806 20.6268 7.15043C20.9863 7.57281 21.0495 8.17859 20.9686 8.72856L20.1141 14.7539C19.9523 15.9121 18.9809 16.7657 17.8388 16.7657H8.02723C6.83135 16.7655 5.84196 15.8295 5.74305 14.6172L4.9159 4.60551L3.55848 4.36625C3.19876 4.30196 2.9467 3.9436 3.00965 3.57621C3.0727 3.20071 3.42327 2.95188 3.79188 3.00785ZM13.9091 9.93168C13.5314 9.93177 13.2343 10.2354 13.2343 10.6211C13.2343 10.9976 13.5315 11.3095 13.9091 11.3096H16.4003C16.7779 11.3096 17.075 10.9976 17.0751 10.6211C17.0751 10.2354 16.778 9.93168 16.4003 9.93168H13.9091Z"
                                                fill="#090B0D"
                                            />
                                        </svg>
                                    </Link>
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
            <p>Нет доступных серверов</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import MainLayout from '@/layouts/main.vue';

defineOptions({ layout: MainLayout });

interface Server {
    id: number;
    name: string;
    image?: string;
    online_players?: number;
    max_players?: number;
    next_wipe?: string;
    options?: {
        ip?: string;
        port?: number;
        rate?: string;
    };
    category?: {
        title_ru?: string;
    };
}

const props = defineProps<{
    servers: Server[];
}>();

const pageTitle = ref<HTMLElement | null>(null);
const cardList = ref<HTMLElement | null>(null);

const getServerIp = (server: Server): string => {
    if (server.options?.ip && server.options?.port) {
        return `${server.options.ip}:${server.options.port}`;
    }
    return 'N/A';
};

const formatWipeInfo = (wipeDate: string): string => {
    try {
        const date = new Date(wipeDate);
        const now = new Date();
        const diffMs = date.getTime() - now.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) {
            return `ВАЙП ${Math.abs(diffDays)} ДН. НАЗАД`;
        } else if (diffDays === 0) {
            return 'ВАЙП СЕГОДНЯ';
        } else if (diffDays === 1) {
            return 'ВАЙП ЗАВТРА';
        } else {
            return `ВАЙП ЧЕРЕЗ ${diffDays} ДН.`;
        }
    } catch {
        return 'ЕЖЕНЕДЕЛЬНЫЙ ВАЙП';
    }
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
