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
// ford.printModel(); // Ford

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
// ferrari.printModelName() // 'Ferrari'

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
// tesla.printModel() // Tesla 3
// tesla.competitor.printModel() // Mercedes


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

// printCarModel.call(porsche, feature1, feature2)
// printCarModel.apply(porsche, features)
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

PrintJavascript()


// summary
/*
- In function and global scope ‘this’ always points to the window. Though this changes when you are - in strict mode or Nodejs .
- In Object this points to the object’s context only
- In constructor, this points to the newly created instance.
- We can change the context of this by using — call(), apply() and bind()
- If you just bind the context and do not want to execute the function then use bind(). Always remember bind() works only once
- If you want to pass an array of arguments to this then you use apply(). Otherwise, use call().
- The beauty of this is its dynamic nature and it changes in the context you are running it.

*/
