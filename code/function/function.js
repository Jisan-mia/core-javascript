// function


/*
# first class functions
- everything you can do with other types you can do with functions
- assign function to variables, pass functions to functions as parameter, create functions on the fly
*/


/*
# In JavaScript functions are objects or a special type of object because it has all the feature a normal object and has some other special properties.
- we can attach properties and methods to a function because it's just an object.
- so we could attach primitive, name value pairs
- attach an object
- attach other functions
*/


/*
# in javascript function has some hidden special properties. two important ones are
- i. name: its(function) names which is optional can be anonymous. anonymous meaning it doesn't have a name. but it can have a name
- ii. code property: where actual lines of code we wrote sit
- code we write is a property of function like other properties of objects
- whats special about that property is it is invocable, meaning we can call or invoke it and thats where execution context happens

- and function can be moved around, copied and given to other elements or codes just like string, number
*/


function greet() {
  console.log('Hello world!')
}

greet.language = 'English'
console.log(greet.language) // English

/*
- here we set language property to greet function, how?
- because functions in javascript are object
- and we can add properties, methods to function object
- greet is the function name and inside curly braces, function body or code
*/
