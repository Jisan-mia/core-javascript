// whats the value `this` or what `this` points to inside of a function statement or function expression

// function statement that logs `this`
function a() {
  console.log(this) // global object which is window
}

// function expression that also logs `this`
var b = function() {
    console.log(this) // global object which is window
}

a();
b();
