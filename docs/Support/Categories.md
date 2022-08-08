---
title: Работа с категориями
---
Данный помощник помогает работать с категориями. С помощью Него вы можете получить список категорий, получить категории по ее имени или идентификатору, а  также получить полный URL категории, 

## Основы использования

``` php
use \Boot\Support\Facades\Categories;
Categories::getModuleCategories();
#(array)[1 => 'Акции', 2 => 'Новости']
```

## Список методов

### getModuleCategories

Функция выдает категории указанного модуля, если категорий нет выдаст пустой массив

``` php
Categories::getModuleCategories();
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

