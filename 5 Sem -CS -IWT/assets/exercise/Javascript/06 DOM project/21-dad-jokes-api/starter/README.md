# Dad Jokes Project

<br>

## HTML Structure

- div.container
  - button.btn
  - p.result(dummy text)
    <br>

## External Data

- the main idea the same, just external data

<br>

## What is an API?

- THINKING: think API's as a specific URL, where we can retrive our data

- external data is often describe as api

- [What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

<br>

## 3 url-address that return specific data

- https://course-api.com/javascript-store-products

  - get store products

- https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog

  - get single store product

- https://randomuser.me/api/
  - random user

<br>

## API project depend on Docs

- important
- search engine - find in google the api docs
- test in the browser

<br>

## Dad Jokes API Docs

- [Dad Jokes](https://icanhazdadjoke.com/api)

- random joke
- https://icanhazdadjoke.com/

<br>

### Select Elements

- select btn, result class
- check if both elements selected using console.log
- listen for click events

<br>

### FetchDadJoke Function

- create async function
- setup fetch
- set result.textContent = joke

```js
const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

<br>

### Loading

- set result equal to - 'Loading...'

<br>

### Error Handling

- try/catch block
- set result equal to - 'There was an error..'

<br>

### Check Status

- Fetch - only throws an error if cannot resolve
- Error response still a response
- check response.ok property
- throw new Error('Whoops!')
