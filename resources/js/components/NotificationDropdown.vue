<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { usePage, router } from '@inertiajs/vue3';
import { gsap } from 'gsap';

interface NotificationAction {
    label: string;
    url: string;
}

interface Notification {
    id: string;
    type: string;
    title: string;
    message: string;
    amount: number | null;
    action: NotificationAction | null;
    read: boolean;
    created_at: string;
}

const page = usePage();
const notifications = computed(() => (page.props as any).notifications as Notification[] ?? []);
const unreadCount = computed(() => notifications.value.filter((n) => !n.read).length);

const isOpen = ref(false);
const panelRef = ref<HTMLElement | null>(null);
const wrapperRef = ref<HTMLElement | null>(null);

function openPanel() {
    isOpen.value = true;
    nextTick(() => {
        if (panelRef.value) {
            gsap.fromTo(
                panelRef.value,
                { y: -12, opacity: 0, scale: 0.97 },
                { y: 0, opacity: 1, scale: 1, duration: 0.22, ease: 'power2.out' },
            );
        }
    });
}

function closePanel() {
    if (!panelRef.value) {
        isOpen.value = false;
        return;
    }
    gsap.to(panelRef.value, {
        y: -8,
        opacity: 0,
        scale: 0.97,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => { isOpen.value = false; },
    });
}

function togglePanel() {
    isOpen.value ? closePanel() : openPanel();
}

function onClickOutside(e: MouseEvent) {
    if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
        if (isOpen.value) closePanel();
    }
}

onMounted(() => document.addEventListener('pointerdown', onClickOutside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onClickOutside));

function markAllRead() {
    router.post('/notifications/read-all', {}, { preserveState: true, preserveScroll: true });
}

function markRead(id: string) {
    router.post(`/notifications/${id}/read`, {}, { preserveState: true, preserveScroll: true });
}

function handleAction(notification: Notification) {
    markRead(notification.id);
    if (notification.action?.url) {
        router.visit(notification.action.url);
    }
}

function dismiss(id: string) {
    markRead(id);
}

function formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}.${month}.${year}`;
}

function formatAmount(amount: number): string {
    return new Intl.NumberFormat('ru-RU').format(amount) + ' ₽';
}
</script>

<template>
    <div ref="wrapperRef" class="relative">
        <!-- Bell Button -->
        <button
            @click="togglePanel"
            class="relative cursor-pointer transition-opacity duration-300 hover:opacity-80"
        >
            <!-- Unread badge -->
            <div
                v-if="unreadCount > 0"
                class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full border-2 border-PageMain bg-Orange"
            />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3262 18.6436C10.7378 18.5537 13.2461 18.5537 13.6582 18.6436C14.0101 18.7274 14.3905 18.9236 14.3906 19.3516C14.3702 19.7591 14.1384 20.1202 13.8184 20.3496C13.4034 20.6835 12.9163 20.8955 12.4072 20.9717C12.126 21.0093 11.8496 21.0101 11.5781 20.9717C11.0682 20.8955 10.5811 20.6834 10.167 20.3486C9.84615 20.1201 9.61421 19.7591 9.59375 19.3516C9.59384 18.9236 9.97429 18.7275 10.3262 18.6436ZM12.0371 4C13.7502 4 15.5006 4.83945 16.54 6.23145C17.2142 7.12761 17.5234 8.02329 17.5234 9.41504V9.77734C17.5235 10.8446 17.7969 11.4742 18.3984 12.1992C18.8541 12.7334 19 13.4193 19 14.1631C18.9999 14.9058 18.7636 15.6111 18.29 16.1836C17.6697 16.8701 16.7943 17.3085 15.9014 17.3848C14.6074 17.4986 13.312 17.5947 12 17.5947C10.6873 17.5947 9.39347 17.5371 8.09961 17.3848C7.20584 17.3086 6.33052 16.8702 5.71094 16.1836C5.23731 15.611 5.0001 14.9059 5 14.1631C5 13.4193 5.14668 12.7334 5.60156 12.1992C6.22188 11.4742 6.47747 10.8446 6.47754 9.77734V9.41504C6.47754 7.98537 6.82293 7.04992 7.53418 6.13477C8.59166 4.8003 10.2869 4 11.9639 4H12.0371Z" fill="#636363" />
            </svg>
        </button>

        <!-- Dropdown Panel -->
        <div
            v-if="isOpen"
            ref="panelRef"
            class="absolute -right-12 top-[calc(100%+12px)] z-50 w-[360px] max-h-[520px] overflow-hidden flex flex-col rounded-2xl border border-StrokeGray bg-[#090B0D]/60 shadow-2xl backdrop-blur-xl"
        >
            <!-- Header -->
            <div class="flex items-center justify-between px-5 py-4 border-b border-StrokeGray flex-shrink-0">
                <span class="text-[15px] font-bold text-white">Уведомления</span>
                <button
                    v-if="unreadCount > 0"
                    @click="markAllRead"
                    class="rounded-lg bg-[#3D2B15] px-4 py-2 text-[11px] font-bold uppercase text-Orange transition-opacity duration-200 hover:opacity-80"
                >
                    ПРОЧИТАТЬ ВСЕ
                </button>
            </div>

            <!-- Notification list -->
            <div class="overflow-y-auto flex-1">
                <div
                    v-if="notifications.length === 0"
                    class="flex items-center justify-center py-12 text-sm text-TextGray"
                >
                    Нет уведомлений
                </div>

                <div
                    v-for="notification in notifications"
                    :key="notification.id"
                    :class="[
                        'flex flex-col gap-3 p-5 border-b border-StrokeGray transition-colors duration-200',
                        !notification.read ? 'border-l-2 border-l-Orange' : 'border-l-2 border-l-transparent',
                    ]"
                >
                    <!-- Top row: icon + title + date -->
                    <div class="flex items-start gap-3">
                        <!-- Icon -->
                        <div
                            :class="[
                                'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl',
                                notification.type === 'vip_expiring' ? 'bg-[#2A1A1A]' : 'bg-[#152A1E]',
                            ]"
                        >
                            <!-- Wallet icon (green) for balance/purchase -->
                            <svg
                                v-if="notification.type !== 'vip_expiring'"
                                width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19.2498 11.7129H15.3367C13.8999 11.712 12.7353 10.5539 12.7344 9.12404C12.7344 7.69415 13.8999 6.53603 15.3367 6.53516H19.2498" stroke="#64CE82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.7796 9.06335H15.4783" stroke="#64CE82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82248 0.75H14.1774C16.9788 0.75 19.2498 3.01012 19.2498 5.79801V12.702C19.2498 15.4899 16.9788 17.75 14.1774 17.75H5.82248C3.02107 17.75 0.75 15.4899 0.75 12.702V5.79801C0.75 3.01012 3.02107 0.75 5.82248 0.75Z" stroke="#64CE82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.13477 5.11608H10.3535" stroke="#64CE82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <!-- Warning icon (red) for VIP expiring -->
                            <svg
                                v-else
                                width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75955 16.75H16.7455C18.2838 16.75 19.2494 15.1104 18.4851 13.7929L11.4975 1.74504C10.7283 0.418959 8.78935 0.418 8.01922 1.74408L1.01994 13.792C0.255638 15.1094 1.22025 16.75 2.75955 16.75Z" stroke="#DE5656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.74938 10.0173V7.04492" stroke="#DE5656" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.74208 12.9755H9.7518" stroke="#DE5656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-2">
                                <span class="text-[13px] font-bold text-white leading-tight">{{ notification.title }}</span>
                                <span class="flex-shrink-0 text-[11px] text-TextGray">{{ formatDate(notification.created_at) }}</span>
                            </div>
                            <p class="mt-1 text-[12px] text-TextGray leading-relaxed">{{ notification.message }}</p>
                        </div>
                    </div>

                    <!-- Amount badge -->
                    <div v-if="notification.amount" class="ml-13">
                        <div class="inline-flex items-center rounded-lg bg-[#2A1E10] px-4 py-2.5">
                            <span class="text-[15px] font-bold text-Orange">{{ formatAmount(notification.amount) }}</span>
                        </div>
                    </div>

                    <!-- Action buttons -->
                    <div v-if="notification.action" class="ml-13 flex gap-2">
                        <button
                            @click="dismiss(notification.id)"
                            class="button-black rounded-lg border border-StrokeGray px-6 py-2.5 text-[12px] font-bold uppercase text-TextGray transition-opacity duration-200 hover:opacity-80"
                        >
                            НЕТ
                        </button>
                        <button
                            @click="handleAction(notification)"
                            class="flex-1 rounded-lg bg-[#3D2B15] px-6 py-2.5 text-[12px] font-bold uppercase text-Orange transition-opacity duration-200 hover:opacity-80"
                        >
                            {{ notification.action.label }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
