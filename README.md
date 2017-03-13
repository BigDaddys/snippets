# Сниппеты

## JavaScript

* Переворот числа (__reverseInt__)
* Счастливый билет (__isHappyNumber__)
* Переворот строки (__reverseString__)

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