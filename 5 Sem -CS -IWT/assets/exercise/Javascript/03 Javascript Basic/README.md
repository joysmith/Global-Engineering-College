| Index                                    | Index                                        |
| ---------------------------------------- | -------------------------------------------- |
| 14. [Basics Intro](#14)                  | 35. [Implicit Type Conversion](#35)          |
| 15. [Basic Project](#15)                 | 36. [Data Types](#36)                        |
| 16. [Inline Javascript](#16)             | 37. [Arrays](#37)                            |
| 17. [Internal Javascript](#17)           | 38. [Array Challenge](#38)                   |
| 18. [External Javascript](#18)           | 39. [Functions - Declare, Invoke](#39)       |
| 19. [Cleanup Workspace](#19)             | 40. [Functions - Parameters, Arguments](#40) |
| 20. [Helper Methods](#20)                | 41. [Functions - Return](#41)                |
| 21. [Statements and Comments](#21)       | 42. [Function Expressions](#42)              |
| 22. [Variables](#22)                     | 43. [Function Challenge](#43)                |
| 23. [Assign Variable Value Later](#23)   | 44. [Objects](#44)                           |
| 24. [Variable Naming Rules](#24)         | 45. [Object Challenge](#45)                  |
| 25. [const, let, var](#25)               | 46. [Conditional Statements - Basics](#46)   |
| 26. [Challenges Intro](#26)              | 47. [Conditional Statements Continued](#47)  |
| 27. [Variables Challange](#27)           | 48. [Equality](#48)                          |
| 28. [Prettier Settings](#28)             | 49. [Logical Operators](#49)                 |
| 29. [Quotation Marks](#29)               | 50. [Switch Statement](#50)                  |
| 30. [String Concatenation](#30)          | 51. [Conditionals Challenge](#51)            |
| 31. [String Concat Challenge](#31)       | 52. [while Loops](#52)                       |
| 32. [Numbers Basics](#32)                | 53. [do while loops](#53)                    |
| 33. [Numbers - Additional Features](#33) | 54. [for loop](#54)                          |
| 34. [Numbers Challenge](#34)             |

---

<br>

## 14. Basics Intro <a id='14'></a>

<br>

## 15. Basic Project <a id='15'></a>

<br>

## 16. Inline Javascript <a id='16'></a>

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Java script interactive basic</title>
  </head>
  <body>
    <h1>Sanity check</h1>

    <!-- How to inject inline js in button-tag -->
    <button onclick="alert('Alert box')">click me</button>
  </body>
</html>


```

<br>

## 17. Internal Javascript <a id='17'></a>

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>hello world</h1>
    <h4>hello people</h4>

    <!--emmet shortcut: btn.btn*7{random button} -->
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to internal inject js in html page  -->
    <script>
      document.querySelectorAll(".btn").forEach((item) => {
        item.addEventListener("click", () => {
          alert("this is good ");
        });
      });
    </script>
  </body>
</html>

```

<br>

## 18. External Javascript <a id='18'></a>

- index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <a href="about.html">about</a>

    <h1>home page</h1>
    <h4>hello people</h4>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to externally inject js using relative path -->
    <script src="./app.js"></script>
  </body>
</html>

```

---

- about.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Page</title>
  </head>
  <body>
    <a href="index.html">home</a>
    <h4>about page</h4>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to externally inject js using relative path -->
    <script src="./app.js"></script>
  </body>
</html>

```

---

- app.js

```js
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("I will affect index.html, about.html alert-content from here only ");
  });
});
```

<br>

## 19. Cleanup Workspace <a id='19'></a>

<br>

## 20. Helper Methods <a id='20'></a>

- index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>javascript tutorial</h1>

    <script src="./app.js"></script>
  </body>
</html>

```

---

- app.js

```js
// How to write on browser page using write method
document.write("hello world");

// How to write on alert-popup
alert("hello world");

// How to write on dev console
console.log("hello world");
```

<br>

## 21. Statements and Comments <a id='21'></a>

- index.html (same template id=20)
- app.js

```js
// I woke,? up early!!!! him today.

// statements - sets of instructions or anything that ends with ; (semi-colon)
// comments - shortcut Command ctrl + /

// this is console statement
// console.log("hello world");
console.log("hello people");

/*
console.log("hello people");
console.log("hello my friend bob");
console.log("hello susan");
document.write("hello anna");
*/
```

<br>

## 22. Variables <a id='22'></a>

- index.html (same template id=20)
- app.js

```js
// Variable feature - Most Basic Building Block
// Variables use for - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value

// variable declaration, assign value by using assingment operator
let name = "john shrimp taco VI";

// access variable
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
```

<br>

## 23. Assign Variable Value Later <a id='23'></a>

- index.html (same template id=20)
- app.js

```js
// Variable - Most Basic Building Block
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// assign value later, modify existing

let name = "john shrimp taco VI";

// declaring variable assinging later
let address, zip, state;
address = "101 main street";
zip = "60612";
state = "CA";
console.log(address, zip, state);

// modifying variable
name = "fish burrito ";

console.log(name);
```

<br>

## 24. Variable Naming Rules <a id='24'></a>

- index.html (same template id=20)
- app.js

```js
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs Fullname

// camelCase or underscore

let full_name = "random";
console.log(full_name);
```

<br>

## 25. const, let, var <a id='25'></a>

- index.html (same template id=20)
- app.js

```js
// LET VS CONST VS VAR

// using var
var value = "some value";
value = "some other value";
// using let
let name = "john";
name = "peter";
// using const (CONSTANT) - can't re-assign
const lastName = "smith";

console.log(value);
console.log(name);
console.log(lastName);
```

  <br>

## 26. Challenges Intro <a id='26'></a>

<br>

## 27. Variables Challange <a id='27'></a>

Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. re-assign address to "first street" later
5. log all values in the console

<br>

---

- index.html (same template)
- app.js

```js
const firstName = "john";
const last_name = "smilga";

let address = "main street";
address = "first street";

console.log(firstName, last_name, address);
```

<br>

## 28. Prettier Settings <a id='28'></a>

<br>

## 29. Quotation Marks <a id='29'></a>

- index.html (same template id=20)
- app.js

```js
// "" or ''
const name = "john's courses are the best";

console.log(name);
```

<br>

## 30. String Concatenation <a id='30'></a>

- index.html (same template id=20)
- app.js
  - uncomment websites name to visit diff site from dev-console

```js
// String Concatenation - combine string values
// `` - backticks (template strings) easier option.

// const name = 'john';
// const lastName = 'shakeandbake';
// let fullName = name + ' ' + lastName;

// console.log('Hello there your full name is : ' + fullName);

const website = "google";
// const website = "udemy";
// const website = "youtube";
// const website = "facebook";

const url = "https://www." + website + ".com";
console.log(url);
```

<br>

## 31. String Concat Challenge <a id='31'></a>

Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign
   the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console

<br>

---

- index.html (same template)
- app.js

```js
const street = "main street";
const country = "USA";

const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);
```

<br>

## 32. Numbers Basics <a id='32'></a>

- index.html (same template id=20)
- app.js

```js
// Numbers
// Loosely Typed = don't declare type
// In dev-console string are in black color and number are in blue color

const number = 34;
// let pants = 2.466;
// pants = 'are great';
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(number3);
```

<br>

## 33. Numbers - Additional Features <a id='33'></a>

- index.html (same template id=20)
- app.js

```js
// Numbers
// +=, -=, /=, *=, ++ , --, %
// Modulus (%) operator returns the remainder after integer division

let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++;
number--;
number--;

const slices = 10;
const children = 4;
const amount = slices % children;

const calculate = 4 + 6 + 10 * 10;
const calculate2 = (4 + 6 + 10) * 10;
console.log(calculate);
console.log(calculate2);

console.log(amount);
```

<br>

## 34. Numbers Challenge <a id='34'></a>

Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

<br>

---

```js
const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;
// console.log(totalScore, avgScore);

const plates = 20;
const people = 7;
let remainingPlates = 20 % 7;
remainingPlates++;

const message = "There are " + remainingPlates + " plates available";
console.log(message);
```

<br>

## 35. Implicit Type Conversion <a id='35'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>Javascript Tutorial</h1>
    <form class="form">
      <label for="amount">Enter Number</label>
      <input type="number" id="amount" />
      <button type="submit">Submit</button>
    </form>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Implicit Type Conversion

// const name = 'john';
// const lastName = 'jordan';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 23;
// // 100 lines
// number4 = '23';
// const result2 = number3 + number4;
// console.log(result2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
```

<br>

## 36. Data Types <a id='36'></a>

- index.html (same template id=20)
- app.js

```js
// Data Types - 7 total (primitive + obj)
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = "some text";

// Number
const number = 45;

// Boolean
let value1 = true;
let value2 = false;

// Null
const result = null;

// Undefined
let name;

// Symbol(ES6)

// How to use typeof operator to know datatype
console.log(typeof text);
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);
```

<br>

## 37. Arrays <a id='37'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// Arrays - [], 0 index based

// old way
const friend1 = "anna";
const friend2 = "anna";
const friend3 = "anna";
const friend4 = "anna";

const friends = ["john", "peter", "bob", "susy", 45, undefined, null];

// accessing array
let bestFriend = friends[2];

// assingning new value to array
friends[4] = "anna";

console.log(friends);
console.log(friends[4]);

console.log(bestFriend);

console.log(friends[3]);
```

<br>

## 38. Array Challenge <a id='38'></a>

Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array

<br>

---

- index.html (same template id=20)
- app.js

```js
const fruits = ["apple", "banana", "orange", 45];

const firstFruit = fruits[0];
fruits[3] = "lemon";
console.log(firstFruit, fruits);
```

<br>

## 39. Functions - Declare, Invoke <a id='39'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// Functions - declare, invoke

// function declaration
function hello() {
  // logic
  console.log("Hello There Bob");
  console.log("Hello There Anna");
  console.log("Hello There Susy");
}

// function invocation
hello();
// come code here....
hello();
// come code here....
hello();
// come code here....
```

<br>

## 40. Functions - Parameters, Arguments <a id='40'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

// we haven't use let, const, var in front of name-variable in fun
function greet(name) {
  console.log("Hello there " + name);
}

// greet bob
greet(4);
// greet anna
greet(anna);
// greet susy
greet("Susy");
```

<br>

## 41. Functions - Return <a id='41'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// return
// 1 inch 2.54cm

const wallHeight = 80;

function calculate(value) {
  const newValue = value * 2.54;
  return newValue;

  // from here nothing will execute because of return above
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

calculate(200);
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
```

<br>

## 42. Function Expressions <a id='42'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func,libraries,

// 1.way: function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//2.way: function expression
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);

const values = [firstValue, secondValue, thirdValue, add(5, 6)];
console.log(values);

//3.way: arrow function
const multiply = (num1, num2) => num1 * num2;
```

<br>

## 43. Function Challenge <a id='43'></a>

Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters

4. create 3 vars "order1","order2","order3"
5. call calculateTotal, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

<br>

---

- index.html (same template id=20)
- app.js

```js
const calculateTotal = function random(subTotal, tax) {
  // const total = subTotal + tax;
  // return total;
  return subTotal + tax;
};

// console.log(calculateTotal(200, 20));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
```

<br>

## 44. Objects <a id='44'></a>

- index.html (same template id=20)
- app.js

```js
// Arrays, Functions and Objects
// Objects - key/value pairs  methods
// dot notation

const person = {
  // PROPERTY_NAME: PROPERTY
  name: "john",
  lastName: "peters",
  age: 25,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting() {
    console.log("Hello my name is JOHN");
  },
};

// How to store person-obj age
const age = person.age;
console.log(age);

// How to modify name of person-obj
person.name = "bob";
console.log(person.name);

// How to access person-obj array
console.log(person.siblings[2]);

// How to invoke person-obj method
person.greeting();
```

<br>

## 45. Object Challenge <a id='45'></a>

Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

<br>

---

- index.html (same template id=20)
- app.js

```js
const car = {
  make: "Dodge",
  model: "Challenger",
  year: 1970,
  colors: ["black", "red"],
  hybrid: false,
  drive: function () {
    console.log("driving...");
  },
  stop() {
    console.log("stopped!!!");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
```

<br>

## 46. Conditional Statements - Basics <a id='46'></a>

- index.html (same template id=20)
- app.js

```js
// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

const value = 2 > 1;
// console.log(typeof value);

const value2 = 1 > 2;
if (value2) {
  console.log("hello world");
} else {
  console.log("hello people");
}
```

<br>

## 47. Conditional Statements Continued <a id='47'></a>

- index.html (same template id=20)
- app.js

```js
// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
// else if and !

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

const value = false;

// if value is false then run the code
if (!value) {
  console.log("value is false");
}

// if-else ladder
// if (num1 > num2) {
//   console.log('first number is bigger than second');
// } else if (result) {
//   console.log('first number equal to a second');
// } else {
//   console.log('second number is bigger than first');
// }
```

<br>

## 48. Equality <a id='48'></a>

- index.html (same template id=20)
- app.js

```js
// Conditional Statements
// Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
// == checks only value
// === checks value and type

const num1 = 6;
const num2 = "6";

const value = num1 == num2; // true
const value2 = num1 === num2; // false

const value = num1 != num2; //
const value2 = num1 !== num2; //

console.log(value);
console.log(value2);
```

<br>

## 49. Logical Operators <a id='49'></a>

- index.html (same template id=20)
- app.js

```js
// Logical Operators
// (|| - OR), (&& - AND), !

const name = "peter";
const age = 24;

if (name !== "bob" && age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}
```

<br>

## 50. Switch Statement <a id='50'></a>

- index.html (same template id=20)
- app.js

```js
// Switch
// dice values : 1 - 6

const dice = 3;

switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  case 3:
    console.log("you got three");
    break;
  default:
    console.log("you did not roll the dice");
}

// else if, for reference
// if (dice === 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// all if, for reference
// if (dice === 1) {
//   console.log('you got one');
// }
// if (dice === 2) {
//   console.log('you got two');
// }
// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }
```

<br>

## 51. Conditionals Challenge <a id='51'></a>

Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects

<br>

---

- index.html (same template id=20)
- app.js

```js
const person1 = {
  name: "susan",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "bobo",
  age: 30,
  status: "tourist",
};

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}
```

<br>

## 52. while Loops <a id='52'></a>

<br>

## 53. do while loops <a id='53'></a>

<br>

## 54. for loop <a id='54'></a>

<br>
```
