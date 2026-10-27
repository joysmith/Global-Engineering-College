# How to setup fontaweson icon selfhosting

- Go to fontawesome ->Docs ->web ->Host Yourself - Web Fonts ->Download the Font Awesome v6 files => free for web

<br>

- Extract the zip file and move to project folder
- In index.html add the path

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>

    <!--How to set fontawesome icons path -->
    <link rel="stylesheet" href="./fontawesome-free-6.0.0-web/css/all.css" />

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body></body>
</html>
```

<br>

## How to place fontawesome icon

- Got to fontawesome, in search option search icon, click on it. copy code and place in project

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Icons</title>

    <!-- icons -->
    <link rel="stylesheet" href="./fontawesome-free-6.0.0-web/css/all.css" />

    <!-- styles -->
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <!-- How to place fontawesome icon -->
    <i class="fa-solid fa-house"></i>
    <i class="fa-solid fa-mug-saucer special"></i>
  </body>
</html>
```
