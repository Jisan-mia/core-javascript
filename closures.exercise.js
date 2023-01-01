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
