<template>
    <MainLayout>
        <div
            class="container flex flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
            <h1 class="text-center text-[19px] font-bold text-white uppercase">
                Баланс
            </h1>
            <div
                class="flex w-full items-center justify-center max-md:justify-around md:gap-12"
            >
                <Link
                    href="/payment"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{ 'text-white': $page.url.includes('/payment') }"
                >
                    Пополнение
                </Link>
                <Link
                    href="/purchases"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{
                        'text-white': $page.url.includes('/purchases'),
                    }"
                >
                    История
                </Link>
            </div>
            <div
                class="relative flex w-full items-stretch lg:items-start gap-2.5 max-lg:flex-col md:gap-5 lg:gap-8"
            >
                <div class="grid w-full grid-cols-3 gap-2.5 lg:grid-cols-4">
                    <div
                        v-for="(gateway, code) in gateways"
                        :key="code"
                        @click="selectedGateway = code"
                        class="black-button relative flex h-[84px] cursor-pointer items-center justify-center rounded-xl border px-5 py-4 duration-300 ease-in-out md:h-[95px] lg:h-[130px]"
                        :class="{
                            'border-Orange bg-PaleOrange': selectedGateway === code,
                            'border-StrokeGray hover:border-Orange hover:bg-PaleOrange hover:opacity-80': selectedGateway !== code
                        }"
                    >
                        <img
                            v-if="gateway.logo"
                            :src="'/' + gateway.logo"
                            :alt="gateway.name"
                            class="h-10 object-cover"
                        />
                        <span v-else class="text-xs font-bold text-white">
                            {{ gateway.name }}
                        </span>
                        <div
                            class="button-black absolute top-1.5 right-1.5 rounded-md border border-StrokeGray px-2 py-1 text-[10px] font-bold text-TextGray uppercase"
                        >
                            {{ gateway.currency }}
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col gap-4 md:min-w-[569px] lg:min-w-[589px]"
                >
                    <div
                        v-if="selectedGateway && gateways[selectedGateway]"
                        class="block-black relative flex items-center justify-between gap-2.5 rounded-xl border border-StrokeGray px-8 py-6 max-md:hidden lg:px-10 lg:py-8"
                    >
                        <div class="flex flex-col items-start gap-1 text-left">
                            <h1
                                class="text-xs font-medium text-TextGray uppercase"
                            >
                                Выбранный метод оплаты
                            </h1>
                            <p
                                class="text-base font-bold text-Orange uppercase"
                            >
                                {{ gateways[selectedGateway].name }}
                            </p>
                        </div>
                        <img
                            v-if="gateways[selectedGateway].logo"
                            :src="'/' + gateways[selectedGateway].logo"
                            :alt="gateways[selectedGateway].name"
                            class="h-8 object-cover"
                        />
                    </div>
                    <div
                        v-if="selectedGateway && gateways[selectedGateway]"
                        class="flex items-center gap-2.5 rounded-lg bg-PaleOrange px-6 py-3 text-Orange"
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
                                d="M5.00711 20H18.993C20.5313 20 21.4969 18.3604 20.7326 17.0429L13.745 4.99504C12.9759 3.66896 11.0369 3.668 10.2668 4.99408L3.2675 17.042C2.5032 18.3594 3.46781 20 5.00711 20Z"
                                stroke="#F3A45D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M11.9969 13.2673V10.2949"
                                stroke="#F3A45D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M11.9901 16.2255H11.9998"
                                stroke="#F3A45D"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Минимальная сумма: {{ gateways[selectedGateway].min_amount }} {{ gateways[selectedGateway].currency }}
                    </div>
                    <div
                        class="block-black flex flex-col gap-2.5 rounded-xl border border-StrokeGray p-2.5 md:gap-5 md:p-5 lg:gap-[30px] lg:p-8"
                    >
                        <div class="flex flex-col gap-1">
                            <h1 class="px-2 text-xs font-medium text-TextGray">
                                Промокод
                            </h1>
                            <div class="flex items-stretch gap-1">
                                <input
                                    v-model="promoCode"
                                    type="text"
                                    class="w-full rounded-md border border-StrokeGray bg-transparent px-6 py-2 text-xs font-medium text-white outline-none placeholder:text-TextGray"
                                    placeholder="Введите промокод"
                                />
                                <button
                                    class="w-max rounded-lg bg-PaleOrange px-6 py-3.5 text-[12px]/[20px] font-bold text-Orange transition-all duration-300 hover:bg-Orange hover:text-PaleOrange"
                                >
                                    Активировать
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <h1 class="px-2 text-xs font-medium text-TextGray">
                                Введите сумму
                            </h1>
                            <div class="flex items-stretch gap-1">
                                <input
                                    v-model="amount"
                                    type="number"
                                    :min="selectedGateway && gateways[selectedGateway] ? gateways[selectedGateway].min_amount : 10"
                                    :max="selectedGateway && gateways[selectedGateway] ? gateways[selectedGateway].max_amount : null"
                                    class="w-full rounded-md border border-StrokeGray bg-transparent px-6 py-2 text-xs/[30px] font-medium text-white outline-none placeholder:text-TextGray"
                                    placeholder="0.00 ₽"
                                />
                            </div>
                        </div>
                        <div
                            class="flex flex-col items-start gap-2.5 pl-2.5 text-left"
                        >
                            <h1
                                class="text-xs font-medium text-TextGray uppercase"
                            >
                                Вы получите на баланс
                            </h1>
                            <p
                                class="text-base font-bold text-Orange uppercase"
                            >
                                {{ amount || 0 }} ₽
                            </p>
                        </div>
                        <div class="flex flex-col gap-2.5">
                            <div
                                class="button-black flex items-center gap-2.5 rounded-lg border border-StrokeGray px-5 py-3"
                            >
                                <Toggle v-model="agreeTerms" />
                                <h1 class="text-xs font-medium text-TextGray">
                                    Я принимаю условия
                                    <Link
                                        href="/payment/terms"
                                        class="text-Orange duration-300 ease-in-out hover:opacity-80"
                                        >Обслуживания</Link
                                    >
                                </h1>
                            </div>
                            <div
                                class="button-black flex items-center gap-2.5 rounded-lg border border-StrokeGray px-5 py-3"
                            >
                                <Toggle v-model="agreePolicy" />
                                <h1 class="text-xs font-medium text-TextGray">
                                    Я принимаю условия
                                    <Link
                                        href="/payment/terms"
                                        class="text-Orange duration-300 ease-in-out hover:opacity-80"
                                        >Соглашений о политики</Link
                                    >
                                </h1>
                            </div>
                        </div>
                        <button
                            @click="submitPayment"
                            :disabled="!selectedGateway || !agreeTerms || !agreePolicy || processing"
                            class="flex items-center justify-center gap-2.5 rounded-lg border border-StrokeGray bg-TextGreen px-5 py-3 text-TextBlack duration-300 ease-in-out hover:bg-TextGreen/80 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ processing ? 'Обработка...' : 'Пополнить' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import { Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import MainLayout from '@/layouts/main.vue';
import Toggle from '../components/toggle.vue';

export default {
    components: {
        Link,
        MainLayout,
        Toggle,
    },
    props: {
        gateways: {
            type: Object,
            default: () => ({}),
        },
    },
    setup(props) {
        const selectedGateway = ref(Object.keys(props.gateways)[0] || null);
        const amount = ref(100);
        const promoCode = ref('');
        const agreeTerms = ref(false);
        const agreePolicy = ref(false);
        const processing = ref(false);

        const submitPayment = () => {
            if (!selectedGateway.value || !agreeTerms.value || !agreePolicy.value) {
                return;
            }

            processing.value = true;

            router.post('/balance/topup', {
                amount: amount.value,
                gateway: selectedGateway.value,
                promo_code: promoCode.value || null,
            }, {
                onFinish: () => {
                    processing.value = false;
                },
            });
        };

        return {
            selectedGateway,
            amount,
            promoCode,
            agreeTerms,
            agreePolicy,
            processing,
            submitPayment,
        };
    },
};
</script>

<style></style>
