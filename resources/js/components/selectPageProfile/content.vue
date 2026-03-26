<template>
  <div
    :class="[
      'block-black rounded-xl border border-StrokeGray min-h-[440px] w-full h-full',
      is_empty
        ? 'border-dashed flex items-center justify-center text-center text-TextGray'
        : '',
    ]"
  >
    <template v-if="is_empty">{{ $t('profile.empty') }}</template>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    is_empty: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>

</style>