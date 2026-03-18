<template>
    <div
        role="switch"
        :aria-checked="modelValue"
        tabindex="0"
        :class="[
            'button-black toggle-button relative h-3 w-[22px] rounded-sm border border-StrokeGray',
            { active: modelValue },
        ]"
        @click.stop="toggle"
        @keydown.space.prevent="toggle"
        @keydown.enter.prevent="toggle"
    >
        <span
            :class="[
                'absolute top-1/2 left-px size-2 -translate-y-1/2 rounded-xs bg-TextGray transition-all duration-300 ease-in-out',
                modelValue ? 'translate-x-[10px] bg-Orange' : '',
            ]"
        ></span>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        modelValue?: boolean;
    }>(),
    {
        modelValue: false,
    },
);

const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
}>();

const toggle = (): void => {
    emit('update:modelValue', !props.modelValue);
};
</script>

