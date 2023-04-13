// Function constructor
// a normal function that is used to construct objects.
// the `this` variable points a new empty object, and that object is returned from the function automatically

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// prototype is a method for every javascript function
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
}

// `new` operator creates a new empty object, invoked Person function constructors, where `this`
// points to the object created by `new` operator and returns the new modified object
var john = new Person('John', 'doe');
console.log(john.getFullName())

Person.prototype.getFormalName = function() {
    return this.lastName + ', ' + this.firstName
}

console.log(john.getFormalName())