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
// explicitly binding by call, apply method
// call method takes params one after another, every parameter should be comma(,) separated
// but for apply method we pass object to denote `this` and other parameter as array in one parameter

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
printCarModel.apply(porsche, features)




// iii) new binding
// iv) window binding