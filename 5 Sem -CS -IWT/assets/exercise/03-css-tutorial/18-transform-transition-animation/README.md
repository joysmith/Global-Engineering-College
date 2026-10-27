#### 174. [Intro](#174)

#### 175. [transform : translate()](#175)

#### 176. [Translate Hero Example](#176)

#### 177. [transform:scale()](#177)

#### 178. [transform:rotate()](#178)

#### 179. [tranform:skew()](#179)

#### 180. [Transition Property](#180)

#### 181. [Multiple Transitions](#181)

#### 182. [Transition - Delay, Shorthand, All Properties](#182)

#### 183. [Transition-timing-function](#183)

#### 184. [Animation](#184)

#### 185. [Animation-fill-mode](#185)

---

<br>

### 174. Intro<a id="174"></a>

> **_Business Objective: Layout_**

<img src="notes/app.gif" >

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

<br>

### 175. transform : translate()<a id="175"></a>

> **_Business Objective: Layout_**

<img src="notes/1.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transform:translate(),scale()rotate(),skew()
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}

.one {
  background: red;
  transform: translateX(50%);
}

.two {
  background: blue;
  transform: translateY(-40px);
}

.three {
  background: green;
  /* transform: translateX(75px); */
  transform: translate(200px, 300px);
}
```

<br>

### 176. Translate Hero Example<a id="176"></a>

> **_Business Objective: Layout_**

<img src="notes/2.gif" >

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
    <title>Transform</title>

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="hero">
      <div class="hero-center">
        <h1>web dev</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          molestiae ex sit modi voluptates, veniam libero iusto delectus sunt
          deserunt.
        </p>
      </div>
    </div>
  </body>
</html>
```

---

- In styles.css

```css
/* The inset CSS property is a shorthand 
that corresponds to the top, right, bottom,left properties. 
*/

* {
  margin: 0;
}

.hero {
  min-height: 100vh;
  position: relative;
}

.hero-center {
  position: absolute;
  border: 2px solid red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
}
```

<br>

### 177. transform:scale()<a id="177"></a>

> **_Business Objective: Layout_**

<img src="notes/3.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transform:translate(),scale()rotate(),skew()
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}
.one {
  background: red;
  transform: scaleX(0.5);
}
.two {
  background: blue;
  transform: scaleY(1.5);
}
.three {
  background: green;
  transform: scale(1.2, 1.5);
  transform: scale(2);
}
```

<br>

### 178. transform:rotate()<a id="178"></a>

> **_Business Objective: Layout_**

<img src="notes/4.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transform:translate(),scale()rotate(),skew()
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}
.one {
  background: red;
  transform: rotateZ(20deg);
}
.two {
  background: blue;
  transform: rotate(380deg);
}
.three {
  background: green;
  transform: rotateY(90deg);
}
```

<br>

### 179. tranform:skew()<a id="179"></a>

> **_Business Objective: Layout_**

<img src="notes/5.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transform:translate(),scale()rotate(),skew()
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}
.one {
  background: red;
  transform: skewX(40deg);
}
.two {
  background: blue;
  transform: skewY(40deg);
}
.three {
  background: green;
  transform: skew(40deg, 40deg);
}
```

<br>

### 180. Transition Property<a id="180"></a>

> **_Business Objective: Layout_**

<img src="notes/6.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transition: change over time
transition-property:
transition-duration:
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}
div:hover {
  background: coral;
}
.one {
  background: red;
}
.two {
  background: blue;
}
.three {
  background: green;
  transition-property: background;
  transition-duration: 4s;
}
```

<br>

### 181. Multiple Transitions<a id="181"></a>

> **_Business Objective: Layout_**

<img src="notes/7.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transition: change over time
transition-property:
transition-duration:
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}
div:hover {
  background: coral;
}
.one {
  background: red;
}
.two {
  background: blue;
}
.three {
  background: green;
  transition-property: background, border-radius;
  transition-duration: 4s, 2s;
}
.three:hover {
  border-radius: 50%;
}
```

<br>

### 182. Transition - Delay, Shorthand, All Properties<a id="182"></a>

> **_Business Objective: Layout_**

<img src="notes/8.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
transition: change over time
transition-delay:
shorthand
*/

div {
  width: 150px;
  height: 150px;
  display: inline-block;
}

.one {
  background: red;
}
.two {
  background: blue;
}
.three {
  background: green;
  transition: all 2s;
}
.three:hover {
  background: coral;
  border-radius: 50%;
  transform: scale(1.2);
}
```

<br>

### 183. Transition-timing-function<a id="183"></a>

> **_Business Objective: Layout_**

<img src="notes/9.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="default">default</div>
    <div class="ease">ease</div>
    <div class="linear">linear</div>
    <div class="ease-in">ease-in</div>
    <div class="ease-out">ease-out</div>
    <div class="ease-in-out">ease-in-out</div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
how the transition takes place
transition-timing-function
transition:all 3s here 5s;
ease = default
ease = slow start, fast, slow end
linear = same speed start to end
ease-in = slow start
ease-out = slow end
ease-in-out = slow start,fast, slow end
 
*/

div {
  width: 100px;
  height: 100px;
  background: blue;
  font-size: 24px;
  color: white;
  margin: 5px;
  transition: all 2s;
}
div:hover {
  transform: translateX(100px);
}
.ease {
  transition-timing-function: ease;
}
.linear {
  transition-timing-function: linear;
}
.ease-in {
  transition-timing-function: ease-in;
}
.ease-out {
  transition-timing-function: ease-out;
}
.ease-in-out {
  transition-timing-function: ease-in-out;
}
```

<br>

### 184. Animation<a id="184"></a>

> **_Business Objective: Layout_**

<img src="notes/10.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="transition">transition</div>
    <div class="animation">animation</div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
Transtion 0 = 100%
from start state to end state
ANIMATION 0 1% 2% .... 100%
 multiple states
*/

div {
  width: 200px;
  height: 100px;
  color: white;
  margin: 10px;
}
.transition {
  background: red;
  transition: all 2s linear;
}
.transition:hover {
  background: yellow;
  transform: translateX(100px);
}
.animation {
  background: blue;
  /* animation-name: move;
  animation-duration: 10s;
  animation-iteration-count: 3; */
  animation: move 5s infinite;
}

@keyframes move {
  0% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(100px);
    background: red;
  }
  75% {
    transform: translateX(-200px);
    background: yellow;
  }
  100% {
    transform: translateX(20px);
    background: green;
  }
}
```

<br>

### 185. Animation-fill-mode<a id="185"></a>

> **_Business Objective: Layout_**

<img src="notes/11.gif" >

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

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="animation">animation</div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
animation-fill-mode:what values are applied by the animation outside the time it is executing. 
*/

div {
  width: 200px;
  height: 100px;
  color: white;
  margin: 10px;
  opacity: 0;
}

.animation {
  background: blue;
  animation: move 5s 2;
  animation-fill-mode: forwards;
}

@keyframes move {
  0% {
    opacity: 0.1;
  }
  25% {
    transform: translateX(200px);
    opacity: 0.25;
  }
  50% {
    transform: translateX(-100px);
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    transform: translateX(20px);
    opacity: 1;
  }
}
```

<br>
