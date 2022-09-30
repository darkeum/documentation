---
title: Маршрутизация (Routes)
---

- [Определение и принципы](#definition-principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Пример кода](#code-sample)

### Определение и принципы {#definition-principles}

Прочтите [**Определения и принципы <ar/> Маршрутизация (Routes)**](/docs/Structure/Definitions/routes)

### Правила {#rules}

- Файлы маршрутов API должны быть названы в соответствии с версией, доступностью и функциональностью их API. например <c>`CreateOrder.v1.public.php`</c>, <c>`FulfillOrder.v2.public.php`</c>, <c>`CancelOrder.v1.private.php`</c> и тд.
- Файлы веб-маршрута очень похожи на веб-файлы API, но они могут называться как угодно.

### Структура папок {#folder-structure}

```
 - usr
    - modules
        - {module-name}
            - UI
                - API
                   - Routes
                      - CreateItem.v1.public.php
                      - DeleteItem.v1.public.php
                      - CreateItem.v2.public.php
                      - DeleteItem.v1.private.php
                      - ActiveItem.v1.private.php
                      - ...
                - WEB
                   - Routes
                      - main.php
                      - ...
```

### Примеры кода {#code-sample}

#### Web и API маршруты
Маршруты определяются точно так же, как вы определили бы их в [**Laravel**](https://laravel.com/docs/9.x/routing).

```php
Route::post('hello', [Controller::class, 'sayHello']);
```

#### Защищенный маршрут (API)

```php
Route::get('users', [Controller::class, 'listAllUsers'])
    ->middleware(['auth:api']);
```

## Разница между публичными и приватными маршрутами {#difference-between-public-private-route-files}

У **Darklyy** есть 2 типа конечных точек: 
- Общедоступная [**public**] - в основном для сторонних клиентов
- Частная [**private**] - для ваших собственных приложений 
  
Это поможет создать отдельную документацию для каждого и сохранить конфиденциальность вашего внутреннего **API**.