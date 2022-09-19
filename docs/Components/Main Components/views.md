---
title: Представления (Views)
---

- [Определение и принципы](#definition-principles)
- [Правила](#rules)
- [Шаблонизаторы](#engines)
- [Структура папок](#folder-structure)
- [Пример кода](#code-sample)
- [Пространство имен](#namespaces)
- [Поддержка разных тем](#themes)

### Определение и принципы {#definition-principles}

Прочтите [**Определения и принципы <ar/> Представления (Views)**](/docs/Structure/Definitions/views)

### Правила {#rules}

- Представления **СЛЕДУЕТ** создавать внутри модулей, в этом случае они будут автоматически доступны для использования в веб-контроллерах.

### Шаблонизаторы {#engines}

Darklyy поддерживает несколько шаблонизаторов:
- Шаблонизатор от **[Symfony Twig](https://twig.symfony.com/)**
- Шаблонизатор от **[Laravel Blade](https://laravel.com/docs/9.x/blade)**

### Структура папок {#folder-structure}

#### Для общих представлений

```
 - resources       
    - views
        - home.blade.php
        - profile.html.twig
        - ...
```

#### Для представлений модулей

```
 - usr
    - modules
        - {module-name}
            - UI
                - WEB
                    - Views
                        - home.blade.php
                        - profile.html.twig
                        - ...
```

### Примеры кода {#code-samples}

#### Приветственная страница

```html
<!DOCTYPE html>
<html>
<head>
    <title>Добро пожаловать</title>
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="title">Добро пожаловать</div>
        </div>
    </div>
</body>
</html>
```

### Вызов представления из контроллера
#### Blade

```php
class Controller extends WebController
{
    public function sayWelcome()
    {
        return view('welcome');
    }
}
```

#### Twig

```php
class Controller extends WebController
{
    public function sayWelcome()
    {
        display('welcome');
    }
}
```

### Пространство имен {#namespaces}

По умолчанию все представления имеют пространство имен как camelCase имени модуля.

Например, к представлению с именем <red>`welcome`</red> внутри модуля <blue>`Home`</blue> можно получить доступ следующим образом: <red>`view(home::welcome)`</red>

Если вы попытаетесь получить к нему доступ без пространства имен <red>`view('welcome')`</red>, он не найдет ваше представление.

:::note Примечание
- Файлы представлений в папке **Resource** являются исключением из этого правила и будут иметь пространство имен без имени модуля, например. <red>`view('home')`</red>
- Также исключение действует если используются разные темы
:::


## Поддержка разных тем

Darklyy поддерживает реализацию разных тем в одном приложении. Для активации данной функции необходимо в файле конфигурации <v>`theme.config.php`</v> установить тему по умолчанию. Либо вызвать метод <c>`Theme::set('theme-name');`</c>

:::warning Внимание
Внимание при использовании темы меняется структура расположение фалов представлений. В путь добавляется папка с именем темы.
:::
### Структура папок

### Для общих представлений

```
 - usr
    - themes
        - {theme-name}           
           - views
               - home.blade.php
               - profile.html.twig
               - ...
```

### Для представлений модулей

```
 - usr
    - modules
        - {module-name}
            - UI
                - WEB
                    - Views
                        - {theme-name}
                            - home.blade.php
                            - profile.html.twig
                            - ...
```

### Методы

```php
// Установить тему
Theme::set('theme-name');

// Получить текущую тему
Theme::active();

// Отключить использование тем. Таким образом, ни одна тема не будет активной.
Theme::clear();

// Получить путь к теме
Theme::path($path = 'views');
// Результат:
// /usr/themes/active-theme/views

Theme::path($path = 'views', $themeName = 'admin');
// Результат:
// /usr/themes/admin/views

Theme::getViewPaths();
// Результат:
// [
//     '/usr/themes/admin/views',
//     '/resources/views'
// ]

```

### Middleware для разных тем

Примеры использования:
```php
// Пример 1: установить тему для определенного маршрута
Route::get('/dashboard', 'DashboardController@index')
    ->middleware('theme:dashboard-theme');


// Пример 1: установить тему для группы маршрутов
Route::group(['middleware'=>'theme:admin-theme'], function() {
    // "admin-theme" будет применено для маршрутов указанных в этом кейсе
});

```
