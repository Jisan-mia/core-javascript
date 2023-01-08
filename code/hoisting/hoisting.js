/*
Hoisting
 - var, let, const
 - function
*/

// example of var in hoisting
// when we declare variable with var, javascript pulls out that variable declaration on top 
// of the scope of that variable and assigns undefined as value
console.log(a) // undefined, 
var a; // variable declaration
a = 'jisan' // value assignment


// examples of let/const in hoisting
// in let declaration, javascript also pulls out that variable declaration on top of it scope
// but don't assign undefined as value here
// instead javascript assigns undefined where let variable was declared then assigns it's value
// thats why we cann't access variable with let/const before initialization
// console.log(b) // reference error
// let b = 'hello'

// examples of function in hoisting
// functions definitions are also hoisted on top of its scope
// thats why we can still call function before it's definition
myFunc() // function call
function myFunc() { // function definitions
  console.log('I Love JavaScript');
}

// anonymous function 
// here we will get an error, this time we assign a function onto a variable
// we know hoisting, now variable will be hoisted on top of it's scope and since its const variable, it wont be assigned undefined here
// instead where the variable declaration is
// thats why we get's error here
myAnotherFunc() // reference error
const myAnotherFunc = function() {
	let language = 'JavaScript'
	console.log(language)
}

// functions
// what do you think myFunc1 will return?
// 'JavaScript' Right?
// No, it will return JAVA
// because, var language declaration inside myFunc1 hoisted on top of its scope(myFunc) and assigns undefined
// now language is undefined the if condition is true > inside if block LANGUAGE being assigned onto language
// thats how the function returns "JAVA"
const LANGUAGE = 'JAVA'
const language = 'JavaScript'
function myFunc1() {
  if(!language) {
    var language = LANGUAGE
  }
  return language
}
console.log(myFunc1())