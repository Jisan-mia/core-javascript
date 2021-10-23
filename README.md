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

