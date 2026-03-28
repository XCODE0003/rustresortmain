<template>
  <MainLayout>
    <div class="container flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
      <!-- Title -->
      <h1
        class="purchase-section text-center text-[19px] font-bold text-white uppercase"
      >
        {{ $t("payment.balance_page_title") }}
      </h1>

      <!-- Top-level tabs: ПОПОЛНЕНИЕ / ИСТОРИЯ -->
      <div
        class="purchase-section flex w-full items-center justify-center max-md:justify-around md:gap-12"
      >
        <Link
          href="/payment"
          class="text-[15px] font-bold uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
          :class="
            $page.url.startsWith('/payment') ? 'text-white' : 'text-TextGray'
          "
        >
          {{ $t("payment.tab_topup") }}
        </Link>
        <Link
          href="/purchases"
          class="text-[15px] font-bold uppercase duration-300 ease-in-out hover:text-white hover:opacity-80 md:text-[17px] lg:text-[19px]"
          :class="
            $page.url.startsWith('/purchases') ? 'text-white' : 'text-TextGray'
          "
        >
          {{ $t("payment.tab_history") }}
        </Link>
      </div>

      <!-- Sub-tabs: ПОКУПКИ / ПОПОЛНЕНИЯ -->
      <div
        class="purchase-section flex w-full items-center gap-1 rounded-xl border border-StrokeGray p-1 max-w-xs"
      >
        <button
          type="button"
          class="flex-1 rounded-lg py-2 text-xs font-bold uppercase transition-all duration-200"
          :class="
            tab === 'purchases'
              ? 'bg-Orange text-white'
              : 'text-TextGray hover:text-white'
          "
          @click="switchTab('purchases')"
        >
          Покупки
        </button>
        <button
          type="button"
          class="flex-1 rounded-lg py-2 text-xs font-bold uppercase transition-all duration-200"
          :class="
            tab === 'topups'
              ? 'bg-Orange text-white'
              : 'text-TextGray hover:text-white'
          "
          @click="switchTab('topups')"
        >
          Пополнения
        </button>
      </div>

      <!-- List -->
      <div class="purchase-section w-full">
        <Transition name="tab-fade" mode="out-in">
        <!-- Purchases tab -->
        <template v-if="tab === 'purchases'" :key="'purchases-' + items.current_page">
          <div v-if="items.data.length > 0" class="flex flex-col gap-3">
            <div
              v-for="purchase in items.data as Purchase[]"
              :key="purchase.id"
              class="purchase-card block-black flex items-center justify-between gap-4 rounded-xl border border-StrokeGray p-4 md:p-5"
            >
              <div class="flex items-center gap-4 md:gap-5">
                <div
                  class="size-14 min-w-14 overflow-hidden rounded-lg border border-StrokeGray bg-[#0E1012]"
                >
                  <img
                    :src="
                      purchase.item?.image
                        ? '/' + purchase.item.image
                        : '/images/ak.png'
                    "
                    :alt="itemName(purchase.item)"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-sm font-bold text-white uppercase">
                    {{ itemName(purchase.item) }}
                  </h3>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs text-TextGray">{{
                      formatDate(purchase.created_at)
                    }}</span>
                    <span
                      v-if="purchase.validity"
                      class="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase"
                      :class="
                        purchase.is_valid
                          ? 'bg-[#0E2114] text-[#64CE82]'
                          : 'bg-[#1C0E0E] text-[#CE6464]'
                      "
                    >
                      {{
                        purchase.is_valid
                          ? $t("purchase.active")
                          : $t("purchase.expired")
                      }}
                    </span>
                    <span
                      v-if="purchase.server"
                      class="text-xs text-TextGray"
                      >{{ purchase.server.name }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 md:gap-5 shrink-0">
                <div class="text-right">
                  <div class="text-base font-bold text-Orange">
                    {{ formatPrice(purchase.price * purchase.count) }} ₽
                  </div>
                  <div class="text-xs text-TextGray">x{{ purchase.count }}</div>
                </div>
                <Link
                  :href="`/purchases/${purchase.id}`"
                  class="button-black rounded-lg border border-StrokeGray px-4 py-2.5 text-xs font-bold text-TextGray uppercase duration-300 ease-in-out hover:border-Orange hover:text-Orange"
                >
                  {{ $t("common.details") }}
                </Link>
              </div>
            </div>
          </div>
          <div
            v-else
            class="block-black rounded-xl border border-StrokeGray p-10 text-center text-sm text-TextGray"
          >
            {{ $t("purchase.no_purchases") }}
          </div>
        </template>

        <!-- Topups tab -->
        <template v-else :key="'topups-' + items.current_page">
          <div v-if="items.data.length > 0" class="flex flex-col gap-3">
            <div
              v-for="topup in items.data as Topup[]"
              :key="topup.id"
              class="purchase-card block-black flex items-center justify-between gap-4 rounded-xl border border-StrokeGray p-4 md:p-5"
            >
              <div class="flex items-center gap-4">
                <!-- Wallet icon -->
                <div
                  class="size-14 min-w-14 flex items-center justify-center rounded-lg border border-StrokeGray bg-[#0E1012]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-[#64CE82]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="text-sm font-bold text-white uppercase">
                    Пополнение баланса
                  </h3>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs text-TextGray">{{
                      formatDate(topup.created_at)
                    }}</span>
                    <span
                      class="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase"
                      :class="{
                        'bg-[#0E2114] text-[#64CE82]': topup.status === 1,
                        'bg-[#1C120E] text-[#CE9A64]': topup.status === 0,
                        'bg-[#1C0E0E] text-[#CE6464]': topup.status === 2,
                      }"
                    >
                      {{
                        topup.status === 1
                          ? "Выполнено"
                          : topup.status === 0
                            ? "В обработке"
                            : "Ошибка"
                      }}
                    </span>
                    <span
                      v-if="topup.payment_system"
                      class="text-xs text-TextGray"
                      >{{ topup.payment_system }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-base font-bold text-[#64CE82]">
                  +{{ formatPrice(topup.amount) }} ₽
                </div>
                <div
                  v-if="topup.bonus_amount > 0"
                  class="text-xs text-TextGray"
                >
                  +{{ formatPrice(topup.bonus_amount) }} ₽ бонус
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="block-black rounded-xl border border-StrokeGray p-10 text-center text-sm text-TextGray"
          >
            Пополнений пока нет
          </div>
        </template>
        </Transition>
      </div>

      <!-- Pagination -->
      <div
        v-if="items.last_page > 1"
        class="purchase-section flex flex-wrap items-center justify-center gap-2"
      >
        <button
          type="button"
          class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="items.current_page <= 1"
          @click="goToPage(items.current_page - 1)"
        >
          {{ $t("common.back") }}
        </button>

        <button
          v-for="page in pageNumbers"
          :key="page"
          type="button"
          class="button-black rounded-md border px-3 py-2 text-xs font-bold transition-all duration-300"
          :class="
            items.current_page === page
              ? 'border-Orange text-Orange'
              : 'border-StrokeGray text-TextGray hover:text-white'
          "
          @click="goToPage(page)"
        >
          {{ page }}
        </button>

        <button
          type="button"
          class="button-black rounded-md border border-StrokeGray px-3 py-2 text-xs font-bold uppercase text-TextGray transition-all duration-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="items.current_page >= items.last_page"
          @click="goToPage(items.current_page + 1)"
        >
          {{ $t("home.forward") }}
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { Link, router } from "@inertiajs/vue3";
import { computed, nextTick, onMounted, watch } from "vue";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n";
import { useShopLocale } from "@/composables/useShopLocale";
import MainLayout from "@/layouts/main.vue";

interface PurchaseItem {
  name_ru?: string;
  name_en?: string | null;
  image?: string;
}

interface Purchase {
  id: number;
  type: "purchase";
  count: number;
  price: number;
  created_at: string;
  validity?: string | null;
  is_valid: boolean;
  server?: { name: string } | null;
  item?: PurchaseItem | null;
}

interface Topup {
  id: number;
  type: "topup";
  amount: number;
  bonus_amount: number;
  payment_system?: string | null;
  status: 0 | 1 | 2;
  created_at: string;
}

const props = defineProps<{
  items: {
    data: (Purchase | Topup)[];
    current_page: number;
    last_page: number;
  };
  tab: "purchases" | "topups";
}>();

const { locale } = useI18n();
const { itemName } = useShopLocale();

const formatDate = (value: string): string =>
  new Date(value).toLocaleDateString(locale.value === "en" ? "en-US" : "ru-RU");

const formatPrice = (value: number): string =>
  Number(value).toLocaleString(locale.value === "en" ? "en-US" : "ru-RU");

const pageNumbers = computed<number[]>(() => {
  const current = props.items.current_page;
  const last = props.items.last_page;
  const start = Math.max(1, current - 2);
  const end = Math.min(last, current + 2);
  const pages: number[] = [];
  for (let p = start; p <= end; p++) pages.push(p);
  return pages;
});

const goToPage = (page: number): void => {
  router.get(
    "/purchases",
    { tab: props.tab, page: page > 1 ? page : undefined },
    {
      preserveScroll: true,
      preserveState: true,
      replace: true,
    },
  );
};

const switchTab = (newTab: "purchases" | "topups"): void => {
  router.get(
    "/purchases",
    { tab: newTab },
    {
      preserveScroll: true,
      preserveState: true,
      replace: true,
    },
  );
};

watch(() => props.items, () => {
  animateCards();
});

const animateCards = async () => {
  await nextTick();
  const cards = document.querySelectorAll(".purchase-card");
  if (cards.length) {
    gsap.fromTo(
      cards,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" },
    );
  }
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  tl.fromTo(
    ".purchase-section",
    { y: 28, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.45, stagger: 0.1 },
  );
  tl.fromTo(
    ".purchase-card",
    { y: 16, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.35, stagger: 0.05 },
    "-=0.2",
  );
});
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
