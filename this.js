// here we'll learn in 4 rules to learn about this keyword
// i) implicit binding
// ii) explicit binding
// iii) new binding
// iv) window binding

// implicit binding
var sakib = {
	name: "Sakib",
	age: 35,
	printPlayerName: function () {
		console.log(this.name);
	},
};

sakib.printPlayerName();

var printNameFunc = function (obj) {
	obj.printPlayerName = function () {
		console.log(this.name);
	};
};
var tamim = {
	name: "tamim",
	age: 35,
};
printNameFunc(tamim);
tamim.printPlayerName();
