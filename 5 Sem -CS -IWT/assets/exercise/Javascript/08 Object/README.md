#### 206 [Intro](#206)

#### 207 [Object Basics](#207)

#### 208 [Nested Objects, Bracket Notation](#208)

#### 209 ['this' - Keyword Basics](#209)

#### 210 ["this" - Keyword Advanced](#210)

#### 211 [Factory Functions](#211)

#### 212 [Constructor Functions](#212)

#### 213 [Constructor Property](#213)

#### 214 [Prototype Property](#214)

#### 215 [Property Lookup](#215)

#### 216 [ES6 Class Syntax](#216)

#### 217 [Call](#217)

#### 218 [Apply, Arguments](#218)

#### 219 [Bind](#219)

#### 220 [Button Example](#220)

<br>

## 206. Intro<a id='206'></a>

<br>

## 207. Object Basics<a id='207'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Tutorial</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      h1 {
        letter-spacing: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Objects</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },

  // (shortcut) ES6 new feature to declare function without key
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;
console.log(name);

// how to modify property
person.age = 60;

// how to add new property to exisiting obj
person.city = "chicago";

// how to  delete property
delete person.siblings;

// how to check is existing property deleted or not- return boolean
const siblings = delete person.siblings;
console.log(siblings);

console.log(person);
```

<br>

## 208. Nested Objects, Bracket Notation<a id='208'></a>

- index.html (same template id=207)

---

- app.js

```js
// nested objects
// 1a. set variable as property value
// 1b. dot notation vs bracket notation

// step 1a: how to set variable as obj-property value
const age = 40;

// step 1b. how to set variable as obj-property value
let random = "random-value";

random = "age";

const person = {
  name: "john",

  // step 2a: modify obj-value using variable
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },

  // how to create nested obj
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },

  // step 2b: how to use string to write key
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);

console.log(person["name"]);

// step 3b: how to access obj-key using bracket notation
console.log(person["random-value"]);

console.log(person[random]);
```

<br>

## 209. 'this' - Keyword Basics<a id='209'></a>

- index.html (same template id=207)

---

- app.js

```js
// this
// points to the left of the dot

const john = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log(this);

    // how to use this keywork to access obj-keyvalue to generate data dynamically
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: "peter",
  lastName: "sanders",
  fullName: function () {
    console.log(this);

    // how to use this keywork to access obj-keyvalue to generate data dynamically
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();
```

<br>

## 210. "this" - Keyword Advanced<a id='210'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Tutorial</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      h1 {
        letter-spacing: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Objects</h1>
    <button class="btn-1">click me</button>
    <button class="btn-2">click me</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
/* In Regular-named-Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

// showThis fun. will point to window-obj which is a default-obj
function showThis() {
  // show pointing obj
  console.log(this);
}

// showThis fun. will point to john-obj
const john = {
  name: "john",
  showThis: showThis,
};

// showThis fun. will point to bob-obj
const bob = {
  name: "bob",
  showThis: showThis,
};

john.showThis(); // "this" point to john-obj
bob.showThis(); // "this" point to bob-obj

showThis(); // "this" point to window-obj

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis); // btn1-obj
btn2.addEventListener("click", showThis); // btn2-obj

btn2.addEventListener("click", function () {
  // point to window-obj, because we are calling it inside anonymous fun, not declaring it as a call-back
  showThis();
});
```

<br>

## 211. Factory Functions<a id='211'></a>

- index.html (same template id=207)

---

- app.js

```js
// Two ways to setup up BluePrint or template
// 1. Factory Functions,  2. Constructor Functions
// Factory Functions

// --------old way writing obj directly-------
// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: 'peter',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// How to define factory function
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

// how to create person-obj with dynamic property without new-keyword
const john = createPerson("john", "anderson");
john.fullName();

const bob = createPerson("susy", "apple");
bob.fullName();

const susy = createPerson("bob", "jordan");
susy.fullName();
```

<br>

## 212. Constructor Functions<a id='212'></a>

- index.html (same template id=207)

---

- app.js

```js
// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

// how to define constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  console.log(this);
}

// how to create person obj with new-keyword
const john = new Person("john", "anderson");
john.fullName();
const bob = new Person("bob", "jordan");
bob.fullName();
```

<br>

## 213. Constructor Property<a id='213'></a>

- index.html (same template id=207)

---

- app.js

```js
// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person("john", "sanders");
// console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new john.constructor("susy", "carpenter");
susy.fullName();
```

<br>

## 214. Prototype Property<a id='214'></a>

- index.html (same template id=207)

---

- app.js

```js
/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model.
That means that every constructor function/class has a prototype property,
that is shared by every instance of the constructor/class.
So any properties and methods or prototype can be acessed by every instance.
prototype property returns a object
*/

// setup constructor function
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

// creating new obj
const john = new Account("john", 200);
const bob = new Account("bob", 0);

// how to setup new bank-property using prototype-property in construction function
Account.prototype.bank = "CHASE";

// how to setup new deposit-function using prototype-property in construction function
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

console.log(john.bank);
console.log(bob);

john.deposit(300);
bob.deposit(1000);
```

<br>

## 215. Property Lookup<a id='215'></a>

- index.html (same template id=207)

---

- app.js

```js

```

<br>

## 216. ES6 Class Syntax<a id='216'></a>

- index.html (same template id=207)

---

- app.js

```js
class Account {
  // notice: set bank-property without any let, const keyword
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  // notice: set bank-property without any let, const keyword
  bank = "Chase";

  // notice: set deposit without function-keyword
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);

const bob = new Account("bob", 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank);
```

<br>

## 217. Call<a id='217'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 218. Apply, Arguments<a id='218'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 219. Bind<a id='219'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 220. Button Example<a id='220'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>
