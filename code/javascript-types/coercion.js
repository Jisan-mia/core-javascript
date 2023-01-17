// Coercion
// converting a value from one type to another
// this happens quite open in javascript because it's dynamically typed


var a = 1 + 2
console.log(a) // 3



var b = 1 + '2'
console.log(b) // '12'

/*
Wait! what?
- how the result of 1 + '2' is 12
- what happened was, the first parameter of + operator was coerced by javascript engine into a string
- in memory, the string 1 and the number 1 look nothing alike
- the javascript engine do the guess: when you call the plus operator function, and you give a number and a string, the engine make a choice to try to coerce that number
*/

