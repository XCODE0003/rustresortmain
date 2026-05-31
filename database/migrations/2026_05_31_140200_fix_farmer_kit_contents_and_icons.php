<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Farmer Kit (shop_sets id 1):
     *  - состав чаёв/пирога приводим к присланному админом: Pure Ore Tea x2,
     *    Pure Wood Tea x2, Bear Pie x2 (items 240/236/301); инструменты
     *    (Jackhammer x3, Chainsaw x3) оставляем; цена не меняется.
     *  - описание: иконки чаёв → «pure» (oretea-pure.png / woodtea-pure.png),
     *    количества чаёв/пирога → x2.
     *  - server=-1 → null (доступен на любом сервере; выбор сервера на сайте убран).
     */
    public function up(): void
    {
        if (! Schema::hasTable('shop_sets')) {
            return;
        }

        $set = DB::table('shop_sets')->where('id', 1)->first();
        if (! $set) {
            return;
        }

        $items = [
            ['id' => 240, 'amount' => 2], // Pure Ore Tea (oretea.pure)
            ['id' => 236, 'amount' => 2], // Pure Wood Tea (woodtea.pure)
            ['id' => 301, 'amount' => 2], // Bear Pie (pie.bear)
            ['id' => 44,  'amount' => 3], // Jackhammer
            ['id' => 38,  'amount' => 3], // Chainsaw
        ];

        $style = '<style type="text/css">.farmer-kit .blk{border-bottom:1px solid rgba(255,255,255,.08);padding:18px 22px 20px;border-radius:12px;background:rgba(15,15,15,.55);backdrop-filter:blur(14px) contrast(1.25);margin-bottom:16px;position:relative;overflow:visible}.farmer-kit .hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.farmer-kit .ttl{font-size:22px;font-weight:800;color:#ff9800;text-transform:uppercase;letter-spacing:.5px;margin:0}.farmer-kit .meta{font-size:14px;color:#ccc}.farmer-kit .meta span{color:#ff9800;font-weight:700;margin:0 8px}.farmer-kit .grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start}.farmer-kit .it{width:72px;height:72px;border-radius:10px;background:rgba(20,20,20,.55);display:flex;align-items:center;justify-content:center;position:relative}.farmer-kit .it img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}.farmer-kit .q{position:absolute;right:6px;bottom:6px;font-size:12px;font-weight:700;color:#ddd;background:rgba(0,0,0,.4);padding:2px 6px;border-radius:6px}.farmer-kit .tip{position:absolute;left:50%;bottom:82px;transform:translateX(-50%);background:rgba(0,0,0,.90);color:#fff;border-radius:6px;padding:6px 10px;font-size:12px;font-weight:700;white-space:nowrap;opacity:0;pointer-events:none;z-index:9999;transition:opacity .15s ease,transform .15s ease}.farmer-kit .it:hover .tip{opacity:1;transform:translateX(-50%) translateY(-2px)}</style>';

        $base = 'https://rustresort.com/source/icon/';

        $tea = fn (string $titleTea, string $titlePie, string $oreTip, string $woodTip, string $bearTip) =>
            '<div class="blk"><div class="hdr"><div class="ttl">'.$titleTea.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'
            .'<div class="it"><img src="'.$base.'oretea-pure.png" /><div class="q">x2</div><div class="tip">'.$oreTip.'</div></div>'
            .'<div class="it"><img src="'.$base.'woodtea-pure.png" /><div class="q">x2</div><div class="tip">'.$woodTip.'</div></div>'
            .'<div class="it"><img src="'.$base.'pie-bear.png" /><div class="q">x2</div><div class="tip">'.$bearTip.'</div></div>'
            .'</div></div>';

        $tools = fn (string $title, string $jackTip, string $chainTip) =>
            '<div class="blk"><div class="hdr"><div class="ttl">'.$title.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'
            .'<div class="it"><img src="'.$base.'jackhammer.png" /><div class="q">x3</div><div class="tip">'.$jackTip.'</div></div>'
            .'<div class="it"><img src="'.$base.'chainsaw.png" /><div class="q">x3</div><div class="tip">'.$chainTip.'</div></div>'
            .'</div></div>';

        $descRu = $style.'<div class="farmer-kit">'
            .$tea('ЧАИ / ПИРОГИ', '', 'Чай из руды', 'Чай из дерева', 'Медвежий пирог')
            .$tools('ИНСТРУМЕНТЫ', 'Отбойный молоток', 'Бензопила')
            .'</div>';

        $descEn = $style.'<div class="farmer-kit">'
            .$tea('TEAS / PIES', '', 'Pure Ore Tea', 'Pure Wood Tea', 'Bear Pie')
            .$tools('TOOLS', 'Jackhammer', 'Chainsaw')
            .'</div>';

        $update = [
            'items' => json_encode($items),
            'description_ru' => $descRu,
            'description_en' => $descEn,
        ];
        if (Schema::hasColumn('shop_sets', 'server')) {
            $update['server'] = null;
        }

        DB::table('shop_sets')->where('id', 1)->update($update);
    }

    public function down(): void
    {
        // Данные старого состава не сохраняем — откат не требуется.
    }
};
