<script setup lang="ts">
import { Link, usePage, router } from '@inertiajs/vue3';
import { onBeforeUnmount, onMounted, ref, computed } from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import NotificationDropdown from '@/components/NotificationDropdown.vue';

const page = usePage();
const user = computed(() => (page.props.auth as any)?.user);

const NavActive = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const isHeaderStuck = ref(false);

const logout = () => {
    router.post('/logout', {}, {
        onSuccess: () => {
            NavActive.value = false;
        }
    });
};

const onDocumentPointerDown = (event: PointerEvent): void => {
    if (!NavActive.value) {
        return;
    }

    const headerEl = headerRef.value;
    const target = event.target as Node | null;

    if (!headerEl || !target) {
        return;
    }

    if (!headerEl.contains(target)) {
        NavActive.value = false;
    }
};

const updateHeaderStuckState = (): void => {
    isHeaderStuck.value = window.scrollY > 0;
};

onMounted(() => {
    document.addEventListener('pointerdown', onDocumentPointerDown);
    updateHeaderStuckState();
    window.addEventListener('scroll', updateHeaderStuckState, { passive: true });
});

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', onDocumentPointerDown);
    window.removeEventListener('scroll', updateHeaderStuckState);
});
</script>

<template>
    <header ref="headerRef" :class="[
        'bg-header sticky top-0 z-50 h-[90px] backdrop-blur-2xl',
        { 'is-stuck': isHeaderStuck },
    ]">
        <div class="container-header relative flex h-full items-center justify-between md:justify-end">
            <div class="stripe absolute bottom-0 h-px w-full"></div>
            <div class="flex items-center gap-24 text-xs font-medium uppercase md:absolute md:left-1/2 md:-translate-x-1/2">
                <div class="flex items-center gap-16 text-TextGray max-xl:hidden">
                    <Link href="/servers/" :class="{ 'text-white': $page.url.includes('/servers') }" class="transition-colors duration-300 hover:text-white">{{ $t('nav.servers') }}</Link>
                    <Link href="/shop/server" :class="{ 'text-white': $page.url.includes('/shop') }" class="transition-colors duration-300 hover:text-white">{{ $t('nav.shop') }}</Link>

                </div>
                <div class="flex items-center gap-5">
                    <Link href="/" :class="{ 'text-white': $page.url.includes('/') }" class="group relative z-10 flex items-center justify-center">
                        <div aria-hidden="true" class="animate-spin-slow fire-mask absolute top-0 left-1/2 h-[87px] w-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <img src="/images/logo.png" alt="Logo" class="relative z-10 h-11 min-h-11 w-11 min-w-11 transition-opacity duration-300 group-hover:opacity-80" />
                    </Link>
                    <LanguageSelector :current-locale="($page.props as any).locale || 'ru'" class="md:hidden" />
                </div>

                <div class="flex items-center gap-16 text-TextGray max-xl:hidden">
                    <Link href="/rating" :class="{ 'text-white': $page.url.includes('/rating') }" class="transition-colors duration-300 hover:text-white">{{ $t('nav.rating') }}</Link>

                    <Link href="/info" :class="{ 'text-white': $page.url.includes('/info') }" class="transition-colors duration-300 hover:text-white">{{ $t('nav.faq') }}</Link>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="flex items-center gap-4">
                    <!-- Селектор языка -->
                    <LanguageSelector :current-locale="($page.props as any).locale || 'ru'" class="max-md:hidden" />

                    <div class="flex items-center gap-6">
                        <NotificationDropdown />

                    <!-- Авторизация / Профиль -->
                    <div
                        v-if="user"
                        class="button-black relative flex w-[160px] items-center justify-end gap-2 overflow-hidden rounded-lg border border-StrokeGray p-2.5"
                    >
                        <Link href="/payment" class="relative z-10 flex flex-col items-end cursor-pointer transition-opacity duration-300 hover:opacity-80">
                            <h1 class="text-[10px] font-medium text-TextGray">
                                {{ user.name || $t('auth.player_default') }}
                            </h1>
                            <h2 class="text-sm font-bold text-Orange">
                                {{ user.balance || 0 }} ₽
                            </h2>
                        </Link>
                        <Link href="/profile" class="relative z-10 cursor-pointer transition-opacity duration-300 hover:opacity-80">
                            <img
                                :src="user.avatar || '/images/test-bg-server.png'"
                                alt="Profile"
                                class="h-12 w-12 rounded-[10px] object-cover"
                            />
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="145" height="68" viewBox="0 0 145 68" fill="none" class="absolute right-0 bottom-0 h-full w-full">
                            <g filter="url(#filter0_f_1_27432)">
                                <circle cx="134" cy="58" r="10" fill="#F3A45D" fill-opacity="0.4" />
                            </g>
                            <g filter="url(#filter1_f_1_27432)">
                                <circle cx="47.5" cy="30.5" r="7.5" fill="white" fill-opacity="0.4" />
                            </g>
                            <defs>
                                <filter id="filter0_f_1_27432" x="84" y="8" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1_27432" />
                                </filter>
                                <filter id="filter1_f_1_27432" x="0" y="-17" width="95" height="95" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1_27432" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                        <!-- Кнопка входа через Steam -->
                        <a
                            v-else
                            href="/auth/steam"
                            class="button-black flex cursor-pointer items-center gap-2 rounded-lg border border-StrokeGray px-4 py-2.5 transition-all duration-300 hover:border-Orange hover:opacity-80"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C7.86 21 4.395 18.228 3.324 14.457L6.771 15.879C7.005 17.04 8.04 17.922 9.273 17.922C10.677 17.922 11.82 16.779 11.82 15.375V15.258L14.88 13.071H14.952C16.824 13.071 18.345 11.55 18.345 9.678C18.345 7.806 16.824 6.285 14.952 6.285C13.08 6.285 11.55 7.806 11.55 9.678V9.723L9.417 12.837L9.273 12.828C8.742 12.828 8.247 12.99 7.842 13.269L3 11.28C3.387 6.645 7.257 3 12 3ZM8.652 16.653C9.372 16.95 10.2 16.617 10.497 15.897C10.794 15.177 10.452 14.358 9.75 14.061L8.598 13.584C9.039 13.422 9.534 13.413 10.002 13.611C10.479 13.8 10.848 14.169 11.037 14.646C11.235 15.114 11.235 15.636 11.037 16.104C10.65 17.076 9.507 17.544 8.535 17.139C8.085 16.95 7.743 16.608 7.554 16.203L8.652 16.653ZM17.22 9.678C17.22 10.929 16.203 11.946 14.952 11.946C13.71 11.946 12.693 10.929 12.693 9.678C12.6918 9.38101 12.7494 9.08672 12.8625 8.81211C12.9756 8.5375 13.142 8.288 13.352 8.07799C13.562 7.86799 13.8115 7.70164 14.0861 7.58853C14.3607 7.47543 14.655 7.41781 14.952 7.419C16.203 7.419 17.22 8.436 17.22 9.678ZM13.26 9.678C13.26 10.614 14.016 11.379 14.961 11.379C15.897 11.379 16.653 10.614 16.653 9.678C16.653 8.742 15.897 7.977 14.961 7.977C14.016 7.977 13.26 8.742 13.26 9.678Z"
                                    fill="#F3A45D"
                                />
                            </svg>
                            <span class="text-xs font-bold uppercase text-white max-md:hidden">
                                {{ $t('auth.login') }}
                            </span>
                        </a>
                    </div>
                </div>
                <button v-on:click="NavActive = !NavActive" :class="NavActive
                        ? 'opacity-100 hover:opacity-50'
                        : 'opacity-50 hover:opacity-100'
                    " class="cursor-pointer transition-opacity duration-300 xl:hidden">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="22" y="16" width="22" height="2" rx="0.999999" transform="rotate(-180 22 16)" fill="white" />
                        <rect x="22" y="9" width="14" height="2" rx="0.999999" transform="rotate(-180 22 9)" fill="white" />
                        <rect x="22" y="2" width="22" height="2" rx="0.999999" transform="rotate(-180 22 2)" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
        <Transition name="nav">
            <nav v-if="NavActive" class="absolute top-[90px] flex w-full flex-col overflow-hidden">
                <Link href="/servers" :class="{ 'text-white': $page.url.includes('/servers') }" class="nav-item bg-burger flex items-center gap-2 border-t border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80">{{ $t('nav.servers') }}</Link>
                <Link href="/shop/server" :class="{ 'text-white': $page.url.includes('/shop') }" class="nav-item bg-burger flex items-center gap-2 border-t border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80">{{ $t('nav.shop') }}</Link>
                <Link href="/rating" :class="{ 'text-white': $page.url.includes('/rating') }" class="nav-item bg-burger flex items-center gap-2 border-t border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80">{{ $t('nav.rating') }}</Link>
                <Link href="/info" :class="{ 'text-white': $page.url.includes('/info') }" class="nav-item bg-burger flex items-center gap-2 border-t border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80">{{ $t('nav.info') }}</Link>

                <Link v-if="user" href="/profile" :class="{ 'text-white': $page.url.includes('/profile') }" class="nav-item bg-burger flex items-center gap-2 border-t border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80">{{ $t('nav.profile') }}</Link>

                <button
                    v-if="user"
                    @click="logout"
                    class="nav-item bg-burger flex items-center gap-2 border-t border-b border-StrokeGray px-3.5 py-3 text-TextGray duration-300 ease-in-out hover:opacity-80"
                >
                    {{ $t('common.logout') }}
                </button>

                <a
                    v-else
                    href="/auth/steam"
                    class="nav-item bg-burger flex items-center gap-2 border-t border-b border-StrokeGray px-3.5 py-3 text-Orange duration-300 ease-in-out hover:opacity-80"
                >
                    {{ $t('auth.login_steam') }}
                </a>
            </nav>
        </Transition>
    </header>
</template>

<style>
.bg-header {
    background:
        linear-gradient(90deg,
            rgba(9, 11, 13, 0.7) 0%,
            rgba(9, 11, 13, 0.7) 100%),
        linear-gradient(270deg,
            rgba(9, 11, 13, 0) 0%,
            rgba(9, 11, 13, 0.2) 13.54%,
            rgba(9, 11, 13, 0.6) 27.08%,
            rgba(9, 11, 13, 0.6) 72.92%,
            rgba(9, 11, 13, 0.2) 86.46%,
            rgba(9, 11, 13, 0) 100%);
}

.bg-burger {
    background: linear-gradient(90deg,
            rgba(9, 11, 13, 0.9) 0%,
            rgba(9, 11, 13, 0.9) 100%);
    backdrop-filter: blur(20px);
}

.fire-mask {
    background-color: #0b0d0f;
    transition: opacity 0.2s ease;
    backdrop-filter: blur(10000px);
    opacity: 0.8;
    background-image: url('/images/fireAnimate.gif') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-blend-mode: lighten;
}

.is-stuck .fire-mask {
    opacity: 0;
}

/* Nav slide-down transition */
.nav-enter-active,
.nav-leave-active {
    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}

.nav-enter-from,
.nav-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

/* Staggered item animation */
@keyframes navItemIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.nav-item {
    opacity: 0;
    animation: navItemIn 0.22s ease forwards;
}

.nav-item:nth-child(1) {
    animation-delay: 0ms;
}

.nav-item:nth-child(2) {
    animation-delay: 60ms;
}

.nav-item:nth-child(3) {
    animation-delay: 120ms;
}

.nav-item:nth-child(4) {
    animation-delay: 180ms;
}

.nav-item:nth-child(5) {
    animation-delay: 240ms;
}

.nav-item:nth-child(6) {
    animation-delay: 300ms;
}

.nav-item:nth-child(7) {
    animation-delay: 360ms;
}

.nav-item:nth-child(8) {
    animation-delay: 420ms;
}

.nav-item:nth-child(9) {
    animation-delay: 480ms;
}

.stripe {
    background: linear-gradient(90deg,
            rgba(43, 41, 45, 0) 0%,
            rgba(43, 41, 45, 0.4) 23.9%,
            #2b292d 48.7%,
            rgba(43, 41, 45, 0.4) 74.4%,
            rgba(43, 41, 45, 0) 100%);
}
</style>
