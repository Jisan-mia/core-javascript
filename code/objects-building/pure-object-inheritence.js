// polyfill
// code that adds a feature which the engine may lack.
// polyfill for Object.create
if(!Object.create){
    Object.create = function (ojb) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation only accepts first parameter')
        }
        function F() {}
        F.prototype = ojb
        return new F();
    }
}


// Pure object inheritance using Object.create()
var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
var john = Object.create(person)
john.firstName = 'John' // Inherited properties can be overwritten
john.lastName = 'Doe'
john.address = '22b street' // setting new property on john not on person


console.log(john, john.getFullName())


