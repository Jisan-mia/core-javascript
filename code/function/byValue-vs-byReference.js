// By Value vs. By Reference


//  By Value (primitives)
/*
- by value means when we are passing a variable to a function or setting a variable value with another variable
- the function or the variable just copies the passed varaible value and points it to a new memory address
- this is called by value
- below, we assigned variable a=3, declared b and then assigned b equals to a
- that means copy the value of a(3) and assign it to variable b
- then changed a to 2
- in the consele we will see, a=2, b=3
- though we changed the value of a, it didn't affect varable b value. because variable b copied value of a and points to a new memory address
*/
var a = 3;
var b;

b = a;
a = 2;

console.log('a='+a, 'b='+b) // a = 2, b = 3


// by reference (all objects (including functions))
/*

*/
var c = { greeting: 'hello' };
var d;

d = c;
c.greeting = 'hey' // mutating (mutate means, to changed something, immutatable means it can't be changed)

console.log(c)
console.log(d)

// by reference (even as parameter)
function changeGreeting(obj) {
  obj.greeting = 'hola'
}
changeGreeting(d)
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }
console.log(c);
console.log(d);
