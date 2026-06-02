<template>
  <ContentPageProfile :is_empty="false">
    <div class="flex max-w-[560px] flex-col gap-5 p-5 pt-8">
      <div>
        <h1 class="text-lg font-bold text-white uppercase">{{ $t('profile.promo_title') }}</h1>
        <p class="mt-1.5 text-sm text-TextGray">{{ $t('profile.promo_hint') }}</p>
      </div>

      <form class="flex flex-col gap-3 sm:flex-row" @submit.prevent="submit">
        <input
          v-model="code"
          type="text"
          autocomplete="off"
          :placeholder="$t('profile.promo_placeholder')"
          :disabled="loading"
          class="button-black flex-1 rounded-lg border border-StrokeGray px-5 py-3.5 text-sm font-bold text-white uppercase outline-none duration-300 placeholder:font-medium placeholder:text-TextGray placeholder:normal-case focus:border-Orange disabled:opacity-50"
          @input="message = ''"
        />
        <button
          type="submit"
          :disabled="loading || code.trim() === ''"
          class="rounded-lg bg-Orange px-6 py-3.5 text-sm font-bold text-black duration-300 ease-in-out hover:bg-PaleOrange hover:text-Orange disabled:cursor-not-allowed disabled:opacity-50"
        >
          {{ loading ? $t('profile.promo_activating') : $t('profile.promo_activate') }}
        </button>
      </form>

      <Transition name="promo-fade">
        <div
          v-if="message"
          :class="[
            'rounded-lg border px-4 py-3 text-sm font-medium',
            messageType === 'success'
              ? 'border-green-500/40 bg-green-500/10 text-green-400'
              : 'border-red-500/40 bg-red-500/10 text-red-400',
          ]"
        >
          {{ message }}
        </div>
      </Transition>
    </div>
  </ContentPageProfile>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import ContentPageProfile from '../content.vue';

const page = usePage();
const { t } = useI18n();

const code = ref('');
const loading = ref(false);
const message = ref('');
const messageType = ref<'success' | 'error'>('success');

const submit = (): void => {
  const value = code.value.trim();
  if (value === '' || loading.value) return;

  loading.value = true;
  message.value = '';

  router.post(
    '/promocode/activate',
    { code: value },
    {
      // preserveState — чтобы остаться на вкладке «Бонусы» и не перерисовать ЛК,
      // preserveScroll — не прыгать вверх. Баланс в шапке обновится через shared-проп.
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        const flash = (page.props as { flash?: { success?: string; error?: string } }).flash ?? {};
        if (flash.success) {
          message.value = flash.success;
          messageType.value = 'success';
          code.value = '';
        } else if (flash.error) {
          message.value = flash.error;
          messageType.value = 'error';
        }
      },
      onError: (errors) => {
        message.value = (Object.values(errors)[0] as string) || t('profile.promo_error');
        messageType.value = 'error';
      },
      onFinish: () => {
        loading.value = false;
      },
    },
  );
};
</script>

<style scoped>
.promo-fade-enter-active,
.promo-fade-leave-active {
  transition: opacity 0.2s ease;
}
.promo-fade-enter-from,
.promo-fade-leave-to {
  opacity: 0;
}
</style>
