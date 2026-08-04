# TypeScript Course

В інших мовах є типи

```ts
const add = (a: number, b: number) => a + b;

console.log(add(1, "fff")); який буде результат
```

Плюси

-статична типізація
-помилка на видні на етапі розробки
-міні документація

Мінуси

## -час розробки

1. Для чого нам TS

-npm install -g typescript aбо sudo npm install -g typescript
-tsc --init аналогія package.json
-tsc
-tsc -w
-базові типи:
а) примітиви: string,number,boolean,null,undefined
b) складні: array, object

-tsc -w

```ts
Array -  let names: Array<string> = ["Іван", "Марія"]
let names1: string[] = ["Іван", "Марія"]
Object - let student: { name: string; age: number; isActive: boolean } = {
name: "Дмитро",
age: 14,
isActive: true,
};

```

student[]

- union types

```ts
let id: string | number


Типи яких немає в JS
- any
- unknown
- Enum
- never
- tuple
- void
```

- any
- unknown
- Enum
- Intersection Type
- return type
- void
- function as type
- optional params in type ?
- index properties
