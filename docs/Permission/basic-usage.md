---
title: Основы использования
---
В **Darklyy** по умолчанию интегрирована поддержка ролей и разрешений пользователей. Благодаря этому вы можете гибко и легко настраивать политики безопасности в своем приложении.

### Настройка модели

Для начала использование вам необходимо добавить трейт <c>`Boot\System\Permission\Traits\HasRoles`</c> в вашу модель пользователей <f>`User`</f>:

```php
use Illuminate\Foundation\Auth\User as Authenticatable;
use Boot\System\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;

    // ...
}
```

### Назначение ролей и разрешений

Разрешение может быть назначено роли одним из следующих способов:

```php
$role->givePermissionTo($permission);
$permission->assignRole($role);
```

Несколько разрешений можно синхронизировать с ролью одним из следующих способов:

```php
$role->syncPermissions($permissions);
$permission->syncRoles($roles);
```

Разрешение можно удалить из роли одним из следующих способов:

```php
$role->revokePermissionTo($permission);
$permission->removeRole($role);

