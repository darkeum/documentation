---
title: Задачи (Tasks)
---

- [Определение и принципы](#definition-principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Пример кода](#code-sample)

### Определение и принципы {#definition-principles}

Прочтите [**Определения и принципы -> Задачи (Tasks)**](/docs/Structure/Definitions/routes)

### Правила {#rules}

- Все задачи должны наследоваться <class>`Boot\Abstracts\Tasks\Task`</class>.

### Структура папок {#folder-structure}

```
 - usr
    - modules
        - {module-name}
            - Tasks
                - ConfirmUserEmailTask.php
                - GenerateEmailConfirmationUrlTask.php
                - SendConfirmationEmailTask.php
                - ValidateConfirmationCodeTask.php
                - SetUserEmailTask.php
                - ...
```

### Пример кода {#code-sample}

#### Задача (Task)

```php
class FindUserByIdTask extends Task
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function run($id)
    {
        try {
            $user = $this->user->find($id);
        } catch (Exception $e) {
            throw new UserNotFoundException();
        }

        return $user;
    }
}
```

#### Вызов задачи из действия (Action)

```php
class ValidateUserEmailAction extends Action
{
    public function run($userId, $code)
    {
        app(ValidateConfirmationCodeTask::class)->run($userId, $code);
        $user = app(FindUserByIdTask::class)->run($userId);
        app(ConfirmUserEmailTask::class)->run($user);
    }
}
```
