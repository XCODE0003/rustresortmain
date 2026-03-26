<template>
  <ContentPageProfile :is_empty="true">
    <h1>{{ $t('profile.bonuses') }}</h1>
  </ContentPageProfile>
</template>

<script>
import ContentPageProfile from '../content.vue';

export default {

  props: {
    is_empty: {
      type: Boolean,
      default: true,
    },
  },

  components: {
    ContentPageProfile,
  },
};
</script>

<style></style>

