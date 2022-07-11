---
title: Действия (Actions)
---
- [Определение и принципы](#definition-principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Пример кода](#code-sample)

### Определение и принципы {#definition-principles}

Прочтите [**Структура модулей  (#Actions)**](/docs/Structure/Definitions/actions)

### Правила {#rules}

- Все действия должны наследоваться `Boot\Abstracts\Actions\Action`.

### Структура папок {#folder-structure}

```
 - usr
    - modules
        - {module-name}
            - Actions
                - CreateItemAction.php
                - DeleteItemAction.php
                - ...
```

### Пример кода {#code-sample}

#### Действие (Action)

```php
class CreateUserAction extends Action
{
    public function run(string $email, string $password, string $name, bool $isClient = false): User
    {
        $user = app(CreateUserTask::class)->run(
            $isClient,
            $email,
            $password,
            $name
        );
        return $user;
    }
}
```

#### Вызов нескольких задач

```php
class SampleAction extends Action
{
    public function run($a, $b, $c)
    {
        $foo = app(SampleTask1::class)->run($a, $b);
        $bar = app(SampleTask2::class)->run($foo, $c);
    }
}
```

#### Использование в контроллере

```php
    public function deleteItem(DeleteItemRequest $request)
    {
        $item = app(DeleteItemAction::class)->run($request);
        return $this->deleted($item);
    }
```
:::tip
Одно и то же действие МОЖЕТ быть вызвано несколькими контроллерами ( Web, Api, Cli ).
:::
