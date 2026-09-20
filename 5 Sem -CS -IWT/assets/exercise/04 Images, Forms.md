## Documentation
1. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)
2. [W3School](https://www.w3schools.com/html/html_headings.asp)

<br>
<br>


## 4. Images, Forms

```html
<!DOCTYPE html>
<html>

<head>
    <title>Student Registration</title>
</head>

<body>

    <!-- College Logo -->
    <h2>Image Example</h2>
    <img src="./images/logo.png" alt="College Logo" width="150" height="150">


    <!-- Registration Form -->
    <h2>Student Registration Form</h2>

    <form action="/submit" method="post">

        <!-- Text Input -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <br><br>


        <!-- Password Input -->
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd">
        <br><br>


        <!-- Radio Buttons -->
        <p>Gender:</p>

        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>

        <br><br>


        <!-- Checkbox -->
        <input type="checkbox" id="agree" name="agree">
        <label for="agree">I agree to the terms</label>

        <br><br>


        <!-- Drop-down List -->
        <label for="branch">Branch:</label>

        <select id="branch" name="branch">
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
        </select>

        <br><br>


        <!-- Multi-line Text Input -->
        <label for="msg">Message:</label>
        <br>

        <textarea id="msg" name="msg" rows="4" cols="30"></textarea>

        <br><br>


        <!-- Form Buttons -->
        <input type="submit" value="Register">
        <input type="reset" value="Clear">

    </form>

</body>

</html>
```

<br>


### Objective: Design Simple Student Academic Portal

<img src="./images/04 Images, Forms.png" width="900">

<br>

## 5. XHTML

```xhtml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>XHTML Example</title>
</head>
<body>
    <p>All tags must be closed, like this line break: <br /></p>
    <img src="logo.png" alt="Logo" />
    <p>Attributes must always use quotes: <input type="text" value="demo" /></p>
</body>
</html>

```

<br>
<br>

## 6. Meta Tags, Character Entities

```html

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="A page about HTML basics">
    <meta name="keywords" content="HTML, web, tutorial">
    <meta name="author" content="Student Name">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meta Tags Demo</title>
</head>
<body>
    <p>Copyright &copy; 2026 My College</p>
    <p>Use &lt;p&gt; tags for paragraphs.</p>
    <p>5 &lt; 10 and 10 &gt; 5</p>
    <p>Non-breaking&nbsp;space example</p>
    <p>She said, &quot;HTML is fun!&quot;</p>
</body>
</html>

````

<br>
<br>

## 7. Frames and Frame Sets

```html
<!DOCTYPE html>
<html>
<frameset cols="25%,75%">
    <frame src="menu.html" name="menuFrame">
    <frame src="content.html" name="contentFrame">
    <noframes>
        <body>Your browser does not support frames.</body>
    </noframes>
</frameset>
</html>
```

<br>
<br>

## 8. Browser Architecture and Web Site Structure

```html

<!-- File: index.html (root folder) -->
<!DOCTYPE html>
<html>
<body>
    <h1>My College Website</h1>
    <nav>
        <a href="pages/about.html">About</a> |
        <a href="pages/contact.html">Contact</a> |
        <a href="images/logo.png">View Logo</a>
    </nav>
</body>
</html>

<!-- File: pages/about.html -->
<!DOCTYPE html>
<html>
<body>
    <h1>About Us</h1>
    <a href="../index.html">Back to Home</a>
</body>
</html>
```

<br>
<br>

## 9. Overview and Features of HTML5

```html

<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Features Demo</title>
</head>
<body>
    <header>
        <h1>My Blog</h1>
        <nav>
            <a href="#home">Home</a> | <a href="#about">About</a>
        </nav>
    </header>

    <section>
        <article>
            <h2>HTML5 is Here</h2>
            <p>Semantic tags make code more readable.</p>
        </article>
        <aside>
            <p>Related: Web Standards</p>
        </aside>
    </section>

    <h3>New Form Input Types</h3>
    <form>
        <label>Email: <input type="email" name="email"></label><br>
        <label>Birth Date: <input type="date" name="dob"></label><br>
        <label>Age: <input type="number" name="age" min="1" max="100"></label><br>
        <label>Volume: <input type="range" name="vol" min="0" max="10"></label>
    </form>

    <h3>Media</h3>
    <video width="300" controls>
        <source src="sample.mp4" type="video/mp4">
    </video>

    <footer>
        <p>&copy; 2026 My Blog</p>
    </footer>
</body>
</html>
```