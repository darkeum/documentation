---
title: Маршрутизация
---


### Правила {#rules}

- Файлы маршрутов API должны быть названы в соответствии с версией, доступностью и функциональностью их API. например CreateOrder.v1.public.php, FulfillOrder.v2.public.php, CancelOrder.v1.private.php...
- Файлы веб-маршрута очень похожи на веб-файлы API, но они могут называться как угодно.

### Структура папок {#folder-structure}

```
 - usr
    - modules
        - {container-name}
            - UI
                - API
                   - Routes
                      - CreateItem.v1.public.php
                      - DeleteItem.v1.public.php
                      - CreateItem.v2.public.php
                      - DeleteItem.v1.private.php
                      - ApproveItem.v1.private.php
                      - ...
                - WEB
                   - Routes
                      - main.php
                      - ...
```

### Примеры кода {#code-sample}

#### Web и API маршруты
Маршруты определяются точно так же, как вы определили их в Laravel.

```php
Route::post('hello', [Controller::class, 'sayHello']);
```

#### Защищенный маршрут (API)

```php
Route::get('users', [Controller::class, 'listAllUsers'])
    ->middleware(['auth:api']);
```

## Разница между публичными и приватными маршрутами {#difference-between-public-private-route-files}

У Darklyy есть 2 типа конечных точек: общедоступная (public), в основном для сторонних клиентов, и частная (private) для ваших собственных приложений. Это поможет создать отдельную документацию для каждого и сохранить конфиденциальность вашего внутреннего API.