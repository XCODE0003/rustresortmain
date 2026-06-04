<?php

namespace App\Traits;

/**
 * Скидки товара/набора: собственная скидка (discount_percent) и скидка категории.
 * Скидки ПЕРЕМНОЖАЮТСЯ: 30% у товара + 30% у категории = 51% итоговой скидки.
 * Флаг disable_category_discount отключает ТОЛЬКО скидку категории — собственная
 * скидка товара применяется всегда.
 *
 * В JSON (Inertia) добавляются final_price / final_price_usd / discount_total_percent,
 * чтобы фронт показывал цену со скидкой ровно ту же, что спишет бэкенд.
 */
trait HasShopDiscounts
{
    public function initializeHasShopDiscounts(): void
    {
        $this->appends = array_merge($this->appends, [
            'final_price',
            'final_price_usd',
            'discount_total_percent',
        ]);
    }

    /** Применяет скидки к произвольной цене (базовой или цене вариации). */
    public function applyDiscount(float $price): float
    {
        return round($price * $this->discountFactor(), 2);
    }

    /** Итоговая цена в рублях с учётом всех скидок. */
    public function getFinalPrice(): float
    {
        return $this->applyDiscount((float) $this->price);
    }

    /** Итоговая цена в USD с учётом всех скидок (null, если price_usd не задана). */
    public function getFinalPriceUsd(): ?float
    {
        $usd = (float) $this->price_usd;
        if ($usd <= 0) {
            return null;
        }

        return $this->applyDiscount($usd);
    }

    /** Суммарный процент скидки (собственная + категории), 0–100. */
    public function getTotalDiscountPercent(): float
    {
        return round((1 - $this->discountFactor()) * 100, 2);
    }

    /** Множитель цены: 1.0 — без скидок, 0.8 — скидка 20% и т.д. */
    private function discountFactor(): float
    {
        $factor = 1.0;

        if ($this->discount_percent > 0) {
            $factor *= 1 - $this->discount_percent / 100;
        }

        if (! $this->disable_category_discount && $this->category && $this->category->discount_percent > 0) {
            $factor *= 1 - $this->category->discount_percent / 100;
        }

        return $factor;
    }

    public function getFinalPriceAttribute(): float
    {
        return $this->getFinalPrice();
    }

    public function getFinalPriceUsdAttribute(): ?float
    {
        return $this->getFinalPriceUsd();
    }

    public function getDiscountTotalPercentAttribute(): float
    {
        return $this->getTotalDiscountPercent();
    }
}
