// Namespace
// a container for variables and functions.
// typically to keep variables and functions with the same name separate

// when we work on multiple javascript file, we might write same variable name in multiple files in the global scope, and namespace collision happens here. javascript engine override the values
//file1
var greet = 'hello';
//file2
var greet = 'hola'

// faking namespace
// we can fake namespace by creating object container and create same name property there multiple times
var english = {
  greet: 'hello'
}
var spanish = {
  greet: 'hola'
}
