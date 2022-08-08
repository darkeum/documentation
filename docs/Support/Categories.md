---
title: Работа с категориями
---
Данный помощник помогает работать с категориями. С помощью Него вы можете получить список категорий, получить категории по ее имени или идентификатору, а  также получить полный URL категории, 

## Основы использования

``` php
use \Boot\Support\Facades\Categories;
Categories::getModuleCategories('news');
#(array)[1 => 'Акции', 2 => 'Новости']
```

## Список методов

### getModuleCategories

Функция выдает категории указанного модуля, если категорий нет выдаст пустой массив

``` php
Categories::getModuleCategories('news');
#Результат
#(array)[1 => 'Акции', 2 => 'Новости']
```

### getCategoryFullUrl

Функция выдает полный URL до указанной категории, если вторым параметром указать URL поста то на выходе он будет включен в полный URL

``` php
Categories::getCategoryFullUrl(10);
#Результат
#(string)category-test/
```

**Пример с указанием URL поста:**
``` php
Categories::getCategoryFullUrl(10, 'view/novost123');
#Результат
#(string)category-test/view/novost123
```

### getCategoryBySlug

Получение модели категории по ее имени `slug`

``` php 
Categories::getCategoryBySlug('category-test');
#Результат
```

### getCategory

Получение модели категории по ее идентификатору `id`

``` php 
Categories::getCategory(10);
#Результат
```

### getCategories

Получить все категории

``` php 
Categories::getCategories();
#Результат
```

## Вспомогательные функции

Все выше указанные методы могут быть вызваны через соответствующее им функции:

`Categories::getModuleCategories($module);` => `get_module_categories($module);`

`Categories::getCategoryFullUrl($key, $url = null);` => `get_category_full_url($key, $url = null);`

`Categories::getCategoryBySlug($slug);` => `get_category_by_slug($slug);`

`Categories::getCategory($key);` => ` get_category($key);`

`Categories::getCategories();` => `get_categories($module);`
