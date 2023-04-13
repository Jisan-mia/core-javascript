// there are built in function constructors in javascript, that returns object with properties and methods in its prototype

// String() function constructor
var str = new String('Hello')
console.log(str.indexOf('o')) // 4 | indexOf() method is from String constructor

// Number() constructor
var num = new Number(5)
console.log(num.toString()) // '5'

// Boolean() constructor
var bool = new Boolean(true)
console.log(bool.toString()) // 'true'



// we can own custom method or properties inside prototype of built in function constructor and can use it everywhere
// adding custom method in String constructor prototype
String.prototype.isGetterThan = function(limit) {
    return this.length > limit
}
console.log(str.isGetterThan(3)) // true

// adding custom method in Number constructor prototype
Number.prototype.isPositive = function() {
    return this > 0
}
console.log(num.isPositive()); // true



// also, there is some danger using these built int function constructors
// like when we create primitives with literal syntax they are primitives
// but when we create with constructor functions they aren't primitives anymore rather Objects, so
var num3Literal = 3
var num3Constructor = new Number(3)
console.log(num3Literal == num3Constructor) // true
console.log(num3Literal === num3Constructor) // false

// with double equal javascript coerce them into one type and check equality
// with triple equal javascript first check if types are equal, if not return false
