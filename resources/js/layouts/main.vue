<template>
    <Header />
    <main class="py-[48px] md:py-[60px] lg:py-[75px]">
        <slot />
    </main>
    <Footer />
</template>

<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import Header from '@/components/header.vue';
</script>

<style></style>
