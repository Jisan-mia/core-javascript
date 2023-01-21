/*
- whats the value `this` or what `this` points to inside of a function statement or function expression
- `this` points to the global object which is window for the browser
- so, since this points to global object inside of a function, we can create global variables from inside function
- and access them outside of the functions
*/

// function statement that logs `this`
function a() {
  this.myVariable = 'Hey there! How is going?'
  console.log(this) // global object which is window
}

// function expression that also logs `this`
var b = function() {
    console.log(this) // global object which is window
}

a();
console.log(myVariable) // Hey there! How is going?
b();


/*
- now, what `this` points to, if it is inside of a method of an object?
- well now `this` points to the object where the method contained within
- so if `this` points to the object itself, we can modify it's properties with referencing `this`
- what if? object methods has other functions inside of the method, does now `this` will point to the object?
- from human perspective it should, but here javascript doesn't points to the object, rather here `this` points to the global window object
- so, if we write functions inside of a method of object, `this` will point window object inside of the function and changes inside the function by `this` will be on the global window object
- thats a problem, we can solve it by utilizing a pattern implemented below
*/

var c = {
  name: 'JavaScript',
  log: function() {
    this.name = 'JavaScript es6 is updated'
    console.log(this)

    var setName = function(newName) {
      this.name = newName // changes in the global window object
    }

    setName('Again JavaScript has updated')
    console.log(this)
  }
}

c.log()


// self pattern code
/*
- to solve the above code problem where we are getting window object of `this` value inside of function of method
- below code, we declared a new variable called self and assigning `this` as value
- now we know, here this points the object itself
- and object are by reference
- so when we are assigning `this` to self variable, we are actually referencing the the memory space fo the object
- and when we change self, we change `this` because they are referenced the same pointer in the memory
- so we used self variable everywhere instead of `this`(for its wired behavior)
- and we get the expected result
*/
var d = {
  name: 'JavaScript is awesome',
  log: function() {
    var self = this
    self.name = 'Changed: JavaScript is superb'
    console.log(self)

    var changeName = function(newName) {
      self.name = newName
    }
    changeName('Again changed: JavaScript is Ruling')
    console.log(this)
  }
}

d.log();
