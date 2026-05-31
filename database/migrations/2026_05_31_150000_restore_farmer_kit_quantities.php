<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Откат количеств Farmer Kit к оригиналу: ранее по ошибке свели чаи/пирог к ×2.
     * Нужно было поменять ТОЛЬКО иконки чаёв на «pure», количества оставить:
     *   Pure Ore Tea ×5, Pure Wood Tea ×5, Bear Pie ×3, Jackhammer ×3, Chainsaw ×3.
     */
    public function up(): void
    {
        if (! Schema::hasTable('shop_sets') || ! DB::table('shop_sets')->where('id', 1)->exists()) {
            return;
        }

        $items = [
            ['id' => 240, 'amount' => 5], // Pure Ore Tea (oretea.pure)
            ['id' => 236, 'amount' => 5], // Pure Wood Tea (woodtea.pure)
            ['id' => 301, 'amount' => 3], // Bear Pie (pie.bear)
            ['id' => 44,  'amount' => 3], // Jackhammer
            ['id' => 38,  'amount' => 3], // Chainsaw
        ];

        $style = '<style type="text/css">.farmer-kit .blk{border-bottom:1px solid rgba(255,255,255,.08);padding:18px 22px 20px;border-radius:12px;background:rgba(15,15,15,.55);backdrop-filter:blur(14px) contrast(1.25);margin-bottom:16px;position:relative;overflow:visible}.farmer-kit .hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.farmer-kit .ttl{font-size:22px;font-weight:800;color:#ff9800;text-transform:uppercase;letter-spacing:.5px;margin:0}.farmer-kit .meta{font-size:14px;color:#ccc}.farmer-kit .meta span{color:#ff9800;font-weight:700;margin:0 8px}.farmer-kit .grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start}.farmer-kit .it{width:72px;height:72px;border-radius:10px;background:rgba(20,20,20,.55);display:flex;align-items:center;justify-content:center;position:relative}.farmer-kit .it img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.farmer-kit .q{position:absolute;right:6px;bottom:6px;font-size:12px;font-weight:700;color:#ddd;background:rgba(0,0,0,.4);padding:2px 6px;border-radius:6px}.farmer-kit .tip{position:absolute;left:50%;bottom:82px;transform:translateX(-50%);background:rgba(0,0,0,.90);color:#fff;border-radius:6px;padding:6px 10px;font-size:12px;font-weight:700;white-space:nowrap;opacity:0;pointer-events:none;z-index:9999;transition:opacity .15s ease,transform .15s ease}.farmer-kit .it:hover .tip{opacity:1;transform:translateX(-50%) translateY(-2px)}</style>';
        $base = 'https://rustresort.com/source/icon/';

        $cell = fn (string $icon, string $qty, string $tip) =>
            '<div class="it"><img src="'.$base.$icon.'" /><div class="q">'.$qty.'</div><div class="tip">'.$tip.'</div></div>';

        $blk = fn (string $title, string $cells) =>
            '<div class="blk"><div class="hdr"><div class="ttl">'.$title.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div><div class="grid">'.$cells.'</div></div>';

        $descRu = $style.'<div class="farmer-kit">'
            .$blk('ЧАИ / ПИРОГИ',
                $cell('oretea-pure.png', 'x5', 'Чай из руды')
                .$cell('woodtea-pure.png', 'x5', 'Чай из дерева')
                .$cell('pie-bear.png', 'x3', 'Медвежий пирог'))
            .$blk('ИНСТРУМЕНТЫ',
                $cell('jackhammer.png', 'x3', 'Отбойный молоток')
                .$cell('chainsaw.png', 'x3', 'Бензопила'))
            .'</div>';

        $descEn = $style.'<div class="farmer-kit">'
            .$blk('TEAS / PIES',
                $cell('oretea-pure.png', 'x5', 'Pure Ore Tea')
                .$cell('woodtea-pure.png', 'x5', 'Pure Wood Tea')
                .$cell('pie-bear.png', 'x3', 'Bear Pie'))
            .$blk('TOOLS',
                $cell('jackhammer.png', 'x3', 'Jackhammer')
                .$cell('chainsaw.png', 'x3', 'Chainsaw'))
            .'</div>';

        DB::table('shop_sets')->where('id', 1)->update([
            'items' => json_encode($items),
            'description_ru' => $descRu,
            'description_en' => $descEn,
        ]);
    }

    public function down(): void
    {
        // откат не требуется
    }
};
