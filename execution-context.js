// Execution Context
/*
Execution Context
  1. Global Execution Context
    - there is to phase in global execution context
        i. Loading/Creation Phase
        ii. Execution Phase
    - Properties created by Global Execution Context Object in loading/creation phase
        i. creates Global object window
        ii. creates another object called `this` which refers window/global
        iii. create space in memory for function(reference of the function) and variables
        iv. assigns `undefined` as values to the variables
    - in execution phase javascript assigns variables real value and executes line by line
    - in execution phase of global execution context, if a function being invoked or called,
      there creates a function execution context for this function

  2. Function Execution Context
    - everything is same as global execution context except creating global object in loading/creation phase.
    - rather function execution context creates `parameter/argument` object in the place of global object
    - and when a function returns, thats when the function execution context of the function gets removed or popped out from the execution stack
*/


var a = 1;
function one() {
  console.log(a); // 1
  function two() {
    console.log(b); // undefined
    var b = 2;
    function three(d) {
      let c = 3;
      console.log(c+d) // 7
    }
    three(4)
  }
  two()
}
one();

// Explanation of above code of execution context
/*
GEC = Global Execution Context
FEC = Function Execution Context
ES = Execution Stack

At first javascript creates the global Execution context and execution stack has only GEC

1. Global Execution Context
    i. Loading/Creation State
        - window: global object
        - this: window
        - a: undefined
        - one: fn()
    ii. Execution State
        - a = 1
        - one() function invoked and creates FEC for one()
            2. one() Execution Context
                i. Loading state
                    - arguments: {}
                    - this: window
                    - two: fn()
                ii. Execution State
                    - in execution phase needs to print `a`, it search a in its local scope
                      not there, searches in it's immediate parent, found in GEC, print 1
                    - two() function invoked and creates FEC for two()
                        3. two() Execution Context
                            i. Loading State
                                - arguments: {}
                                - this: window
                                - b: undefined
                                - three: fn()
                            ii. Execution State
                                - need to print `b`, b value is undefined and prints undefined
                                - b: 2
                                - three() function invoked and creates FEC for three()
                                    4. three() Execution context
                                        1. Loading Phase
                                            - arguments: {0: 4}
                                            - this: window
                                            - d: 4
                                        2. Execution Phase
                                            - arguments: {0: 4}
                                            - this: window
                                            - d: 4
                                            - c: 3
                                            - prints c+d which is 7

                                    4. now three() function returns and popped out from the
                                      top of the execution stack
                          3. two() function returns and popped out
            2. one() function returns and popped out
1. global execution context popped out




*/
