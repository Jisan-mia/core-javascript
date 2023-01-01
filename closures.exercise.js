// exercise 1 : // what will it show: "John" or "Pete"?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();
/*
answer: Pete
- the function uses the most recent value of variable name
*/

// example 2: Write function sum that works like this: sum(a)(b) = a+b
function sum(a) {
  return function (b) {
    return a+b
  }
}
console.log(sum(1)(2)) // 3
