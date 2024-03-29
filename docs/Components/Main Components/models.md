---
title: Модели (Models)
---

- [Определение и принципы](#definition-principles)
- [Правила](#rules)
- [Структура папок](#folder-structure)
- [Пример кода](#code-sample)
- [Атрибуты](#attributes)

### Определение и принципы {#definition-principles} 

Прочтите [**Определения и принципы <ar/> Модели (Models)**](/docs/Structure/Definitions/models)

### Правила {#rules}

- Все модели <t>**ДОЛЖНЫ**</t> расширяться из <c>`Boot\Abstracts\Models\Model`</c>.
 
### Структура папок {#folder-structure}

```
 - usr
    - modules
        - {module-name}
            - Models
                - News.php
                - User.php
                - ...
```

### Пример кода {#code-sample}


```php
class Demo extends Model
{
    protected $table = 'demos';

    protected $fillable = [
        'title',
        'uid',
        'reestr_id'
    ];

    protected $hidden = [
        'token',
    ];

    protected $casts = [
        'total_credits'     => 'float',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function reestr()
    {
        return $this->belongsTo(\Reestr\Models\Reestr::class);
    }
}
```

Обратите внимание, что демонстрационная модель связана с пользовательской моделью, которая находится в другом модуле.

### Атрибуты {#attributes}

Атрибут <v>`$casts`</v> можно использовать для синтаксического анализа любого атрибута модели до определенного типа. 

В приведенном ниже примере кода мы можем привести <var>`total_credits`</var> к <var>`float`</var>.

Вы можете поместить любые даты в <v>`$dates`</v> для автоматического анализа.
