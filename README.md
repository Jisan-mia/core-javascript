# Summary of advance topic in JS

## JavaScript Scopes

- child function can access and modify theire parent variables
- you define a variable in the window or global scope with name x then you also define a variable with the same name in a child function, it doesn't effect to its parent variables, it exists only in his scopes
- but parent function cannot access or modify its child funciton variables

```
var x = 20
 function myFunc() {
	x = 10;
    var y = 9;
	console.log(`${x} from myFunc()`);
}
myFunc();
console.log(x);
console.log(y) // cannot be accessed
```

##
