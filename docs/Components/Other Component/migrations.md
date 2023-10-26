---
title: Миграции (Migrations)
---

- [Определение](#definition)
- [Принципы](#principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Примеры кода](#code-samples)

## Определение {#definition}

Миграции — что-то вроде системы контроля версий для вашей базы данных. Они позволяют вашей команде изменять структуру БД, в то же время оставаясь в курсе изменений других участников. Миграции обычно идут рука об руку с построителем структур для более простого обращения с архитектурой вашей базы данных. Если вы когда-нибудь просили коллегу вручную добавить столбец в его локальную БД, значит вы сталкивались с проблемой, которую решают миграции БД.

Фасад Schema обеспечивает поддержку создания и изменения таблиц в независимости от используемой СУБД из числа тех, что поддерживаются фреймфорком.

## Принципы {#principles}

- Миграции <e>**СЛЕДУЕТ**</e> создавать внутри папок модулей
- Миграции будут автоматически загружаться фреймворком.

## Правила {#rules}

- Нет необходимости публиковать миграции модулей в корневую Папку миграций. Просто запустите команду <g>`darksander migrate`</g>, и **Darklyy** прочитает миграцию из модулей.

## Структура папок {#folder-structure}

```
   - usr
      - modules
          - {module-name}
               - Data
                    - Migrations
                        - 2022_01_01_000001_create_new_table.php
                        - ...
```

## Примеры кода {#code-samples}

```php
class CreateDemoTable extends Migration
{
    public function up()
    {
        Schema::create('demo', function (Blueprint $table) {
            $table->increments('id');
            // ...
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::drop('demo');
    }
}

```

## Создание миграций {#create}

Для создания новой миграции используйте Darksander-команду

```shell
php darksander core:generate:migration
```

php darksander make:migration create_news_table

Миграция будет помещена в папку модуля в Data\Migrations и будет содержать метку времени, которая позволяет фреймворку определять порядок применения миграций.
Можно также использовать параметры **–table** и **–create** для указания имени таблицы и того факта, что миграция будет создавать новую таблицу (а не изменять существующую — прим. пер.). Эти параметры просто заранее создают указанную таблицу в создаваемом файле-заглушке миграции:

```shell
php darksander core:generate:migration create_news_table --create=news

php darksander core:generate:migration add_views_to_news_table --table=news
```

## Выполнение миграций {#migrate}

Для запуска всех необходимых вам миграций используйте Darksander-команду **migrate**.

```shell
php darksander migrate
```

### Принудительные миграции в продакшне

Некоторые операции миграций разрушительны, значит они могут привести к потере ваших данных. Для предотвращения случайного запуска этих команд на вашей боевой БД перед их выполнением запрашивается подтверждение. Для принудительного запуска команд без подтверждения используйте ключ **–force**:

```shell
php darksander migrate --force
```

## Откат миграций {#rollback}

Для отмены изменений, сделанных последней миграцией, используйте команду **rollback**. Эта команда отменит результат последней «партии» миграций, которая может включать несколько файлов миграций:

```shell
php darksander migrate:rollback
```

Вы можете сделать откат определённого числа миграций, указав параметр **step** для команды **rollback**. Например, эта команда откатит последние пять миграций:

```shell
php darksander migrate:rollback --step=5
```

Команда **migrate:reset** отменит изменения всех миграций вашего приложения:

```shell
php darksander migrate:reset
```

### Откат всех миграций и их повторное применение одной командой

```shell
php darksander migrate:refresh
```

Вы можете откатить и повторно применить определённое число миграций, указав параметр step для команды refresh. Например, эта команда откатит и повторно применит последние пять миграций:

```shell
php darksander migrate:refresh --step=5
```

## Таблицы {#table}

### Создание таблиц {#table-create}

Для создания новой таблицы БД используйте метод create() фасада Schema. Метод create() принимает два аргумента. Первый — имя таблицы, второй — замыкание, которое получает объект Blueprint, который можно использовать для определения новой таблицы:

```php
Schema::create('users', function (Blueprint $table) {
  $table->increments('id');
});
```

Само собой, при создании таблицы вы можете использовать любые методы для работы со столбцами построителя структур.

### Проверка существования таблицы/столбца {#table-has}

Вы можете легко проверить существование таблицы или столбца при помощи методов hasTable() и hasColumn():

```php
if (Schema::hasTable('users')) {
  //
}
 
if (Schema::hasColumn('users', 'email')) {
  //
}
```

### Подключение и подсистема хранения данных {#table-connection}

Если вы хотите выполнить операции над структурой через подключение к БД, которое не является вашим основным подключением, используйте метод connection():

```php
Schema::connection('foo')->create('users', function (Blueprint $table) {
  $table->increments('id');
});
```

Используйте свойство engine построителя структур, чтобы задать подсистему хранения данных для таблицы:

```php
Schema::create('users', function (Blueprint $table) {
  $table->engine = 'InnoDB';
 
  $table->increments('id');
});
```

### Переименование/удаление таблиц {#table-change}

Для переименования существующей таблицы используйте метод rename():

```php
Schema::rename($from, $to);
```

Для удаления существующей таблицы используйте методы drop() и dropIfExists():

```php
Schema::drop('users');
 
Schema::dropIfExists('users');
```

## Столбцы {#column}

### Создание столбцов {#column-create}

Для изменения существующей таблицы мы будем использовать метод table() фасада Schema. Как и метод create(), метод table() принимает два аргумента: имя таблицы и замыкание, которое получает экземпляр Blueprint, который можно использовать для добавления столбцов в таблицу:

```php
Schema::table('users', function (Blueprint $table) {
  $table->string('email');
});
```
### Доступные типы столбцов {#column-type}

Разумеется, построитель структур содержит различные типы столбцов, которые вы можете указывать при построении ваших таблиц:

| ** Команда                                                         ** | ** Описание                                                                                                                                                                     ** |
|---|---|
|  $table->bigIncrements('id');                                     |  Инкрементный ID (первичный ключ), использующий эквивалент «UNSIGNED BIG INTEGER»                                                                                              |
|  $table->bigInteger('votes');                                     |  Эквивалент BIGINT для базы данных                                                                                                                                             |
|  $table->binary('data');                                          |  Эквивалент BLOB для базы данных                                                                                                                                               |
|  $table->boolean('confirmed');                                    |  Эквивалент BOOLEAN для базы данных                                                                                                                                            |
|  $table->char('name', 4);                                         |  Эквивалент CHAR для базы данных                                                                                                                                               |
|  $table->date('created_at');                                      |  Эквивалент DATE для базы данных                                                                                                                                               |
|  $table->dateTime('created_at');                                  |  Эквивалент DATETIME для базы данных                                                                                                                                           |
|  $table->dateTimeTz('created_at');                                |  Эквивалент DATETIME (с часовым поясом) для базы данных (для версии 5.2 и выше)                                                                                                |
|  $table->decimal('amount', 5, 2);                                 |  Эквивалент DECIMAL с точностью и масштабом                                                                                                                                    |
|  $table->double('column', 15, 8);                                 |  Эквивалент DOUBLE с точностью, всего 15 цифр, после запятой 8 цифр                                                                                                            |
|  $table->enum('choices', ['foo', 'bar']);                         |  Эквивалент ENUM для базы данных                                                                                                                                               |
|  $table->float('amount', 8, 2);                                   |  Эквивалент FLOAT для базы данных, всего 8 знаков, из них 2 после запятой (для версии 5.3 и выше)                                                                              |
|  $table->float('amount');                                         |  Эквивалент FLOAT для базы данных (для версии 5.2 и ранее)                                                                                                                     |
|  $table->foreignId('user_id');                                    |  Метод foreignId является псевдонимом метода unsignedBigInteger                                                                                                                |
|  $table->geometryCollection('positions');                         |  Метод geometryCollection создает эквивалент столбца GEOMETRYCOLLECTION                                                                                                        |
|  $table->geometry('positions');                                   |  Метод geometry создает эквивалент столбца GEOMETRY                                                                                                                            |
|  $table->id();                                                    |  Метод id является псевдонимом метода bigIncrements. По умолчанию метод создает столбец id; однако, вы можете передать имя столбца, если хотите присвоить столбцу другое имя   |
|  $table->increments('id');                                        |  Инкрементный ID (первичный ключ), использующий эквивалент «UNSIGNED INTEGER»                                                                                                  |
|  $table->integer('votes');                                        |  Эквивалент INTEGER для базы данных                                                                                                                                            |
|  $table->ipAddress('visitor');                                    |  Эквивалент IP-адреса для базы данных (для версии 5.2 и выше)                                                                                                                  |
|  $table->json('options');                                         |  Эквивалент JSON для базы данных                                                                                                                                               |
|  $table->jsonb('options');                                        |  Эквивалент JSONB для базы данных                                                                                                                                              |
|  $table->lineString('positions');                                 |  Метод lineString создает эквивалент столбца LINESTRING                                                                                                                        |
|  $table->longText('description');                                 |  Эквивалент LONGTEXT для базы данных                                                                                                                                           |
|  $table->macAddress('device');                                    |  Эквивалент MAC-адреса для базы данных (для версии 5.2 и выше)                                                                                                                 |
|  $table->mediumIncrements('id');                                  |  Инкрементный ID (первичный ключ), использующий эквивалент «UNSIGNED MEDIUM INTEGER» (для версии 5.3 и выше)                                                                   |
|  $table->mediumInteger('numbers');                                |  Эквивалент MEDIUMINT для базы данных                                                                                                                                          |
|  $table->mediumText('description');                               |  Эквивалент MEDIUMTEXT для базы данных                                                                                                                                         |
|  $table->morphs('taggable');                                      |  Добавление столбца taggable_id INTEGER (для версии 5.3 и выше Unsigned INTEGER) и taggable_type STRING                                                                        |
|  $table->multiLineString('positions');                            |  Метод multiLineString создает эквивалент столбца MULTILINESTRING                                                                                                              |
|  $table->multiPoint('positions');                                 |  Метод multiPoint создает эквивалент столбца MULTIPOINT:                                                                                                                       |
|  $table->multiPolygon('positions');                               |  Метод multiPolygon создает эквивалент столбца MULTIPOLYGON                                                                                                                    |
|  $table->nullableMorphs('taggable');                              |  Аналогично morphs(), но разрешено значение NULL (для версии 5.3 и выше)                                                                                                       |
|  $table->nullableUuidMorphs('taggable');                          |  Метод аналогичен методу uuidMorphs; тем не менее, создаваемый столбец будет иметь значение NULL                                                                               |
|  $table->nullableTimestamps();                                    |  Аналогично timestamps(), но разрешено значение NULL                                                                                                                           |
|  $table->point('position');                                       |  Метод point создает эквивалент столбца POINT                                                                                                                                  |
|  $table->polygon('position');                                     |  Метод polygon создает эквивалент столбца POLYGON                                                                                                                              |
|  $table->rememberToken();                                         |  Добавление столбца remember_token VARCHAR(100) NULL                                                                                                                           |
|  $table->set('flavors', ['strawberry', 'vanilla']);               |  Метод set создает эквивалент столбца SET с заданным списком допустимых значений                                                                                               |
|  $table->smallIncrements('id');                                   |  Инкрементный ID (первичный ключ), использующий эквивалент «UNSIGNED SMALL INTEGER» (для версии 5.3 и выше)                                                                    |
|  $table->smallInteger('votes');                                   |  Эквивалент SMALLINT для базы данных                                                                                                                                           |
|  $table->softDeletesTz($column = 'deleted_at', $precision = 0);   |  Метод softDeletesTz добавляет NULL-эквивалент столбца TIMESTAMP (с часовым поясом) с необязательной точностью (общее количество цифр).                                        |
|  $table->softDeletes();                                           |  Добавление столбца deleted_at для мягкого удаления (для версии 5.3 и выше разрешено значение NULL)                                                                            |
|  $table->string('email');                                         |  Эквивалент VARCHAR                                                                                                                                                            |
|  $table->string('name', 100);                                     |  Эквивалент VARCHAR с длинной                                                                                                                                                  |
|  $table->text('description');                                     |  Эквивалент TEXT для базы данных                                                                                                                                               |
|  $table->time('sunrise');                                         |  Эквивалент TIME для базы данных                                                                                                                                               |
|  $table->timeTz('sunrise');                                       |  Эквивалент TIME (с часовым поясом) для базы данных (для версии 5.2 и выше)                                                                                                    |
|  $table->tinyInteger('numbers');                                  |  Эквивалент TINYINT для базы данных                                                                                                                                            |
|  $table->tinyIncrements('id');                                    |  Метод tinyIncrements создает эквивалент автоинкрементного столбца UNSIGNED TINYINT в качестве первичного ключа:                                                               |
|  $table->tinyText('notes');                                       |  Метод tinyText создаёт эквивалент столбца TINYTEXT:                                                                                                                           |
|  $table->timestamp('added_on');                                   |  Эквивалент TIMESTAMP для базы данных                                                                                                                                          |
|  $table->timestampTz('added_on');                                 |  Эквивалент TIMESTAMP (с часовым поясом) для базы данных (для версии 5.2 и выше)                                                                                               |
|  $table->timestamps();                                            |  Добавление столбцов created_at и updated_at (для версии 5.3 и выше разрешено значение NULL)                                                                                   |
|  $table->timestampsTz();                                          |  Добавление столбцов created_at и updated_at (с часовым поясом), для которых разрешено значение NULL (для версии 5.3 и выше)                                                   |
|  $table->unsignedBigInteger('votes');                             |  Эквивалент Unsigned BIGINT для базы данных (для версии 5.3 и выше)                                                                                                            |
|  $table->unsignedInteger('votes');                                |  Эквивалент Unsigned INT для базы данных (для версии 5.3 и выше)                                                                                                               |
|  $table->unsignedMediumInteger('votes');                          |  Эквивалент Unsigned MEDIUMINT для базы данных (для версии 5.3 и выше)                                                                                                         |
|  $table->unsignedSmallInteger('votes');                           |  Эквивалент Unsigned SMALLINT для базы данных (для версии 5.3 и выше)                                                                                                          |
|  $table->unsignedTinyInteger('votes');                            |  Эквивалент Unsigned TINYINT для базы данных (для версии 5.3 и выше)                                                                                                           |
|  $table->uuid('id');                                              |  Эквивалент UUID для базы данных                                                                                                                                               |
|  $table->uuidMorphs('taggable');                                  |  Метод uuidMorphs – это удобный метод, который добавляет эквивалент столбца CHAR(36) ({column}_id) и эквивалент столбца VARCHAR ({column}_type).                               |
|  $table->year('birth_year');                                      |  Метод year создает эквивалент столбца YEAR:                                                                                                                                   |


## Модификаторы столбцов[](#модификаторы_столбцов)

Вдобавок к перечисленным типам столбцов существует несколько «модификаторов» столбцов, которые вы можете использовать при добавлении столбцов в таблицу. Например, чтобы сделать столбец «обнуляемым», используйте метод nullable():
```php
Schema::table('users', function (Blueprint $table) {
$table->string('email')->nullable();
});
```
Ниже перечислены все доступные модификаторы столбцов. В этом списке отсутствуют модификаторы индексов:

| ** Модификатор               ** | ** Описание                                                    ** |
|---|---|
|  ->after('column')          |  Помещает столбец «после» указанного столбца (только MySQL)   |
|  ->comment('my comment')    |  Добавляет комментарий в столбец                              |
|  ->default($value)          |  Указывает значение «по умолчанию» для столбца                |
|  ->first()                  |  Помещает столбец «первым» в таблице (только MySQL)           |
|  ->nullable()               |  Разрешает вставлять значения NULL в столбец                  |
|  ->storedAs($expression)    |  Создать генерируемый столбец типа stored (только MySQL)      |
|  ->unsigned()               |  Делает столбцы integer беззнаковыми UNSIGNED                 |
|  ->virtualAs($expression)   |  Создать генерируемый столбец типа virtual (только MySQL)     |
