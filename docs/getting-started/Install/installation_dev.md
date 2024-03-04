---
title: Установка
---
- [Знакомитесь с Darklyy](#meet-darklyy)
- [Подготовка к развертыванию](#prepare)
  - [Настройка Open Server Panel](#osp)
  - [Рекомендацию к IDE](#ide)
- [Установка](#install)

## Знакомитесь с Darklyy {#meet-darklyy}

**Darklyy** — это фреймворк для веб-приложений. Веб-фреймворк обеспечивает структуру и отправную точку для создания вашего приложения, позволяя вам сосредоточиться на создании, а не над базовыми функциями.

## Подготовка к развертыванию {#prepare}

Для развертывание среды разработки и дальнейшего использования Darklyy необходимо выполнить следующие действия

1. Получить доступ к закрытому репозиторию Github
2. Скачать и установить [Open Server Panel](https://ospanel.io/)
3. Скачать и установить [Git](https://git-scm.com/download/win)
4. Скачать и установить [Node.js](https://nodejs.org/ru) (рекомендуется v18.18.0)
5. При необходимости установить необходимою версию [Python](https://www.python.org/downloads/) для отладки скриптов

### Настройка Open Server Panel {#osp}

Для того чтобы открыть настройки запустите Open Server Panel, далее в трее нажмите правой кнопкой на флажок и выберите пункт настройки.
В настройках выполните следующие действия:

1. На вкладке "Основное"
   - Поставьте галочку (если не стоит) "Автозапуск Сервера"
   - Поставьте галочку (если не стоит) "Запускать вместе с Windows"
2. На вкладке "Модули"
   - В разделе "HTTP" выберите <f>Nginx 1.21</f> или <f>Nginx 1.23</f> или <f>Nginx 1.23.1</f>
   - В разделе "PHP" выберите <f>PHP 8.2</f>
   - В разделе "MySQL/MariaDB" выберите <f>MariaDB 8.6 win 10</f>
3. На вкладке "Домены" в разделе "Управления доменами" должно стоять <f>Ручное + Автопоиск</f>

### Рекомендацию к IDE {#ide}

Для удобной работы рекомендуется использовать текстовый редактор [VSCode](https://code.visualstudio.com/)

В данном редакторе множество расширений что позволяет удобно редактировать код. Ниже представлен список рекомендуемых расширений:

- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) - Проверка кода PHP
- [PHPDoc Comment](https://marketplace.visualstudio.com/items?itemName=rexshi.phpdoc-comment-vscode-plugin) - Создание документации в коде
- [PHP Namespace Resolver](https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver) - Работа с namespace в коде
- [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter) - Форматирование CSS
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Просмотр графика Git репозитория
- [Laravel Blade formatter](https://marketplace.visualstudio.com/items?itemName=shufo.vscode-blade-formatter) - Форматирован шаблонов Blade
- [Russian Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru) - Русский язык для VSCode
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) - Эмуляция запросов, аналог Postman

## Установка {#install}

1. В директории установленной Open Server Panel (_обычно C:\OSPanel\domains_) создать папку с будущим доменом (_рекомендуется ae.ru_)
2. Открыть Git Bush в созданной директории
3. Выполнить команду `git clone https://github.com/darkeum/ATRIENERGO.git .` и дождаться развертывания проекта
4. В папке проекта переименовать `.env.example` в `.env`
5. Открыть файл `.env` и заполнить настройки окружения или запросить готовый `.env` файл с настройками:
    + Строки `APP_URL=https://ae.ru` и `API_URL=https://api.ae.ru` заполнить согласно имени домена который вы указали на 1 пункте
    + Заполнить раздел с подключение к базе данных (данные по запросу)
    + Также вы можете заполнить другие настройки по своему усмотрению
5. Теперь необходимо запустить Open Server Panel (если он еще не запущен), для этого правой кнопкой нажмите на значок Open Server Panel (флажок), и нажмите на пункт "Запустить"
6. Далее необходимо открыть консоль Open Server Panel, для этого правой кнопкой нажмите на значок Open Server Panel (флажок), выберите пункт "Дополнительно", а в нем пункт "Консоль"
7. В консоли перейдите в папку домена командой `cd domains\ae.ru` (если на первом пункте вы создали другое имя домена то укажите его)
8. Теперь выполните команду `composer install`
9. Далее откройте папку с проектом в VSCode, для этого нажмите правой кнопкой в папке проекта и выберите пункт "Открыть с помощью Code"
10. Откройте терминал в VSCode, для этого внизу окна нажмите на раздел "Сведения" и выберите вкладку "Терминал" или создайте новый терминал и верхнего меню (Терминал->Новый терминал)
11. В терминале пропишите команду `npx mix`
12. Откройте в браузере [https://ae.ru/](https://ae.ru) (если на первом пункте вы создали другое имя домена то откройте его), подтвердите ошибку безопасности и убедитесь что проект работает