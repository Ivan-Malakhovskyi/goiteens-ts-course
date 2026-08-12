## Intersection Types

можна об'єднувати типи та інтерфейси за допомогою extends, але є коротший запис

```ts

	type Admin = {
	 name: string;
	 privileges: string[];
	};

	type Employee = {
	 name: string;
	 startDate: Date;
	};

    	type ElevatedEmployee = Admin & Employee;

	const e1: ElevatedEmployee = {
	 name: 'Anton',
	 privileges: ['drop-all'],
	 startDate: new Date()
	};


    interface Admin  {
	 name: string;
	 privileges: string[];
	};

	interface Employee  {
	 name: string;
	 startDate: Date;
	};

	type ElevatedEmployee = Admin & Employee;

Якщо ми хочемо саме зберегти в інтерфейс, то скорочення не працює, потрібно так.
    interface IElevatedEmployee extends Employee, Admin {}
```

### TYPE GUARDS

```ts
type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  return a + b;
}

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

### in & instanceOf

Цей оператор in дозволяє нам перевірити, чи є поле в об'єкті.

```ts
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownObject = Employee | Admin;

function showFields(e1: UnknownObject) {
  console.log(e1.name);
  if ("privileges" in e1) {
    console.log(e1.privileges);
  }
  if ("startDate" in e1) {
    console.log(e1.startDate);
  }
}
```

    instanceof дозволяє нам перевірити, до якого класу належить об'єкт.

```ts
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```

```ts
const input = document.getElementById("inputEmail");
input.value;

const input = document.getElementById("inputEmail")!;

const input = <HTMLInputElement>document.getElementById("inputEmail");

input.value = "test@test.ts";


const input = document.getElementById("inputEmail") as <HTMLInputElement>;

const input = document.getElementById('inputEmail');

	if (input) {
	 (input as HTMLInputElement).value = 'test@test.ts';
	}
```

Просто спочатку ставимо <> і вказуємо в них тип. Але є проблема, що реакт використовує JSX і в деяких місцях він може просто не зрозуміти, що ви хочете, сприйме як тег.

І є другий, універсальніший через as.

## INDEX PROPERTIES

Бувають ситуації, коли ми знаємо якісь поля явно, але деякі поля нам невідомі, але ми точно знаємо, якого типу вони повинні бути.

```ts
interface Person {
  name: string;
  [x: string]: string;
}
```

## Optional Chaining

### GENERICS

```ts
let arr: any[] = [];
let arr: Array<string | number> = [];
```

```ts
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;

const merged = merge({ name: "Alisa" }, { age: 28 }) as {
  name: string;
  age: number;
};

function merge<T extends object, U extends object keyof T>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Alisa" }, { age: 28 });

merged.name;
```

### EXTENDS LIKE IF

extends як додаткова перевірка

```ts
interface ILength {
  length: number;
}

const getLength = <T extends ILength>(str: T) => {
  return str.length;
};

console.log(getLength<Array<string>>(["f", ";"]));

interface IUser {
  id: number;
}

console.log(getLength<Array<IUser>>([{ id: 20 }]));
```

```ts

ЧОМУ ТАК, а не просто

const getPropertyBad = (obj: object, key: string) => obj[key];

1. Ключі можуть бути не тільки String

const getProperty = <T extends object, U extends keyof T>(obj: T, key: U): T[K] => obj[key];

А що буде повертати функція

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

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
```

### Partial<T>

```ts
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
  return { ...todo, ...fieldsToUpdate };
};

const todo1: Todo = {
  title: "Learn",
  description: "ssss",
  completed: false,
};

updateTodo(todo1, { completed: true });
```

### Readonly

```ts
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "",
  age: 2,
};
user.age = 20;

const num: ReadonlyArray<number> = [1, 2];

num[0] = 2;

num.push(1);

const num: Readonly<Array<number>> = [1, 2];

num[0] = 2;

num.push(1);
```

### Pick<T>

```ts
interface Person {
  name: string;
  age: number;
  street: string;
}

type PersonSummary = Pick<Person, "age" | "name">;

const john: PersonSummary = {
  age: 20,
  name: "22",
};
```

### Omit<T>

```ts
interface Person {
  name: string;
  age: number;
  street: string;
}

type PersonSummary = Omit<Person, "age" | "name">;

const john: PersonSummary = {
  street: "2",
};
```

### Record<K, T>

```ts
type Index = {
  [key: string]: number;
};

type CityCode = Record<string, number>;

const db: CityCode = {
  Kyiv: 122020,
  Kharkiv: 12222,
  Mariupol: 22020,
};

db.vinnytsia = 24000;
```

```ts



PRACTICAL CASE
enum Tabs {
  Service = "Service",
  Settings = "Settings",
  Dashboard = "Dashboard",
}

type TFunc = () => void;

type TModalRecord = Record<Tabs, TFunc>;

const Dashboard = () => {};
const Service = () => {};
const Settings = () => {};

const modalRecords: TModalRecord = {
  [Tabs.Dashboard]: Dashboard,
  [Tabs.Service]: Service,
  [Tabs.Settings]: Settings,
};

const APPComp = (tab: Tabs) => modalRecords[tab];


```

### classes

```ts
class StoreClass<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const store = new StoreClass<string>();
store.addItem("aaa");

store.addItem(2);
```
