// object
// A collection of name value paris sitting in memory, they can contain other name value pairs, that is other objects. they contain other properties, string, booleans, numbers also can contain functions which are called method

// creating object
var student = new Object();

// [] = computed member access operator has the third highest precedence and is left associativity
student['firstName'] = 'Jisan';
student['lastName'] = 'Mia';

var firstNameProperty = 'firstName';

console.log(student);
console.log(student[firstNameProperty]);

// . = member access operator has the second highest precedence and is left associativity
console.log(student.lastName)

student.address = new Object()
student.address.street = '1205 Main St.'
student.address.city = 'Dhaka'
student.address.state = 'Dhaka'

console.log(student.address.state);
console.log(student['address']['street']);
