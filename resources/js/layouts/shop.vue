<template>
    <MainLayout>
        <div class="container flex flex-col items-center md:gap-8 gap-6 lg:gap-10">
            <!-- <div class="flex items-center max-md:justify-around justify-center md:gap-12 w-full">
                <Link
                    href="/shop/server"
                    class="md:text-[17px] text-[15px] lg:text-[19px] font-bold text-TextGray duration-300 ease-in-out hover:opacity-80 hover:text-white uppercase" :class="{ 'text-white': $page.url.includes('/shop/server') }"
                >
                    Магазин сервера
                </Link>
                <Link
                    href="/shop/other"
                    class="md:text-[17px] text-[15px] lg:text-[19px] font-bold text-TextGray duration-300 ease-in-out hover:opacity-80 hover:text-white uppercase" :class="{ 'text-white': $page.url.includes('/shop/other') }"
                >
                    Другие товары
                </Link>
            </div> -->
            <slot />
        </div>
        <DescriptionModal />
    </MainLayout>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import DescriptionModal from '@/components/modals/descriptionModal.vue';
import MainLayout from '@/layouts/main.vue';
export default {
    components: {
        Link,
        MainLayout,
        DescriptionModal,
    },
};
</script>

<style></style>
