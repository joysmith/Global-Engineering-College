#### 306 [Intro](#306)

#### 307 [Synchronous](#307)

#### 308 [Recipe Example](#308)

#### 309 [Asynchronous](#309)

#### 310 [Callback Hell](#310)

#### 311 [Callback Hell - DOM Example](#311)

#### 312 [Promises](#312)

#### 313 [Important Unsplash API update !!!!](#313)

#### 314 [Reject Example](#314)

#### 315 [Promises - DOM Example](#315)

#### 316 [Async/Await](#316)

---

<br>

## 306. Intro<a id='306'></a>

<br>

## 307. Synchronous<a id='307'></a>

-index.html

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
    <script src="./app.js"></script>
  </body>
</html>
```

---

```js
// Javascript is single threaded, synchronous language.
// means- it execute statement line by line
console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater();
console.log(`i'm third`);

// due to hoisting feature it will go up
function boilingWater() {
  console.log("boiling...");
  for (let i = 0; i < 1000; i++) {
    console.log("still not done...");
  }
  console.log("done.");
}
```

<br>

## 308. Recipe Example<a id='308'></a>

- index.html (same template id=307)

---

- app.js

```js
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc

boilWater(100000);
console.log(`chop carrot`);
boilWater(5000);
console.log(`chop onion`);
boilWater(5000);

function boilWater(time) {
  console.log("boiling...");
  for (let i = 0; i < time; i++) {
    console.log("still not done...");
  }
  console.log("done.");
}
```

<br>

## 309. Asynchronous<a id='309'></a>

- index.html (same template id=307)

---

- app.js

```js
// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER provide these function!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// callbacks, promises, async/await
// -- asynchronous means doing things in background -- //

boilWater(10000);
console.log(`chop carrot`);

function boilWater(time) {
  console.log("boiling...");

  // Hey JS give that setTimeout-fun to me, i'll handle it -chromeBrowser said to JS
  setTimeout(() => {
    console.log("done.");
  }, time);
}
```

<br>

## 310. Callback Hell<a id='310'></a>

<br>

## 311. Callback Hell - DOM Example<a id='311'></a>

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
// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);

  //
});
```

<br>

## 312. Promises<a id='312'></a>

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
- Think promises as "Best Choice food Restaurant"

```js
// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

// Think promises as "Best Choice food Restaurant"
const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was a error, value is false`);
  }
});

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
```

<br />

## 313. Important Unsplash API update !!!!<a id="313"></a>

<br />

## 314. Reject Example<a id="314"></a>

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
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <h1>Asynchronous Javascript</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello Javascript</h1>
    <div class="img-container">
      <!-- <img src="https://source.unsplash.com/random" alt="random image" /> -->
    </div>
    <button class="btn">click me</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js
- internet address api "https://source.unsplash.com/random"

```js
// callbacks, promises, async/await
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((taco) => container.appendChild(taco))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
}
```

<br />

## 315. Promises - DOM Example<a id="315"></a>

- index.html

```html

```

---

- app.js

```js

```

<br />

## 316. Async/Await<a id="316"></a>

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
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <h1>Asynchronous Javascript</h1>
    <h1 class="one">hello world</h1>
    <h1 class="two">hello people</h1>
    <h1 class="three">hello Javascript</h1>
    <div class="img-container">
      <!-- <img src="https://source.unsplash.com/random" alt="random image" /> -->
    </div>
    <button class="btn">click me</button>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js

```

<br />
````

```

```
