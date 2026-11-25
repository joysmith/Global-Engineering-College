#### 317. [Intro](#317)

#### 318. [AJAX, HTTP, API](#318)

#### 319. [Simple Text](#319)

#### 320. [Add Button](#320)

#### 321. [JSON](#321)

#### 322. [Fetch](#322)

#### 323. [Fetch - Errors "gotcha"](#323)

#### 324. [Fetch - Big Picture](#324)

#### 325. [Fetch with Function](#325)

#### 326. [Fetch - with async/await](#326)

#### 327. [Try / Catch](#327)

---

<br>
##  Intro<a id='317'></a>

<br>

## 318. AJAX, HTTP, API<a id='318'></a>

<br>

## 319. Simple Text<a id='319'></a>

- create an api-folder and in it create sample.txt-file

```txt
 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Voluptatem tenetur temporibus odit excepturi ad. Obcaecati
  dignissimos, eius dolor ex quas numquam provident ea quod
  veniam similique atque tempora sed voluptatum?
```

---

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
        text-align: center;
      }
      h1 {
        letter-spacing: 2px;
      }
    </style>
  </head>
  <body>
    <h1>AJAX</h1>

    <script src="./app.js"></script>
  </body>
</html>
```

---

-app.js

```js
// create XHR-obj, provided by browser -runs in background
const xhr = new XMLHttpRequest();

// use open-method, to make a get request, to url
xhr.open("GET", "./api/sample.txt");

xhr.onreadystatechange = function () {
  // console.log(xhr);
  if (xhr.readyState === 4 && xhr.status === 200) {
    // create paragraph tag
    const text = document.createElement("p");

    // store response text
    text.textContent = xhr.responseText;

    // append paragraph-obj to DOM
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    });
  }
};
// send request to server
xhr.send();

console.log("hello world");
```

---

- [XHR-obj, open method](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open)

- [onreadystatechange obj-property](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event)

<br>

## 320. Add Button<a id='320'></a>

- create an api-folder and in it create sample.txt-file

```txt
 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Voluptatem tenetur temporibus odit excepturi ad. Obcaecati
  dignissimos, eius dolor ex quas numquam provident ea quod
  veniam similique atque tempora sed voluptatum?
```

---

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
        text-align: center;
      }
      h1 {
        letter-spacing: 2px;
      }
    </style>
  </head>
  <body>
    <h1>AJAX</h1>
    <button type="button" class="btn">show text</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// set up button event
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData();
});

// wrap server get request to getData-function
function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", "./api/sample.txt");
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
```

<br>

## 321. JSON<a id='321'></a>

- create an api-folder and in it create people.json-file

```json
[
  { "name": "john", "id": 1 },
  { "name": "peter", "id": 2 },
  { "name": "anna", "id": 3 },
  { "name": "susan", "id": 4 }
]
```

---

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-align: center;
      }
      h1 {
        letter-spacing: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Asynchronous Javascript</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello Javascript</h1>
    <button class="btn">click me</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// JSON Javascript Object Notation
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse: when browser comm. with server to get data
      // stringify: when browser comm. with server to send data

      // turn string/text into json-datastructure
      const data = JSON.parse(xhr.responseText);

      // item represent each-obj in json
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");

      // create div element-tag
      const element = document.createElement("div");

      //
      element.innerHTML = displayData;

      // add tags to DOM
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
```

<br>

## 322. Fetch<a id='322'></a>

- create an api-folder and in it create people.json-file

```json
[
  { "name": "john", "id": 1 },
  { "name": "peter", "id": 2 },
  { "name": "anna", "id": 3 },
  { "name": "susan", "id": 4 }
]
```

---

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-align: center;
      }
      h1 {
        letter-spacing: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Asynchronous Javascript</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello Javascript</h1>
    <button class="btn">click me</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.json";

// there is an options, object will discuss later
// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful properties and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // returns a promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
```

<br>

## 323. Fetch - Errors "gotcha"<a id='323'></a>

<br>

## 324. Fetch - Big Picture<a id='324'></a>

<br>

## 325. Fetch with Function<a id='325'></a>

<br>

## 326. Fetch - with async/await<a id='326'></a>

<br>

## 327. Try / Catch<a id='327'></a>

<br>
