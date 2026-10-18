// interface A {
//   b: number;
// }
// interface A {
//   a: string;
// }

// class C implements A {}

//! Intersection

// type Admin = {
//   name: string;
//   root: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type combinedType = Admin & Employee;

// const el: combinedType = {
//   name: "",
//   root: ["admin"],
//   startDate: new Date(),
// };

// interface Employer {
//   name: string;
//   experience: number;
// }

// interface combinedTypeI extends Employer, combinedType {}

//! Type guard

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//   return a + b;
// }

// function combine1(a: ComplexType, b: ComplexType) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }

//   return a + b;
// }

//! in

// type Admin = {
//   name: string;
//   root: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type UnknownObject = Admin | Employee;

// function showFields(el: UnknownObject) {
//   if ("root" in el) {
//     console.log(el.root);
//   }

//   if ("startDate" in el) {
//     console.log(el.startDate);
//   }

//   //   console.log(el.root);
// }

//! instanceof

// class Car {
//   drive() {
//     //   console.log("DRIVE");
//     return "Drive";
//   }
// }

// class Truck {
//   loadCargo(amount: number) {
//     console.log(amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function checkVehicle(vehicle: Vehicle) {
//   if (vehicle instanceof Car) {
//     console.log(vehicle.drive());
//   }

//   if (vehicle instanceof Truck) {
//     console.log(vehicle.loadCargo(20));
//   }
// }

// checkVehicle(v1);

//! Type Casting

// const input = <HTMLInputElement>document.getElementById("inputEmail");
// console.log(input.value);

// const input1 = document.getElementById("inputEmail") as HTMLInputElement;

// type A = {};

// const num: number = 10;

const input = document.getElementById("inputEmail");

if (input) {
  (input as HTMLInputElement).value = "test@gmail.com";
}

//! index properties

// interface Person {
//   name: string;
//   [x: string]: string;
// }

//! optional chaining property?.value

//! Generics

// let arr: any[] = [];
// let arr1: Array<string | number> = [];
// let arr2: string[] | number[] = [];

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const merged = merge({ name: "dd" }, { age: "" }) as {
//   name: string;
//   age: number;
// };
// merged.age;

// function mergeUpdated<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedupdate = mergeUpdated({ name: "dd" }, { age: 20 });
// mergedupdate.age;

//! EXTENDS LIKE IF

interface ILength {
  length: number;
}

const getLength = <T extends ILength>(str: T) => {
  return str.length;
};

// console.log(getLength(["a", "d"]));

//! EXTENDS LIKE IF

// const getPropertyBad = (obj: object, key: string) => obj[key];

// const getProperty = <T extends object, U extends keyof T>(
//   obj: T,
//   key: U,
// ): T[U] => obj[key];

// const student = {
//   name: "ff",
//   age: 20,
// };

// const studen2 = {
//   name: "ff",
//   age: 20,
//   isActive: true,
// };

// const newq = getProperty(student, "name");
// const new1 = getProperty(studen2, "isActive");
//** Utility Types  =========================================================

//!  Partial<T>;

// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
//   return {
//     ...todo,
//     ...fieldsToUpdate,
//   };
// };

// const todo1: Todo = {
//   title: "Learn",
//   description: "ssss",
//   completed: false,
// };

// updateTodo(todo1, { completed: true });

//! ReadOnly<T>

// interface User {
//   name: string;
//   age: number;
// }

// const user: Readonly<User> = { name: "", age: 20 };
// user.admin = "true";

// const num: ReadonlyArray<number> = [1, 2, 3];

// num.push(2);

//! Pick<T>

// interface Person {
//   name: string;
//   age: number;
//   street: string;
// }

// type PersonSummary = Pick<Person, "age" | "name">;

// const john: PersonSummary = { age: 20, name: "" };

//! Omit<T>

// interface Person {
//   name: string;
//   age: number;
//   street: string;
// }

// type PersonSummary = Omit<Person, "age" | "name">;

// const john: PersonSummary = { street: "" };

//! Record<K, T>

type Index = { [key: string]: number };

type CityCode = Record<string, number>;

const db: Index = {
  Kyiv: 122020,
  Kharkiv: 12222,
  Mariupol: 22020,
};

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
