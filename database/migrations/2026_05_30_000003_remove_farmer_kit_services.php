<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Убирает блок «ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ» (Никнейм/VIP) из описания Farmer Kit
 * (shop_items id 11). Этих услуг в наборе нет — остаются только Чаи/Пироги
 * и Инструменты. Перезаписывает описание поверх миграции
 * 2026_05_30_000002_set_farmer_kit_description.
 */
return new class extends Migration
{
    public function up(): void
    {
        DB::table('shop_items')->where('id', 11)->update([
            'description_ru' => $this->html('ЧАИ / ПИРОГИ', 'ИНСТРУМЕНТЫ', 'Чай из руды', 'Чай из дерева', 'Медвежий пирог', 'Отбойный молоток', 'Бензопила'),
            'description_en' => $this->html('TEAS / PIES', 'TOOLS', 'Ore Tea', 'Wood Tea', 'Bear Pie', 'Jackhammer', 'Chainsaw'),
        ]);
    }

    public function down(): void
    {
        // Возврат к версии с услугами (как в 2026_05_30_000002).
        // Не реализуем — откат не нужен; оставляем текущее описание.
    }

    private function html(
        string $teaTitle, string $toolTitle,
        string $oreTea, string $woodTea, string $bearPie, string $jack, string $chain
    ): string {
        $base = 'https://rustresort.com';

        $css = '.farmer-kit .blk{border-bottom:1px solid rgba(255,255,255,.08);padding:18px 22px 20px;border-radius:12px;background:rgba(15,15,15,.55);backdrop-filter:blur(14px) contrast(1.25);margin-bottom:16px;position:relative;overflow:visible}'
            .'.farmer-kit .hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}'
            .'.farmer-kit .ttl{font-size:22px;font-weight:800;color:#ff9800;text-transform:uppercase;letter-spacing:.5px;margin:0}'
            .'.farmer-kit .meta{font-size:14px;color:#ccc}.farmer-kit .meta span{color:#ff9800;font-weight:700;margin:0 8px}'
            .'.farmer-kit .grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-start}'
            .'.farmer-kit .it{width:72px;height:72px;border-radius:10px;background:rgba(20,20,20,.55);display:flex;align-items:center;justify-content:center;position:relative}'
            .'.farmer-kit .it img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 1px 1px rgba(0,0,0,.35))}'
            .'.farmer-kit .q{position:absolute;right:6px;bottom:6px;font-size:12px;font-weight:700;color:#ddd;background:rgba(0,0,0,.4);padding:2px 6px;border-radius:6px}'
            .'.farmer-kit .tip{position:absolute;left:50%;bottom:82px;transform:translateX(-50%);background:rgba(0,0,0,.90);color:#fff;border-radius:6px;padding:6px 10px;font-size:12px;font-weight:700;white-space:nowrap;opacity:0;pointer-events:none;z-index:9999;transition:opacity .15s ease,transform .15s ease}'
            .'.farmer-kit .it:hover .tip{opacity:1;transform:translateX(-50%) translateY(-2px)}';

        $item = fn (string $icon, string $qty, string $tip): string => '<div class="it"><img src="'.$base.'/source/icon/'.$icon.'.png" />'
            .($qty !== '' ? '<div class="q">'.$qty.'</div>' : '').'<div class="tip">'.$tip.'</div></div>';

        return '<style type="text/css">'.$css.'</style>'
            .'<div class="farmer-kit">'
            .'<div class="blk"><div class="hdr"><div class="ttl">'.$teaTitle.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'.$item('oretea', 'x5', $oreTea).$item('woodtea', 'x5', $woodTea).$item('pie-bear', 'x3', $bearPie).'</div></div>'
            .'<div class="blk"><div class="hdr"><div class="ttl">'.$toolTitle.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'.$item('jackhammer', 'x3', $jack).$item('chainsaw', 'x3', $chain).'</div></div>'
            .'</div>';
    }
};
