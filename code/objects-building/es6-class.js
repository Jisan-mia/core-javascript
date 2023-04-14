// syntactical sugar
// a different way to type something that doesn't change how it works under the hood


// class
// class in javascript is used to create object
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}

// creating a new object using Person class
var john = new Person('John', 'Doe')
console.log(john.getFullName())


// inheriting other class to the prototype of another object
// extends keyword sets the prototype(__proto__)
class Employer extends Person {
    constructor(firstName, lastName, position, address) {
        super(firstName, lastName)
        this.position = position;
        this.address = address
    }

    getEmployerAddress() {
        return 'Address: ' + this.address
    }
}
var rohim = new Employer('Rohim', 'Uddin', 'The boss', '122b street');
console.log(rohim.getFullName()) // 'Rhomi Uddin' | getFullName() method is inherited from Person class to rohim object prototype
console.log(rohim.getEmployerAddress()) //Address: 122b street