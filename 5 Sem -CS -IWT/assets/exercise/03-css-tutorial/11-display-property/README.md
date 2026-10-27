#### 124. [Display Property Intro](#124)

#### 125. [Display Property](#125)

#### 126. [Basic Horizontal Centering](#126)

#### 127. [Mobile Navbar Example](#127)

#### 128. [Box-sizing : border-box](#128)

#### 129. [Display inline-block](#129)

#### 130. [Display:none, Opacity, Visibility](#130)

---

<br>

### 124. Display Property Intro<a id="124"></a>

> **_Business Objective: Layout_**

<img src="notes/app.png" >

| Technology    | Description     |
| ------------- | --------------- |
| `Language`    | html, css, js   |
| `Framework`   | -               |
| `Library`     | -               |
| `Text editor` | Vs code         |
| `Browser`     | Chrome, firefox |

<br>

### 125. Display Property<a id="125"></a>

> **_Business Objective: Layout_**

<img src="notes/1.png" >

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
    <!-- block element -->
    <div class="block">i'm block element</div>
    <h1 class="block">hello</h1>
    <p class="block">i'm block element</p>

    <!-- inline span element-->
    <span class="inline">i'm inline element hello world</span>
    <a href="#" class="inline">i'm inline element</a>
    <img src="./smoothie.jpeg" alt="" class="inline" width="100" />
  </body>
</html>
```

---

- In styles.css

```css
/* 
 ELEMENTS HAVE IT SET BY DEFAULT
BLOCK : Always starts a new line and spans full width
INLINE : Does not start a new line and spans only content

span: the length of something from one end to the other:
      the full extent of something from end to end; 
      the amount of space that something covers.
*/

.block {
  background: blue;
  color: white;

  /* default */
  display: block;

  /* setting element to inline */
  display: inline;
}
.inline {
  background: red;
  color: white;
  /* default */
  display: inline;

  /* setting element to block */
  display: block;
}
```

<br>

### 126. Basic Horizontal Centering<a id="126"></a>

> **_Business Objective: Layout_**

<img src="notes/2.png" >

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
    <div class="block">i'm block element</div>
    <h1 class="block">hello</h1>
    <p class="block">i'm block element</p>
    <span class="inline">i'm inline element hello world</span>
    <a href="#" class="inline">i'm inline element</a>
    <img src="./smoothie.jpeg" alt="" class="inline" width="100" />
  </body>
</html>
```

---

- In styles.css

```css
/* 
 HORIZONTAL CENTERING

*/

.block {
  background: blue;
  color: white;
  width: 300px;
  margin: 2rem auto;
  /* margin-left: auto; */
  /* margin-right: auto; */
}
.inline {
  background: red;
  color: white;
}
body {
  text-align: right;
}
```

<br>

### 127. Mobile Navbar Example<a id="127"></a>

> **_Business Objective: Layout_**

<img src="notes/3.png" >

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
    <ul class="navbar">
      <li><a href="#">home</a></li>
      <li><a href="#">about us</a></li>
      <li><a href="#">products</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </body>
</html>
```

---

- In styles.css

```css
/* 
 BLOCK:browser respects width/height, top/bottom margin
 INLINE:browser does not respect width/height, 
 top/bottom margin
 Navbar
list-type-type:property
descendant selectors
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* descendant selector */
ul li {
  /* how to remove bullet point from list */
  list-style-type: none;
}

ul li a {
  color: #f15025;
  text-decoration: none;
  letter-spacing: 2px;
  background: #222;

  /* set display to block because browser dont respect width, padding, margine of inline element */
  display: block;
  padding: 5px;
}
```

<br>

### 128. Box-sizing : border-box<a id="128"></a>

> **_Business Objective: Layout_**

<img src="notes/4.png" >

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
    <div class="box-1">i'm with border-box</div>
    <div class="box-2">i'm normal</div>
    <div class="box-3">i'm without border-box</div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
 box-sizing:border-box
 default content-box
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box-1,
.box-2,
.box-3 {
  width: 200px;
  height: 200px;
  color: white;
  font-size: 1.5rem;
}
.box-1 {
  background: red;
  padding: 20px;
  box-sizing: border-box;
}
.box-2 {
  background: blue;
}
.box-3 {
  background: green;
  padding: 20px;
}
```

<br>

### 129. Display inline-block<a id="129"></a>

> **_Business Objective: Layout_**

<img src="notes/5.png" >

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
    <h1>hello world</h1>
    <a href="#">link</a>
    <a href="#">link</a>
    <a href="#">link</a>
  </body>
</html>
```

---

- In styles.css

```css
/* 
 display:inline-block;
 does not start a new line
 browser respects margin,width,height
*/

a {
  font-size: 1.5rem;
  background: red;
  width: 40px;
  height: 40px;
  margin: 40px 10px;
  display: inline-block;
}
```

<br>

### 130. Display:none, Opacity, Visibility<a id="130"></a>

> **_Business Objective: Layout_**

<img src="notes/6.png" >

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
    <div class="none">none</div>
    <div class="opacity-1">opacity one</div>
    <div class="opacity-5">opacity 0.5</div>
    <div class="opacity-0">opacity 0</div>
    <div class="visibility">visibility</div>
    <h1>hello world</h1>
  </body>
</html>
```

---

- In styles.css

```css
/* 
 display:none - remove from the flow, hide element collapse the space
 opacity:0,visibility:hidden - hides element preserves the space
*/

div {
  background: #f15025;
  margin: 10px;
  color: white;
  font-size: 1.3rem;
}
.none {
  display: none;
}
.opacity-1 {
  opacity: 1;
}
.opacity-5 {
  opacity: 0.25;
}
.opacity-0 {
  opacity: 0;
}
.visibility {
  visibility: hidden;
}
```

<br>
