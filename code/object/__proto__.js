// inheritance
// one object get access to the properties and methods of another objects

// reflection
// an object can look at itself, listing and changing its properties and methods


// this is not recommended
var person = {
    firstName: 'Default', 
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

john.__proto__ = person

console.log(john.getFullName()) // John Doe

var jane = {
    firstName: 'Jane'
}
jane.__proto__ = person
console.log(jane.getFullName()) // Jane Default