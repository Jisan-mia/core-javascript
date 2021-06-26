// JavaScript Scopes 

// i) child function can access and modify theire parent variables
// you define a variable in the window or global scope with name x then you also define a variable with the same name in a child function, it doesn't effect to its parent variables, it exists only in his scopes
// ii) but parent function cannot access or modify its child funciton variables

var x = 20;

function myFunc() {
	var x = 10;
	console.log(`${x} from myFunc()`);
}

myFunc();

console.log(x);
