/*     
// var                                
i) var is function Scope, hence a dclared variable with var into a function cannot be accessed outside of function scope. 
ii) keyword with var variable can be redeclared and reassigned in it's scope

-----------
// let
i) let is block scope, hence a declared variable with let into any block({}) or curly braces cannot be accessed outside of the block.
ii) keyword with let variable can only be reassigned in it's scope but not redeclared


-----------
// const
i) same as let, const is block scope
ii) kewword with const varialbe cannot be redeclared and reassigned, but when create array or object with const keyword
we can change and update them

*/
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
