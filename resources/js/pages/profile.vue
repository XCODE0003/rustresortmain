<template>
        <div class="container flex flex-col gap-[48px] md:gap-[60px] lg:gap-[75px]">
            <div
                ref="profileCard"
                class="block-black overflow-hidden rounded-xl border border-StrokeGray"
            >
                <div
                    class="absolute top-0 left-0 flex h-[150px] md:h-[180px]  lg:h-[200px] w-full justify-end border-b border-StrokeGray"
                >
                    <img
                        src="images/bg-profile.png"
                        class="absolute top-0 left-0 h-full md:w-full object-cover  max-md:object-fill "
                        alt=""
                    />
                    <!-- <button
                        class="relative z-30 m-3.5 h-max cursor-pointer rounded-lg bg-PaleOrange px-6 py-3.5 text-Orange duration-300 ease-in-out hover:bg-Orange hover:text-PaleOrange text-sm font-bold"
                    >
                        {{ $t('profile.edit_profile') }}
                    </button> -->
                </div>
                <div
                    class="relative z-20 flex flex-col gap-5 p-5 md:p-8 lg:p-10 lg:pt-[140px] md:pt-[120px] pt-[100px]"
                    style=" padding-bottom: 20px"
                >
                    <div class="flex flex-col gap-3">
                        <div class="flex items-end justify-between">
                            <div
                                class="rounded-full bg-[#090b0d]/40 p-2.5 backdrop-blur-2xl"
                            >
                                <img
                                    :src="user.avatar || '/images/test-bg-server.png'"
                                    class="size-[100px] rounded-full object-cover"
                                    alt=""
                                />
                            </div>
                            <h2
                                class="border-StrokeGray text-[14px]/[14px] font-medium text-TextGray"
                            >
                                {{ user.steam_id || user.id }}
                                <span class="text-[#F3A45D]">ID</span>
                            </h2>
                        </div>
                    </div>
                    <div class="flex justify-between max-md:flex-col gap-3">
                        <div
                            class="flex flex-wrap items-center gap-3.5 gap-y-1"
                        >
                            <h1 class="text-xl font-bold text-white">
                                {{ user.name }}
                            </h1>
                            <div class="flex items-center gap-3">
                                <div class="flex flex-wrap items-center gap-1">
                                    <div v-if="user?.role === 'admin'"
                                        class="red-button px-2 py-1 text-[10px]/[15px]"
                                    >
                                        <span
                                            class="relative z-20 font-inter font-bold"
                                        >
                                            ADMIN
                                        </span>
                                    </div>

                                </div>
                                <div class="flex items-center gap-1.5">
                                    <a :href="`https://steamcommunity.com/profiles/${user.steam_id}`"
                                        class="cursor-pointer rounded-md border border-StrokeGray p-1 duration-300 ease-in-out hover:opacity-80"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M8 0C9.05058 0 10.0909 0.206926 11.0615 0.608964C12.0321 1.011 12.914 1.60028 13.6569 2.34315C14.3997 3.08601 14.989 3.96793 15.391 4.93853C15.7931 5.90914 16 6.94943 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C4.32 16 1.24 13.536 0.288 10.184L3.352 11.448C3.56 12.48 4.48 13.264 5.576 13.264C6.824 13.264 7.84 12.248 7.84 11V10.896L10.56 8.952H10.624C12.288 8.952 13.64 7.6 13.64 5.936C13.64 4.272 12.288 2.92 10.624 2.92C8.96 2.92 7.6 4.272 7.6 5.936V5.976L5.704 8.744L5.576 8.736C5.104 8.736 4.664 8.88 4.304 9.128L0 7.36C0.344 3.24 3.784 0 8 0ZM5.024 12.136C5.664 12.4 6.4 12.104 6.664 11.464C6.928 10.824 6.624 10.096 6 9.832L4.976 9.408C5.368 9.264 5.808 9.256 6.224 9.432C6.648 9.6 6.976 9.928 7.144 10.352C7.32 10.768 7.32 11.232 7.144 11.648C6.8 12.512 5.784 12.928 4.92 12.568C4.52 12.4 4.216 12.096 4.048 11.736L5.024 12.136ZM12.64 5.936C12.64 7.048 11.736 7.952 10.624 7.952C9.52 7.952 8.616 7.048 8.616 5.936C8.61494 5.67201 8.66616 5.41042 8.7667 5.16632C8.86723 4.92222 9.0151 4.70044 9.20177 4.51377C9.38844 4.3271 9.61022 4.17923 9.85432 4.07869C10.0984 3.97816 10.36 3.92694 10.624 3.928C11.736 3.928 12.64 4.832 12.64 5.936ZM9.12 5.936C9.12 6.768 9.792 7.448 10.632 7.448C11.464 7.448 12.136 6.768 12.136 5.936C12.136 5.104 11.464 4.424 10.632 4.424C9.792 4.424 9.12 5.104 9.12 5.936Z"
                                                fill="#636363"
                                            />
                                        </svg>
                                    </a>
                                    <!-- <button
                                        class="cursor-pointer rounded-md border border-StrokeGray p-1 duration-300 ease-in-out hover:opacity-80"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M10.456 0H5.544C1.064 0 0 1.064 0 5.544V10.456C0 14.936 1.064 16 5.544 16H10.456C14.936 16 16 14.936 16 10.456V5.544C16 1.064 14.936 0 10.456 0ZM12.92 11.416H11.752C11.312 11.416 11.176 11.056 10.4 10.264C9.696 9.6 9.392 9.504 9.224 9.504C8.992 9.504 8.92 9.568 8.92 9.904V10.952C8.92 11.232 8.832 11.408 8.088 11.408C6.856 11.408 5.488 10.656 4.528 9.272C3.08 7.24 2.688 5.704 2.688 5.4C2.688 5.232 2.744 5.072 3.08 5.072H4.256C4.552 5.072 4.664 5.2 4.776 5.52C5.352 7.2 6.312 8.64 6.704 8.64C6.856 8.64 6.92 8.568 6.92 8.2V6.48C6.88 5.696 6.456 5.624 6.456 5.344C6.456 5.2 6.568 5.072 6.752 5.072H8.584C8.832 5.072 8.92 5.2 8.92 5.504V7.816C8.92 8.064 9.024 8.152 9.104 8.152C9.248 8.152 9.376 8.064 9.64 7.792C10.48 6.856 11.08 5.408 11.08 5.408C11.16 5.24 11.288 5.08 11.6 5.08H12.744C13.096 5.08 13.176 5.264 13.096 5.512C12.952 6.192 11.528 8.2 11.544 8.2C11.416 8.4 11.368 8.488 11.544 8.72C11.664 8.888 12.072 9.24 12.344 9.552C12.84 10.12 13.224 10.592 13.328 10.92C13.416 11.248 13.256 11.416 12.92 11.416Z"
                                                fill="#636363"
                                            />
                                        </svg>
                                    </button> -->
                                </div>
                            </div>

                        </div>
                        <div class="flex items-center gap-3.5">
                            <h1 class="text-sm text-nowrap text-Orange">
                                {{ user.balance || 0 }} ₽
                            </h1>
                            <Link
                                href="/payment"
                                class="cursor-pointer rounded-lg bg-Orange px-6 py-3.5 text-xs font-bold text-black duration-300 ease-in-out hover:bg-PaleOrange hover:text-Orange"
                            >
                                {{ $t('profile.balance') }}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div
                ref="profilePagesRow"
                class="flex items-stretch gap-y-12 gap-5 lg:gap-[30px] max-lg:flex-col max-lg:items-center"
            >
                <Personage :active-page="activePage" />
                <PagesProfile v-model="activePage" />
            </div>
        </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { Link } from '@inertiajs/vue3';
import Personage from '@/components/personage.vue';
import MainLayout from '@/layouts/main.vue';
import PagesProfile from '@/layouts/pagesProfile.vue';

type ProfilePageKey = 'market' | 'subscriptions';

interface User {
    id: number;
    name: string;
    avatar?: string;
    steam_id?: string;
    balance: number;
    level: number;
    role: string;
}

export default defineComponent({
    components: {
        Link,
        Personage,
        PagesProfile,
    },
    layout: MainLayout,
    props: {
        user: {
            type: Object as () => User,
            required: true,
        },
    },
    setup(props) {
        const activePage = ref<ProfilePageKey>('market');
        const profilePagesRow = ref<HTMLElement | null>(null);
        const profileCard = ref<HTMLElement | null>(null);

        const animateBottomMargin = (): void => {
            if (!profilePagesRow.value) {
                return;
            }

            const target = 0;
            gsap.to(profilePagesRow.value, {
                marginBottom: target,
                duration: 0.35,
                ease: 'power3.out',
            });
        };

        onMounted(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (profileCard.value) {
                tl.fromTo(
                    profileCard.value,
                    { autoAlpha: 0, y: -20 },
                    { autoAlpha: 1, y: 0, duration: 0.45 },
                );
            }

            if (profilePagesRow.value) {
                tl.fromTo(
                    profilePagesRow.value,
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.4 },
                    '-=0.2',
                );
            }

            animateBottomMargin();
        });

        watch(activePage, () => {
            animateBottomMargin();
        });

        return {
            activePage,
            profileCard,
            profilePagesRow,
        };
    },
});
</script>

<style></style>
