# Summary of advance topic in JS

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

## Execution Context in JavaScript
Execution Context
1. Global Execution Context
   - there is to phase in global execution context
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
                              4. now three() function returns and popped out from the top of the execution stack
                  3. two() function returns and popped out
        2. one() function returns and popped out
1. global execution context popped out

