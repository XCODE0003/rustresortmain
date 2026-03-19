<template>
    <div ref="rootRef" class="inline-flex">
        <v-select
            ref="selectRef"
            v-model="localValue"
            :options="options"
            :clearable="clearable"
            :searchable="searchable"
            :append-to-body="appendToBody"
            class="rr-select"
            :class="{ 'rr-select--open': isOpen }"
            @open="isOpen = true"
            @close="isOpen = false"
        >
            <template #selected-option="{ label }">
                <span
                    class="rr-select__selected"
                    @pointerdown.prevent.stop="toggle"
                >
                    {{ prefix }}{{ label }}
                </span>
            </template>
            <template #open-indicator>
                <svg class="duration-300 ease-in-out" :class="{ 'rotate-180': isOpen }"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#636363"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </template>
        </v-select>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

type Option = {
    label: string;
    value: string | number;
};

const props = withDefaults(
    defineProps<{
        modelValue: Option | null;
        options: Option[];
        prefix?: string;
        clearable?: boolean;
        searchable?: boolean;
        appendToBody?: boolean;
    }>(),
    {
        prefix: '',
        clearable: false,
        searchable: false,
        appendToBody: false,
    },
);

const emit = defineEmits<{
    (event: 'update:modelValue', value: Option | null): void;
}>();

const isOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);
const selectRef = ref<any>(null);

const localValue = computed<Option | null>({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});

const toggle = (): void => {
    const root = rootRef.value;
    const select = selectRef.value;

    if (!root || !select || typeof select.toggleDropdown !== 'function') {
        return;
    }

    select.toggleDropdown({
        target: root,
        preventDefault() {},
    });
};

const close = (): void => {
    const select = selectRef.value;
    if (!select) {
        return;
    }

    if (typeof select.closeSearchOptions === 'function') {
        select.closeSearchOptions();
    }

    if (select.searchEl && typeof select.searchEl.blur === 'function') {
        select.searchEl.blur();
    }
};

const onDocumentPointerDown = (event: PointerEvent): void => {
    if (!isOpen.value) {
        return;
    }

    const root = rootRef.value;
    const target = event.target as Node | null;

    if (!root || !target) {
        return;
    }

    if (!root.contains(target)) {
        close();
    }
};

onMounted(() => {
    document.addEventListener('pointerdown', onDocumentPointerDown);
});

onBeforeUnmount(() => {
    document.removeEventListener('pointerdown', onDocumentPointerDown);
});
</script>

<style scoped>

.v-select {
    position: relative;
}
.rr-select {
    width: auto;
    min-width: max-content;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-TextGray);
}

.rr-select :deep(.vs__dropdown-toggle) {
    background: linear-gradient(
        180deg,
        rgba(9, 11, 13, 0.4) 0%,
        rgba(9, 11, 13, 0.4) 100%
    );
    border: 1px solid var(--color-StrokeGray);
    border-radius: 0.5rem;
    padding: 0.875rem 0.5rem 0.875rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    backdrop-filter: blur(24px);
}

.rr-select :deep(.vs__selected-options) {
    padding: 0;
    margin: 0;
    flex-wrap: nowrap;
    overflow: hidden;
}

.rr-select :deep(.vs__selected) {
    margin: 0;
    padding: 0;
    color: inherit;
    white-space: nowrap;
    position: static;
    opacity: 1;
}

.rr-select :deep(.vs__search) {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 0;
    border: 0;
    pointer-events: none;
}

.rr-select :deep(.vs__actions) {
    padding: 0;
}

.rr-select :deep(.vs__open-indicator) {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
}

.rr-select.rr-select--open :deep(.vs__open-indicator) {
    transform: rotate(180deg);
}

.rr-select :deep(.vs__dropdown-menu) {
    position: absolute;
    top: auto !important;
    bottom: calc(100% + 0.5rem) !important;
    left: 0 !important;
    width: 100%;
    z-index: 1000;
    border: 1px solid var(--color-StrokeGray);
    background: rgba(14, 16, 18, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 0.75rem;
    padding: 0.25rem;
    animation: select-open 0.22s ease;
    transform-origin: bottom center;
}

.rr-select :deep(.vs__dropdown-option) {
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    color: var(--color-TextGray);
    font-weight: 700;
}

.rr-select :deep(.vs__dropdown-option--highlight) {
    background: rgba(243, 164, 93, 0.15);
    color: var(--color-Orange);
}

.rr-select :deep(.vs__dropdown-option--selected) {
    color: white;
}

@keyframes select-open {
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>

