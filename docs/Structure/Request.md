---
title: Жизненный цикл запроса
position: 1
---

*Базовый сценарий вызова API с навигацией по основным компонентам:*

1. &nbsp;**Пользователь** вызывает <func>`Endpoint`</func> в маршрутизации <func>`Route`</func> файле.
2. &nbsp;<func>`Endpoint`</func> вызывает <func>`Middleware`</func> для обработки аутентификации.
3. &nbsp;<func>`Endpoint`</func> вызывает необходимую функцию в <func>`Controller`</func>.
4. &nbsp;<func>`Request`</func> передается в <func>`Controller`</func> автоматически применив правила проверки и авторизации запросов.
5. &nbsp;<func>`Controller`</func> вызывает <func>`Action`</func> передавая данные запроса <func>`Request`</func>.
6. &nbsp;<func>`Action`</func> выполняет бизнес-логику, *или вызывает задачи <func>`Tasks`</func> по мере необходимости*.
7. &nbsp;<func>`Tasks`</func> выполняет выполнить одну часть основного действия
8. &nbsp;<func>`Action`</func> подготавливает данные для возврата в <func>`Controller`</func>, *некоторые данные могут быть получены из <func>`Tasks`</func>*.
9. &nbsp;<func>`Controller`</func> строит ответ, используя <func>`View`</func> (или <func>`Transformer`</func>) и отправить обратно **пользователю**.