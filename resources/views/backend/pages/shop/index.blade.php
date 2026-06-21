@extends('backend.layouts.backend')

@section('title', __('Панель управления') . ' - ' . __('Магазин'))
@section('headerTitle', __('Магазин'))
@section('headerDesc', __('Редактирование вещей магазина.'))

@php
    $name = "name_" .app()->getLocale();
    $title = "title_" .app()->getLocale();
    $description = "description_" .app()->getLocale();
    // Перетаскивание включаем только при выбранной конкретной категории:
    // порядок товаров локален внутри категории, и так нет смешения с пагинацией.
    $categorySelected = (int) request()->query('category_id') > 0;
@endphp

@section('wrap')

    <!-- .nk-block -->
    <div class="nk-block">
        <div class="row g-gs">
            <div class="col-12">
                <div class="card card-bordered">
                    <div class="card-inner">
                        <div class="card-title-group">
                            <h5 class="card-title">
                                <a href="{{ route('shopcategories.index') }}" class="btn btn-sm btn-primary">
                                    <em class="icon ni ni-folder-list mr-sm-1"></em>
                                    <span class="d-none d-sm-inline">{{ __('Категории') }}</span>
                                </a>
                                {{--
                                <a href="{{ route('shopsets.index') }}" class="btn btn-sm btn-primary">
                                    <em class="icon ni ni-folder-list mr-sm-1"></em>
                                    <span class="d-none d-sm-inline">{{ __('Наборы') }}</span>
                                </a>
                                 --}}
                                <a href="{{ route('shopitems.create') }}" class="btn btn-sm btn-primary">
                                    <em class="icon ni ni-plus-c mr-sm-1"></em>
                                    <span class="d-none d-sm-inline">{{ __('Добавить предмет') }}</span>
                                </a>
                                <a href="{{ route('shopitems.resetCache') }}" class="btn btn-sm btn-primary btn-delete">
                                    <em class="icon ni ni-reload mr-sm-1"></em>
                                    <span class="d-none d-sm-inline">{{ __('Сбросить кэш') }}</span>
                                </a>
                            </h5>

                            <div class="card-tools d-none d-md-inline" style="width: 200px; margin-right: 14px;">
                                <select id="category_id" name="category_id" class="form-select">
                                    <option value="0" @if(request()->query('category_id') == 0) selected @endif>{{ __('Все') }}</option>
                                    @foreach($shopcategories as $category)
                                        <option value="{{ $category->id }}" @if(request()->query('category_id') == $category->id) selected @endif>{{ $category->$title }}</option>
                                    @endforeach
                                </select>
                            </div>


                            <div class="card-tools d-none d-md-inline">
                                <form method="GET">
                                    <div class="form-control-wrap">
                                        <div class="form-icon form-icon-left">
                                            <em class="icon ni ni-search"></em>
                                        </div>
                                        <input type="text" class="form-control" name="search" value="{{ request()->query('search') }}" placeholder="{{ __('Поиск') }}...">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    @if(!$categorySelected)
                        <div class="card-inner py-2">
                            <div class="alert alert-light mb-0 py-2 px-3" style="font-size: 13px;">
                                <em class="icon ni ni-info"></em>
                                {{ __('Выберите категорию справа, чтобы менять порядок товаров перетаскиванием.') }}
                            </div>
                        </div>
                    @endif

                    @if(!empty($shopitems))
                    <div class="card-inner p-0 border-top">
                        <div class="nk-tb-list nk-tb-orders" id="shopitems-sortable" data-category-id="{{ (int) request()->query('category_id') }}">
                            @foreach($shopitems as $shopitem)
                            <div class="nk-tb-item js-sort-row" data-id="{{ $shopitem->id }}">
                                @if($categorySelected)
                                <div class="nk-tb-col" style="width: 34px;">
                                    <em class="icon ni ni-menu js-drag-handle" title="{{ __('Перетащите, чтобы изменить порядок') }}" style="cursor: grab; font-size: 18px; color: #8094ae;"></em>
                                </div>
                                @endif
                                <div class="nk-tb-col">
                                    <span class="tb-lead">
                                        <img src="/storage/{{ $shopitem->image }}" alt="{{ $shopitem->id }}" style="max-width: 32px;">
                                    </span>
                                </div>
                                <div class="nk-tb-col">
                                    <span class="tb-lead">

                                        <a href="{{ route('shopitems.edit', $shopitem) }}" target="_blank">
                                                {{ $shopitem->$name }}
                                        </a>
                                    </span>
                                </div>
                                <div class="nk-tb-col tb-col-md">
                                    <span class="tb-sub js-sort-value">
                                        {{ $shopitem->sort }}
                                    </span>
                                </div>
                                <div class="nk-tb-col tb-col-md">
                                    <span class="tb-sub">
                                        {{ $shopitem->created_at->format('d/m/Y H:i') }}
                                    </span>
                                </div>

                                <div class="nk-tb-col nk-tb-col-action">
                                    <div class="dropdown">
                                        <a class="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                                            <em class="icon ni ni-more-h"></em>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <ul class="link-list-plain">
                                                <li><a href="{{ route('shopitems.edit', $shopitem) }}">{{ __('Редактировать') }}</a></li>
                                                <li><a href="{{ route('shopitems.duplicate', $shopitem) }}">{{ __('Дублировать') }}</a></li>
                                                <form action="{{ route('shopitems.destroy', $shopitem) }}" method="POST">
                                                    @method('DELETE')
                                                    @csrf
                                                    <li><a href="#" class="text-danger" onclick="this.closest('form').submit();return false;">{{ __('Удалить') }}</a></li>
                                                </form>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="card-inner">
                        {{ $shopitems->links('backend.layouts.pagination.shopitems') }}
                    </div>
                    @endif

                </div>
            </div>
        </div>
    </div>
    <!-- .nk-block -->
@endsection
@push('scripts')
    <script>
        $(document).ready(function(){
            $('#category_id').on('change', function() {
                document.location.replace('{{ route('shopitems.index') }}?search={{ request()->query('search') }}'+'&category_id='+$(this).val());
            });
        });
    </script>

    @if($categorySelected)
    <style>
        #shopitems-sortable .js-sort-row.is-dragging { opacity: .45; }
        #shopitems-sortable.is-saving { opacity: .6; pointer-events: none; }
        #shopitems-sortable .js-drag-handle:active { cursor: grabbing; }
    </style>
    <script>
        (function () {
            var list = document.getElementById('shopitems-sortable');
            if (!list) return;

            var categoryId = parseInt(list.getAttribute('data-category-id'), 10);
            if (!categoryId || categoryId <= 0) return;

            var reorderUrl = @json(route('shopitems.reorder'));
            var csrf = @json(csrf_token());
            var MSG_OK = @json(__('Порядок сохранён'));
            var MSG_ERR = @json(__('Не удалось сохранить порядок'));

            var dragEl = null;
            var saving = false;

            function rows() {
                return Array.prototype.slice.call(list.querySelectorAll('.js-sort-row'));
            }

            function notify(message, type) {
                if (window.NioApp && typeof NioApp.Toast === 'function') {
                    NioApp.Toast(message, type, { position: 'top-right' });
                } else if (type === 'error') {
                    alert(message);
                }
            }

            rows().forEach(function (row) {
                row.setAttribute('draggable', 'true');

                row.addEventListener('dragstart', function (e) {
                    dragEl = row;
                    row.classList.add('is-dragging');
                    e.dataTransfer.effectAllowed = 'move';
                    try { e.dataTransfer.setData('text/plain', row.getAttribute('data-id')); } catch (err) {}
                });

                row.addEventListener('dragend', function () {
                    row.classList.remove('is-dragging');
                    dragEl = null;
                    persist();
                });
            });

            list.addEventListener('dragover', function (e) {
                e.preventDefault();
                if (!dragEl) return;
                e.dataTransfer.dropEffect = 'move';

                var after = afterElement(e.clientY);
                if (after == null) {
                    list.appendChild(dragEl);
                } else if (after !== dragEl) {
                    list.insertBefore(dragEl, after);
                }
            });

            function afterElement(y) {
                var closest = null;
                var closestOffset = Number.NEGATIVE_INFINITY;
                rows().forEach(function (child) {
                    if (child === dragEl) return;
                    var box = child.getBoundingClientRect();
                    var offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closestOffset) {
                        closestOffset = offset;
                        closest = child;
                    }
                });
                return closest;
            }

            function persist() {
                if (saving) return;
                saving = true;
                list.classList.add('is-saving');

                var order = rows().map(function (r) { return parseInt(r.getAttribute('data-id'), 10); });

                fetch(reorderUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrf,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({ category_id: categoryId, order: order })
                }).then(function (r) {
                    return r.ok ? r.json() : Promise.reject(r);
                }).then(function (data) {
                    if (data && data.sorts) {
                        Object.keys(data.sorts).forEach(function (id) {
                            var el = list.querySelector('.js-sort-row[data-id="' + id + '"] .js-sort-value');
                            if (el) el.textContent = data.sorts[id];
                        });
                    }
                    notify(MSG_OK, 'success');
                }).catch(function () {
                    notify(MSG_ERR, 'error');
                }).finally(function () {
                    saving = false;
                    list.classList.remove('is-saving');
                });
            }
        })();
    </script>
    @endif
@endpush