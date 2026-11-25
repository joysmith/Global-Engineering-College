| Index                                                                    | Index                                                |
| ------------------------------------------------------------------------ | ---------------------------------------------------- |
| 88. [DOM - Intro](#88)                                                   | 108. [Change CSS with style property](#108)          |
| 89. [DOM - General Concepts](#89)                                        | 109. [Events Overview](#109)                         |
| 90. [Window and Document Overview](#90)                                  | 110. [Click Event](#110)                             |
| 91. [Get Element By ID](#91)                                             | 111. [Function Reference](#111)                      |
| 92. [Get Elements By Tag Name](#92)                                      | 112. [Mouse Events](#112)                            |
| 93. [Get Element By Class Name](#93)                                     | 113. [Key Events](#113)                              |
| 94. [Query Selector and Query Selector ALL](#94)                         | 114. [Event Object](#114)                            |
| 95. [Navigate the DOM - Children](#95)                                   | 115. [CurrentTarget vs Target](#115)                 |
| 96. [Navigate the DOM - parentElement](#96)                              | 116. [Event Propagation - Bubbling- Capturing](#116) |
| 97. [Navigate the DOM - nextSibling, previousSibling](#97)               | 117. [Event Propagation Example](#117)               |
| 98. [Navigate the DOM - nextElementSibling, previousElementSibling](#98) | 118. [Forms](#118)                                   |
| 99. [textContent nodeValue](#99)                                         | 119. [Local Storage](#119)                           |
| 100. [getAttribute() setAttribute()](#100)                               | 120. [Local Storage With Multiple Values](#120)      |
| 101. [classList and className](#101)                                     | 121. [setTimeout](#121)                              |
| 102. [createElement - createTextNode - appendChild](#102)                | 122. [setInterval](#122)                             |
| 103. [insertBefore](#103)                                                | 123. [Events - "DOMContentLoaded"](#123)             |
| 104. [replaceChild](#104)                                                | 124. [Events - "load"](#124)                         |
| 105. [prepend innerText](#105)                                           | 125. [Events - "scroll"](#125)                       |
| 106. [remove removeChild](#106)                                          | 126. [Width, Height, GetBoundingClientRect](#126)    |
| 107. [innerHTML and textContent](#107)                                   | 127. [Events - "resize"](#127)                       |

<br>

## 88. DOM - Intro <a id='88'></a>

<br>

## 89. DOM - General Concept <a id='89'></a>

<br>

## 90. Window and Document Overvie <a id='90'></a>

<br>

## 91. Get Element By Id <a id='91'></a>

<br>

## 92. Get Elements By Tag Name <a id='92'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <h2>hello world</h2>
    <h2>hello people</h2>
    <ul>
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
      <li>pear</li>
      <li>tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
//1. Select the element or group of elements the we want
//2. Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// returns: HTMLCollection =  array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties and methods

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
// console.log(headings.length);

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";
// How to turn HTMLCollection into array, so we can use array prop, methods
const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);
```

<br>

## 93. Get Element By Class Name <a id='93'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <h2>hello world</h2>
    <h2>hello people</h2>
    <ul>
      <li class="special">apple</li>
      <li>orange</li>
      <li class="special">banana</li>
      <li>pear</li>
      <li class="special">tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// returns: HTMLCollection

const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "blue";
console.log(listItems);
```

<br>

## 94. Query Selector and Query Selector ALL <a id='94'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li class="special">apple</li>
      <li>orange</li>
      <li class="special">banana</li>
      <li>pear</li>
      <li class="special last">tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const list = document.querySelectorAll(".special");

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
```

<br>

## 95. Navigate the DOM - Children <a id='95'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
      <li>pear</li>
      <li>tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Traversing through DOM tree- using children property.
// Decide the effect we want to apply to the selection

// property: childNodes - returns all childNodes including whitespace which is treated as a text node

// property: children
// property: firstChild
// property: lastChild

const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);
```

<br>

## 96. Navigate the DOM - parentElement <a id='96'></a>

<br>

## 97. Navigate the DOM - nextSibling, previousSibling <a id='97'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li class="first">first</li>
      <li>list item 2</li>
      <li>list item 3</li>
      <li id="last">last</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// property: previousSibling
// property: nextSibling
// return whitespace

const first = document.querySelector(".first");
const second = (first.nextSibling.nextSibling.style.color = "red");
console.log(second);

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;

console.log(third);
console.log(last.nextSibling.nextSibling);
```

<br>

## 98. Navigate the DOM - nextElementSibling, previousElementSibling <a id='98'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 99. textContent nodeValue <a id='99'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 100. getAttribute() setAttribute() <a id='100'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 101. classList and className <a id='101'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 102. createElement - createTextNode - appendChild <a id='102'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 103. insertBefore <a id='103'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 104. replaceChild <a id='104'></a>

<br>

## 105. prepend innerText <a id='105'></a>

<br>

## 106. remove removeChild <a id='106'></a>

<br>

## 107. innerHTML and textContent <a id='107'></a>

<br>

## 108. Change CSS with style property <a id='108'></a>

<br>

## 109. Events Overview <a id='109'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>

    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>

  <body>
    <h2>events in javascript</h2>
    <p>hey, I can trigger an event</p>
    <button class="btn">click me</button>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");
const text = document.querySelector("p");

text.addEventListener("mouseenter", function () {
  heading.classList.add("red");
});

text.addEventListener("mouseleave", function () {
  heading.classList.remove("red");
});

btn.addEventListener("click", function () {
  if (heading.classList.contains("blue")) {
    heading.classList.remove("blue");
  } else {
    heading.classList.add("blue");
  }
});
```

<br>

## 110. Click Event <a id='110'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h2>events in javascript</h2>
    <button class="btn">click me</button>
    <!-- javascript -->
    <p onclick="this.classList.add('red')">
      the old style, DONT USE THIS WAY TO CODE IN JS
    </p>
    <script src="app.js"></script>
  </body>
</html>
```

---

- In app.js, setup process of event
  - Step 1: select element
  - Step 2: addEventListener()
  - Step 3: what event, what to do

```js
// setup process of event-
// Step 1: select element
// Step 2: addEventListener()
// Step 3: what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  heading.classList.add("red");
});
```

<br>

## 111. Function Reference <a id='111'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h2>events in javascript</h2>
    <button class="btn">click me</button>
    <!-- javascript -->

    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// setup process of event
// Step 1: select element
// Step 2: addEventListener()
// Step 3: what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  // this line will return true/false
  let hasClass = heading.classList.contains("red");

  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColors);
```

<br>

## 112. Mouse Events <a id='112'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h1>events in javascript</h1>
    <button class="btn">click me</button>

    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// click - fires after full-action(mousedown & mouseup) occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

// click
btn.addEventListener("click", function () {
  console.log("you clicked me");
});

// mousedown
btn.addEventListener("mousedown", function () {
  console.log("down");
});

// mouseup
btn.addEventListener("mouseup", function () {
  console.log("up");
});

// mouseenter
heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

// mouseleave
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
```

<br>

## 113. Key Events <a id='113'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <input type="text" id="name" />
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById("name");

// nameInput.addEventListener('keypress', function() {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function() {
//   console.log('you pressed a key');
// });
nameInput.addEventListener("keyup", function () {
  // accessing  keyboard-key object all props & method
  console.dir(nameInput);

  console.log(nameInput.value);
});
```

<br>

## 114. Event Object <a id='114'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <button class="btn">click me</button>
    <h1>some heading</h1>
    <a href="#" id="link">random link</a>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

heading.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  console.log(this);
});

btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
```

<br>

## 115. CurrentTarget vs Target <a id='115'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        border: none;
        display: inline-block;
        margin: 0.5rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <button class="btn">first button</button>
    <button class="btn">
      second <strong>button <strong>more nested </strong> </strong>
    </button>
    <button class="btn">third button</button>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';

    console.log("current", e.currentTarget);
    console.log("target", e.target);
    e.target.style.color = "green";
  });
});
```

<br>

## 116. Event Propagation - Bubbling- Capturing <a id='116'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        border: none;
        display: inline-block;
        margin: 0.5rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <ul class="list-items">
        <li class="item"><a href="#" class="link">link</a></li>
        <li class="item"><a href="#" class="link">link</a></li>
        <li class="item"><a href="#" class="link">link</a></li>
      </ul>
    </div>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  // console.log('target', e.target);
  // if (e.target.classList.contains('link')) {
  //   console.log('you clicked on the link');
  // }
}
function stopPropogation(e) {
  e.stopPropagation();
}

list.addEventListener("click", showBubbling, { capture: true });
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
```

<br>

## 117. Event Propagation Example <a id='117'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 118. Forms <a id='118'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        border: none;
        display: inline-block;
        margin: 0.5rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
    </style>
  </head>
  <body>
    <form action="" id="form">
      <input type="text" id="name" />
      <input type="password" id="password" />
      <input type="submit" value="submit" />
    </form>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// submit event listener
// prevent default
// how to get a value

const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("form submitted");
  console.log(name.value);
  console.log(password.value);
});
```

<br>

## 119. Local Storage <a id='119'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ES6</title>
    <style>
      body {
        text-transform: capitalize;
      }
      .btn {
        background: #f15025;
        color: #fff;
        border: none;
        font-size: 1.5rem;
        text-transform: capitalize;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>ES6</h1>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- How to access local storage in chrome
  - Dev console -> Application tab => LacalStorage
- app.js

```js
// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')

// How to store item in browser locaStorage
localStorage.setItem("name", "john");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "street 123");

// How to access item from browser localstorage
const name = localStorage.getItem("name");
console.log(name);

// How to remove item from browser localstorage
localStorage.removeItem("name");

const anotherName = localStorage.getItem("name");
console.log(anotherName);

// How to clear browser loacal storage
localStorage.clear();
```

<br>

## 120. Local Storage With Multiple Values <a id='120'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ES6</title>
    <style>
      body {
        text-transform: capitalize;
      }
      .btn {
        background: #f15025;
        color: #fff;
        border: none;
        font-size: 1.5rem;
        text-transform: capitalize;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>ES6</h1>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- How to access local storage in chrome

  - Dev console -> Application tab => LacalStorage

- app.js

```js
// JSON.stringify(), JSON.parse

const friends = ["john", "peter", "bob"];
// How to store array in browser locastorage with JSON.stringify()
localStorage.setItem("friends", JSON.stringify(friends));

// How to store access in browser locastorage with JSON.parse()
const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
```

<br>

## 121. setTimeout <a id='121'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 122. setInterval <a id='122'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 123. Events - "DOMContentLoaded" <a id='123'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## 124. Events - "load" <a id='124'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript</title>
  </head>
  <body>
    <h1>Javascript</h1>
    <img src="./photo.jpg" alt="" />
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
/* 
The load event is fired when the whole page has loaded,
 including all dependent resources such as stylesheets and images. 
 This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded,
without waiting for resources to finish loading.

window.addEventListener('load', function () {
  // your code goes here
});

*/

// Case 1: event fire when all assets are loaded
window.addEventListener("load", function () {
  console.log("I will run second");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

// Case 2
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded I will run first");

  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});
```

<br>

## 125. Events - "scroll" <a id='125'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript</title>
  </head>
  <body>
    <h1>Javascript</h1>
    <img src="./photo.jpg" alt="" />
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
/* 
Scroll Event - on element or document 

  window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});

document

scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)


scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)
*/

window.addEventListener("scroll", function () {
  console.log(window.scrollY + "px");
  console.log(window.scrollX + "px");
});
```

<br>

## 126. Width, Height, GetBoundingClientRect <a id='126'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript</title>
    <style>
      .btn {
        margin: 1rem;
        font-size: 1.5rem;
      }
      .box {
        margin: 1rem;
        margin-left: -3rem;
        width: 150px;
        height: 150px;
        background: red;
      }
    </style>
  </head>
  <body>
    <h1>Javascript</h1>
    <button class="btn">click me</button>
    <div class="box"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
/*
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - The read-only property of the Window interface returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

 */

console.log("height : " + window.innerWidth);
console.log("width : " + window.innerHeight);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});
```

<br>

## 127. Events - "resize" <a id='127'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript</title>
  </head>
  <body>
    <h1>Javascript</h1>
    <img src="./photo.jpg" alt="" />
  </body>
</html>
```

---

- app.js

```js
/*
The resize event fires when the document view (window) has been resized.
 */

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
```

- run local server and resize window
