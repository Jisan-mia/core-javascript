﻿# Summary of advance topic in JS

## JavaScript Scopes

- child function can access and modify their parent variables
- you define a variable in the window or global scope with name x then you also define a variable with the same name in a child function, it doesn't effect to its parent variables, it exists only in his scopes
- but parent function cannot access or modify its child function variables

> Examples:

```javascript
var x = 20;
function myFunc() {
	x = 10;
	var y = 9;
	console.log(`${x} from myFunc()`);
}
myFunc();
console.log(x);
console.log(y); // cannot be accessed
```

<br>

## var || let || const

| var                                                                                                                        | let                                                                                                                                   | const                                                                                                                                                 |
| :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| i) var is function Scope, hence a declared variable with var into a function cannot be accessed outside of function scope. | i) let is block scope, hence a declared variable with let into any block({}) or curly braces cannot be accessed outside of the block. | i) same as let, const is block scope                                                                                                                  |
| ii) keyword with var variable can be redeclared and reassigned in it's scope                                               | ii) keyword with let variable can only be reassigned in it's scope but not redeclared                                                 | ii) keyword with const variable cannot be redeclared and reassigned, but when create array or object with const keyword we can change and update their value |

> Examples:

```javascript
if (true) {
	var varVariable = "I am var";
	var varVariable = "i'm var reDeclared";
	varVariable = "i'm var reassigned";
}
console.log(varVariable);

if (true) {
	let letVariable = "i'm let";
	letVariable = "i'm let reassigned";
	console.log(letVariable);
}

if (true) {
	const constVariable = "I'm const";
	const obj = {
		name: "Jisan",
		age: "19",
	};
	obj.name = "Jisan Mia";
	console.log(constVariable, obj);
}
```

<br />

## Hoisting

- Hoisting is, when we declare variables(var), how javascript deal with this
- javascript engine pulls out all the declaration(not assignment) at the top of the js file

```javascript

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
console.log(b) // reference error
let b = 'hello'

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
```


## JavaScript Prototype

```javascript
// what is prototype
// prototype is a property for every function in javascript which points an object

function Car(name, founded) {
  const car = Object.create(Car.prototype)
  car.name = name;
  car.founded = founded

  return car
}

Car.prototype = {
  start: function () {
    console.log('Car has started')
  },
  break: function () {
    console.log('Break the car')
  },
  accelerate: function () {
    console.log('Car s accelerating')
  }
}

const car1 = Car('Lamborgini', '1995')
// console.log(car1.break())


// with new keyword
function CarWithNew(name, founded) {
  // const this = Object.create(this.prototype)
  this.name = name;
  this.founded = founded

  // return this
}
CarWithNew.prototype = {
  start: function () {
    console.log('Car has started')
  },
  break: function () {
    console.log('Break the car')
  },
  accelerate: function () {
    console.log('Car is accelerating')
  }
}

const newCar = new CarWithNew('Tesla', '2002')
// console.log(newCar.accelerate())


// same examples with class
class CarClass {
  constructor(name, founded) {
    this.name = name;
    this.founded = founded;
  }

  start() {
    console.log('Car has started')
  }
  break() {
    console.log('Break the car')
  }
  accelerate() {
    console.log('Car is accelerating')
  }
}
const anotherCar = new CarClass('Ferrari', 1895)
console.log(anotherCar.start())

```