<template>
    <ShopLayout>
        <div
            class="relative flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
      
            <div
                class="flex w-full flex-col items-center gap-9 md:gap-16 lg:gap-20"
            >
                <div class="relative flex w-full flex-col gap-6">
                    <div
                        class="flex w-full items-center justify-center gap-1.5"
                    >
                        <Link
                            href="/shop/server/1"
                            class="button-black rounded-lg border border-StrokeGray px-6 py-3.5 text-sm font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white"
                        >
                            {{ $t('shop.cases') }}
                        </Link>
                        <Link
                            href="/shop/basket"
                            class="button-black top-0 right-0 flex items-center gap-1 rounded-lg border border-StrokeGray p-2.5 text-sm font-bold uppercase duration-300 ease-in-out hover:opacity-80 md:absolute"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.34204 17.5265C9.00552 17.5265 9.54907 18.0819 9.54907 18.7677C9.54887 19.4452 9.0054 20.0001 8.34204 20.0001C7.67069 20.0001 7.1274 19.4452 7.1272 18.7677C7.1272 18.0819 7.67056 17.5265 8.34204 17.5265ZM17.3352 17.5265C17.9986 17.5266 18.5422 18.082 18.5422 18.7677C18.542 19.4451 17.9985 20.0001 17.3352 20.0001C16.6639 20.0001 16.1206 19.4452 16.1204 18.7677C16.1204 18.0819 16.6637 17.5265 17.3352 17.5265ZM4.70435 4.00698L6.6106 4.29995C6.88238 4.34975 7.08271 4.57803 7.10669 4.85561L7.25806 6.68374C7.28204 6.9458 7.49054 7.14174 7.74634 7.14174H18.5413C19.0289 7.14174 19.3485 7.31405 19.6682 7.6896C19.9879 8.06514 20.0439 8.60392 19.9719 9.09292L19.2131 14.4484C19.0692 15.4777 18.2058 16.2364 17.1907 16.2365H8.46899C7.40598 16.2363 6.52664 15.4038 6.43872 14.3263L5.70337 5.4269L4.49634 5.21499C4.17671 5.15783 3.95327 4.83928 4.00903 4.51284C4.06499 4.17893 4.3766 3.95718 4.70435 4.00698ZM13.6965 10.1623C13.361 10.1625 13.0979 10.4318 13.0979 10.7746C13.098 11.109 13.3611 11.3866 13.6965 11.3869H15.9114C16.247 11.3868 16.5109 11.1092 16.511 10.7746C16.511 10.4317 16.2471 10.1623 15.9114 10.1623H13.6965Z"
                                    fill="#636363"
                                />
                            </svg>
                            <span class="text-xs/[20px] font-bold text-Orange">
                                26 599 ₽
                            </span>
                            <div
                                class="flex size-4 items-center justify-center rounded-full bg-PaleGreen text-[9px]/[20px] font-bold text-Green"
                            >
                                5
                            </div>
                        </Link>
                    </div>
                </div>
                <div
                    class="flex flex-wrap justify-center gap-1 gap-y-12 md:gap-y-14 lg:gap-2.5"
                >
                    <div
                        class="block-black relative h-[245px] w-[225px] rounded-xl border border-StrokeGray"
                    >
                        <img
                            src="/images/subscriptions/elete-pack.png"
                            class="absolute top-1/2 left-1/2 z-10 h-[145px] w-max -translate-1/2"
                            alt=""
                        />
                        <img
                            src="/images/subscriptions/elete-pack.png"
                            class="absolute top-1/2 left-1/2 h-[145px] w-max -translate-1/2"
                            alt=""
                        />

                        <div
                            class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-nowrap text-white uppercase"
                        >
                            Elitepack
                        </div>
                        <div
                            class="absolute bottom-[-22px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 text-nowrap"
                        >
                            <button
                                class="cursor-pointer rounded-md bg-PaleOrange px-5 py-2.5 text-sm font-bold text-Orange duration-300 ease-in-out hover:bg-Orange hover:text-PaleOrange"
                            >
                                549 ₽
                            </button>
                            <button
                                class="flex size-10 items-center justify-center rounded-md bg-PaleGreen text-Green duration-300 ease-in-out hover:bg-Green hover:text-PaleGreen hover:opacity-80"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.84204 17.5265C8.50552 17.5265 9.04907 18.0819 9.04907 18.7677C9.04887 19.4452 8.5054 20.0001 7.84204 20.0001C7.17069 20.0001 6.6274 19.4452 6.6272 18.7677C6.6272 18.0819 7.17056 17.5265 7.84204 17.5265ZM16.8352 17.5265C17.4986 17.5266 18.0422 18.082 18.0422 18.7677C18.042 19.4451 17.4985 20.0001 16.8352 20.0001C16.1639 20.0001 15.6206 19.4452 15.6204 18.7677C15.6204 18.0819 16.1637 17.5265 16.8352 17.5265ZM4.20435 4.00698L6.1106 4.29995C6.38238 4.34975 6.58271 4.57803 6.60669 4.85561L6.75806 6.68374C6.78204 6.9458 6.99054 7.14174 7.24634 7.14174H18.0413C18.5289 7.14174 18.8485 7.31405 19.1682 7.6896C19.4879 8.06514 19.5439 8.60392 19.4719 9.09292L18.7131 14.4484C18.5692 15.4777 17.7058 16.2364 16.6907 16.2365H7.96899C6.90598 16.2363 6.02664 15.4038 5.93872 14.3263L5.20337 5.4269L3.99634 5.21499C3.67671 5.15783 3.45327 4.83928 3.50903 4.51284C3.56499 4.17893 3.8766 3.95718 4.20435 4.00698ZM13.1965 10.1623C12.861 10.1625 12.5979 10.4318 12.5979 10.7746C12.598 11.109 12.8611 11.3866 13.1965 11.3869H15.4114C15.747 11.3868 16.0109 11.1092 16.011 10.7746C16.011 10.4317 15.7471 10.1623 15.4114 10.1623H13.1965Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        class="block-black relative h-[245px] w-[225px] rounded-xl border border-StrokeGray"
                    >
                        <img
                            src="/images/subscriptions/elete-pack.png"
                            class="absolute top-1/2 left-1/2 z-10 h-[145px] w-max -translate-1/2"
                            alt=""
                        />
                        <img
                            src="/images/subscriptions/elete-pack.png"
                            class="absolute top-1/2 left-1/2 h-[145px] w-max -translate-1/2"
                            alt=""
                        />

                        <div
                            class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-6 py-3.5 text-xs font-bold text-nowrap text-white uppercase"
                        >
                            Elitepack
                        </div>
                        <div
                            class="absolute bottom-[-22px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 text-nowrap"
                        >
                            <button
                                class="cursor-pointer rounded-md bg-PaleOrange px-5 py-2.5 text-sm font-bold text-Orange duration-300 ease-in-out hover:bg-Orange hover:text-PaleOrange"
                            >
                                549 ₽
                            </button>
                            <button
                                class="flex size-10 items-center justify-center rounded-md bg-PaleGreen text-Green duration-300 ease-in-out hover:bg-Green hover:text-PaleGreen hover:opacity-80"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.84204 17.5265C8.50552 17.5265 9.04907 18.0819 9.04907 18.7677C9.04887 19.4452 8.5054 20.0001 7.84204 20.0001C7.17069 20.0001 6.6274 19.4452 6.6272 18.7677C6.6272 18.0819 7.17056 17.5265 7.84204 17.5265ZM16.8352 17.5265C17.4986 17.5266 18.0422 18.082 18.0422 18.7677C18.042 19.4451 17.4985 20.0001 16.8352 20.0001C16.1639 20.0001 15.6206 19.4452 15.6204 18.7677C15.6204 18.0819 16.1637 17.5265 16.8352 17.5265ZM4.20435 4.00698L6.1106 4.29995C6.38238 4.34975 6.58271 4.57803 6.60669 4.85561L6.75806 6.68374C6.78204 6.9458 6.99054 7.14174 7.24634 7.14174H18.0413C18.5289 7.14174 18.8485 7.31405 19.1682 7.6896C19.4879 8.06514 19.5439 8.60392 19.4719 9.09292L18.7131 14.4484C18.5692 15.4777 17.7058 16.2364 16.6907 16.2365H7.96899C6.90598 16.2363 6.02664 15.4038 5.93872 14.3263L5.20337 5.4269L3.99634 5.21499C3.67671 5.15783 3.45327 4.83928 3.50903 4.51284C3.56499 4.17893 3.8766 3.95718 4.20435 4.00698ZM13.1965 10.1623C12.861 10.1625 12.5979 10.4318 12.5979 10.7746C12.598 11.109 12.8611 11.3866 13.1965 11.3869H15.4114C15.747 11.3868 16.0109 11.1092 16.011 10.7746C16.011 10.4317 15.7471 10.1623 15.4114 10.1623H13.1965Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import ShopLayout from '@/layouts/shop.vue';
export default {
    components: {
        ShopLayout,
        Link,
    },
};
</script>

<style></style>
