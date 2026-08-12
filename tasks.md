Завдання: додайте index signature до типу dictionary, щоб translate компілювалась без помилок. Тип значення — string.

```ts
const dictionary = {
  hello: "привіт",
  bye: "бувай",
};

function translate(word: string): string {
  return dictionary[word]; // TS лається: Element implicitly has an 'any' type...
}
```

Завдання:

```ts
interface ClassGrades {}

const grades: ClassGrades = {
  Олена: 92,
  Максим: "н/б",
  Ірина: 78,
};
```

Задача 3 — Знайди помилку (аналіз чужого коду)

Завдання: поясніть словами (не лише виправте), чому TypeScript не дозволяє мати іменовану властивість totalItems: string, коли index signature каже, що всі значення мають бути number. Запропонуйте два різні варіанти виправлення.

```ts
interface Inventory {
  [itemName: string]: number;
  totalItems: string; // <-- тут помилка
}
```

GENERICS

Напишіть функцію, яка поверне масив в зворотній послідовності, враховуючи типи

````ts
console.log(toReverse<string>(["ff"]));
console.log(toReverse<number>([2, 2, 2, 2, 2, 2]));```
````

EXTENDS

напишіть функцію, яка приймає об'єкт, і ключ. Функція повинна повертати значення з ключа об'єкта

```ts
const student = {
  name: "ff",
  age: 20,
};

const studen2 = {
  name: "ff",
  age: 20,
  isActive: true,
};

const newq = getProperty(student, "name");
const new1 = getProperty(studen2, "isActive");

console.log(new1);
```
