// Primitive data types are
/*
- String = 'i am string'
- Number = 21
- Boolean = true or false
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



// Primitive Wrapper type
// we have object representation for number, string, and boolean
// new String(), new Number(), new Boolean()
var str = new String('Sakib')
var num = new Number(5)
var bol = new Boolean(true)

console.dir(str)
console.dir(num)
console.dir(bol)


// primitives are not mutable
var name = 'jisan'
name.age = 21 // js engine just ignore this.
console.log(name) // 'jisan'
// like variableName.name = 'name' is not possible for primitives