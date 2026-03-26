<template>
    <MainLayout>
        <div class="container flex flex-col gap-10">
            <h1 class="text-center text-[19px] font-bold text-white uppercase">
                {{ $t('news.title') }}
            </h1>
            <div class="flex flex-col gap-5">
                <a href="/info/test"
                    class="bg-opacity-80 hover:opacity-80 cursor-pointer transition-opacity duration-300 flex items-center justify-between rounded-xl border border-StrokeGray p-5  md:p-3.5"
                >
                    <div class="flex w-full items-center gap-5">
                        <img
                            src="/images/test-bg-server.png"
                            alt="server"
                            class="h-[158px] w-[260px] object-cover max-md:hidden"
                        />
                        <div class="flex min-h-[148px] flex-col gap-5 pt-2.5">
                            <div class="flex flex-col gap-3.5">
                                <h2
                                    class="text-[12px]/[12px] font-medium text-TextGray"
                                >
                                    Декабрь 08 2023
                                </h2>
                                <h2 class="text-[20px] font-bold text-white">
                                    Happy Halloween
                                </h2>
                            </div>
                            <h1 class="text-[12px]/[12px] font-medium text-TextGray max-w-[745px] leading-[20px]">
                                Глобальное обновление сегодня в Раст / Rust!
                                4.01.2024 в 22:00 по Московскому времени! Вайп
                                пройдёт на всех серверах одновременно! Учитывая
                                праздники, это обновление скудно на новый
                                контент и изменения. Не бойтесь, впереди много
                                потрясающего нового! Ожидайте обзор 2023 года
                                вместе с планами Facepunch на 2024 год в
                                сегодняшнем блоге!
                            </h1>
                        </div>
                    </div>
                </a>
                <a href="/info/test"
                    class="bg-opacity-80 hover:opacity-80 cursor-pointer transition-opacity duration-300 flex items-center justify-between rounded-xl border border-StrokeGray p-5  md:p-3.5"
                >
                    <div class="flex w-full items-center gap-5">
                        <img
                            src="/images/test-bg-server.png"
                            alt="server"
                            class="h-[158px] w-[260px] object-cover max-md:hidden"
                        />
                        <div class="flex min-h-[148px] flex-col gap-5 pt-2.5">
                            <div class="flex flex-col gap-3.5">
                                <h2
                                    class="text-[12px]/[12px] font-medium text-TextGray"
                                >
                                    Декабрь 08 2023
                                </h2>
                                <h2 class="text-[20px] font-bold text-white">
                                    Happy Halloween
                                </h2>
                            </div>
                            <h1 class="text-[12px]/[12px] font-medium text-TextGray max-w-[745px] leading-[20px]">
                                Глобальное обновление сегодня в Раст / Rust!
                                4.01.2024 в 22:00 по Московскому времени! Вайп
                                пройдёт на всех серверах одновременно! Учитывая
                                праздники, это обновление скудно на новый
                                контент и изменения. Не бойтесь, впереди много
                                потрясающего нового! Ожидайте обзор 2023 года
                                вместе с планами Facepunch на 2024 год в
                                сегодняшнем блоге!
                            </h1>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/main.vue';

export default {
    components: {
        MainLayout,
    },
};
</script>

<style>
.bg-card {
    background: linear-gradient(
        180deg,
        rgba(9, 11, 13, 0.8) 0%,
        rgba(9, 11, 13, 0.8) 100%
    );
}


</style>
