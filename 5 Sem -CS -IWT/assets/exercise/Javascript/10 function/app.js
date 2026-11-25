// Closure- an act or process of closing something -hospitals that face closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar} `);
  }
  return inner;
  inner();
}
// console.log(privateVar);

// 1way to invoke returned inner-fun
outer()();

// 2way to invoke returned inner-fun
const value = outer();
console.log(value);
value();
