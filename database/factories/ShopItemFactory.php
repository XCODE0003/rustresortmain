<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShopItem>
 */
class ShopItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $items = ['AK-47', 'M249', 'Bolt Action Rifle', 'Metal Chest Plate', 'Road Sign Kilt', 'C4', 'Rocket Launcher', 'Auto Turret'];
        $itemName = fake()->randomElement($items);

        return [
            'category_id' => \App\Models\ShopCategory::factory(),
            'server' => fake()->randomElement([null, 0, 1, 2, 3]),
            'price' => fake()->randomFloat(2, 50, 5000),
            'amount' => fake()->numberBetween(1, 10),
            'command' => 'inventory.giveto {steamid} '.$itemName.' {amount}',
            'is_item' => true,
            'status' => 1,
            'sort' => fake()->numberBetween(0, 100),
            'can_gift' => fake()->boolean(30),
            'name_ru' => $itemName,
            'name_en' => $itemName,
            'description_ru' => fake('ru_RU')->sentence(10),
            'description_en' => fake()->sentence(10),
            'image' => 'items/'.fake()->slug().'.png',
        ];
    }
}
