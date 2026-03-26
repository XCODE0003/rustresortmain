<template>
    <ContentPageProfile :is_empty="is_empty">
        <div class="grid items-stretch gap-2.5 p-5 lg:grid-cols-2 lg:gap-4">
            <div
                class="block-black flex flex-col items-center gap-6 rounded-xl border border-StrokeGray py-7 lg:py-10"
            >
                <div class="size-36 text-white lg:size-44">{{ $t('profile.chart') }}</div>
                <div class="flex items-center gap-2.5">
                    <div class="flex flex-col items-center gap-1">
                        <h1
                            class="text-[10px] font-medium text-TextGray uppercase"
                        >
                            {{ $t('profile.shots') }}
                        </h1>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-white"
                        >
                            <div
                                class="size-3.5 rounded-full bg-PaleOrange"
                            ></div>
                            120
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <h1
                            class="text-[10px] font-medium text-TextGray uppercase"
                        >
                            {{ $t('profile.hits') }}
                        </h1>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-white"
                        >
                            <div class="size-3.5 rounded-full bg-Orange"></div>
                            120
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                        <h1
                            class="text-[10px] font-medium text-TextGray uppercase"
                        >
                            {{ $t('profile.accuracy') }}
                        </h1>
                        <div
                            class="flex items-center gap-1 text-xs font-bold text-white"
                        >
                            <div class="size-3.5 rounded-full bg-Green"></div>
                            120
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="order-2 flex flex-col items-center justify-between gap-6 md:order-1"
            >
                <div class="flex w-full flex-col gap-1.5">
                    <div class="flex justify-between">
                        <div class="flex items-stretch gap-1.5">
                            <div
                                class="block-black items-center gap-1 rounded-xl border border-StrokeGray px-5 py-3.5 text-center"
                            >
                                <h1
                                    class="text-[9px]/[20px] text-TextGray uppercase"
                                >
                                    {{ $t('profile.kdr') }}
                                </h1>
                                <h2 class="text-sm font-bold text-white">10</h2>
                            </div>

                            <div
                                class="block-black items-center gap-1 rounded-xl border border-StrokeGray px-5 py-3.5 text-center"
                            >
                                <h1
                                    class="text-[9px]/[20px] text-TextGray uppercase"
                                >
                                    {{ $t('profile.rockets_used') }}
                                </h1>
                                <h2
                                    class="block-black text-sm font-bold text-white"
                                >
                                    2
                                </h2>
                            </div>
                        </div>
                        <div
                            class="button-black h-max rounded-lg border border-StrokeGray px-6 py-3.5 text-[12px]/[20px] font-bold text-Orange"
                        >
                            10 RT
                        </div>
                    </div>
                    <div
                        class="block-black w-max items-center gap-1 rounded-xl border border-StrokeGray px-5 py-3.5 text-center text-TextGray"
                    >
                        <h1 class="text-[9px]/[20px] font-bold">
                            {{ $t('profile.clan_play') }}
                        </h1>
                        <h2 class="text-[11px]/[20px] font-bold">
                            {{ $t('profile.absent') }}
                        </h2>
                    </div>
                </div>
                <button
                    class="w-max rounded-lg bg-PaleOrange px-6 py-3.5 text-[12px]/[20px] font-bold text-Orange transition-all duration-300 hover:bg-Orange hover:text-PaleOrange"
                >
                    {{ $t('profile.detailed_stats') }}
                </button>
            </div>
            <div
                class="scrollbar-hide relative order-1 flex items-stretch gap-1.5 overflow-x-auto md:order-2 lg:col-span-2"
            >
                <div
                    class="block-black flex flex-col items-center gap-1 rounded-xl border border-StrokeGray px-10 py-8"
                >
                    <h1 class="text-[10px] font-medium text-TextGray uppercase">
                        {{ $t('profile.top_project') }}
                    </h1>
                    <h2 class="text-sm/[20px] font-bold text-Orange">2065</h2>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                        <h1
                            class="text-[10px] font-medium text-TextGray uppercase"
                        >
                            {{ $t('profile.top_project') }}
                        </h1>
                        <h2 class="text-sm/[20px] font-bold text-Orange">
                            2065
                        </h2>
                    </div>
                </div>
                <div
                    class="block-black flex flex-col items-center gap-1 rounded-xl border border-StrokeGray px-10 py-8"
                >
                    <h1 class="text-[10px] font-medium text-TextGray uppercase">
                        {{ $t('profile.raid_winner') }}
                    </h1>
                    <h2 class="text-sm/[20px] font-bold text-TextGray">
                        {{ $t('profile.absent') }}
                    </h2>
                </div>
            </div>
        </div>
    </ContentPageProfile>
</template>

<script>
import ContentPageProfile from '../content.vue';
export default {
    props: {
        is_empty: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        ContentPageProfile,
    },
};
</script>

<style></style>
