<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Requests\ShopItemRequest;
use App\Models\ShopItem;
use App\Models\ShopCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ShopItemController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('can:admin'); // gated by route-level Backend middleware
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $shopitems = ShopItem::query();

        $search = request()->query('search');
        if (request()->has('search') && is_string($search)) {
            $shopitems->where('name_' . app()->getLocale(), 'LIKE', "%{$search}%");
        }
        $category_id = $request->has('category_id') ? $request->get('category_id') : '0';
        if ($category_id > 0) {
            $shopitems->where('category_id', $category_id);
        }

        // При выбранной категории показываем все её товары одной страницей,
        // чтобы перетаскиванием можно было менять порядок по всей категории.
        $perPage = $category_id > 0 ? 1000 : 15;
        $shopitems = $shopitems->orderBy('sort')->orderBy('id')->paginate($perPage)->withQueryString();

        $shopcategories = ShopCategory::query()->get();

        return view('backend.pages.shop.index', compact('shopitems', 'shopcategories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('backend.pages.shop.form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ShopItemRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if ($data['name_ru'] == '') $data['name_ru'] = $data['name_en'];
        $data['image'] = $request->image->store('images', 'public');

        $variations = [];
        for($i=1;$i<50;$i++) {
            $variation_id = 'variation_'.$i.'_id';
            $variation_name = 'variation_'.$i.'_name';
            $variation_price = 'variation_'.$i.'_price';
            $variation_price_usd = 'variation_'.$i.'_price_usd';
            if($request->has($variation_id)) {
                $variations[] = [
                    "variation_id" => $request->input($variation_id),
                    "variation_name" => $request->input($variation_name),
                    "variation_price" => $request->input($variation_price),
                    "variation_price_usd" => $request->input($variation_price_usd),
                ];
            }
        }

        if (empty($variations)) {
            $variations = [];
            for ($i = 1; $i < 50; $i++) {
                $quantity_id = 'quantity_' . $i . '_id';
                $quantity_amount = 'quantity_' . $i . '_amount';
                $quantity_price = 'quantity_' . $i . '_price';
                $quantity_price_usd = 'quantity_' . $i . '_price_usd';
                if ($request->has($quantity_id)) {
                    $variations[] = [
                        "quantity_id"     => $request->input($quantity_id),
                        "quantity_amount" => $request->input($quantity_amount),
                        "quantity_price"  => $request->input($quantity_price),
                        "quantity_price_usd" => $request->input($quantity_price_usd),
                    ];
                }
            }
        }

        $data['variations'] = $variations;

        //Собираем сервера, с которых считать онлайн
        $servers = [];
        for ($i=0;$i<200;$i++) {
            $server_id = 'server_'.$i.'_id';
            if ($request->has($server_id)) {
                $servers[] = $request->input($server_id);
            }
        }
        $data['servers'] = $servers;

        ShopItem::create($data);

        $this->alert('success', __('Предмет успешно добавлен'));
        return redirect()->route('shopitems.index');
    }

    /**
     * Duplicate and Store a newly created resource in storage.
     */
    public function duplicate(ShopItem $shopitem)
    {
        $data = $shopitem->getOriginal();
        $shopitem = ShopItem::create($data);

        $this->alert('success', __('Предмет успешно дублирован'));
        return redirect()->route('shopitems.edit', $shopitem);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ShopItem $shopitem)
    {
        // ShopItem.servers is array-cast in target; legacy code expected JSON string.
        $servers = is_array($shopitem->servers) ? $shopitem->servers : json_decode($shopitem->servers ?? '[]', true);
        return view('backend.pages.shop.form', compact('shopitem', 'servers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ShopItemRequest $request, ShopItem $shopitem): RedirectResponse
    {

        $data = $request->validated();
        if ($data['name_ru'] == '') $data['name_ru'] = $data['name_en'];

        if (isset($data['image'])) {
            //Storage::disk('public')->delete($shopitem->image);
            $data['image'] = $request->image->store('images', 'public');
        }

        $variations = [];
        for($i=1;$i<50;$i++) {
            $variation_id = 'variation_'.$i.'_id';
            $variation_name = 'variation_'.$i.'_name';
            $variation_price = 'variation_'.$i.'_price';
            $variation_price_usd = 'variation_'.$i.'_price_usd';
            if($request->has($variation_id)) {
                $variations[] = [
                    "variation_id" => $request->input($variation_id),
                    "variation_name" => $request->input($variation_name),
                    "variation_price" => $request->input($variation_price),
                    "variation_price_usd" => $request->input($variation_price_usd),
                ];
            }
        }

        if (empty($variations)) {
            $variations = [];
            for ($i = 1; $i < 50; $i++) {
                $quantity_id = 'quantity_' . $i . '_id';
                $quantity_amount = 'quantity_' . $i . '_amount';
                $quantity_price = 'quantity_' . $i . '_price';
                $quantity_price_usd = 'quantity_' . $i . '_price_usd';
                if ($request->has($quantity_id)) {
                    $variations[] = [
                        "quantity_id"     => $request->input($quantity_id),
                        "quantity_amount" => $request->input($quantity_amount),
                        "quantity_price"  => $request->input($quantity_price),
                        "quantity_price_usd" => $request->input($quantity_price_usd),
                    ];
                }
            }
        }

        $data['variations'] = $variations;

        //Собираем сервера, с которых считать онлайн
        $servers = [];
        for ($i=0;$i<200;$i++) {
            $server_id = 'server_'.$i.'_id';
            if ($request->has($server_id)) {
                $servers[] = $request->input($server_id);
            }
        }
        $data['servers'] = $servers;

        $shopitem->update($data);

        $this->alert('success', __('Предмет успешно обновлен'));
        return redirect()->route('shopitems.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ShopItem $shopitem)
    {
        //Storage::disk('public')->delete($shopitem->image);

        $shopitem->delete();

        $this->alert('success', __('Предмет успешно удален'));
        return redirect()->route('shopitems.index');
    }

    public function getVariations(Request $request)
    {
        $shopitem = ShopItem::find($request->shopitem_id);

        if($shopitem && isset($shopitem->variations)) {
            $variations = is_array($shopitem->variations)
                ? json_decode(json_encode($shopitem->variations))
                : json_decode($shopitem->variations ?? '[]');
        } else {
            $variations = [];
        }

        return response()->json([
            'status' => 'success',
            'msg' => 'ok',
            'result' => $variations,
        ]);

    }

    /**
     * Сохранить новый порядок товаров (drag-and-drop в админке).
     * Принимает массив id в нужном порядке; раскладывает sort с шагом 10,
     * чтобы между товарами оставались зазоры для будущих вставок.
     */
    public function reorder(Request $request): JsonResponse
    {
        $data = $request->validate([
            'order' => ['required', 'array', 'min:1'],
            'order.*' => ['integer'],
            'category_id' => ['nullable', 'integer'],
        ]);

        // Трогаем только реально существующие товары и, если задана категория,
        // только её товары — чтобы нельзя было перетасовать чужие записи.
        $query = ShopItem::query()->whereIn('id', $data['order']);
        if (! empty($data['category_id'])) {
            $query->where('category_id', $data['category_id']);
        }
        $validIds = $query->pluck('id')->all();

        $sorts = [];
        $position = 0;

        DB::transaction(function () use ($data, $validIds, &$sorts, &$position) {
            foreach ($data['order'] as $id) {
                if (! in_array($id, $validIds, true)) {
                    continue;
                }

                $position += 10;
                ShopItem::where('id', $id)->update(['sort' => $position]);
                $sorts[$id] = $position;
            }
        });

        $this->forgetShopCaches();

        return response()->json(['status' => 'ok', 'sorts' => $sorts]);
    }

    public function resetCache()
    {
        $this->forgetShopCaches();

        $this->alert('success', __('Кеш магазина успешно сброшен'));
        return back();
    }

    private function forgetShopCaches(): void
    {
        foreach (getservers() as $server) {
            foreach (getshopcategories() as $shopcategory) {
                Cache::forget('page_shop_shopitems_cat'.$shopcategory->id.$server->id);
                Cache::forget('page_shop_shopsets_cat'.$shopcategory->id.$server->id);
            }
        }
    }
}