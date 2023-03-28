// using a function statement
function greeting(name) {
    console.log('Hello ' + name)
}
greeting('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name)
}
greetFunc('John')

// using an Immediately Invoked Function Expression or IIFE
var greet = function(name) {
    return 'Hello ' + name
}('John');
console.log(greet)

// classic IIFE example using grouping operator()
var myName = 'Jisan'

(function(name) {
    console.log('hello ', name)
}('jisan'))

