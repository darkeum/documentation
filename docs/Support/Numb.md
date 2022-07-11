---
title: Работа с числами
---
Данный помощник реализован для работы с числами

## Основы использования

``` php
use \Boot\Support\Numb;
Numb::prepareNumeric('8,9');
#(float)8.9 
```

## Список методов

### commasReplace

Функция заменяет запятые на точки.

``` php
Numb::commasReplace('8,9');
#Результат
#(string)8.9
```

### dotsReplace

Функция заменяет точки на запятые.

``` php
Numb::dotsReplace('8.9');
#Результат
#(string)ld
```

### prepareNumeric

Подготовка числа.
Функция сначала меняет запятые на точки потом приводит к числу и если `$dotsReplace = true` то меняет обратно точки на запятые.

``` php 
Numb::prepareNumeric('8,9');
#Результат
#(float)8.9
```