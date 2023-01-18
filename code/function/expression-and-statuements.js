// Expression
// A unit of code that results in a value
// it doesn't have to same to a variable

var a = 5+2 // this line of code is an expression because it returns a value also just 5+2


// statements
// statements doesn't result in a value like if statement
// if statement condition expression is expression cause it return a value true or false

if(a === 7) {
  // a === 7 is an expression
  // if(a ===7) {} is a statement
}


// in javascript because of functions are objects, we have both function statements an function expressions

// function statement
/*
- greet function is in the global execution context
- in creation phase great function with its reference hoisted on top
- thats why on the greet() function can be invoked before the function statement in execution phase
- because already the memory has great reference
*/
greet(); // hi

function greet() {
  console.log('hi')
}


// function expression
/*
- we know expression is unit of code that results in value
- anonymousGreet is a variable where we are assigning a anonymous function
- well in the global execution context in creation phase
- javascript setups functions and variables in the memory
- Creation Phase
  - javascript reads code line by line
  - finds anonymousGreet variables and setups in memory with value of undefined
- Execution phase
  - executes code line by line
  - sees an anonymous function being assigned to anonymousGreet variables, and by assignment(=) operator we are saying return something that is in the right and assign to the variables
  - = operator results in value,
  - so thats an function expression
- since in the creation phase anonymousGreet is just a variable assigned undefined,
- we cant invoke it(undefined) before executing the line where function expression happens
*/
// anonymousGreet(); // returns undefined is not a function
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet(); // hi


// pass a function expression to another function

function log(a) {
  a()
}

log(function() {
  console.log('hi');
})
