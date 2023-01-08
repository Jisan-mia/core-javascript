// example 1
function bankAccount(initialBalance) {
	var balance = initialBalance;
	return function () {
		return balance;
	};
}

var account = bankAccount(1000);

console.dir(account);

// example 2
var num1 = 2;
var sum = function () {
	var num2 = 3;
	var num = 6;
	return function () {
		return num;
	};
};
var myFunc = sum();

console.dir(myFunc);

// example 3
// function stopWatch() {
// 	var startTime = Date.now();

// 	function getDelay() {
// 		console.log(Date.now() - startTime);
// 	}

// 	return getDelay;
// }

// var timer = stopWatch();

// for (var i = 0; i < 1000000; i++) {
// 	var a = Math.random() * 100000;
// }

// timer();

// asynchronous
var a;
function async() {
	a = 20;

	var myFunc = () => {
		console.log(a);
	};
	setTimeout(myFunc, 3000);
}
// async(); // a = 30

// a = 30;

// api call
// function apiFunc(url) {
// 	fetch(url).then((res) => {
// 		console.log(res);
// 	});
// }

// apiFunc("https://jsonplaceholder.typicode.com/todos/1");

// job interview qu.
for (var i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 3000);
}
