<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Богатое HTML-описание для Farmer Kit (shop_items id 11) в стиле остальных
 * наборов (Outpost/Military/Cobalt KIT). Состав взят из старого набора
 * shop_sets id 11: Ore Tea ×5, Wood Tea ×5, Bear Pie ×3, Jackhammer ×3,
 * Chainsaw ×3. Иконки и сервис-картинки (nickname/VIP) уже есть на сервере.
 */
return new class extends Migration
{
    public function up(): void
    {
        DB::table('shop_items')->where('id', 11)->update([
            'description_ru' => $this->html('ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ', 'Активируются с покупкой', 'Никнейм', 'Ник — жёлтый цвет в чате', 'VIP', 'VIP — обход очереди', 'ЧАИ / ПИРОГИ', 'ИНСТРУМЕНТЫ', 'Чай из руды', 'Чай из дерева', 'Медвежий пирог', 'Отбойный молоток', 'Бензопила'),
            'description_en' => $this->html('ADDITIONAL SERVICES', 'Activated on purchase', 'Nickname', 'Name — yellow color in chat', 'VIP', 'VIP — queue bypass', 'TEAS / PIES', 'TOOLS', 'Ore Tea', 'Wood Tea', 'Bear Pie', 'Jackhammer', 'Chainsaw'),
        ]);
    }

    public function down(): void
    {
        DB::table('shop_items')->where('id', 11)->update([
            'description_ru' => 'В набор входит: Ore Tea ×5, Wood Tea ×5, Bear Pie ×3, Jackhammer ×3, Chainsaw ×3',
            'description_en' => 'Includes: Ore Tea ×5, Wood Tea ×5, Bear Pie ×3, Jackhammer ×3, Chainsaw ×3',
        ]);
    }

    private function html(
        string $svcTitle, string $svcMeta, string $nick, string $nickTip,
        string $vip, string $vipTip, string $teaTitle, string $toolTitle,
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
            .'.farmer-kit .it:hover .tip,.farmer-kit .svc-ico:hover .tip{opacity:1;transform:translateX(-50%) translateY(-2px)}'
            .'.farmer-kit .svc .grid{justify-content:flex-start;gap:28px;padding:12px 0 8px}'
            .'.farmer-kit .svc-card{display:flex;flex-direction:column;align-items:center;gap:8px;position:relative}'
            .'.farmer-kit .svc-ico{width:100px;height:100px;border-radius:14px;background:rgba(255,255,255,.05);display:flex;align-items:center;justify-content:center;transition:box-shadow .2s ease,transform .2s ease;position:relative}'
            .'.farmer-kit .svc-ico:hover{box-shadow:0 0 20px rgba(255,255,255,.25);transform:scale(1.03)}'
            .'.farmer-kit .svc-ico img{width:86px;height:86px;object-fit:contain}'
            .'.farmer-kit .svc-lbl{font-size:14px;font-weight:700;color:#fff;text-align:center;opacity:.95}';

        $item = fn (string $icon, string $qty, string $tip): string => '<div class="it"><img src="'.$base.'/source/icon/'.$icon.'.png" />'
            .($qty !== '' ? '<div class="q">'.$qty.'</div>' : '').'<div class="tip">'.$tip.'</div></div>';

        return '<style type="text/css">'.$css.'</style>'
            .'<div class="farmer-kit">'
            .'<div class="blk svc"><div class="hdr"><div class="ttl">'.$svcTitle.'</div><div class="meta" style="color:#ff9800;">'.$svcMeta.'</div></div>'
            .'<div class="grid">'
            .'<div class="svc-card"><div class="svc-ico"><img alt="nickname" src="'.$base.'/storage/images/YT0vgerJMGe2ihzDchbquSG1ow4EmFi5ZYJIuAf4.png" /><div class="tip">'.$nickTip.'</div></div><div class="svc-lbl">'.$nick.'</div></div>'
            .'<div class="svc-card"><div class="svc-ico"><img alt="vip" src="'.$base.'/storage/images/VIYQDFxegMV1RcDC2qV2fhriTB6DeIMiWXFadmze.png" /><div class="tip">'.$vipTip.'</div></div><div class="svc-lbl">'.$vip.'</div></div>'
            .'</div></div>'
            .'<div class="blk"><div class="hdr"><div class="ttl">'.$teaTitle.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'.$item('oretea', 'x5', $oreTea).$item('woodtea', 'x5', $woodTea).$item('pie-bear', 'x3', $bearPie).'</div></div>'
            .'<div class="blk"><div class="hdr"><div class="ttl">'.$toolTitle.'</div><div class="meta">WipeBlock: <span>1h</span> | CoolDown: <span>6h</span></div></div>'
            .'<div class="grid">'.$item('jackhammer', 'x3', $jack).$item('chainsaw', 'x3', $chain).'</div></div>'
            .'</div>';
    }
};
