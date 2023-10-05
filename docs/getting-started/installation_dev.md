---
title: Установка для разработчиков
---

- [Подготовка к развертыванию](#prepare)
  - [Рекомендацию к IDE](#ide)
- [Установка](#install)

## Подготовка к развертыванию {#prepare}

Для развертывание среды разработки и дальнейшего использования Darklyy необходимо выполнить следующие действия

1. Получить доступ к закрытому репозиторию Github
2. Скачать и установить [Open Server Panel](https://ospanel.io/)
3. Скачать и установить [Git](https://git-scm.com/download/win)
4. При необходимости установить необходимою версию [Python](https://www.python.org/downloads/) для отладки скриптов

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

1. В директории установленной Open Server Panel (*обычно C:\OSPanel\domains*) создать папку с будущим доменом (*рекомендуется ae.ru*)
2. Открыть Git Bush в созданной директории
3. Выполнить команду ```git clone https://github.com/darkeum/ATRIENERGO.git . ``` и дождаться развертывания проекта
4.
