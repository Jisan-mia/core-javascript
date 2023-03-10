// Reference data types

/*
- Object
- Array
- Function
- Date
.
.
*/
// created a reference typed variable
var language = {
    name: 'javascript',
    popularity: 'high'
}

// assigned language to language2
var language2 = language

// mutated the first language variable
language.name = 'python'

// in the output we get same result, because both variables points/references to the space in the memory
console.log(language) // { name: 'python', popularity: 'high' }
console.log(language2) // { name: 'python', popularity: 'high' }


// reference values are different from primitive values
// because reference values does not copies a variable's value to another variable
// rather when we assign reference values to variable
// in the memory, javascript creates a space for that reference value
// and the variable gets assigned the reference/pointer of that reference value from the memory
// so when we assign that variable to another variable
// the another variable does not copy the values of that reference value
// rather another variable also get the reference of that same reference value from the memory
// thats why when we mutate/change one of the object(reference value) properties
// it gets changed everywhere where(variable) this object reference got pointed/referenced