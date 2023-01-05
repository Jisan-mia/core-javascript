// Currying
/*
- Currying is the process of creating a copy of a function but with a fixed parameter.
- Currying is when you have a function with multiple argument, or you have function with arguments which returns another function with arguments, and then you create a new function that calls the main function with a parameter that is bound to the first argument to the main function
- The goal of currying is to get a function with multiple arguments down to one function with one parameter through the process of copying and binding.
- Benefits: It is about creating an abstract function, from which you can create more specific functions without having to repeatedly write the main function throughout the program. This will make your code cleaner, more efficient, and more readable, which is the goal of functional programming.

*/


// Currying Using .bind()
/*
* For the purpose of currying we will make ‘this’ the first parameter of .bind(). That is because .bind() makes its first passed in argument the value of ‘this’ in the called function. That is irrelevant when we use .bind() for currying purposes, we just need a placeholder, which we will call ‘this’ because that is the accepted standard. Let’s move on
*/

let addTwoNum = (a,b) => a+b

addTwoNum(1,2) // 3
const add1 = addTwoNum.bind(this, 2)
const add2 = addTwoNum.bind(this, 5)
console.log(add1(3)) // 5
console.log(add2(2)) // 7



// Currying Using Closures
/*
- We will pass in an argument to a function, and that function will return a function which takes another argument.
- That is actually what currying literally is
- It is breaking down functions with many arguments into more specific functions that each have only one argument.

- The key thing to remember about all this is that the closure gets stored in the returned function’s execution context at the time it was created.
*/

const mulTwoNum = a => b => a * b;
const mul2 = mulTwoNum(2)
console.log(mul2(5)); // 10

