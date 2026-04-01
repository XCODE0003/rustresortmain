<?php

return [
    'column_manager' => [
        'heading' => 'Колонки',
        'actions' => [
            'apply' => [
                'label' => 'Применить',
            ],
            'reset' => [
                'label' => 'Сбросить',
            ],
        ],
    ],
    'fields' => [
        'search' => [
            'label' => 'Поиск',
            'placeholder' => 'Поиск',
            'indicator' => 'Поиск',
        ],
    ],
    'summary' => [
        'heading' => 'Сводка',
        'subheadings' => [
            'all' => 'Все :label',
            'group' => 'Сводка по группе :group',
            'page' => 'Текущая страница',
        ],
        'summarizers' => [
            'average' => [
                'label' => 'Среднее',
            ],
            'count' => [
                'label' => 'Количество',
            ],
            'sum' => [
                'label' => 'Сумма',
            ],
        ],
    ],
    'actions' => [
        'disable_reordering' => [
            'label' => 'Завершить сортировку',
        ],
        'enable_reordering' => [
            'label' => 'Сортировать записи',
        ],
        'filter' => [
            'label' => 'Фильтр',
        ],
        'group' => [
            'label' => 'Группировка',
        ],
        'open_bulk_actions' => [
            'label' => 'Массовые действия',
        ],
        'column_manager' => [
            'label' => 'Управление колонками',
        ],
    ],
    'empty' => [
        'heading' => 'Нет записей: :model',
        'description' => 'Создайте :model, чтобы начать работу.',
    ],
    'filters' => [
        'actions' => [
            'apply' => [
                'label' => 'Применить фильтры',
            ],
            'remove' => [
                'label' => 'Удалить фильтр',
            ],
            'remove_all' => [
                'label' => 'Удалить все фильтры',
                'tooltip' => 'Удалить все фильтры',
            ],
            'reset' => [
                'label' => 'Сбросить',
            ],
        ],
        'heading' => 'Фильтры',
        'indicator' => 'Активные фильтры',
        'multi_select' => [
            'placeholder' => 'Все',
        ],
        'select' => [
            'placeholder' => 'Все',
            'relationship' => [
                'empty_option_label' => 'Нет',
            ],
        ],
        'trashed' => [
            'label' => 'Удаленные записи',
            'only_trashed' => 'Только удаленные записи',
            'with_trashed' => 'С удаленными записями',
            'without_trashed' => 'Без удаленных записей',
        ],
    ],
    'grouping' => [
        'fields' => [
            'group' => [
                'label' => 'Группировать по',
            ],
            'direction' => [
                'label' => 'Направление группировки',
                'options' => [
                    'asc' => 'По возрастанию',
                    'desc' => 'По убыванию',
                ],
            ],
        ],
    ],
    'reorder_indicator' => 'Перетащите записи, чтобы изменить порядок.',
    'selection_indicator' => [
        'selected_count' => 'Выбрана 1 запись|Выбрано :count записей',
        'actions' => [
            'select_all' => [
                'label' => 'Выбрать все :count',
            ],
            'deselect_all' => [
                'label' => 'Снять выделение',
            ],
        ],
    ],
    'sorting' => [
        'fields' => [
            'column' => [
                'label' => 'Сортировать по',
            ],
            'direction' => [
                'label' => 'Направление сортировки',
                'options' => [
                    'asc' => 'По возрастанию',
                    'desc' => 'По убыванию',
                ],
            ],
        ],
    ],
    'default_model_label' => 'запись',
];
