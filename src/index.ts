// let num: number = 2;
// let str: string = "fff";
// let bool: boolean = true;
// let isNull: null = null;
// let isUdef: undefined = undefined;

// let names: Array<string> = ["jjf"];
// let names1: number[] = [2];

//! type
//!!! interface

// type TUser = {
//   id: number;
//   name: string;
//   age: number;
// };

// interface IUser {
//   id: number  ;
//   name: string;
//   age: number;
// }

// interface IAdmin extends IUser {
//     isSuperAdmin: boolean
// }

// let user: IAdmin = {
//   id: 2,
//   name: "Bob",
//   age: 20,
// };

// let names1: number[] = [2];

// let id: string | number;

// let anyone: any;
// let unknownType: unknown = false;

// if (typeof unknownType === "string") {
//   unknownType.toLowerCase();
// }

// enum Roles {
//   Admin = "ADMIN",
//   User = "USER",
//   Superadmin = "SEPERADMIN",
// }

// type constants = "ADMIN" | "USER" | "SEPERADMIN";

// let user: constants = "ADMIN";

// let some: never; //! using in func that return error

// function name():void {
//  console.log("FF")
// }

// type TMath = (a: number, b: number) => number;
// type IFoo = (a: string,) => string;
// interface IFoo {
//   (user: string): string;
// }

// const doMath: TMath = (a, b) => a + b;

// function foo1(userName: IFoo) {
//   return `Hello ${userName}`;
// }

interface ICar {
  model: string;
  year: number;
  inStock: boolean;
  start: () => void;
  electic?: boolean;
}

const Car: ICar = {
  model: "",
  year: 2016,
  inStock: true,
  start: () => {
    console.log("START");
  },
};

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// function getFullName(firstName: string, lastName: string): string {
//   return firstName + " " + lastName;
// }

// // console.log(1 + "2");
// let prices: number[] = [120, 350, 89, 500, 15];

// const getTotal = (items: number[]) =>
//   items.reduce((sum, item) => sum + item, 0);

// console.log(getTotal([]));

type TUser = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  isAdmin?: "";
};

let user: TUser = {
  name: "Олена",
  age: 28,
  email: "olena@example.com",
  isActive: true,
};
