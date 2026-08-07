## Блок 2. Встановлення та налаштування (15 хв)

### Встановлення глобально (для експериментів)

```bash
npm install -g typescript
tsc --version
```

### Встановлення в проєкт (правильний спосіб для реальних проєктів)

```bash
mkdir ts-lesson && cd ts-lesson
npm init -y
npm install typescript --save-dev
npx tsc --init
```

Команда `npx tsc --init` створює файл `tsconfig.json` — це "паспорт" проєкту, за яким компілятор розуміє, як саме перетворювати код.

### Перший запуск

```ts
// index.ts
const message: string = "Мій перший TypeScript-файл!";
console.log(message);
```

```bash
npx tsc index.ts     # створить index.js
node index.js         # запустить результат
```

### Лайфхак для швидкої розробки (обов'язково покажіть дітям)

```bash
npm install -g ts-node
ts-node index.ts     # компілює і одразу запускає, без проміжного .js
```

> 💡 **Порада практика:** у реальних React/Next.js проєктах ви ніколи не запускаєте `tsc` руками — це робить Vite/Webpack/Next автоматично під час білду. Але розуміти, що відбувається "під капотом", — обов'язково.

---

## Блок 3. Базові типи та робота з ними (25 хв)

### Примітивні типи

```ts
let userName: string = "Оля";
let age: number = 12;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

userName = 10;
age = "d";

let street = "Street";
street = 10;
```

### Масиви

```ts
const numbers = [1, 2, "", null];
numbers.push("");

let scores: number[] = [90, 85, 100];
let names: Array<string> = ["Іван", "Марія"]; // альтернативний синтаксис
```

### Об'єкти

```ts
let student: { name: string; age: number; isActive: boolean } = {
  name: "Дмитро",
  age: 14,
  isActive: true,
};

type TStudent = { name: string; age: number; isActive: boolean };

const student: TStudent = {
  name: "name",
  age: 18,
  isActive: true,
};
student.age = "";

type TEvent = "click";

const myButton: TEvent = "clickd";

ВИкористання в ui бібліотеках

type TEvent = "click" | "submit";
```

### Union types (об'єднання типів) — дуже практична штука

```ts
let id: string | number;
id = 101; // ✅
id = "A101"; // ✅
id = true; // ❌ Type 'boolean' is not assignable

type TStudent = { name: string; age: number | null; isActive: boolean };

Не потрібно зловживати |
```

### Функції з типізованими параметрами та поверненням

```ts
function multiply(a: number, b: number): number {
  return a * b;
}

// Опціональний параметр — позначається знаком ?
function createUser(name: string, age?: number) {
  return { name, age: age ?? "невідомо" };
}
```

### Type aliases та Interface — два способи описати "форму" об'єкта

```ts
// Через type
type User = {
  name: string;
  age: number;
};

// Через interface (частіше використовується для об'єктів/класів)
interface Product {
  title: string;
  price: number;
  inStock: boolean;
}

const laptop: Product = { title: "MacBook", price: 45000, inStock: true };
```

## Блок 4. Типи, яких немає в JavaScript (20 хв)

### `enum` — набір іменованих констант

```ts
enum Role {
  Admin,
  Editor,
  Viewer,
}

let userRole: Role = Role.Admin;
console.log(userRole); // 0 — TS автоматично нумерує з 0

// Можна задати власні значення
enum Status {
  Active = "ACTIVE",
  Blocked = "BLOCKED",
}
```

### `tuple` — масив із фіксованою кількістю елементів і типів

```ts
let point: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ["Ольга", 15, true];

// point[0] завжди number, point[1] завжди number — порядок важливий!
```

### `any` — "вимикач" перевірки типів (використовувати обережно!)

```ts
let anything: any = 5;
anything = "тепер я рядок";
anything = true; // TS нічого не перевіряє — це небезпечно
```

### `unknown` — безпечніший брат `any`

```ts
let value: unknown = "привіт";

// value.toUpperCase(); // ❌ помилка — TS не дозволить без перевірки типу

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ тепер можна
}
```

### `never` — тип, що ніколи не повертає значення

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

### `void` — функція нічого не повертає

```ts
function logMessage(text: string): void {
  console.log(text);
}

logMessage(2);

type TFunc = (name: { name: string }) => string;

const func: TFunc = (user) => {
  return `Hello ${user.name}`;
};

const func = (user: { name: string }): string => {
  return `Hello ${user.name}`;
};

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type userFunc = (name: string, age: number, isActive: boolean) => User;

const user: userFunc = (name, age, isActive) => {
  return { name, age, isActive };
};

interface ICar {
  mark: string;
  color: string;
  start: () => void;
}

const Car: ICar = {
  mark: "BMW",
  color: "black",
  start: () => {
    console.log("START");
  },
};

enum Role {
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
}

type IUser = {
  name: string;
  email: string;
  role?: Role;
};

const user: IUser = {
  name: "df",
  email: "dd",
};

const superuser: IUser = {
  name: "df",
  email: "dd",
  role: Role.ADMIN,
};
```

### Порівняльна таблиця (показати дітям на екрані)

| Тип       | Є в JS?            | Навіщо потрібен                                           |
| --------- | ------------------ | --------------------------------------------------------- |
| `enum`    | ❌                 | Іменовані набори констант замість "магічних" рядків/чисел |
| `tuple`   | ❌                 | Масив фіксованої довжини й типів (напр. `useState`)       |
| `unknown` | ❌                 | Безпечна альтернатива `any`                               |
| `never`   | ❌                 | Функції, що завжди кидають помилку або не завершуються    |
| `void`    | ❌ (є `undefined`) | Явно показати, що функція нічого не повертає              |

### Реальний приклад використання tuple (для мотивації — це прямо з React)

```ts
// Саме так типізований useState у React!
function useState<T>(initial: T): [T, (value: T) => void] {
  // спрощена реалізація для прикладу
  let state = initial;
  const setState = (value: T) => {
    state = value;
  };
  return [state, setState];
}

const [count, setCount] = useState<number>(0);
```

---

## Блок 5. Налаштування компілятора — tsconfig.json (15 хв)

### Базовий файл після `tsc --init`

```jsonc
{
  "compilerOptions": {
    "target": "ES2020", // до якої версії JS компілювати
    "module": "commonjs", // система модулів
    "strict": true, // вмикає всі суворі перевірки одразу
    "outDir": "./dist", // куди складати скомпільовані .js файли
    "rootDir": "./src", // де лежать вихідні .ts файли
    "esModuleInterop": true, // сумісність import/export між CJS та ESM
    "skipLibCheck": true, // не перевіряти типи в node_modules (швидше)
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
}
```
