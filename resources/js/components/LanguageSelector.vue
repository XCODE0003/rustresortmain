<template>
    <div class="relative" ref="selectorRef">
        <button
            @click="isOpen = !isOpen"
            class="flex items-center gap-1 text-xs font-medium text-TextGray transition-colors duration-300 hover:text-white"
        >
            <img
                :src="`/images/${currentLanguage.code}.svg`"
                :alt="currentLanguage.code"
                class="size-4 rounded-sm"
            />
            <span class="max-md:hidden">{{ currentLanguage.code.toUpperCase() }}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                :class="{ 'rotate-180': isOpen }"
                class="transition-transform duration-300"
            >
                <path
                    d="M15 11L12 14L9 11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>

        <Transition name="dropdown">
            <div
                v-if="isOpen"
                class="button-black absolute top-full right-0 mt-2 flex min-w-[120px] flex-col overflow-hidden rounded-lg border border-StrokeGray"
            >
                <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="selectLanguage(lang)"
                    :class="[
                        'flex items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition-colors duration-200',
                        currentLanguage.code === lang.code
                            ? 'text-Orange'
                            : 'text-TextGray hover:text-white'
                    ]"
                >
                    <img
                        :src="`/images/${lang.code}.svg`"
                        :alt="lang.code"
                        class="size-4 rounded-sm"
                    />
                    {{ lang.name }}
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { router } from '@inertiajs/vue3';

interface Language {
    code: string;
    name: string;
}

const languages: Language[] = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
];

const props = defineProps<{
    currentLocale?: string;
}>();

const isOpen = ref(false);
const selectorRef = ref<HTMLElement | null>(null);

const currentLanguage = computed(() => {
    const locale = props.currentLocale || 'ru';
    return languages.find(lang => lang.code === locale) || languages[0];
});

const selectLanguage = (lang: Language) => {
    if (lang.code !== currentLanguage.value.code) {
        router.post('/locale', { locale: lang.code }, {
            preserveScroll: true,
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    } else {
        isOpen.value = false;
    }
};

const handleClickOutside = (event: MouseEvent) => {
    if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
