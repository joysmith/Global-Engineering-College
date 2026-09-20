## Documentation
1. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)
2. [W3School](https://www.w3schools.com/html/html_headings.asp)

<br>

1. [How to create table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

2. [How to create form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

3. [What are the different input tag type attribute inside form tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

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
