```ts
const add = (a: number, b: number) => a + b;

console.log(add(1, 3));

let userName: string = "User";
let age: number = 10;
let isUser: boolean = false;
let isNul: null = null;
let isUndefined: undefined = undefined;
let street = "Street";
street = 10;

const numbers: number[] = [1, 2];
numbers.push("");

//=======================================

type TStudent = { name: string; age: number; isActive: boolean };

const student: TStudent = {
  name: "name",
  age: 18,
  isActive: true,
};

type TEvent = "click" | "submit";

enum MyENum {
  FIRST = "Enum1",
}

const myButton: MyENum = MyENum.FIRST;

let value: any = "";
value = 10;

let value1: unknown = "";

if (typeof value1 === "string") {
  value1.toLowerCase();
}

const doMath = (a: number, b: number): number => a + b;

function name(params: string): string {
  console.log(params);
  return params.toLowerCase();
}

type TFunc = (user: { name: string }) => string;

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
