# Setting Up the dev environment
1. Download the [Vs code](https://code.visualstudio.com/download?_exp_download=fb315fc982)
2. Vs code Extension
    - esbenp.prettier-vscode
    - formulahendry.auto-close-tag
    - hex-ci.stylelint-plus
    - dbaeumer.vscode-eslint
    - naumovs.color-highlight
    - ritwickdey.LiveServer
    - erikphansen.vscode-toggle-column-selection
    - file-icons


<br>
<br>


# Documentation
1. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)
2. [W3School](https://www.w3schools.com/html/html_headings.asp)
3. [Devdocs](https://devdocs.io/html/reference/elements/head)


<br>
<br>


## 1. Basics of HTML

- The head-tag SECTION tell's browser, what this web page is all about

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <h2>Learning the Basics</h2>
    <p>This is a paragraph. HTML uses tags to structure content.</p>
    <hr>
    <p>Line one<br>Line two, right after a break.</p>
</body>
</html>
```


1. How to give heading to html

- [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [w3s](https://www.w3schools.com/html/html_headings.asp)
- [dev](https://devdocs.io/html/element/heading_elements)

2. [How to give break to lines](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br#:~:text=Technical%20summary-,%3A%20The%20Line%20Break%20element,division%20of%20lines%20is%20significant "mdn")

3. [How to put horizonal line](https://devdocs.io/html/element/hr)

4. [How to set horizontal line attribute (depricated)](https://devdocs.io/html/element/hr)

5. [What are HTML <meta> Tag inside head section, used by chrome](https://www.w3schools.com/tags/tag_meta.asp)

6. [How to use paragraph tag](https://www.keybr.com/)[Typing practice](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

7. [How to italic text using emphasis tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)

8. [How to bold text using strong tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)

9. [How to make bullet list using unordered list tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

10. [How to make ordered list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

11. [How to insert image in webage](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

12. [How to use anchor tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

<br>
<br>

## 2. Formatting and Fonts, Commenting Code, Color

```html
<!DOCTYPE html>
<html>
<body>
    <!-- This is a comment, not shown on the page -->
    <p><b>Bold text</b> and <strong>strong text</strong></p>
    <p><i>Italic text</i> and <em>emphasized text</em></p>
    <p>H<sub>2</sub>O and E=mc<sup>2</sup></p>
    <p>This is <mark>highlighted</mark> text.</p>
    <p><font color="blue">This text is blue</font></p>
    <!-- TODO: ask students why <font> is considered outdated -->
</body>
</html>
```

<br>
<br>

## 3. Hyperlink, Lists, Tables

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Useful Links</h2>
    <a href="https://www.google.com" target="_blank">Visit Google</a><br>
    <a href="mailto:test@example.com">Email Us</a>

    <h2>My Favorite Subjects</h2>
    <ol>
        <li>Data Structures</li>
        <li>Web Technology
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Databases</li>
    </ol>

    <h2>Class Timetable</h2>
    <table border="1">
        <tr>
            <th>Day</th>
            <th>Subject</th>
        </tr>
        <tr>
            <td>Monday</td>
            <td colspan="1">OOP</td>
        </tr>
        <tr>
            <td rowspan="2">Tuesday</td>
            <td>IWT</td>
        </tr>
        <tr>
            <td>DBMS</td>
        </tr>
    </table>
</body>
</html>
```

<br>
<br>

## 4. Images, Forms

```html
<!DOCTYPE html>
<html>
<body>
    <h2>Image Example</h2>
    <img src="logo.png" alt="College Logo" width="150" height="150">

    <h2>Student Registration Form</h2>
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"><br><br>

        <p>Gender:</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <input type="checkbox" id="agree" name="agree">
        <label for="agree">I agree to the terms</label><br><br>

        <label for="branch">Branch:</label>
        <select id="branch" name="branch">
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
        </select><br><br>

        <label for="msg">Message:</label><br>
        <textarea id="msg" name="msg" rows="4" cols="30"></textarea><br><br>

        <input type="submit" value="Register">
        <input type="reset" value="Clear">
    </form>
</body>
</html>
```

<br>
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