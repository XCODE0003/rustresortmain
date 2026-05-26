<template>
    <MainLayout>
        <div
            class="container flex flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
            <h1 class="payment-section text-center text-[19px] font-bold text-white uppercase">
                {{ $t('payment.balance_page_title') }}
            </h1>
            <div
                class="payment-section flex w-full items-center justify-center max-md:justify-around md:gap-12"
            >
                <Link
                    href="/payment"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{ 'text-white': $page.url.includes('/payment') }"
                >
                    {{ $t('payment.tab_topup') }}
                </Link>
                <Link
                    href="/purchases"
                    class="text-[15px] font-bold text-TextGray uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
                    :class="{
                        'text-white': $page.url.includes('/purchases'),
                    }"
                >
                    {{ $t('payment.tab_history') }}
                </Link>
            </div>
            <div
                class="payment-section relative flex w-full items-stretch lg:items-start gap-2.5 max-lg:flex-col md:gap-5 lg:gap-8"
            >
                <div class="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                    <button
                        v-for="(gateway, code) in gateways"
                        :key="code"
                        type="button"
                        @click="selectedGateway = code"
                        :class="[
                            'gateway-card group relative flex aspect-[5/4] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-3 transition-all duration-300 ease-out md:p-4',
                            selectedGateway === code
                                ? 'border-Orange bg-gradient-to-br from-Orange/18 via-Orange/8 to-transparent shadow-[0_0_28px_rgba(243,164,93,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]'
                                : 'border-StrokeGray bg-[#0e1012]/60 hover:border-Orange/60 hover:bg-Orange/[0.04] hover:shadow-[0_0_16px_rgba(243,164,93,0.18)]',
                        ]"
                    >
                        <!-- Active dot -->
                        <span
                            v-if="selectedGateway === code"
                            class="pointer-events-none absolute -top-1 -right-1 flex size-2.5"
                            aria-hidden="true"
                        >
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-Orange opacity-60"></span>
                            <span class="relative inline-flex size-2.5 rounded-full bg-Orange ring-2 ring-[#0b0d0f]"></span>
                        </span>

                        <!-- Currency chip -->
                        <span
                            :class="[
                                'absolute top-2 left-2 rounded-md border px-1.5 py-0.5 text-[9px] font-bold uppercase backdrop-blur-md transition-colors duration-300',
                                selectedGateway === code
                                    ? 'border-Orange/40 bg-[#0E1012]/80 text-Orange'
                                    : 'border-StrokeGray bg-[#0E1012]/80 text-TextGray group-hover:text-white',
                            ]"
                        >
                            {{ gateway.currency }}
                        </span>

                        <!-- Logo: uniform bounding box for every provider -->
                        <div class="flex h-full w-full items-center justify-center px-2 pt-3">
                            <img
                                v-if="gateway.logo"
                                :src="'/' + gateway.logo"
                                :alt="gateway.name"
                                class="max-h-12 max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-[1.04] md:max-h-14"
                            />
                            <span
                                v-else
                                class="text-center text-sm font-bold text-white uppercase tracking-wide"
                            >
                                {{ gateway.name }}
                            </span>
                        </div>
                    </button>
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
                                {{ $t('payment.selected_method') }}
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

                    <!-- Steam trade — специальный UI без ввода суммы -->
                    <template v-if="isSteamGateway">
                        <div
                            class="block-black flex flex-col gap-6 rounded-xl border border-StrokeGray p-6 lg:p-8"
                        >
                            <p class="text-sm leading-relaxed text-TextGray">
                                {{ $t('payment.steam_trade_description') }}
                            </p>
                            <a
                                v-if="gateways[selectedGateway].trade_url"
                                :href="gateways[selectedGateway].trade_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center justify-center gap-2.5 rounded-lg bg-TextGreen px-5 py-3 text-base font-bold text-TextBlack transition-all duration-300 hover:bg-TextGreen/80"
                            >
                                {{ $t('payment.steam_trade_button') }}
                            </a>
                            <p v-else class="text-center text-sm text-red-400">
                                {{ $t('payment.steam_trade_not_configured') }}
                            </p>
                        </div>
                    </template>

                    <!-- Обычный UI для всех остальных шлюзов -->
                    <template v-else>
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
                            {{ $t('payment.min_amount_line', { amount: gateways[selectedGateway].min_amount, currency: gateways[selectedGateway].currency }) }}
                        </div>
                        <div
                            class="block-black flex flex-col gap-2.5 rounded-xl border border-StrokeGray p-2.5 md:gap-5 md:p-5 lg:gap-[30px] lg:p-8"
                        >
                            <div class="flex flex-col gap-1">
                                <h1 class="px-2 text-xs font-medium text-TextGray">
                                    {{ $t('payment.promo_code') }}
                                </h1>
                                <div class="flex items-stretch gap-1">
                                    <input
                                        v-model="promoCode"
                                        type="text"
                                        class="w-full rounded-md border border-StrokeGray bg-transparent px-6 py-2 text-xs font-medium text-white outline-none placeholder:text-TextGray"
                                        :placeholder="$t('payment.promo_placeholder')"
                                    />
                                    <button
                                        class="w-max rounded-lg bg-PaleOrange px-6 py-3.5 text-[12px]/[20px] font-bold text-Orange transition-all duration-300 hover:bg-Orange hover:text-PaleOrange"
                                    >
                                        {{ $t('payment.activate') }}
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1">
                                <h1 class="px-2 text-xs font-medium text-TextGray">
                                    {{ $t('payment.enter_amount') }}
                                </h1>
                                <div class="flex items-stretch gap-1">
                                    <input
                                        v-model="amount"
                                        type="number"
                                        :min="selectedGateway && gateways[selectedGateway] ? gateways[selectedGateway].min_amount : 10"
                                        :max="selectedGateway && gateways[selectedGateway] ? gateways[selectedGateway].max_amount : null"
                                        class="w-full rounded-md border border-StrokeGray bg-transparent px-6 py-2 text-xs/[30px] font-medium text-white outline-none placeholder:text-TextGray"
                                        :placeholder="$t('payment.amount_placeholder')"
                                    />
                                </div>
                            </div>
                            <div
                                class="flex flex-col items-start gap-2.5 pl-2.5 text-left"
                            >
                                <h1
                                    class="text-xs font-medium text-TextGray uppercase"
                                >
                                    {{ $t('payment.you_receive_balance') }}
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
                                        {{ $t('payment.accept_terms_lead') }}
                                        <Link
                                            href="/payment/terms"
                                            class="text-Orange duration-300 ease-in-out hover:opacity-80"
                                        >{{ $t('payment.terms_service_link') }}</Link>
                                    </h1>
                                </div>
                                <div
                                    class="button-black flex items-center gap-2.5 rounded-lg border border-StrokeGray px-5 py-3"
                                >
                                    <Toggle v-model="agreePolicy" />
                                    <h1 class="text-xs font-medium text-TextGray">
                                        {{ $t('payment.terms_policy_lead') }}
                                        <Link
                                            href="/payment/terms"
                                            class="text-Orange duration-300 ease-in-out hover:opacity-80"
                                        >{{ $t('payment.terms_policy_link') }}</Link>
                                    </h1>
                                </div>
                            </div>
                            <button
                                @click="submitPayment"
                                :disabled="!selectedGateway || !agreeTerms || !agreePolicy || processing"
                                class="flex items-center justify-center gap-2.5 rounded-lg border border-StrokeGray bg-TextGreen px-5 py-3 text-TextBlack duration-300 ease-in-out hover:bg-TextGreen/80 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {{ processing ? $t('payment.processing') : $t('payment.top_up_action') }}
                            </button>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import { Link, router } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
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
        onMounted(() => {
            gsap.fromTo(
                '.payment-section',
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: 'power2.out' },
            );
        });

        const selectedGateway = ref(Object.keys(props.gateways)[0] || null);
        const amount = ref(100);
        const promoCode = ref('');
        const agreeTerms = ref(false);
        const agreePolicy = ref(false);
        const processing = ref(false);

        const isSteamGateway = computed(() => {
            if (!selectedGateway.value || !props.gateways[selectedGateway.value]) return false;
            return props.gateways[selectedGateway.value].type === 'steam_trade';
        });

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
            isSteamGateway,
            submitPayment,
        };
    },
};
</script>

<style scoped>
.gateway-card {
    background-image:
        linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, transparent 60%),
        linear-gradient(180deg, rgba(9, 11, 13, 0.6) 0%, rgba(9, 11, 13, 0.6) 100%);
}

@media (prefers-reduced-motion: reduce) {
    .gateway-card img {
        transition: none !important;
    }
    .gateway-card:hover img {
        transform: none !important;
    }
}
</style>
