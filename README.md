# Ресурсы для Frontend Developer

## Библиотеки

-------

### [SugarJS](https://sugarjs.com/)

Библиотека для работы с Native объектами

```javascript
Sugar.Number.random(1, 100); // 59
Sugar.Date.create('next Friday'); // June 9, 2017 12:00 AM
Sugar.Array.unique([1,2,2,3]); // [1, 2, 3]
Sugar.Date.format(new Date(), '%Y-%m-%d'); // "2017-05-31"
[1,2,2,4].filter(2); // [2, 2]
```

------

### [Scrollanim](http://scrollanim.kissui.io/)

Vanilla JavaScript библиотека для анимации скролла. Предлагает множество вариантов настройки, отдельные HTML и JavaScript APIs, и более 50 эффектов анимации благодаря встроенному Animate.css

HTML Init
```html
<div data-kui-anim="fadeIn">
  Show this with a fadeIn animation.
</div>
```

JavaScript Init
```javascript
kissuiScrollAnim.add(element, {
  'in': 'fadeIn',
  'out': 'fadeOut'
});
```

------

### [baguetteBox.js](https://feimosi.github.io/baguetteBox.js/)

Простой LightBox на чистом JavaScript

```javascript
baguetteBox.run('.baguetteBoxThree', {
  animation: 'fadeIn',
  noScrollbars: true
});
```

------

### [BigPicture](https://henrygd.me/bigpicture/)

Легкий lightbox для изображений и видео

------

## UI & Framework

------

### [Propeller](https://github.com/digicorp/propeller/)

Responsive framework, основанный на стандартах Google Material Design и Bootstrap

------

# Сниппеты

## JavaScript

* Переворот числа (__reverseInt__)
* Счастливый билет (__isHappyNumber__)
* Переворот строки (__reverseString__)
* Палиндром (__isPalindrome__)
* Степень тройки (__isPowerOfThree__)

------
### reverseInt(number)
Переворачивает цифры в переданном числе и возвращает новое число.

**Пример:**
```javascript
reverseInt(13); // 31
reverseInt(-123); // -321
```

------
### isHappyNumber(number)
Проверяет, является ли номер счастливым. Возвращает true, если билет счастливый, или false, если нет.

**Пример:**
```javascript
isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
```

-----
### reverseString(string)
Переворачивает строку задом наперед, используя рекурсию.

**Пример:**
```javascript
reverseString('str'); // rts
reverseString('hello'); // olleh
```

----
### isPalindrome(string)
Определяет, является ли строка палиндромом.

Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.

**Пример:**
```javascript
isPalindrome('radar'); // true
isPalindrome('a'); // true
isPalindrome('abs'); // false
```

----
### isPowerOfThree(number)
Определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).

**Пример:**
```javascript
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
```

----
###


**Пример:**
```javascript

```

----
###


**Пример:**
```javascript

```

----
###


**Пример:**
```javascript

```

----
###


**Пример:**
```javascript

```
