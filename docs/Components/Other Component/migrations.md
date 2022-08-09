---
title: Миграции (Migrations)
---

- [Определение](#definition)
- [Принципы](#principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Примеры кода](#code-samples)

### Определение {#definition}

Миграции — что-то вроде системы контроля версий для вашей базы данных. Они позволяют вашей команде изменять структуру БД, в то же время оставаясь в курсе изменений других участников. Они очень полезны для создания и документирования таблиц базы данных.

### Принципы {#principles}

- Миграции <true>СЛЕДУЕТ</true> создавать внутри папок модулей
- Миграции будут автоматически загружаться фреймворком.

### Правила {#rules}

- Нет необходимости публиковать миграции модулей в корневую Папку миграций. Просто запустите команду `darksander migrate`, и Darklyy прочитает миграцию из модулей.

### Структура папок {#folder-structure}

```
   - usr
      - modules
          - {module-name}
               - Data
                    - Migrations
                        - 2022_01_01_000001_create_new_table.php
                        - ...
```

### Примеры кода {#code-samples}

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

