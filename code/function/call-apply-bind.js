// a function is a special kind of object
// it has a name (hidden optional can be anonymous) property
// it has a code property which contains the code and that code is invocable so that we can run code

// all functions in javascript also gets some special methods on their own
// since a function is an object, so it can have properties and methods
// so all functions have access to call(), apply() and bind() method,
// and all these methods have to do with `this` variable or keyword and function arguments as well


// bind
var person = {
    firstName: "John",
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.fullName + ' ' + this.lastName;
        return fullName
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged '+ this.getFullName())
    console.log('Arguments '+ lang1 + ' ' + lang2);
}

// bind() is a method of functions and it creates a copy of the function
// and inside the function `this` variable points to the object
// passed to the bind(objectName) method, 
// and we can control what`this` points to inside of a function
var LogPersonName = logName.bind(person);

LogPersonName('en', 'es');