<?php

namespace App\Console\Commands;

use App\Models\ShopItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Создаёт 22 товара, которые есть на MAIN (rustresort.com), но отсутствуют в DEV DB.
 *
 * Данные (id, имя, цена, картинка, количество, флаги) — из HTML-дампа MAIN.
 * Картинки переиспользует те же хеши, что и на проде — они уже есть в /public/images/
 * (если файл не найден, лого будет битым, в админке заменишь).
 *
 *   php artisan shop:create-missing                 # создать
 *   php artisan shop:create-missing --dry           # preview
 *   php artisan shop:create-missing --then-sync     # создать + сразу запустить shop:sync-main
 */
class CreateMissingMainItems extends Command
{
    protected $signature = 'shop:create-missing
        {--dry : Preview without writing}
        {--then-sync : Run shop:sync-main after creating}';

    protected $description = 'Create 22 shop items missing in DEV that exist on MAIN (cases, teas, keycards, medical, AK47, etc.)';

    /**
     * Item definitions ripped from MAIN HTML. Image hashes are the production
     * filenames in /storage/images/ — same files should already exist locally
     * because dev uses the shared production storage bucket.
     */
    private array $items = [
        // Tea (6 items)
        ['id' => 240, 'name' => 'Ore Tea',         'price' => 100, 'amount' => 1, 'image' => 'OaopjFiMFYkXrgkC5CL4I01WRU1PsJecTBFm1IOM.png', 'wipe_block' => true],
        ['id' => 236, 'name' => 'Wood Tea',        'price' => 70,  'amount' => 1, 'image' => 'nIcNdomQKenpXyh0n9AmNK28e33HUayxTCZjJVmf.png', 'wipe_block' => true],
        ['id' => 237, 'name' => 'Healing Tea',     'price' => 30,  'amount' => 3, 'image' => 'Ii2s6iRv6zxaCRt3KWgWb0mbLrjGGEd5ojdBQd5h.png', 'wipe_block' => true],
        ['id' => 238, 'name' => 'Anti-Rad Tea',    'price' => 30,  'amount' => 3, 'image' => 'xkF5VcGmFZQQnpss2hXjWxxSLh2Jp3ECDb5mf7sz.png', 'wipe_block' => true],
        ['id' => 239, 'name' => 'Max Health Tea',  'price' => 50,  'amount' => 2, 'image' => 'fGH9rbgr9yBoVhv8k9P7HvFS6AunPIxE9Fr3WrxW.png', 'wipe_block' => true],
        ['id' => 241, 'name' => 'Scrap Tea',       'price' => 75,  'amount' => 1, 'image' => 'QJ6oxMnYNzkz184vZ2A8ObPm7ClpZzNOy1Rn1MPH.png', 'wipe_block' => true],

        // Pies (2 items)
        ['id' => 301, 'name' => 'Bear Pie',        'price' => 90,  'amount' => 1, 'image' => 'odPaGH21QgsNH9mdWWlNKHQNmkmThL1Ar0x3pBIW.png', 'wipe_block' => true],
        ['id' => 302, 'name' => 'Survivors Pie',   'price' => 50,  'amount' => 2, 'image' => 'TPlladB7foKXWu0qew4tVRssoOFIjanrPcu26sDf.png', 'wipe_block' => true],

        // Farmer Kit — special variant of farming items
        ['id' => 11,  'name' => 'Farmer Kit',      'price' => 699, 'amount' => 1, 'image' => 'BKB1rEhawQUOYFwAqyFQBXTcQTMI5bdHJkwQSymh.png', 'wipe_block' => false],

        // Keycards (3 items)
        ['id' => 232, 'name' => 'Green Keycard',   'price' => 40,  'amount' => 1, 'image' => 'wSchA3sdqH7O2Jen63C3mNQ6ATN4t0Ncl7lMeLfi.png', 'wipe_block' => true],
        ['id' => 233, 'name' => 'Blue Keycard',    'price' => 70,  'amount' => 1, 'image' => 'RF4awnRcSOqCB2phxrmZZVV9SXzLotEsCAquGKW2.png', 'wipe_block' => true],
        ['id' => 234, 'name' => 'Red Keycard',     'price' => 100, 'amount' => 1, 'image' => 'eIKJAftA8douOXuK4UdzMxX7eWb0B6dcPcvIkn1l.png', 'wipe_block' => true],

        // Medical (3 items)
        ['id' => 247, 'name' => 'Large Medkit',    'price' => 40,  'amount' => 2, 'image' => 'fZ0bxPJNTYDTJ5H4k7KoOhh2YEklBduJX5LJqSKo.png', 'wipe_block' => true],
        ['id' => 248, 'name' => 'Medical Syringe', 'price' => 50,  'amount' => 4, 'image' => 'rlRS4Bn1T6QZPnRDLGEtJxURiWPFmzYweq6bpjBF.png', 'wipe_block' => true],
        ['id' => 249, 'name' => 'Blueberries',     'price' => 50,  'amount' => 5, 'image' => 'ACrcpAdXCJ87R6nn0uDnOkbAldSrebuxHHRJiWv9.png', 'wipe_block' => true],

        // Extra crafted weapons (2 items) — no wipe block, instant give
        ['id' => 293, 'name' => 'AK47',                'price' => 250, 'amount' => 1, 'image' => 'wkh8gjmI6mPFXQ6uOGzKVCY2KpqB7ZTvFHArnSyN.png', 'wipe_block' => false],
        ['id' => 294, 'name' => 'Bolt Action Rifle (250)', 'price' => 250, 'amount' => 1, 'image' => 'qlKd3AANVu7Yz2fE3Dh2eDIIz3BtTrETat5INXkO.png', 'wipe_block' => false],

        // Cases (5 missing IDs: 14, 15, 17, 18, 31)
        // ВАЖНО: на MAIN это раздел "Кейсы" (shopcase-buy). Если у тебя есть отдельная
        // таблица `cases`, эти ID туда не пишутся — нужно отдельно. Если кейсы хранятся
        // как обычные shop_items со специальным флагом — раскомментируй блок ниже:
        // ['id' => 17, 'name' => 'Case Explosives', 'price' => 199, 'amount' => 1, 'image' => 'JSNhZJerl6qW2p9dvDSw48022UzemtS76YlF4hXD.png', 'wipe_block' => false],
        // ['id' => 18, 'name' => 'Case Guns',       'price' => 99,  'amount' => 1, 'image' => 'rZ68ImU7I3R1fujjB4LCW8H4Rc2pot2cm9tB88lg.png', 'wipe_block' => false],
        // ['id' => 14, 'name' => 'Case Resources',  'price' => 89,  'amount' => 1, 'image' => 'xw3NQbSTTjWnUxR10qI7lubzRP3NlMHjBHrs3s8a.png', 'wipe_block' => false],
        // ['id' => 15, 'name' => 'Case Components', 'price' => 49,  'amount' => 1, 'image' => 'eIdSwUJ7RoriPd2RoAcInaCM4L3YBThhAfhCY2pV.png', 'wipe_block' => false],
        // ['id' => 31, 'name' => 'Case FREE',       'price' => 0,   'amount' => 1, 'image' => 'T1ofP1vLci0TAM6hBgG5kUVMT9ALOSWKX27Wp9bh.png', 'wipe_block' => false],
    ];

    public function handle(): int
    {
        $isDry = (bool) $this->option('dry');

        $existingIds = ShopItem::whereIn('id', array_column($this->items, 'id'))
            ->pluck('id')->all();

        $toCreate = array_filter($this->items, fn ($i) => ! in_array($i['id'], $existingIds, true));
        $skipping = array_filter($this->items, fn ($i) => in_array($i['id'], $existingIds, true));

        $this->info('=== Missing items audit ===');
        $this->info('Total in script: '.count($this->items));
        $this->info('Already exist: '.count($skipping).(count($skipping) ? ' ('.implode(',', array_column($skipping, 'id')).')' : ''));
        $this->info('To create: '.count($toCreate));

        if (empty($toCreate)) {
            $this->info('Nothing to create.');

            return self::SUCCESS;
        }

        $this->table(
            ['ID', 'Name', 'Price', 'Amount', 'Wipe block', 'Image'],
            array_map(fn ($i) => [
                $i['id'], $i['name'], $i['price'].' ₽', 'x'.$i['amount'],
                $i['wipe_block'] ? 'yes' : 'no', $i['image'],
            ], $toCreate)
        );

        if ($isDry) {
            $this->warn('DRY RUN — nothing written.');

            return self::SUCCESS;
        }

        DB::transaction(function () use ($toCreate) {
            foreach ($toCreate as $item) {
                // forceFill чтобы ID не отфильтровался $fillable, save без auto-increment
                $row = new ShopItem;
                $row->forceFill([
                    'id'              => $item['id'],
                    'name_ru'         => $item['name'],
                    'name_en'         => $item['name'],
                    'price'           => $item['price'],
                    'amount'          => $item['amount'],
                    'image'           => 'images/'.$item['image'],
                    'wipe_block'      => $item['wipe_block'],
                    'is_item'         => true,
                    'is_command'      => false,
                    'is_blueprint'    => false,
                    'can_gift'        => false,
                    'status'          => 0,
                    'sort'            => 9999,
                    'category_id'     => null,
                    'server'          => 0,
                ]);
                $row->save();
            }
        });

        $this->info('');
        $this->info('✅ Created '.count($toCreate).' items.');
        $this->warn('⚠️  Items have category_id=NULL — assign categories via admin so they appear in catalog filters.');

        if ($this->option('then-sync')) {
            $this->info('');
            $this->info('Running shop:sync-main...');
            $this->call('shop:sync-main');
        } else {
            $this->info('Next step: run `php artisan shop:sync-main` to activate them in correct order.');
        }

        Cache::flush();

        return self::SUCCESS;
    }
}
