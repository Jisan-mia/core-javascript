// pass by value vs pass by reference
// we know that primitives variables copies the value of other primitives
// but reference type variables copies the reference or pointer of other reference values from the memory

// now what will happen when we pass primitives or reference values 
// to a function parameter


// well, when we pass variables as parameters to a function
// the variables are always pass by reference whether it is primitive or reference 
// everything that is passed to a function is passed by reference!

var a = 1
function func1(val)  {
    val = 2
}
func1(a)
console.log(a) // 1
// a is passed by reference to the func1 
// since a is primitive and primitives are not mutable
// inside the func1 scope new val variable created ans assigned 2
// no effects on the outer variable 'a'
// see below two examples for more clarity


var obj = {name: 'sakib'}
function func2(val) {
    val = {}
}
func1()
console.log(obj) // { name: 'sakib' }
// how obj variable not changed? as we know object are referenced type, and passes its reference 
// to the function..
// inside the function we assigned a new object
// well, here is the catch
// inside the function there is another scope, in that scope there is variable 'val'
// the variable holds the reference of the object we passed
// then we assigned another object to that variable 'val'
// we actually created a new object and new memory space created for this object, 
// then 'val' variable got referenced to that newly created object in its scope
// since we didn't mutated the object we passed to the function, the outer object stayed same



var language = {name: 'javascript'}
function func3(val) {
    val.name = 'python'
} 
func3(language);
console.log(language) // { name: 'python' }
// well in this case
// we passed language object to func3
// and we know, 'val' of func3 has the reference of language object
// we mutated it inside the function or outside the function
// doesn't matter, because both variable holds the same reference 
// and if one changed the other also changed