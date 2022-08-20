---
title: JSON атрибуты
---
Добавляет JSON атрибуты в модели **Darklyy**.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/darkeum/darklyy-json-attributes.svg?style=flat-square)](https://packagist.org/packages//darkeum/darklyy-json-attributes)
[![Total Downloads](https://img.shields.io/packagist/dt/darkeum/darklyy-json-attributes.svg?style=flat-square)](https://packagist.org/packages/darkeum/darklyy-json-attributes)

Было бы здорово, если бы в **Darklyy** была возможность использовать дух **NoSQL**. Этот пакет делает именно это. Он предоставляет трейт, который при применении к модели позволяет хранить произвольные значения в одном столбце JSON.

Вот несколько примеров. Здесь мы используем столбец <f>`extra_attributes`</f>, но вы можете назвать его как хотите

```php
// получение значений
$yourModel->extra_attributes->name = 'value';
$yourModel->extra_attributes->name; // returns 'value'

// вы также можете использовать массив
$yourModel->extra_attributes['name'] = 'value';
$yourModel->extra_attributes['name'] // returns 'value'

// установка нескольких значений за раз
$yourModel->extra_attributes = [
   'rey' => ['side' => 'light'],
   'snoke' => ['side' => 'dark']
];

// добавление/обновление нескольких значений за один раз через set()установка/обновление нескольких значений за один раз через set()
$yourModel->extra_attributes->set([
   'han' => ['side' => 'light'],
   'snoke' => ['side' => 'dark']
]);

// получение значений с использованием записи через точкуполучение значений с использованием записи через точку
$yourModel->extra_attributes->get('rey.side'); // returns 'light'

// получить значение по умолчанию, когда атрибут не существует
$yourModel->extra_attributes->get('non_existing', 'default'); // returns 'default'

// если у модели есть modelScope то вы можете получить все занчения с заданными JSON атрибутами.
$yourModel->withSchemalessAttributes(['name' => 'value', 'name2' => 'value2'])->get();

// удалить ключ и значение
$yourModel->extra_attributes->forget('key');
```

## Требования

Для этого пакета требуется база данных с поддержкой столбцов <f>`json`</f>, например **MySQL 5.7.8** или выше.

## Установка

Вы можете установить пакет через composer:

```bash
composer require darkeum/darklyy-json-attributes
```

**JSON** атрибуты будут храниться в столбце <false>json</false> в таблице вашей модели. Давайте добавим этот столбец и подготовим модель.

### Добавление столбца, в котором будут храниться JSON атрибуты

Добавьте миграцию для всех моделей, в которые вы хотите добавить JSON атрибуты. Вы должны использовать метод <f>`jsonAttributes`</f> в <f>`Blueprint`</f>, чтобы добавить столбец. Аргумент, который вы даете <f>`jsonAttributes`</f>, — это имя добавляемого столбца. Вы можете использовать любое имя, какое захотите. Вы также можете добавить в таблицу столько столбцов атрибутов без схемы, сколько захотите. Во всех примерах этого файла сведений мы будем использовать один столбец с именем <f>`extra_attributes`</f>.

```php
Schema::table('your_models', function (Blueprint $table) {
    $table->jsonAttributes('extra_attributes');
});
```

### Подготовка модели

Чтобы работать с JSON атрибутами, вам нужно добавить к своей модели собственное приведение и область видимости. Вот пример того, что вам нужно добавить, если вы выбрали <f>`extra_attributes`</f> в качестве имени столбца.

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Darkeum\JsonAttributes\Casts\JsonAttributes;

class TestModel extends Model
{
    // ...

    public $casts = [
        'extra_attributes' => JsonAttributes::class,
    ];

    public function scopeWithExtraAttributes(): Builder
    {
        return $this->extra_attributes->modelScope();
    }

    // ...
}
```

Если вам нужна поддержка нескольких столбцов без схемы в одной модели, вы должны использовать трейт <f>`JsonAttributesTrait`</f>. Вот пример того, что вам нужно добавить, если вы выбрали <f>`extra_attributes`</f>, <f>`other_extra_attributes`</f> в качестве имен столбцов.

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Darkeum\JsonAttributes\JsonAttributes;
use Darkeum\JsonAttributes\JsonAttributesTrait;

class TestModel extends Model
{
    use JsonAttributesTrait;

    // ...
  
    /**
     * @var array
     */
    protected $jsonAttributes = [
        'extra_attributes',
        'other_extra_attributes',
    ];

    public function scopeWithExtraAttributes(): Builder
    {
        return $this->extra_attributes->modelScope();
    }
  
    public function scopeWithOtherExtraAttributes(): Builder
    {
        return $this->other_extra_attributes->modelScope();
    }

    // ...
}
```

Если вы хотите повторно использовать это поведение в нескольких моделях, вы можете поместить функцию в свой собственный трейт. Вот как может выглядеть эта трейт:

```php
namespace App\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Darkeum\JsonAttributes\Casts\JsonAttributes;

trait HasJsonAttributes
{
    public function initializeHasJsonAttributes()
    {
        $this->casts['extra_attributes'] = JsonAttributes::class;
    }
  
    public function scopeWithExtraAttributes(): Builder
    {
        return $this->extra_attributes->modelScope();
    }
}
```

## Использование

### Получение и установка JSON атрибутов

Это самый простой способ получить и установить JSON атрибуты:

```php
$yourModel->extra_attributes->name = 'value';

$yourModel->extra_attributes->name; // Returns 'value'
```

В качестве альтернативы вы можете использовать массив:

```php
$yourModel->extra_attributes['name'] = 'value';

$yourModel->extra_attributes['name']; // Returns 'value'
```

Вы можете заменить все существующие JSON атрибуты без схемы, назначив им необходимый массив.

```php
// Все существующие JSON атрибуты будут заменены
$yourModel->extra_attributes = ['name' => 'value'];
$yourModel->extra_attributes->all(); // Returns ['name' => 'value']
```

Вы также можете использовать <false>`get`</false> и <false>`set`</false>. Методы имеют поддержку записи через точку.

```php
$yourModel->extra_attributes = [
   'rey' => ['side' => 'light'],
   'snoke' => ['side' => 'dark'],
];
$yourModel->extra_attributes->set('rey.side', 'dark');

$yourModel->extra_attributes->get('rey.side'); // Returns 'dark
```

Вы также можете передать значение по умолчанию методу <false>`get`</false>.

```php
$yourModel->extra_attributes->get('non_existing', 'default'); // Returns 'default'
```

### Сохранение JSON атрибутов

Чтобы сохранить **JSON** атрибуты, вы должны, как и для обычных атрибутов, вызвать <else>`save()`</else> в модели.

```php
$yourModel->save(); // Сохраняет как обычные, так и JSON атрибуты
```

### Получение моделей с определенными JSON атрибутами

Вот как вы можете использовать предоставленный объект <true>`modelScope`</true>.

```php
// Возвращает все модели, которые имеют все заданные JSON атрибуты.
$yourModel->withExtraAttributes(['name' => 'value', 'name2' => 'value2'])->get();
```

Если вы хотите выполнять поиск только по одному JSON атрибуту, вы можете использовать <true>`modelScope`</true> следующим образом.

```php
// возвращает все модели, у которых для JSON атрибута `name` установлено значение `value`
$yourModel->withExtraAttributes('name', 'value')->get();
```

Кроме того, если вы хотите выполнять поиск только по одному **JSON** атрибуту с помощью пользовательского оператора, вы можете использовать <true>`modelScope`</true> следующим образом.

```php
// возвращает все модели, у которых есть JSON атрибут `name`, начинающийся со `value`
$yourModel->withExtraAttributes('name', 'LIKE', 'value%')->get();
```

Если вы хотите выполнять поиск только по вложенному **JSON** атрибуту, вы можете использовать <true>`modelScope`</true> следующим образом.

```php
// возвращает все модели, у которых для вложенного JSON атрибута han.side установлено значение `light`
$yourModel->withExtraAttributes('han->side', 'light')->get();
```

## Тестирование

Сначала создайте базу данных **MySQL** с именем <false>`darklyy_json_attributes`</false>. После этого вы можете запустить тесты с помощью:

```bash
composer test
```
