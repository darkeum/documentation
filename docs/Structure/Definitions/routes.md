---
title: Маршрутизация
---

#### Определение:
- Маршруты являются первыми получателями HTTP-запросов.
- Маршруты отвечают за сопоставление всех входящих HTTP-запросов с функциями своего контроллера.
- Файлы маршрутов содержат конечные точки (шаблоны URL-адресов, которые идентифицируют входящий запрос).
- Когда HTTP-запрос попадает в ваше приложение, конечные точки сопоставляются с шаблоном URL и выполняют вызов соответствующей функции контроллера.

#### Принципы:
- Существует три типа маршрутов: API-маршруты, веб-маршруты и маршруты CLI.
- Файлы маршрутов API СЛЕДУЕТ отделять от файлов веб-маршрутов, каждый в отдельной папке.
- Папка **Web Routes** будет содержать только **Web Endpoints** (доступные для Web-браузеров); А папка **API Routes** будет содержать только конечные точки API (доступные приложению).
- У каждого модуля ДОЛЖЕН быть свой маршрут.
- Каждый файл маршрута ДОЛЖЕН содержать одну конечную точку.
- Задание `Endpoint` заключается в вызове функции на соответствующем контроллере после выполнения запроса любого типа. (Ничего другого делать НЕ ДОЛЖНО).