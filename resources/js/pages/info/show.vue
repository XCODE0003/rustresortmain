<template>
    <MainLayout>
        <div class="container flex flex-col gap-10">
            <h1 class="text-center text-[19px] font-bold text-white uppercase">
                {{ $t('news.title') }}
            </h1>
            <div class="flex flex-col gap-2.5">
                <Link href="/info" class="text-[12px]/[12px] uppercase border border-StrokeGray rounded-lg  hover:opacity-80 cursor-pointer transition-opacity duration-300 font-medium text-TextGray button-black pl-4 pr-6 py-3 flex items-center gap-1 group w-max">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="group-hover:-translate-x-1 transition-transform duration-300"
                    >
                        <path
                            d="M6.00014 12.001L17 12.001"
                            stroke="#636363"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10.4365 17.0001L5.99991 12.0005L10.4365 7.00012"
                            stroke="#636363"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    {{ $t('news.back') }}
                </Link>
                <div class="border border-StrokeGray rounded-xl  p-16 block-black" >
                    
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/main.vue';
export default {    
    components: {
        MainLayout,
        Link,
    },
};
</script>

<style></style>
