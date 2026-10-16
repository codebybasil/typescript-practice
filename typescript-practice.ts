/*

*/

// Ye line file ko "module" bana deti hai taake global naam clash na hon
export {};


/* ===================================================================
   LEVEL 1: BASICS
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 1: TYPE ANNOTATIONS
// English : Giving a variable an explicit type using `: type`.
// Roman Urdu: Variable ke naam ke baad `:` laga kar batana ke ye kis type ka hai.
// ---------------------------------------------------------------
{
  // Example
  let name: string = "Ali";
  let age: number = 20;
  let isStudent: boolean = true;
  console.log(name, age, isStudent);

  // TASK: 5 variables (name, age, city, isMarried, salary) sahi type ke saath
  let pName: string = "Ahmed";
  let pAge: number = 25;
  let pCity: string = "Karachi";
  let pIsMarried: boolean = false;
  let pSalary: number = 50000;
  console.log(pName, pAge, pCity, pIsMarried, pSalary);
}


// ---------------------------------------------------------------
// TOPIC 2: TYPE INFERENCE
// English : TypeScript guesses the type automatically from the assigned value.
// Roman Urdu: Type likhe baghair TS khud value dekh kar type samajh leta hai.
// ---------------------------------------------------------------
{
  // Example
  let city = "Karachi"; // string infer hua
  // city = 10; // ERROR: Type 'number' is not assignable to type 'string'

  // TASK: 3 variables bina type ke, phir galat type assign karke error dekho
  let item = "Laptop";     // string
  let qty = 5;             // number
  let inStock = true;      // boolean
  // item = 100;           // ERROR (uncomment karke dekho)
  // qty = "five";         // ERROR
  // inStock = "yes";      // ERROR
  console.log(city, item, qty, inStock);
}


// ---------------------------------------------------------------
// TOPIC 3: any
// English : Disables type checking; the variable can hold anything.
// Roman Urdu: Is type mein koi bhi value aa sakti hai, TS check nahi karta (kam use karo).
// ---------------------------------------------------------------
{
  // Example
  let data: any = 5;
  data = "hello";

  // TASK: number, string, boolean teeno store karo
  let anything: any = 10;
  console.log(anything);
  anything = "text";
  console.log(anything);
  anything = true;
  console.log(anything);
  // any RISKY kyun hai?
  // Kyunke ye type checking band kar deta hai. Neeche wali line compile ho jayegi
  // magar run karte waqt crash hogi (boolean par toUpperCase nahi hota):
  // anything.toUpperCase();
}


// ---------------------------------------------------------------
// TOPIC 4: unknown
// English : A safer version of `any`; you must check the type before using it.
// Roman Urdu: `any` jaisa hi hai magar use karne se pehle type check karna zaroori hai.
// ---------------------------------------------------------------
{
  // Example
  let value: unknown = "hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  // TASK: typeof se check karke number ya string ke hisaab se alag output
  function describeUnknown(input: unknown): void {
    if (typeof input === "number") {
      console.log("Number hai, double:", input * 2);
    } else if (typeof input === "string") {
      console.log("String hai, uppercase:", input.toUpperCase());
    } else {
      console.log("Koi aur type hai");
    }
  }
  describeUnknown(21);
  describeUnknown("ali");
  describeUnknown(true);
}


// ---------------------------------------------------------------
// TOPIC 5: void
// English : The return type of a function that returns nothing.
// Roman Urdu: Jo function kuch return nahi karta uska return type `void` hota hai.
// ---------------------------------------------------------------
{
  // Example
  function greet(name: string): void {
    console.log("Hello " + name);
  }
  greet("Ali");

  // TASK: 2 void functions
  function printMessage(): void {
    console.log("Ye ek message hai");
  }
  function showSum(a: number, b: number): void {
    console.log("Sum =", a + b);
  }
  printMessage();
  showSum(10, 20);
}


// ---------------------------------------------------------------
// TOPIC 6: never
// English : A type for values that never occur (functions that always throw or loop forever).
// Roman Urdu: Aisa function jo kabhi normally khatam hi nahi hota (error throw kare ya infinite loop).
// ---------------------------------------------------------------
{
  // Example
  function throwError(msg: string): never {
    throw new Error(msg);
  }

  // TASK: custom error throw karne wala never function
  function customError(code: number): never {
    throw new Error("Custom Error Code: " + code);
  }

  // Call karne par program ruk jayega, isliye try/catch mein rakha hai
  try {
    customError(404);
  } catch (e) {
    console.log((e as Error).message);
  }
  void throwError; // sirf unused warning se bachne ke liye
}


// ---------------------------------------------------------------
// TOPIC 7: null AUR undefined
// English : `null` means intentionally empty; `undefined` means no value assigned yet.
// Roman Urdu: `null` jaan boojh kar khali value, `undefined` matlab abhi value di hi nahi gayi.
// ---------------------------------------------------------------
{
  // Example
  let a: null = null;
  let b: undefined = undefined;
  let c: string | null = null;
  console.log(a, b, c);

  // TASK: string | null variable, pehle null phir "Ali"
  let userName: string | null = null;
  console.log(userName);
  userName = "Ali";
  console.log(userName);
}


/* ===================================================================
   LEVEL 2: DATA STRUCTURES
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 8: ARRAYS (TYPED)
// English : A list where all items must be of the specified type.
// Roman Urdu: Aisi list jis mein sirf wahi type ki values aa sakti hain jo tum batao.
// ---------------------------------------------------------------
{
  // Example
  let nums: number[] = [1, 2, 3];
  let names: Array<string> = ["Ali", "Sara"];

  // TASK: number array aur string array, dono mein push
  nums.push(4);
  names.push("Ahmed");
  // nums.push("five"); // ERROR
  console.log(nums, names);
}


// ---------------------------------------------------------------
// TOPIC 9: TUPLES
// English : A fixed-length array where each position has its own specific type.
// Roman Urdu: Fixed size ki array jis mein har position ka type pehle se tay hota hai.
// ---------------------------------------------------------------
{
  // Example
  let user: [string, number] = ["Ali", 20];
  console.log(user);

  // TASK: [string, number, boolean] tuple (name, age, isStudent)
  let student: [string, number, boolean] = ["Sara", 18, true];
  console.log(student[0]);
  console.log(student[1]);
  console.log(student[2]);
}


// ---------------------------------------------------------------
// TOPIC 10: ENUMS
// English : A set of named constants grouped together.
// Roman Urdu: Related naam wali constant values ka group, jaise directions ya days.
// ---------------------------------------------------------------

// Example
enum Direction { Up, Down, Left, Right } // 0,1,2,3
enum Status { Pending = "PENDING", Done = "DONE" }

// TASK: Days enum aur OrderStatus string enum
enum Days { Mon, Tue, Wed, Thu, Fri, Sat, Sun }
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

{
  let move: Direction = Direction.Up;
  console.log(move, Direction[1], Status.Done);
  console.log(Days.Wed, Days[4]);
  console.log(OrderStatus.Shipped);
}


// ---------------------------------------------------------------
// TOPIC 11: LITERAL TYPES
// English : A type that allows only specific exact values.
// Roman Urdu: Variable mein sirf wohi exact values aa sakti hain jo tum ne likhi hon.
// ---------------------------------------------------------------
{
  // Example
  let role: "admin" | "user" = "admin";
  console.log(role);

  // TASK: size variable jo sirf small | medium | large le
  let size: "small" | "medium" | "large" = "medium";
  // size = "extra"; // ERROR
  console.log(size);
}


// ---------------------------------------------------------------
// TOPIC 12: UNION TYPES
// English : A variable can be one of several types, combined using `|`.
// Roman Urdu: Ek variable kai types mein se koi ek ho sakta hai.
// ---------------------------------------------------------------
{
  // Example
  let id: string | number = 101;
  id = "A101";
  console.log(id);

  // TASK: string | number lene wala function
  function showId(value: string | number): void {
    if (typeof value === "string") {
      console.log("String ID:", value.toUpperCase());
    } else {
      console.log("Number ID:", value.toFixed(1));
    }
  }
  showId("abc");
  showId(55);
}


// ---------------------------------------------------------------
// TOPIC 13: INTERSECTION TYPES
// English : Combines multiple types into one using `&`.
// Roman Urdu: Do ya zyada types ko mila kar ek type bana dena, sab ki properties zaroori hongi.
// ---------------------------------------------------------------

// Example + TASK
type Person = { name: string };
type Worker = { salary: number };
type Employee = Person & Worker;

{
  const emp: Employee = { name: "Ali", salary: 60000 };
  console.log(emp);
}


/* ===================================================================
   LEVEL 3: TYPES KO DEFINE KARNA
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 14: TYPE ALIAS
// English : Giving a custom name to any type using `type`.
// Roman Urdu: Kisi bhi type ko apna naam de dena taake bar bar likhna na pare.
// ---------------------------------------------------------------

// Example
type ID = string | number;

// TASK: User type (name, age, email) aur 2 objects
type AliasUser = { name: string; age: number; email: string };

{
  const id1: ID = 1;
  const u1: AliasUser = { name: "Ali", age: 20, email: "ali@mail.com" };
  const u2: AliasUser = { name: "Sara", age: 22, email: "sara@mail.com" };
  console.log(id1, u1, u2);
}


// ---------------------------------------------------------------
// TOPIC 15: INTERFACE
// English : A contract that describes the shape of an object.
// Roman Urdu: Object ka naqsha ke us mein kaun kaun si properties hongi aur kis type ki.
// ---------------------------------------------------------------

// Example
interface Student {
  name: string;
  age: number;
}

// TASK: Product interface aur 3 products ki array
interface Product {
  id: number;
  title: string;
  price: number;
}

{
  const s: Student = { name: "Ali", age: 20 };
  const products: Product[] = [
    { id: 1, title: "Phone", price: 50000 },
    { id: 2, title: "Laptop", price: 120000 },
    { id: 3, title: "Mouse", price: 1500 },
  ];
  console.log(s, products);
}


// ---------------------------------------------------------------
// TOPIC 16: OPTIONAL PROPERTIES (?)
// English : A property that may or may not exist.
// Roman Urdu: Aisi property jo dena zaroori nahi, `?` laga do.
// ---------------------------------------------------------------

// Example + TASK
interface OptUser {
  name: string;
  phone?: string;
}

{
  const withPhone: OptUser = { name: "Ali", phone: "0300-1234567" };
  const withoutPhone: OptUser = { name: "Sara" };
  console.log(withPhone, withoutPhone);
}


// ---------------------------------------------------------------
// TOPIC 17: READONLY
// English : A property that can be set once but never changed.
// Roman Urdu: Ek baar value de di to dobara badal nahi sakte.
// ---------------------------------------------------------------

// Example + TASK
interface Config {
  readonly id: number;
  name: string;
}

{
  const cfg: Config = { id: 1, name: "App" };
  cfg.name = "New App"; // theek hai
  // cfg.id = 2;        // ERROR: Cannot assign to 'id' because it is a read-only property
  console.log(cfg);
}


// ---------------------------------------------------------------
// TOPIC 18: INTERFACE vs TYPE
// English : Both describe shapes; interfaces can be extended and merged,
//           types are more flexible (unions, tuples, etc.).
// Roman Urdu: Dono shape batate hain, interface `extends` hota hai aur type union wagera ke liye behtar hai.
// ---------------------------------------------------------------

// Example
interface Animal { name: string }
interface Dog extends Animal { breed: string }

// TASK: Vehicle interface aur Car interface jo extend kare
interface Vehicle {
  brand: string;
  wheels: number;
}
interface Car extends Vehicle {
  doors: number;
}

{
  const d: Dog = { name: "Tommy", breed: "Labrador" };
  const car: Car = { brand: "Toyota", wheels: 4, doors: 4 };
  console.log(d, car);
}


/* ===================================================================
   LEVEL 4: FUNCTIONS
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 19: TYPED PARAMETERS & RETURN TYPE
// English : Specifying types for function inputs and output.
// Roman Urdu: Function ke inputs aur return value ka type batana.
// ---------------------------------------------------------------
{
  // Example
  function add(a: number, b: number): number {
    return a + b;
  }

  // TASK: multiply, isEven (boolean), fullName (string)
  function multiply(a: number, b: number): number {
    return a * b;
  }
  function isEven(n: number): boolean {
    return n % 2 === 0;
  }
  function fullName(first: string, last: string): string {
    return first + " " + last;
  }
  console.log(add(2, 3), multiply(4, 5), isEven(10), fullName("Ali", "Khan"));
}


// ---------------------------------------------------------------
// TOPIC 20: OPTIONAL, DEFAULT & REST PARAMETERS
// English : `?` makes a parameter optional, `=` gives a default, `...` collects many arguments.
// Roman Urdu: Optional parameter `?` se, default value `=` se, aur bohot saare arguments `...` se lete hain.
// ---------------------------------------------------------------
{
  // Example
  function greetUser(name: string, title?: string): string {
    return title ? `${title} ${name}` : name;
  }
  function power(n: number, p: number = 2): number {
    return n ** p;
  }

  // TASK: sum(...nums) jo kitne bhi numbers ka total nikale
  function sum(...nums: number[]): number {
    return nums.reduce((total, n) => total + n, 0);
  }

  console.log(greetUser("Ali"), greetUser("Ali", "Mr."));
  console.log(power(3), power(3, 3));
  console.log(sum(1, 2, 3, 4, 5));
}


// ---------------------------------------------------------------
// TOPIC 21: FUNCTION TYPES
// English : Describing the shape of a function (its parameters and return type).
// Roman Urdu: Function ki shape batana ke wo kya le ga aur kya return karega.
// ---------------------------------------------------------------

// Example + TASK
type MathOp = (a: number, b: number) => number;

{
  const addOp: MathOp = (a, b) => a + b;
  const subtractOp: MathOp = (a, b) => a - b;
  const multiplyOp: MathOp = (a, b) => a * b;
  console.log(addOp(10, 5), subtractOp(10, 5), multiplyOp(10, 5));
}


/* ===================================================================
   LEVEL 5: ADVANCED BASICS
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 22: TYPE ASSERTION (as)
// English : Telling TS "trust me, I know the type of this value."
// Roman Urdu: TS ko batana ke is value ka type mujhe pata hai, tum mano.
// ---------------------------------------------------------------
{
  // Example
  let val: unknown = "hello";
  let len = (val as string).length;
  console.log(len);

  // TASK: unknown value ko `as number` karke use karo
  let numVal: unknown = 42;
  let doubled = (numVal as number) * 2;
  console.log(doubled);
}


// ---------------------------------------------------------------
// TOPIC 23: TYPE NARROWING / TYPE GUARDS
// English : Checking a type at runtime so TS knows the exact type inside a block.
// Roman Urdu: `typeof`, `instanceof`, `in` se check karke TS ko exact type samjhana.
// ---------------------------------------------------------------
{
  // Example
  function print(x: string | number): void {
    if (typeof x === "string") console.log(x.toUpperCase());
    else console.log(x.toFixed(2));
  }
  print("hi");
  print(3.14159);

  // TASK: string | number | boolean ke liye alag output
  function checkType(x: string | number | boolean): void {
    if (typeof x === "string") {
      console.log("String:", x.length, "characters");
    } else if (typeof x === "number") {
      console.log("Number:", x * 2);
    } else {
      console.log("Boolean:", x ? "YES" : "NO");
    }
  }
  checkType("hello");
  checkType(10);
  checkType(false);

  // `in` aur `instanceof` ka example
  type Cat = { meow: () => void };
  type Bird = { fly: () => void };
  function move(pet: Cat | Bird): void {
    if ("meow" in pet) pet.meow();
    else pet.fly();
  }
  move({ meow: () => console.log("Meow") });

  const d = new Date();
  if (d instanceof Date) console.log("Ye Date object hai");
}


// ---------------------------------------------------------------
// TOPIC 24: GENERICS
// English : Reusable code that works with any type while staying type-safe, written with `<T>`.
// Roman Urdu: Ek hi function ya class kai types ke liye use karna, aur type safety bhi rahe.
// ---------------------------------------------------------------
{
  // Example
  function identity<T>(value: T): T {
    return value;
  }
  console.log(identity<string>("hi"), identity<number>(5));

  // TASK: getFirst<T>(arr: T[]): T
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }
  console.log(getFirst<number>([10, 20, 30]));
  console.log(getFirst<string>(["a", "b", "c"]));

  // Bonus: Generic interface aur class
  interface Box<T> { content: T }
  const numBox: Box<number> = { content: 100 };
  class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
  }
  const stack = new Stack<string>();
  stack.push("x");
  console.log(numBox, stack.pop());
}


// ---------------------------------------------------------------
// TOPIC 25: keyof AUR typeof
// English : `keyof` gets an object's keys as a type; `typeof` gets the type of a variable.
// Roman Urdu: `keyof` object ki keys ka type deta hai, `typeof` variable ka type nikalta hai.
// ---------------------------------------------------------------
{
  // Example
  type KUser = { name: string; age: number };
  type Keys = keyof KUser; // "name" | "age"
  const k: Keys = "name";

  // TASK: key le kar value return karne wala function
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const person: KUser = { name: "Ali", age: 20 };
  console.log(k, getValue(person, "name"), getValue(person, "age"));

  // typeof ka use (type nikalna)
  const settings = { theme: "dark", fontSize: 14 };
  type Settings = typeof settings; // { theme: string; fontSize: number }
  const s2: Settings = { theme: "light", fontSize: 12 };
  console.log(s2);
}


/* ===================================================================
   LEVEL 6: OOP IN TYPESCRIPT
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 26: CLASSES AUR ACCESS MODIFIERS
// English : `public`, `private`, `protected` control who can access class members.
// Roman Urdu: `public` sab ke liye, `private` sirf class ke andar, `protected` class aur child class ke liye.
// ---------------------------------------------------------------

// Example
class Account {
  public name: string;
  private balance: number;
  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
}

// TASK: BankAccount jis mein private balance, deposit() aur withdraw()
class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }
    this.balance -= amount;
  }
  getBalance(): number {
    return this.balance;
  }
}

{
  const acc = new Account("Ali", 1000);
  console.log(acc.name);
  // console.log(acc.balance); // ERROR: 'balance' is private

  const bank = new BankAccount("Sara", 5000);
  bank.deposit(2000);
  bank.withdraw(1000);
  console.log(bank.owner, bank.getBalance());
}


// ---------------------------------------------------------------
// TOPIC 27: PARAMETER PROPERTIES
// English : A shortcut to declare and assign class properties directly in the constructor.
// Roman Urdu: Constructor mein hi modifier laga do to alag se property likhni nahi parti.
// ---------------------------------------------------------------

// Example
class ShortUser {
  constructor(public name: string, private age: number) {}
  getAge(): number { return this.age; }
}

// TASK: BankAccount ko shortcut se dobara likho
class BankAccount2 {
  constructor(public owner: string, private balance: number) {}
  deposit(amount: number): void { this.balance += amount; }
  withdraw(amount: number): void {
    if (amount <= this.balance) this.balance -= amount;
  }
  getBalance(): number { return this.balance; }
}

{
  const su = new ShortUser("Ali", 20);
  const b2 = new BankAccount2("Ahmed", 3000);
  b2.deposit(500);
  console.log(su.name, su.getAge(), b2.getBalance());
}


// ---------------------------------------------------------------
// TOPIC 28: implements
// English : A class promises to follow an interface's structure.
// Roman Urdu: Class interface ka wada karti hai ke wo saari properties aur methods banayegi.
// ---------------------------------------------------------------

// Example + TASK
interface Shape {
  area(): number;
}
class Circle implements Shape {
  constructor(private r: number) {}
  area(): number { return 3.14 * this.r * this.r; }
}
class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}
  area(): number { return this.w * this.h; }
}

{
  const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
  shapes.forEach((s) => console.log("Area:", s.area()));
}


// ---------------------------------------------------------------
// TOPIC 29: ABSTRACT CLASSES
// English : A base class that cannot be instantiated and may force child classes
//           to implement certain methods.
// Roman Urdu: Aisi parent class jis ka object nahi ban sakta, sirf child classes us se banti hain.
// ---------------------------------------------------------------

// Example + TASK
abstract class AbstractAnimal {
  constructor(public name: string) {}
  abstract sound(): void; // child class ko lazmi likhna hoga
  eat(): void { console.log(this.name + " khana kha raha hai"); }
}
class DogA extends AbstractAnimal {
  sound(): void { console.log("Woof"); }
}
class CatA extends AbstractAnimal {
  sound(): void { console.log("Meow"); }
}

{
  // const a = new AbstractAnimal("x"); // ERROR: abstract class ka object nahi banta
  const dog = new DogA("Tommy");
  const cat = new CatA("Kitty");
  dog.sound();
  cat.sound();
  dog.eat();
}


// ---------------------------------------------------------------
// TOPIC 30: STATIC & READONLY CLASS MEMBERS
// English : `static` belongs to the class itself; `readonly` can't change after being set.
// Roman Urdu: `static` object ke bajaye class ka hota hai, `readonly` ek baar set ho kar badalta nahi.
// ---------------------------------------------------------------

// Example + TASK: kitne objects bane ye count karna
class Counter {
  static count: number = 0;
  readonly id: number;
  constructor() {
    Counter.count++;
    this.id = Counter.count;
  }
}

{
  const c1 = new Counter();
  const c2 = new Counter();
  const c3 = new Counter();
  console.log("Total objects:", Counter.count);
  console.log(c1.id, c2.id, c3.id);
  // c1.id = 10; // ERROR: readonly
}


/* ===================================================================
   LEVEL 7: UTILITY TYPES & MODULES
   =================================================================== */


// ---------------------------------------------------------------
// TOPIC 31: UTILITY TYPES
// English : Built-in helpers that transform existing types.
// Roman Urdu: TS ke ready-made tools jo kisi type ko modify kar ke naya type bana dete hain.
//
//   Partial<T>    -> Saari properties optional
//   Required<T>   -> Saari properties zaroori
//   Readonly<T>   -> Saari properties readonly
//   Pick<T, K>    -> Sirf chuni hui properties
//   Omit<T, K>    -> Chuni hui properties hata do
//   Record<K, V>  -> Key-value object type
// ---------------------------------------------------------------
type UtilUser = { id: number; name: string; email?: string };

{
  // Partial: sab optional
  const updateData: Partial<UtilUser> = { name: "New Name" };

  // Required: sab zaroori (email bhi)
  const fullUser: Required<UtilUser> = { id: 1, name: "Ali", email: "a@a.com" };

  // Readonly: koi property change nahi hogi
  const lockedUser: Readonly<UtilUser> = { id: 2, name: "Sara" };
  // lockedUser.name = "X"; // ERROR

  // Pick: sirf id aur name
  const preview: Pick<UtilUser, "id" | "name"> = { id: 3, name: "Ahmed" };

  // Omit: email hata do
  const noEmail: Omit<UtilUser, "email"> = { id: 4, name: "Bilal" };

  // Record: key string, value number
  const marks: Record<string, number> = { math: 90, english: 85 };

  console.log(updateData, fullUser, lockedUser, preview, noEmail, marks);
}


// ---------------------------------------------------------------
// TOPIC 32: MODULES (import / export type)
// English : Splitting code across files, and exporting/importing types too.
// Roman Urdu: Code ko alag files mein baant kar types aur functions import/export karna.
// ---------------------------------------------------------------
/*
  --- types.ts (alag file) ---
  export interface User { name: string }
  export interface Post { title: string; author: User }
  export type ID = string | number;

  --- app.ts (alag file) ---
  import { User, Post } from "./types";
  // type-only import (best practice):
  // import type { User } from "./types";

  const u: User = { name: "Ali" };
  const p: Post = { title: "Hello", author: u };
*/


// ---------------------------------------------------------------
// TOPIC 33: tsconfig.json
// English : The config file that controls how TypeScript compiles your project.
// Roman Urdu: Wo file jis se tum TS ko batate ho ke code kaise compile karna hai.
//
// Terminal commands:
//   npm install -g typescript
//   tsc --init        (tsconfig.json banata hai)
//   tsc               (poora project compile)
//   tsc -w            (watch mode)
//
// TASK: tsconfig.json mein ye set karo:
/*
  {
    "compilerOptions": {
      "strict": true,
      "target": "ES2020",
      "outDir": "dist"
    }
  }
*/


/* ===================================================================
   FINAL MINI PROJECT: STUDENT MANAGEMENT SYSTEM
   Is mein ye sab use hua hai: enum, interface, optional, readonly,
   class, private, union return, generic function, utility type.
   =================================================================== */

// enum Grade
enum Grade { A, B, C, F }

// interface Student (id, name, optional email, readonly rollNo)
interface SchoolStudent {
  id: number;
  name: string;
  email?: string;
  readonly rollNo: string;
  grade: Grade;
}

// Generic function findById<T>
function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

// Class School
class School {
  private students: SchoolStudent[] = [];

  addStudent(student: SchoolStudent): void {
    this.students.push(student);
    console.log(student.name + " add ho gaya");
  }

  removeStudent(id: number): boolean {
    const before = this.students.length;
    this.students = this.students.filter((s) => s.id !== id);
    return this.students.length < before;
  }

  // Union return: Student | undefined
  getStudent(id: number): SchoolStudent | undefined {
    return findById(this.students, id);
  }

  // Partial<Student> se update
  updateStudent(id: number, data: Partial<SchoolStudent>): void {
    const student = this.getStudent(id);
    if (student) {
      Object.assign(student, data);
      console.log("Student update ho gaya");
    } else {
      console.log("Student nahi mila");
    }
  }

  listAll(): void {
    this.students.forEach((s) =>
      console.log(`${s.id} | ${s.name} | ${s.rollNo} | Grade: ${Grade[s.grade]}`)
    );
  }
}

// Mini project ko chalana
const school = new School();
school.addStudent({ id: 1, name: "Ali", rollNo: "R-101", grade: Grade.A });
school.addStudent({ id: 2, name: "Sara", email: "sara@mail.com", rollNo: "R-102", grade: Grade.B });
school.addStudent({ id: 3, name: "Ahmed", rollNo: "R-103", grade: Grade.C });

school.updateStudent(3, { grade: Grade.A, email: "ahmed@mail.com" });

const found = school.getStudent(2);
if (found) {
  console.log("Mil gaya:", found.name);
} else {
  console.log("Student nahi mila");
}

school.removeStudent(1);
school.listAll();

// found.rollNo = "X"; // ERROR: readonly

/* ===================== END OF FILE ===================== */