<template>
  <div
    ref="container"
    class="flex items-center justify-center max-lg:gap-2.5 max-lg:flex-wrap relative"
  >
    <button
      v-for="tab in tabs"
      :key="tab.key"
      ref="tabButtons"
      type="button"
      @click="setActive(tab.key)"
      :class="[
        'max-lg:button-black max-lg:px-5 max-lg:py-3 max-lg:text-xs max-lg:font-bold max-lg:rounded-lg max-lg:border max-lg:border-StrokeGray hover:opacity-60 ease-in-out duration-300 lg:px-6 lg:py-5 lg:p-4 lg:pt-0',
        modelValue === tab.key ? 'text-white' : 'text-TextGray',
      ]"
    >
      <span class="inline-flex items-center gap-2">
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.count !== undefined && tab.count !== null"
          class="relative inline-flex"
        >
          <span class="font-bold text-Orange">({{ tab.count }})</span>
          <span
            class="absolute -right-1.5 -top-1.5 size-2.5 rounded-full bg-Orange border-2 border-PageMain"
          ></span>
        </span>
      </span>
    </button>

    <div
      ref="indicator"
      class="absolute bottom-0 left-0 h-px bg-Orange rounded-full max-lg:hidden"
      :style="{ width: '0px' }"
    ></div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      tabs: [
        { key: 'statistics', label: 'Статистика' },
        { key: 'market', label: 'Товары магазина', count: 3 },
        { key: 'inventory', label: 'Инвентарь' },
        { key: 'subscriptions', label: 'Подписки' },
        { key: 'bonuses', label: 'Бонусы' },
      ],
    };
  },
  mounted() {
    this.animateIndicator(false);
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  watch: {
    modelValue() {
      this.$nextTick(() => this.animateIndicator(true));
    },
  },
  methods: {
    setActive(key) {
      this.$emit('update:modelValue', key);
    },
    onResize() {
      this.animateIndicator(false);
    },
    animateIndicator(animate) {
      const indicator = this.$refs.indicator;
      const container = this.$refs.container;
      const buttons = this.$refs.tabButtons;

      if (!indicator || !container || !buttons) {
        return;
      }

      const tabIndex = this.tabs.findIndex((t) => t.key === this.modelValue);
      const btn = Array.isArray(buttons) ? buttons[tabIndex] : buttons;

      if (!btn || typeof btn.getBoundingClientRect !== 'function') {
        return;
      }

      const cRect = container.getBoundingClientRect();
      const bRect = btn.getBoundingClientRect();
      const x = bRect.left - cRect.left;
      const width = bRect.width;

      if (!animate) {
        gsap.set(indicator, { x, width });
        return;
      }

      gsap.to(indicator, {
        x,
        width,
        duration: 0.35,
        ease: 'power3.out',
      });
    },
  },
};
</script>

<style>

</style>