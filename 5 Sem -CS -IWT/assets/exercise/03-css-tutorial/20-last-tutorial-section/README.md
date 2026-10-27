#### 189. [Intro](#189)

#### 190. [CSS Variables](#190)

#### 191. [FontAwesome Icons - Intro](#191)

#### 192. [FontAwesome Icons - Self Hosting Option](#192)

#### 193. [FontAwesome Icons - CDN Link](#193)

#### 194. [FontAwesome Icons - SVG Approach](#194)

#### 195. [FontAwesome Icons - Versions](#195)

#### 196. [Text-Shadow Box-shadow](#196)

#### 197. [Browser Prefixes](#197)

#### 198. [Semantic HTML](#198)

#### 199. [object-fit](#199)

#### 200. [Emmet Workflow](#200)

#### 201. [:is()](#201)

#### 202. [:not()](#202)

#### 203. [HSL Color Values](#203)

#### 204. [Five Server Extension](#204)

---

<br>

### 189. Intro<a id="189"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

<br>

### 190. CSS Variables<a id="190"></a>

> **_Business Objective: Layout_**

<img src="notes/1.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Tutorial</title>
    <!-- icons -->
    <link rel="stylesheet" href="./fontawesome-free-5.12.1-web/css/all.css" />
    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>hello world</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, soluta.
    </p>
    <h2>hello world</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, soluta.
    </p>
    <h3>hello world</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, soluta.
    </p>
    <div class="main">
      <p class="main-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas
        dolor aut earum, doloremque ab.
      </p>
    </div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
CSS VARIABLES AKA CUSTOM PROPERTIES

allow to store value in one place and re-use it later 
How to declare css variable
--varName:value

How to access css variable value
property:var(--varName);

scope
:root{} === global variable
element === local variable
any property
*/

/* Here the root is our html document */
:root {
  --primaryColor: #2539f1;
  --cl-secondary: green;
  --mainTransition: all 1s linear;
  --mainSpacing: 5px;
}
h1 {
  color: var(--primaryColor);
}
h2 {
  color: var(--primaryColor);
}
h3 {
  color: var(--primaryColor);
  transition: var(--mainTransition);
}
p {
  letter-spacing: var(--mainSpacing);
  transition: var(--mainTransition);
}

h3:hover {
  color: var(--cl-secondary);
}

/* how to define local variable */
div {
  --primaryRed: red;
}
.main-text {
  color: var(--primaryRed);
}
h3 {
  color: var(--primaryRed);
}
```

<br>

### 191. FontAwesome Icons - Intro<a id="191"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>

    <!-- icons -->
    <link rel="stylesheet" href="./fontawesome6.0.0/css/all.css" />

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-mug-saucer special"></i>
  </body>
</html>
```

---

- In styles.css

```css
/* .fa-solid {
  font-size: 2rem;
  color: red;
} */
.fa-house {
  font-size: 2rem;
  color: red;
}
.special {
  font-size: 4rem;
  color: blue;
}
```

<br>

### 192. FontAwesome Icons - Self Hosting Option<a id="192"></a>

> **_Business Objective: Layout_**

<img src="notes/2.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>

    <!-- How to setup Font awesome icons cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-mug-saucer special"></i>
  </body>
</html>
```

---

- In styles.css

```css
/* .fa-solid {
  font-size: 2rem;
  color: red;
} */

.fa-house {
  font-size: 2rem;
  color: red;
}
.special {
  font-size: 4rem;
  color: blue;
}
```

<br>

### 193. FontAwesome Icons - CDN Link<a id="193"></a>

> **_Business Objective: Layout_**

<img src="notes/3.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>
    <!-- icons -->
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    /> -->
    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-mug-saucer special"></i>

    <!-- no need of cdn or self-hosting for svg placement -->
    <!-- How to place svg icon -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M512 32H120c-13.25 0-24 10.75-24 24L96.01 288c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zM512 224h-32V96h32c35.25 0 64 28.75 64 64S547.3 224 512 224zM560 416h-544C7.164 416 0 423.2 0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48C576 423.2 568.8 416 560 416z"
      />
    </svg>
  </body>
</html>
```

---

- In styles.css

```css
/* .fa-solid {
  font-size: 2rem;
  color: red;
} */
.fa-house {
  font-size: 2rem;
  color: red;
}
.special {
  font-size: 4rem;
  color: blue;
}
```

<br>

### 194. FontAwesome Icons - SVG Approach<a id="194"></a>

> **_Business Objective: Layout_**

<img src="notes/4.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html

```

---

- In styles.css

```css

```

<br>

### 195. FontAwesome Icons - Versions<a id="195"></a>

> **_Business Objective: Layout_**

<img src="notes/5.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>
    <!-- icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-mug-saucer special"></i>
    <!-- version 5 -->
    <i class="fas fa-home"></i>
  </body>
</html>
```

---

- In styles.css

```css
/* .fa-solid {
  font-size: 2rem;
  color: red;
} */
.fa-house {
  font-size: 2rem;
  color: red;
}
.special {
  font-size: 4rem;
  color: blue;
}
```

<br>

### 196. Text-Shadow Box-shadow<a id="196"></a>

> **_Business Objective: Layout_**

<img src="notes/6.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Tutorial</title>

    <!-- fontawesome self-hosting icons  link-->
    <link rel="stylesheet" href="./fontawesome-free-5.12.1-web/css/all.css" />
    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>main heading</h1>
    <div class="box"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
text-shadow: https://html-css-js.com/css/generator/text-shadow/
box-shadow: https://www.cssmatic.com/box-shadow
*/

h1 {
  text-shadow: 0px 0px 6px red;
}
.box {
  width: 200px;
  height: 200px;
  background: blue;
  box-shadow: 3px 5px 5px green;
}
```

<br>

### 197. Browser Prefixes<a id="197"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html

```

---

- In styles.css

```css

```

<br>

### 198. Semantic HTML<a id="198"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html

```

---

- In styles.css

```css

```

<br>

### 199. object-fit<a id="199"></a>

> **_Business Objective: Layout_**

<img src="notes/7.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>CSS Tutorial</title>
    <!-- icons -->
    <link rel="stylesheet" href="./fontawesome-free-5.12.1-web/css/all.css" />
    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one">
      <img src="./images/product-1.jpeg" alt="" />
      <h1>product</h1>
    </div>
    <div class="one">
      <img src="./images/product-2.jpeg" alt="" />
      <h1>product</h1>
    </div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
object-fit: cover,contain, fill, none, scale-down
*/

img {
  width: 100%;
  display: block;
  height: 300px;
  object-fit: cover;
}
.one {
  float: left;
  width: 45%;
  margin-right: 5%;
}
.two {
  float: left;
  width: 45%;
  margin-right: 5%;
}
```

<br>

### 200. Emmet Workflow<a id="200"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html

```

---

- In styles.css

```css

```

<br>

### 201. :is()<a id="201"></a>

> **_Business Objective: Layout_**

<img src="notes/8.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HSL</title>

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <nav>
      <h2>heading</h2>
    </nav>
    <header>
      <h2>heading</h2>
    </header>
    <section>
      <h2>heading</h2>
    </section>
    <h2>special heading</h2>
  </body>
</html>
```

---

- In styles.css

```css
/* 
:is()

The :is() CSS pseudo-class function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list.


*/
```

<br>

### 202. :not()<a id="202"></a>

> **_Business Objective: Layout_**

<img src="notes/9.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HSL</title>

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="special">
      <h1>hello world</h1>
      <h2>hello world</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas
        iusto saepe, ex ipsa minima sit earum deserunt natus veniam.
      </p>
    </div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
:not()

The :not() CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, 


*/

.special :not(h1) {
  color: red;
}
```

<br>

### 203. HSL Color Values<a id="203"></a>

> **_Business Objective: Layout_**

<img src="notes/10.png" width="400">

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

---

- In index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>HSL</title>

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-4"></div>
    <div class="box box-5"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
HSL stands for hue, saturation, and lightness.

HSL color values are specified with: 
hsl(hue, saturation, lightness).

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, 240 is blue.


Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.

Lightness is also a percentage; 0% is black, 100% is white.
*/

* {
  margin: 0;
}

.box {
  width: 100px;
  height: 100px;
  margin: 1rem;
  border: 1px solid orange;
}

.box-1 {
  background: hsl(0, 100%, 50%);
}
.box-2 {
  background: hsl(120, 100%, 50%);
}
.box-3 {
  background: hsl(120, 40%, 50%);
}
.box-4 {
  background: hsl(120, 100%, 100%);
}
.box-5 {
  background: hsl(120, 100%, 0%);
}
```

<br>

### 204. Five Server Extension<a id="204"></a>

<br>
