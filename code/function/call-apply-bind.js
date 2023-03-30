// a function is a special kind of object
// it has a name (hidden optional can be anonymous) property
// it has a code property which contains the code and that code is invocable so that we can run code

// all functions in javascript also gets some special methods on their own
// since a function is an object, so it can have properties and methods
// so all functions have access to call(), apply() and bind() method,
// and all these methods have to do with `this` variable or keyword and function arguments as well


var person = {
    firstName: "John",
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged '+ this.getFullName())
    console.log('Arguments '+ lang1 + ' ' + lang2);
    console.log('------------')
}

// bind() is a method of functions and it creates a copy of the function
// and inside the function `this` variable points to the object
// passed to the bind(objectName) method, 
// and we can control what`this` points to inside of a function
var LogPersonName = logName.bind(person);

LogPersonName('en', 'es');

// call() another function method and instead of creating copy of the function like bind()
// it executes the function and also can control the `this` variable value
// call() method first parameter is the object, which will be pointed by `this`
// also takes function parameters separated by comma
logName.call(person, 'en', 'es');


// apply() another function method same as call()
// only difference is apply takes parameters in an array instead of flat comma separated
logName.apply(person, ['en', 'es'])