// Primitive data types are
/*
- String
- Number
- Boolean
- Null
- Undefined
- Symbol(es6)
*/

var a = 'javascript'
var b = a;

a = 'python'
console.log(a) // python
console.log(b) // javascript
/*
in the above code block, there is 2 variable a and b,
- we assigned 'javascript' to a
- a is assigned to b
- now 'python' has assigned to a

we get expected output, because when we assign a variable to another variable, primitive values copies the value to the another variable
*/