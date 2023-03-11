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


var obj = {name: 'sakib'}
function func2(val) {
    val = {}
}
func1()
console.log(obj) // { name: 'sakib' }


var language = {name: 'javascript'}
function func3(val) {
    val.name = 'python'
} 
func3(language);
console.log(language) // { name: 'python' }