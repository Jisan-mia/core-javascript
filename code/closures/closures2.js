// Closures practices
var sum = function () {
  var num1 = 5;
  var num2 = 10;
  return function() {
    return num1 + num2;
  };
}

var myFunc = sum();
myFunc()


// asynchronous example
for(var i=0; i<3; i++) {
  const myFunc = () => {
    console.log(i) // prints 3 for 3 times
  }

  console.log(i)
  console.dir(myFunc)
  setTimeout(myFunc, 3000);
}

// closures in execution context way
function addNum(a) {
  return function(b) {
    return a+b
  }
}

var summation = addNum(5)
var result = summation(3) // 8

/*
Global Execution context
  i. Loading Phase
      - global: window object
      - this: window
      - addNum: fn()
      - summation: undefined
      - result: undefined
  ii. Execution Phase
      - addNum(5) get called and created function execution context
          - addNum() execution context
            i. Loading Phase
                - arguments: {0:5}
                - this: window
                - a: 5
                - anonymous: fn()
            ii. Execution Phase
                - now addNum() function returning another function, and we know we function returns
                  it gets popped out from the stack
                - but, since addNum() returning another function and this function using addNum() scope variables
                - thats why there creates a closure scope execution context which carries the reference variables that are being used in the inner function
                  - closure scope execution context
                      i. Execution phase
                          a: 5
                      - now executes the next line where summation(3) is called and created summation() execution context
                          - summation() execution context
                              1. Loading Phase
                                  - arguments: {0: 3}
                                  - this: window
                                  - b: 3
                              2. Execution Phase
                                  - adds a + b where a is 5 from the closure and b is 3
                                  - addition is 8
                                  - results value became 8 and
                                  - summation() function returns and popped out from the stack
                    - closure scope context popped out
  - global execution context popped out
*/
