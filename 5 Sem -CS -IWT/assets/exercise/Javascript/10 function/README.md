#### 238 [Intro](#238)

#### 239 [IIFE](#239)

#### 240 [Hoisting](#240)

#### 241 [Closure](#241)

#### 242 [Closure - Basic Example](#242)

#### 243 [Closure - Complete Example](#243)

---

<br>

## 238. Intro<a id='238'></a>

<br>

## 239. IIFE<a id='239'></a>

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
    <h1>Functions</h1>

    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// IIFE Immediately-Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.

// global namespace, extra steps

const num1 = 30;
const num2 = 50;
// const num1 = 70;

function add() {
  console.log(`the result is : ${num1 + num2}`);
}

add();

// -------------------------------------------------------- //

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();

console.log(num1);

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is : ${num3 + num4}`);
})();
// pass arguments
(function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
})(500, 900);

// return/assing to variable
const result = (function (num3, num4) {
  console.log(`the result is : ${num3 + num4}`);
  return num3 + num4;
})(500, 900);

console.log(result);
```

<br>

## 240. Hoisting<a id='240'></a>

- index.html (same template id=239)

---

- app.js

```js
// Hoisting: raise (something) by means of ropes and pulleys.-a white flag was hoisted
// function and var declarations are hoisted
// safer to access only after initialized

display();
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = "john";
let lastName = "jordan";
var random = "random";

function display() {
  console.log("hello world");
}

function moreComplex() {
  console.log(` ${random}`);
}
```

<br>

## 241. Closure<a id='241'></a>

- index.html (same template id=239)

---

- app.js

```js
// Closure: an act or process of closing something -hospitals that face closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  inner();
}
// console.log(privateVar);

// 1way to invoke returned inner-fun
outer()();

// 2way to invoke returned inner-fun
const value = outer();
console.log(value);
value();
```

<br>

## 242. Closure - Basic Example<a id='242'></a>

- index.html (same template id=239)

---

- app.js

```js
// Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

// 1way to invoke returned inner-fun
newAccount("susan", 500)();

// 2way to invoke returned inner-fun
const john = newAccount("john", 300);
const bob = newAccount("bob", 1000);

john();
bob();
```

<br>

## 243. Closure - Complete Example<a id='243'></a>

<br>
