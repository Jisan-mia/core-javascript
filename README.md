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

### More on scopes chain
- When an execution context is created, so is its scope chain.
- The scope chain is simply the memory space of the function that was called, and the memory space of its outer environment
- If a function is called within a function, it will have a scope chain of its own memory space, its outer environment's memory space, and the global execution context memory space.
- Scope chaining is simply the process of the JS Engine scanning the scope chain for the called variable, argument or function.
- It starts looking from its inner most environment and scanning out.
- it will return the value of the the called variable, argument, or function, as soon as it finds it in the scope chain, or it will return a reference error that will say the variable, argument, or function that was called is not defined, which means it does not exist in its scope chain.

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


## JavaScript Prototype Inheritance
```javascript
// Prototype Inheritance
// when we want to create a subclass of another class in prototype way
// so that the subclass(child) can inherit another class(parent) attributes/characteristic or features into it

// inheritance in prototype way in 3 steps
// i. we should inherit the prototype by assigning Object.create(ParentClass.prototype) this onto child function prototype
// ii. we should pass the child this to the parent as the reference of parent this explicitly by ParentClass.call(this)
// iii. since we're overriding the child constructor Function with `Parent.call(this)`(because by default in js constructor don't have `Parent.call(this)` in ints prototype)

//parent class
function Car(model, founded) {
  this.model = model;
  this.founded = founded;
}

// subclass
function ElectricCar(model, founded, battery, charger, hasAutopilot) {
  Car.call(this) // 2nd step
  this.model = model;
  this.founded = founded;
  this.battery = battery;
  this.charger = charger;
  this.hasAutopilot = hasAutopilot;
}

Car.prototype = {
  start: function() {
    console.log(`${this.model} has started`)
  },
  break: function() {
    console.log(`${this.model} just break`)
  },
  accelerate: function() {
    console.log(`${this.model} is accelerating`)
  }
}

ElectricCar.prototype = Object.create(Car.prototype) // 1st step
ElectricCar.prototype.constructor = ElectricCar // 3rd step
ElectricCar.prototype.startAutoPilot = function(){
  console.log(`${this.model} is in autopilot mode`)
}s


const myCar = new Car('Ferrari', 1895);
// console.log(myCar.start())

const tesla = new ElectricCar('Tesla Model 3', 2022, 'Tesla Powerwall', 'Tesla SuperCharger', true)
console.log(tesla.start()) // Tesla Model 3 has started
console.log(tesla.startAutoPilot()) //Tesla Model 3 is in autopilot mode
```


## Inheritance in es6-class
```javascript

class Car {
  //parent class
  constructor(model, founded) {
    this.model = model;
    this.founded = founded;
  }
  start() {
    console.log(`${this.model} has started`)
  }
  break() {
    console.log(`${this.model} just break`)
  }
  accelerate() {
    console.log(`${this.model} is accelerating`)
  }
}

class ElectricCar extends Car{
  //subclass
  constructor(model, founded, battery, charger, hasAutopilot) {
    super(model, founded)
    this.model = model;
    this.founded = founded;
    this.battery = battery;
    this.charger = charger;
    this.hasAutopilot = hasAutopilot;
  }

  startAutoPilot() {
    console.log(`${this.model} is in autopilot mode`)
  }
}

const myCar = new Car('Ferrari', 1895);
// console.log(myCar.startAutoPilot()) // error

const tesla = new ElectricCar('Tesla Model 3', 2022, 'Tesla Powerwall', 'Tesla SuperCharger', true)
console.log(tesla.start())

```

## Getter/Setter in class
```javascript
// getter is nothing but we access getter as property but behaves like methods
// setter is same as getter we access it as property but behaves like methods
// but the difference is we can change any property of the object
// and we can't call setter
// we must use equal sign(=) and setter will take the value as parameter

class Car{
  constructor(model, founded) {
    this.model = model; // property
    this.founded = founded;
  }

  start() {  // method
    console.log(`${this.model} has started`)
  }


  get setModel() { // getter
    return `${this.model}`
  }

  set setModel(model) { // setter
    this.model = model
  }
}

const myCar = new Car('Ford', '1885');

// console.log(myCar.setModel)
myCar.setModel = 'Ferrari'

console.log(myCar.setModel) // Ferrari

```


## Static Method

```javascript
// static method in class
// static method don't have any relation with the object being instantiated using this class
// static method are internal method that are only accessible direct to the Class
// the class whe static method is created can only access this method
// like className.methodName()
// `this` keyword inside static method don't refers to any object rather it refers the class itself

class Car{
  constructor(model, founded) {
    this.model = model;
    this.founded = founded
  }

  start() {
    console.log(`${this.model} has started`)
  }

  static hasFoundedSameYear(car1, car2) {
    return car1.founded == car2.founded
  }

}

const tesla = new Car('Tesla', 2003);
const ferrari = new Car('Ferrari', 1947);

console.log(Car.hasFoundedSameYear(tesla, ferrari)) // false

```

## Polymorphism
```javascript
// Polymorphism
// when a child class/sub class/derived class that inherited a parent class and modify any method of it's parent class,
// then this modifying procedures called Polymorphism


class Car {
  // parent class
  constructor(model, founded) {
    this.model = model;
    this.founded = founded;
  }
  start() {
    console.log(`${this.model} has started`)
  }

  break() {
    console.log(`${this.model} just break`)
  }
}

class ElectricCar extends Car {
  // sub class
  constructor(model, founded, battery, charger, hasAutopilot) {
    super(model, founded)
    this.model = model;
    this.founded = founded;
    this.battery = battery;
    this.charger = charger;
    this.hasAutopilot = hasAutopilot;
  }

  startAutoPilot() { // method
    console.log(`${this.model} ${this.hasAutopilot ? 'is in' : "don't have"} autopilot mode`)
  }

  // changing parent method
  break() {
    super.break();
    console.log(`${this.model} just break polymorphismacally`)
  }
}

const tesla = new ElectricCar('Tesla 3', 2003, 'lithium-ion', 'tesla charger', true);
tesla.break()
// Tesla 3 just break
// Tesla 3 just break polymorphismacally

```

## `this` keyword in Javascript
```javascript
// this
// why this? `this` helps functions to reuse in different context

// here we'll learn in 4 rules to learn about this keyword
// i) implicit binding
// 1. where the function has been called
// 2. is there any dot notation before the call ?
// 3. Yes, what there in the immediate left of the dot(.), will denote the `this`

// example 1
var ford = {
	model: "Ford",
	founded: 1885,
	printModel: function () {
		console.log(this.model);
	},
};
ford.printModel(); // Ford

// example 2
var printModelFunc = function (obj) {
	obj.printModelName = function () {
		console.log(this.model);
	};
};
var ferrari = {
	model: "Ferrari",
	founded: 1900
};

printModelFunc(ferrari);
ferrari.printModelName() // 'Ferrari'

// example 3
var Car = function (model, founded) {
	return {
		model: model,
		founded: founded,
		printModel: function() {
			console.log(`${this.model}`)
		},
		competitor: {
			model: 'Mercedes',
			founded: 1985,
			printModel: function() {
				console.log(`${this.model}`)
			}
		}
	}
}
const tesla = Car('Tesla 3', 2003)
tesla.printModel() // Tesla 3
tesla.competitor.printModel() // Mercedes


// ii) explicit binding
// in explicit binding we explicitly tell the function who will be the `this` using call method
// explicitly binding by call, apply and bind method
// call method takes params one after another, every parameter should be comma(,) separated
// but for apply method we pass object to denote `this` and other parameter as array in one parameter
// bind method is same as call method, except bind method returns the function rather calling the function
// it returns the instance of the function, and we can store it on a variable an call it later
var printCarModel = function (feature1, feature2) {
	console.log(`${this.model} key features are ${feature1}, ${feature2}`)
}

var porsche = {
	model: 'Porsche',
	founded: 1987
}

var feature1 = 'Air Conditioner';
var feature2 = 'Driver Airbag'
var features = ['Air Conditioner', 'Driver Airbag']

printCarModel.call(porsche, feature1, feature2)
printCarModel.apply(porsche, features)
const newFunc = printCarModel.bind(porsche, feature1, feature2)
newFunc()



// iii) new binding

function ElectricCar(model, founded) {
	// let this = Object.create(null)
	this.model = model
	this.founded = founded
	console.log(`${this.model} has founded in ${this.founded}`);
	// return this
}

const tesla3 = new ElectricCar('Tesla 3', 2003) // Tesla 3 has founded in 2003


// iv) window binding

var PrintJavascript = function() {
	// here `this` points to the global object for nodejs and window for browser
	console.log(this)
}

var js = {
	name: 'JavaScript'
}

PrintJavascript() // global/window object
```
### Summary
- In function and global scope ‘this’ always points to the window. Though this changes when you are - in strict mode or Nodejs .
- In Object this points to the object’s context only
- In constructor, this points to the newly created instance.
- We can change the context of this by using — call(), apply() and bind()
- If you just bind the context and do not want to execute the function then use bind(). Always remember bind() works only once
- If you want to pass an array of arguments to this then you use apply(). Otherwise, use call().
- The beauty of this is its dynamic nature and it changes in the context you are running it.


## Execution Context in JavaScript

- A Wrapper to help manage the code that is running
- There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code

Execution Context
1. Global Execution Context
   - there is two phase in global execution context
      1. Loading/Creation Phase
      2. Execution Phase
    - Properties created by Global Execution Context Object in loading/creation phase
        1. creates Global object window
        2. creates another object called `this` which refers window/global
        3. create space in memory for function(reference of the function) and variables
        4. assigns `undefined` as values to the variables
    - in execution phase javascript assigns variables real value and executes line by line
    - in execution phase of global execution context, if a function being invoked or called, there creates a function execution context for this function

1. Function Execution Context
    - everything is same as global execution context except creating global object in loading/creation phase.
    - rather function execution context creates `parameter/argument` object in the place of global object
    - and when a function returns, thats when the function execution context of the function gets removed or popped out from the execution stack

```javascript
// code
var a = 1;
function one() {
  console.log(a); // 1
  function two() {
    console.log(b); // undefined
    var b = 2;
    function three(d) {
      let c = 3;
      console.log(c+d) // 7
    }
    three(4)
  }
  two()
}
one();
```
### Explanation of above code of execution context

> GEC = Global Execution Context

> FEC = Function Execution Context

> ES = Execution Stack

At first javascript creates the global Execution context and execution stack has only GEC

**Global Execution Context** (1)
  1. **Loading/Creation State**
      - window: global object
      - this: window
      - a: undefined
      - one: fn()
  2. **Execution State**
      - a = 1
      - one() function invoked and creates FEC for one()
        - **one()** Execution Context (2)
            1. **Loading state**
                  - arguments: {}
                  - this: window
                  - two: fn()
            2. **Execution State**
                - in execution phase needs to print `a`, it search a in its local scope
                    not there, searches in it's immediate parent, found in GEC, print 1
                - two() function invoked and creates FEC for two()
                  - **two()** Execution Context (3)
                      1. **Loading state**
                           - arguments: {}
                           - this: window
                           - b: undefined
                           - three: fn()
                      2. **Execution State**
                           - need to print `b`, b value is undefined and prints undefined
                           - b: 2
                           - three() function invoked and creates FEC for three()
                              - **three()** Execution context (4)
                                  1. **Loading Phase**
                                      - arguments: {0: 4}
                                      - this: window
                                      - d: 4
                                  2. **Execution Phase**
                                      - arguments: {0: 4}
                                      - this: window
                                      - d: 4
                                      - c: 3
                                      - prints c+d which is 7
                              - now three() function returns and popped out from the top of the execution stack (4)
                  - two() function returns and popped out(3)
        - one() function returns and popped out(2)
- global execution context popped out(1)

### Summary
- Every time a function is called in JavaScript, an execution context is created.
- Every execution context is created in two phases
  - Creation Phase
  - Execution Phase
- The first execution context that is created is the **Global Execution Context**
- And every function that is called within a program will have its own execution context, contained within the global execution context
- List of feathers created before any line of code executes within a function in the creation phase:
  1. A reference to the object that called the function is stored in memory. In the case of the Global Execution Context, in a browser, that reference is of the window object.
  2. The keyword ‘this’ is created and stored in memory. Within the function, it will refer to the object that called the function.
  3. The function’s ‘outer environment’, its ‘scope chain’ is created.
  4. Its own ‘memory container’ for variables, arguments, and function declarations is created. Note that in the Creation Phase the JS Engine stores all variables and arguments with an initial value of ‘undefined.’
- After the Creation Phase sets up the execution context, the JS Engine begins synchronously executing the code within the function, one line at a time, from top to bottom - this is Phase 2, the Execution Phase.
- The Execution Phase is all about returning values. It evaluates expressions, which return values, and executes functions, which return values. The variables and arguments that were stored in Step 4 above will go from undefined, to the value the expression returns
- Hoisting: It is important to understand that Step 4 above happens in the Creation Phase, that is, all variables are stored in memory before any function is executed. This process of storing variables before any code executes is called hoisting.
- Hoisting sounds like it might mean that variables, arguments, and function declarations are lexically moved to the top of the code, but in reality, they stay exactly where they are.

### More on closure
- If a function returns a function, or it returns an object with functions, those ‘inner functions’ that were returned have access to the variables of the ‘outer function,’ even after the outer function returns and is popped off the stack.
- When an outer function is returned and popped off the stack, it puts all the variables of its own block scope into a closure and puts that closure in the scope chain of the inner function.

## Higher Order Function

- functions in javascript are special type of object
- We can assign function to a variable
- we can pass function as parameter to another function
- and also we can return a function from a function
- Higher order function is a type of function which works on another function
  - A function which takes another function as an argument or
  - returns a function
  - or both

```js
// simple example
function myFunc() {
  return function () {
    console.log('Hello, function')
  }
}

myFunc()()


// examples
// double every number of an array
// without HOF
const arr = [1,2,3,4,5,6];

let result = [];

for(let i=0; i < arr.length; i++) {
  result.push(arr[i]*2)
}
// console.log(result) // [2,4,6]

// with built-in higher order function map(map is a higher order function)
function doubleIt(number) {
  return number*2
}
const result1 = arr.map(doubleIt)
// console.log(result1); // [2,4,6]

// same as map, filter() is another built in higher order function which takes a testing function
// with each array item as parameter. returns true if the item pass the test
// example 2 (return all the number of the array which is getter than or equal 4)
const getterThanThree = arr.filter(num => num >= 4)
// console.log(getterThanThree) // [4,5,6]


// creating our own higher order function ourMap()
// alternative of map() method
const cars = [
  {
    name: 'Tesla',
    highestSpeed: 260
  },
  {
    name: 'Ford',
    highestSpeed: 350
  },
  {
    name: 'Ferrari',
    highestSpeed: 380
  }
]
function ourMap(arr, mapFunc) {
  const tempArr = [...arr]
  const resultArr = []
  tempArr.forEach((item, index) => {
    resultArr.push(mapFunc(item, index, tempArr))
  });
  return resultArr
}

const carsWithId = ourMap(cars, function(item, index) {
  return {
    ...item,
    id: index+1
  }
})
console.log(carsWithId)

const cubeIt = ourMap(arr, (item) => item*3)
console.log(cubeIt)
```

## Currying

- Currying is the process of creating a copy of a function but with a fixed parameter.
- Currying is when you have a function with multiple argument, or you have function with arguments which returns another function with arguments, and then you create a new function that calls the main function with a parameter that is bound to the first argument to the main function
- The goal of currying is to get a function with multiple arguments down to one function with one parameter through the process of copying and binding.
- Benefits: It is about creating an abstract function, from which you can create more specific functions without having to repeatedly write the main function throughout the program. This will make your code cleaner, more efficient, and more readable, which is the goal of functional programming.

### Currying Using .bind()

- For the purpose of currying we will make ‘this’ the first parameter of .bind(). That is because .bind() makes its first passed in argument the value of ‘this’ in the called function. That is irrelevant when we use .bind() for currying purposes, we just need a placeholder, which we will call ‘this’ because that is the accepted standard. Let’s move on

```js
let addTwoNum = (a,b) => a+b

addTwoNum(1,2) // 3
const add1 = addTwoNum.bind(this, 2)
const add2 = addTwoNum.bind(this, 5)
console.log(add1(3)) // 5
console.log(add2(2)) // 7
```

### Currying Using Closures

- We will pass in an argument to a function, and that function will return a function which takes another argument.
- That is actually what currying literally is
- It is breaking down functions with many arguments into more specific functions that each have only one argument.

- The key thing to remember about all this is that the closure gets stored in the returned function’s execution context at the time it was created.

```js
const mulTwoNum = a => b => a * b;
const mul2 = mulTwoNum(2)
console.log(mul2(5)); // 10

```
