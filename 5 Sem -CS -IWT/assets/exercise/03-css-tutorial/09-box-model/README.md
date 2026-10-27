#### 113. [Box Model - Intro](#113)

#### 114. [CSS Box Model - Padding](#114)

#### 115. [CSS Box Model - Margin](#115)

#### 116. [CSS Box Model - Border](#116)

#### 117. [Border-radius Negative Margin](#117)

#### 118. [Outline Property](#118)

#### 119. [Border Hack](#119)

---

<br>

### 113. Box Model - Intro<a id="113"></a>

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

### 114. CSS Box Model - Padding<a id="114"></a>

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
    <h1>hello i would like to learn about css box model !!!!!!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat
      itaque consequatur, voluptatibus architecto sit? Saepe earum iure soluta
      ratione.
    </p>
  </body>
</html>
```

---

- In styles.css

```css
/* 
CSS BOX MODEL
*/
h1,
p {
  color: white;
}

h1 {
  background: red;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 50px;
}
p {
  background: blue;
  /* padding: 40px; */
  /* padding: 30px 60px; */
  padding: 5px 20px 50px 40px;
}
```

<br>

### 115. CSS Box Model - Margin<a id="115"></a>

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
    <h1>hello i would like to learn about css box model !!!!!!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat
      itaque consequatur, voluptatibus architecto sit? Saepe earum iure soluta
      ratione.
    </p>
  </body>
</html>
```

---

- In styles.css

```css
/* 
CSS BOX MODEL, PADDING, MARGIN, BORDER
*/

* {
  margin: 0;
}
h1,
p {
  color: white;
}

h1 {
  background: red;
  padding: 20px;
  margin: 3rem;
}
p {
  background: blue;
  /* margin: 20px 40px; */
  margin: 4rem 4px 50px 10px;
  /* padding: 40px; */
  /* padding: 30px 60px; */
  padding: 5px 20px 50px 40px;
}
```

<br>

### 116. CSS Box Model - Border<a id="116"></a>

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
    <h1>hello i would like to learn about css box model !!!!!!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat
      itaque consequatur, voluptatibus architecto sit? Saepe earum iure soluta
      ratione.
    </p>
  </body>
</html>
```

---

- In styles.css

```css
/* 
CSS BOX MODEL, PADDING, MARGIN, BORDER
*/

* {
  margin: 0;
}
h1,
p {
  color: white;
}

h1 {
  background: red;
  padding: 20px;
  margin: 3rem;
  /* border-style: solid;
  border-width: 10px;
  border-color: chartreuse; */
  /* border-bottom: 0.5rem dotted blue; */
  border-bottom-style: double;
  border-bottom-color: green;
  border-bottom-width: 20px;
}
p {
  background: blue;
  border: 1rem dashed red;
  /* margin: 20px 40px; */
  margin: 4rem 4px 50px 10px;
  /* padding: 40px; */
  /* padding: 30px 60px; */
  padding: 5px 20px 50px 40px;
}
```

<br>

### 117. Border-radius Negative Margin<a id="117"></a>

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
    <h1>hello i would like to learn about css box model !!!!!!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat
      itaque consequatur, voluptatibus architecto sit? Saepe earum iure soluta
      ratione.
    </p>
  </body>
</html>
```

---

- In styles.css

```css
/* 
BORDER-RADIUS, NEGATIVE MARGIN  
*/

h1,
p {
  color: white;
}

h1 {
  background: red;
  padding: 10px;
  border: 15px solid black;
  border-radius: 30px;
}
p {
  background: blue;
  padding: 15px;
  border: 7px dotted green;
  border-radius: 50%;
  margin-top: -50px;
}
```

<br>

### 118. Outline Property<a id="118"></a>

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
    <div class="links">
      <a href="#" id="one">no outline</a>
      <a href="#" id="two"> outline</a>
    </div>
  </body>
</html>
```

---

- In styles.css

```css
/* 
OUTLINE, OFFSET
*/

.links {
  margin: 3rem;
}
a {
  background: #689f3f;
  text-decoration: none;
  padding: 1.2rem 1.5rem;
  color: #222;
  text-transform: uppercase;
  margin: 0 20px;
}
#one {
  border: 0.2rem solid #222;
  outline: 0.2rem solid red;
  outline-offset: -10px;
}
#two {
  outline-width: 0.2rem;
  outline-color: #222;
  outline-style: solid;
  outline-offset: -10px;
}
```

<br>

### 119. Border Hack<a id="119"></a>

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
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
    <h2>hello world</h2>
  </body>
</html>
```

---

- In styles.css

```css
/* 
Border Hack

*/

* {
  border: 2px solid red;
}
```

<br>
